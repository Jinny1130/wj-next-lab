'use client';

import '@/styles/resume.scss';
import { useEffect } from 'react';
import Header from '@/container/common/Header';
import NameWrap from '@/container/resume/NameWrap';
import Contact from '@/container/resume/Contact';
import Introduce from '@/container/resume/Introduce';
import WorkExperience from '@/container/resume/WorkExperience';
import OtherExperience from '@/container/resume/OtherExperience';
import Footer from '@/container/common/Footer';

export default function ResumeMain() {
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
    <>
      <Header />
      <div className="resume-wrap max-w-4xl pt-24 px-6 mx-auto sm:px-3">
        <NameWrap />
        <Contact />
        <Introduce />
        <WorkExperience />
        <OtherExperience />
      </div>
      <Footer />
    </>
  );
}
