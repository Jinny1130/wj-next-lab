'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    function setHeaderShadow() {
      if (window.scrollY === 0) {
        document.querySelector('#header')?.classList.remove('shadow');
      } else {
        document.querySelector('#header')?.classList.add('shadow');
      }
    }

    window.addEventListener('scroll', setHeaderShadow);

    // 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('scroll', setHeaderShadow);
    };
  }, []);

  return (
    <div
      id="header"
      className="header w-full h-14 flex items-center justify-between px-3 fixed bg-white z-10"
    >
      <Link href={'/'} className="h-full py-2.5 flex items-center font-bold">
        <Image
          src="/images/wj.png"
          alt="woojin_imoji"
          width={30}
          height={30}
          priority
        />{' '}
        Woojin | Front-end Dev.
      </Link>

      <div className=""></div>
    </div>
  );
}
