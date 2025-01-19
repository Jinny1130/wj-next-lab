'use client';

import '@/styles/resume.scss';
import Header from '@/components/common/Header';
import NameWrap from '@/components/resume/NameWrap';
import Contact from '@/components/resume/Contact';
import Introduce from '@/components/resume/Introduce';
import WorkExperience from '@/components/resume/WorkExperience';
import OtherExperience from '@/components/resume/OtherExperience';
import Footer from '@/components/common/Footer';
import { useEffect, useState } from 'react';

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
