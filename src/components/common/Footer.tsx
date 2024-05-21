const Footer = ({ isMobile }:Readonly<{isMobile: string}>) => {
    return (
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center py-24 text-gray-400 text-sm">
            <p>
                본 페이지는 상업적 목적이 아닌 
                {isMobile === 'mo' ? <br/> : <></>}
                비영리적 개인 포트폴리오용으로 만들어진 사이트입니다.
            </p>
            <p>woojin choi ⓒ 2024</p>
        </div>
    )
}

export default Footer