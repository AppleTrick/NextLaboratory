"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

type Seat = THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

const ThreeCinema: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const [isDetailView, setIsDetailView] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 50, 100);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const seats: Seat[] = [];
    const seatMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const seatHoverMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    for (let i = -5; i <= 5; i++) {
      for (let j = 0; j < 5; j++) {
        const seatGeometry = new THREE.BoxGeometry(2, 1, 2);
        const seat = new THREE.Mesh(seatGeometry, seatMaterial) as Seat;
        seat.position.x = i * 3;
        seat.position.z = j * 5;
        seat.position.y = 1;
        seats.push(seat);
        scene.add(seat);
      }
    }

    const screenGeometry = new THREE.PlaneGeometry(60, 30);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = -50;
    screen.position.y = 7.5;
    scene.add(screen);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return;

      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(seats);

      seats.forEach((seat) => {
        if (seat instanceof THREE.Mesh) {
          seat.material = seatMaterial;
        }
      });

      if (intersects.length > 0) {
        const intersect = intersects[0].object;
        if (intersect instanceof THREE.Mesh) {
          intersect.material = seatHoverMaterial;
        }
      }
    };

    const onMouseClick = (event: MouseEvent) => {
      if (!mountRef.current) return;

      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(seats);

      if (intersects.length > 0) {
        const intersect = intersects[0].object as THREE.Mesh;

        // 카메라 위치 조정: 클릭한 좌석의 뒤쪽에서 보다 높은 위치로 설정
        // 예를 들어, 좌석 뒤에서 30 유닛 뒤쪽, 15 유닛 위로 위치
        camera.position.set(
          intersect.position.x,
          intersect.position.y + 5,
          intersect.position.z - 0
        );

        // 스크린의 월드 위치를 계산
        const screenPosition = new THREE.Vector3();
        screen.getWorldPosition(screenPosition);

        // 카메라가 스크린 중앙을 바라보도록 설정
        camera.lookAt(screenPosition.x, screenPosition.y, screenPosition.z);

        console.log("Camera moved to look at the screen from the seat.");
        setIsDetailView(true);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (!mountRef.current) return;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onMouseClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const handleBackClick = () => {
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 50, 100);
      cameraRef.current.lookAt(0, 0, 0);
    }
    setIsDetailView(false);
  };

  return (
    <div>
      <div ref={mountRef} style={{ width: "800px", height: "600px" }} />
      {isDetailView && (
        <button
          onClick={handleBackClick}
          style={{ position: "absolute", top: 20, left: 20 }}
        >
          Back
        </button>
      )}
    </div>
  );
};

export default ThreeCinema;
