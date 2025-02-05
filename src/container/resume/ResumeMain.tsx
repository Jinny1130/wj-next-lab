'use client';

import '@/styles/resume.scss';
import Header from '@/container/common/Header';
import NameWrap from '@/container/resume/NameWrap';
import Contact from '@/container/resume/Contact';
import Introduce from '@/container/resume/Introduce';
import WorkExperience from '@/container/resume/WorkExperience';
import OtherExperience from '@/container/resume/OtherExperience';
import Footer from '@/container/common/Footer';

export default function ResumeMain() {
  return (
    <>
      <Header />
      <div className="resume_wrap max-w-4xl pt-24 px-6 mx-auto sm:px-3">
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
