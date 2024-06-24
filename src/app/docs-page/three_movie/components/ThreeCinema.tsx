'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { Easing } from '@tweenjs/tween.js';

type Seat = THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;

const ThreeCinema: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const screenPositionRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const [isDetailView, setIsDetailView] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // 화면크기
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // camera & scene 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 50, 100);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 빛 설정
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // 영화관 모든 의자 오브젝트 생성
    const seats: Seat[] = [];
    const seatMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const seatHoverMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });

    // 영화관 의자 생성 & 묶어주기
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

    // 영화관 화면 오브잭트 설정
    const screenGeometry = new THREE.PlaneGeometry(60, 30);
    const screenMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.z = -50;
    screen.position.y = 7.5;
    scene.add(screen);

    screenPositionRef.current = new THREE.Vector3(screen.position.x, screen.position.y, screen.position.z);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function animateCamera(toPosition: THREE.Vector3, lookAtPosition: THREE.Vector3) {
      if (!cameraRef.current) return;

      const camera = cameraRef.current;

      // x,y,z 처음 카메라 위치 포지션
      // look position 카메라 방향 즉 스크린 포지션
      const from = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        lookX: lookAtPosition.x,
        lookY: lookAtPosition.y,
        lookZ: lookAtPosition.z,
      };

      // x,y,z 변경된 카메라 포지션
      // look position 카메라 방향 즉 스크린 포지션
      const to = {
        x: toPosition.x,
        y: toPosition.y + 5,
        z: toPosition.z + 5,
        lookX: lookAtPosition.x,
        lookY: lookAtPosition.y,
        lookZ: lookAtPosition.z,
      };

      new TWEEN.Tween(from)
        .to(to, 2000)
        .easing(Easing.Quadratic.Out)
        .onUpdate(() => {
          camera.position.set(from.x, from.y, from.z);
          camera.lookAt(from.lookX, from.lookY, from.lookZ);
        })
        .start();
    }

    // 마우스 움직임 설정
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

    // 마우스 클릭시 이벤트
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
        // 예를 들어, 좌석 뒤에서 30  유닛 뒤쪽, 15 유닛 위로 위치
        // camera.position.set(
        //   intersect.position.x,
        //   intersect.position.y + 5,
        //   intersect.position.z - 5
        // );

        // 스크린의 월드 위치를 계산
        const screenPosition = new THREE.Vector3();
        screen.getWorldPosition(screenPosition);

        // 카메라가 스크린 중앙을 바라보도록 설정
        // camera.lookAt(screenPosition.x, screenPosition.y, screenPosition.z);
        animateCamera(intersect.position, screenPosition);
        setIsDetailView(true);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      TWEEN.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (!mountRef.current) return;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onMouseClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // 뒤로 되돌아가기
  const handleBackClick = () => {
    if (!cameraRef.current) return;
    const camera = cameraRef.current;
    const from = {
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
      lookX: screenPositionRef.current.x,
      lookY: screenPositionRef.current.y,
      lookZ: screenPositionRef.current.z,
    };

    const InitializeValue = {
      x: 0,
      y: 50,
      z: 100,
      lookX: 0,
      lookY: 0,
      lookZ: 0,
    };
    new TWEEN.Tween(from)
      .to(InitializeValue, 2000)
      .easing(Easing.Quadratic.Out)
      .onUpdate(() => {
        camera.position.set(from.x, from.y, from.z);
        camera.lookAt(from.lookX, from.lookY, from.lookZ);
      })
      .start();

    setIsDetailView(false);
  };

  return (
    <div>
      <div ref={mountRef} style={{ width: '800px', height: '600px' }} />
      {isDetailView && (
        <button onClick={handleBackClick} style={{ top: 20, left: 20 }}>
          Back
        </button>
      )}
    </div>
  );
};

export default ThreeCinema;
