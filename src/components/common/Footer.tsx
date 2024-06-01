const Footer = () => {
    return (
        <div className={`max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center py-24 text-gray-400 text-[13px] bg-transparent`}>
            <p>
                본 페이지는 상업적 목적이 아닌 
                <br className="block sm:hidden"/>
                비영리적 개인 포트폴리오용으로 만들어진 사이트입니다.
                <br/>
                본 페이지는 React, Next.js, Vercel 을 이용해서 제작하였습니다.
                <br/>
            </p>
            <p className="mt-3">woojin choi ⓒ 2024</p>
        </div>
    )
}

export default Footer