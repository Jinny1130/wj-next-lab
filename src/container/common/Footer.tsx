import styled from 'styled-components';

interface Props {
  footerFor?: string;
}

const FooterWrap = styled.div`
  > .send_message_footer {
    width: 100%;
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 15;
    padding: 10px;
    font-size: 11px;
  }
  @media (max-width: 639px) {
    > .send_message_footer {
      z-index: 1;
      bottom: 130px;
      font-size: 10px;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const Footer = ({ footerFor }: Props) => {
  return (
    <FooterWrap>
      <div
        className={`max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center py-24 text-gray-400 text-[13px] bg-transparent ${footerFor === 'sendMessage' ? 'send_message_footer' : ''}`}
      >
        <p>
          본 페이지는 상업적 목적이 아닌
          <br className="block sm:hidden" />
          비영리적 개인 포트폴리오용으로 만들어진 사이트입니다.
          <br />
          본 페이지는 React, Next.js, Vercel 을 이용해서 제작하였습니다.
          <br />
        </p>
        <p className="mt-3">woojin choi ⓒ 2024</p>
      </div>
    </FooterWrap>
  );
};

export default Footer;
