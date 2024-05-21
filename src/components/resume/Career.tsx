import Title from "./Title"

const Career = ({ isMobile }:Readonly<{isMobile: string}>) => {
    return (
        <div>
            <Title title="Career" size="L"/>
            <div className="whitespace-pre-line px-1 pt-7 sm:pt-3.5 text-sm sm:text-base">
                <div className="w-full flex items-center justify-between">
                    <p className="font-semibold text-base">(주) 페이민트</p>
                    <p className="text-sm text-gray-600">2021.08.02 ~ ( 재직중 )</p>
                </div>
                <div className="py-3 text-sm sm:text-base">
                    <p>간편결제 통합솔루션 사업을 주력으로 비대면 결제 서비스인 “결제선생” 을 운영하는 페이민트에서 근무했습니다.</p>
                    {isMobile === 'mo' ? <br/> : <></>}
                    <p>결제선생의 ‘매니저사이트’, ‘간편결제 청구서’  페이지(Front Office Page)의 유지보수 업무를 하였습니다.</p>
                    {isMobile === 'mo' ? <br/> : <></>}
                    <p>또한 해당 서비스 관리에 필요한 어드민(Back Office Page) 구축, 유지 보수하며 프론트엔드 기능 개발리드를 한 경험이 있습니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Career