'use client';

import '@/styles/home.scss';
import { useEffect, useState } from 'react';
import Footer from '@/container/common/Footer';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    setFontLoaded(true); // To trigger entrance animations if needed
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moveToScrollTop = (ref?: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-['Paperlogy',_sans-serif] text-black relative break-keep selection:bg-[#2957E2] selection:text-white bg-black">
      <style>{`
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2'); font-weight: 800; font-style: normal; }
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-7Bold.woff2') format('woff2'); font-weight: 700; font-style: normal; }
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2'); font-weight: 600; font-style: normal; }
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-5Medium.woff2') format('woff2'); font-weight: 500; font-style: normal; }
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; }
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-3Light.woff2') format('woff2'); font-weight: 300; font-style: normal; }
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-2ExtraLight.woff2') format('woff2'); font-weight: 200; font-style: normal; }
        @font-face { font-family: 'Paperlogy'; src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-1Thin.woff2') format('woff2'); font-weight: 100; font-style: normal; }
        
        .entrance-anim {
           opacity: 0;
           transform: translateY(20px);
           animation: fadeInUp 0.8s ease forwards;
        }
        @keyframes fadeInUp {
           to { opacity: 1; transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-[80px] left-[80px] w-full flex justify-between items-start p-6 md:p-8 z-50 pointer-events-none mix-blend-difference text-white">
        <div
          className="font-bold tracking-wider pointer-events-auto cursor-pointer hover:text-[#2957E2] transition-colors duration-300"
          onClick={() => moveToScrollTop()}
        >
          HOME
        </div>
      </nav>

      {/* Full-Screen Spline Background (Main View) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 flex items-center justify-center bg-black">
        <Spline scene="https://prod.spline.design/dz3AHzpbMnMadSAy/scene.splinecode" />
        {/* Scroll Hint fixed on top of spline */}
        <div className="absolute top-0 left-0 w-full h-screen flex items-end justify-center pb-12 pointer-events-none">
          <div className="animate-bounce text-black/50 tracking-widest text-sm font-bold flex flex-col items-center gap-2">
            <span>SCROLL TO DISCOVER</span>
            <div className="w-[1px] h-12 bg-black/50"></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="p-[40px] w-full max-w-none mx-auto relative z-10 pointer-events-none">
        {/* Initial Scroll Spacer to keep Spline fully visible at first */}
        <div className="h-[100vh] w-full pointer-events-none"></div>

        {/* Hero Section */}
        <section
          className={`sticky top-[40px] z-10 h-[calc(100vh-80px)] w-full bg-black text-white rounded-[20px] md:rounded-[40px] p-6 lg:p-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-0 relative overflow-y-auto overflow-x-hidden no-scrollbar shadow-[0_-30px_60px_rgba(255,255,255,0.12)] pointer-events-auto ${fontLoaded ? 'entrance-anim' : 'opacity-0'}`}
        >
          <div className="flex-1 z-10 w-full">1번째 박스</div>
        </section>

        {/* Features / Weights Showcase */}
        <section
          className={`sticky top-[40px] z-20 h-[calc(100vh-80px)] w-full bg-white rounded-[20px] md:rounded-[40px] mt-[80vh] p-6 lg:p-16 shadow-[0_-30px_60px_rgba(0,0,0,0.4)] flex flex-col xl:flex-row gap-12 xl:gap-24 overflow-y-auto overflow-x-hidden no-scrollbar pointer-events-auto ${fontLoaded ? 'entrance-anim' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-20">
            2번째 박스
            {/* hover시 생기는 애니메이션 참고 */}
            {/* {[
              { w: 100, name: 'Thin' },
              { w: 200, name: 'ExtraLight' },
              { w: 300, name: 'Light' },
              { w: 400, name: 'Regular' },
              { w: 500, name: 'Medium' },
              { w: 600, name: 'SemiBold' },
              { w: 700, name: 'Bold' },
              { w: 800, name: 'ExtraBold' },
            ].map((font, idx) => (
              <div
                key={font.name}
                className={`flex flex-col cursor-pointer group ${fontLoaded ? 'entrance-anim' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + idx * 0.05}s` }}
              >
                <div className="flex items-end justify-between mb-6 border-b-2 border-black/10 pb-3 group-hover:border-[#2957E2] transition-colors duration-500">
                  <span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-[#2957E2] transition-colors duration-300">
                    {font.w}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-black group-hover:text-[#2957E2] transition-colors duration-300">
                    {font.name}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <p
                    className="text-4xl md:text-5xl lg:text-6xl tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-3"
                    style={{ fontWeight: font.w }}
                  >
                    가나다라마바사
                  </p>
                </div>
                <div className="overflow-hidden mt-4">
                  <p
                    className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-black/80 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:text-black delay-75"
                    style={{ fontWeight: font.w }}
                  >
                    AaBbCcDdEeFf
                  </p>
                </div>
              </div>
            ))} */}
          </div>
        </section>

        {/* Info Table */}
        <section
          className={`sticky top-[40px] z-30 h-[calc(100vh-80px)] w-full bg-[#F1F3F8] rounded-[20px] md:rounded-[40px] mt-[80vh] p-6 lg:p-16 shadow-[0_-30px_60px_rgba(0,0,0,0.5)] border border-black/5 flex flex-col justify-center items-center overflow-y-auto no-scrollbar pointer-events-auto ${fontLoaded ? 'entrance-anim' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="border-t-[3px] border-black max-w-5xl w-full mx-auto">
            3번째 박스
          </div>
        </section>

        {/* Download Action */}
        <section
          className={`sticky top-[40px] z-40 h-[calc(100vh-80px)] w-full bg-black text-white rounded-[20px] md:rounded-[40px] mt-[80vh] p-6 lg:p-16 shadow-[0_-30px_60px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center text-center overflow-y-auto no-scrollbar pointer-events-auto ${fontLoaded ? 'entrance-anim' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <div className="border-t-[3px] border-black max-w-5xl w-full mx-auto">
            4번째 박스
          </div>
        </section>
      </main>

      {/* <div className="is_not_open_ment">
        <span className="text-[22px]">🥲</span>
        <span>페이지 준비중 입니다.</span>
      </div>
      <Footer /> */}
    </div>
  );
}
