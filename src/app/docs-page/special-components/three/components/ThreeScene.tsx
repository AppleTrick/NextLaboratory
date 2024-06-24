'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // 비율을 renderer 크기와 동일하게 설정
    // renderer.setSize(window.innerWidth, window.innerHeight); // 해당코드는 화면의 최대 가로 , 최대 세로로 정의했음
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '800px', height: '600px' }} />;
};

export default ThreeScene;
