'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ButterflyScrollAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const butterflyRef = useRef<THREE.Group | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    // Three.js 기본 설정
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    if (!mountRef.current) return;
    mountRef.current.appendChild(renderer.domElement);

    // 나비 모델 생성 (간단한 기하학적 형태로)
    const butterflyGroup = new THREE.Group();

    // 나비 몸통
    const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.z = Math.PI / 2;

    // 나비 날개 (왼쪽)
    const wingGeometry = new THREE.PlaneGeometry(1.5, 2);
    const wingMaterial = new THREE.MeshLambertMaterial({
      color: 0xff69b4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });

    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-0.8, 0.5, 0);
    leftWing.rotation.z = -0.3;

    // 나비 날개 (오른쪽)
    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(0.8, 0.5, 0);
    rightWing.rotation.z = 0.3;

    // 작은 뒷날개들
    const smallWingGeo = new THREE.PlaneGeometry(1, 1.2);
    const leftSmallWing = new THREE.Mesh(smallWingGeo, wingMaterial);
    leftSmallWing.position.set(-0.6, -0.5, 0);
    leftSmallWing.rotation.z = -0.2;

    const rightSmallWing = new THREE.Mesh(smallWingGeo, wingMaterial);
    rightSmallWing.position.set(0.6, -0.5, 0);
    rightSmallWing.rotation.z = 0.2;

    butterflyGroup.add(
      body,
      leftWing,
      rightWing,
      leftSmallWing,
      rightSmallWing
    );
    scene.add(butterflyGroup);

    // 조명 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(ambientLight, directionalLight);

    // 카메라 위치
    camera.position.z = 8;

    // refs에 저장
    sceneRef.current = scene;
    butterflyRef.current = butterflyGroup;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);

      // 나비 날개 펄럭이는 애니메이션
      const time = Date.now() * 0.005;
      if (butterflyRef.current) {
        const butterfly = butterflyRef.current;
        butterfly.children.forEach((wing, index) => {
          if (wing instanceof THREE.Mesh) {
            wing.rotation.x = Math.sin(time * 2 + index * 0.5) * 0.3;
          }
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    // 윈도우 리사이즈 처리
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // GSAP ScrollTrigger 애니메이션 설정
  useEffect(() => {
    if (!butterflyRef.current) return;

    // GSAP와 ScrollTrigger를 스크립트로 로드
    const loadGSAP = async () => {
      if (typeof gsap === 'undefined') {
        setTimeout(loadGSAP, 100);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const butterfly = butterflyRef.current;
      if (!butterfly) return;

      // 섹션 1 → 섹션 2: 왼쪽으로 이동하며 작아짐
      gsap.to(butterfly.position, {
        x: -6,
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'top top',
          scrub: 2,
        },
      });

      gsap.to(butterfly.scale, {
        x: 0.5,
        y: 0.5,
        z: 0.5,
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'center center',
          scrub: 2,
        },
      });

      // 섹션 2 → 섹션 3: 오른쪽으로 이동하며 살짝 커짐
      gsap.to(butterfly.position, {
        x: 4,
        scrollTrigger: {
          trigger: '.section-3',
          start: 'top bottom',
          end: 'top top',
          scrub: 2,
        },
      });

      gsap.to(butterfly.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        scrollTrigger: {
          trigger: '.section-3',
          start: 'top bottom',
          end: 'center center',
          scrub: 2,
        },
      });

      // 섹션 3 → 섹션 4: 바닥에 안착
      gsap.to(butterfly.position, {
        x: 0,
        y: -3,
        z: 2,
        scrollTrigger: {
          trigger: '.section-4',
          start: 'top bottom',
          end: 'center center',
          scrub: 2,
        },
      });

      gsap.to(butterfly.rotation, {
        x: Math.PI / 6,
        scrollTrigger: {
          trigger: '.section-4',
          start: 'top bottom',
          end: 'center center',
          scrub: 2,
        },
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className="relative">
      {/* Three.js 캔버스 */}
      <div
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      />

      {/* 스크롤 섹션들 */}
      <div className="section-1 h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 text-white text-4xl font-bold">
        <div className="text-center">
          <h1>나비의 여행이 시작됩니다</h1>
          <p className="text-xl mt-4 opacity-80">스크롤해보세요 ↓</p>
        </div>
      </div>

      <div className="section-2 h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-red-500 text-white text-4xl font-bold">
        <div className="text-center">
          <h2>왼쪽 숲속으로...</h2>
          <p className="text-xl mt-4 opacity-80">나비가 작아져요</p>
        </div>
      </div>

      <div className="section-3 h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 text-white text-4xl font-bold">
        <div className="text-center">
          <h2>오른쪽 꽃밭으로!</h2>
          <p className="text-xl mt-4 opacity-80">다시 조금 커져요</p>
        </div>
      </div>

      <div className="section-4 h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-4xl font-bold">
        <div className="text-center">
          <h2>아름다운 착지</h2>
          <p className="text-xl mt-4 opacity-80">나비의 여행 완료! 🦋</p>
        </div>
      </div>

      {/* GSAP 스크립트 로드 */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    </div>
  );
};

export default ButterflyScrollAnimation;
