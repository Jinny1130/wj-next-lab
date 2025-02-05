'use client';

import '@/styles/home.scss';
import { useEffect, useState } from 'react';
import Header from '@/container/common/Header';
import Footer from '@/container/common/Footer';

export default function Home() {
  const [isMobile, setIsMobile] = useState('pc');

  useEffect(() => {
    function setHeaderShadow() {
      if (window.scrollY === 0) {
        document.querySelector('#header')?.classList.remove('shadow');
      } else {
        document.querySelector('#header')?.classList.add('shadow');
      }
    }

    function handleResize() {
      setIsMobile(window.innerWidth < 640 ? 'mo' : 'pc'); // 640px 미만은 모바일로 간주
    }

    // 초기 width 사이즈 확인
    handleResize();

    window.addEventListener('scroll', setHeaderShadow);
    window.addEventListener('resize', handleResize);

    // 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('scroll', setHeaderShadow);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="is_not_open_ment">
        <span className="text-[22px]">🥲</span>
        <span>페이지 준비중 입니다.</span>
      </div>
      <Footer />
    </div>
  );
}
