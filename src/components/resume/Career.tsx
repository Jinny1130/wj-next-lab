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
                    비대면 결제 서비스를 주력으로 하는 핀테크 스타트업 페이민트에서 근무했습니다. 
                    <br/>{isMobile === 'mo' ? <br/> : <></>}
                    입사 시점 "10,000개 가맹점, 월 거래 취급액 250억"에서 시작하여 "가맹점 60,000개, 월 거래 취급액 2,000억"에 이르기까지, 빠르게 성장하는 서비스를 개발하고 운영했습니다.
                    <br/><br/>
                    결제선생의 청구서 시스템, 매니저 사이트, 어드민 사이트를 개발하고 유지보수해왔습니다. 특히 어드민 사이트(백오피스)의 프론트엔드 개발을 주도하였으며, 운영 업무에 필요한 다양한 기능을 구현했습니다.
                </div>
            </div>
        </div>
    )
}

export default Career