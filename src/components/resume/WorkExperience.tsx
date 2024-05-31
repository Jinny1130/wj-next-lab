'use-client'

import Title from "./Title"
import DotWithText from "./DotWithText"
import NewTabIcon from "../common/NewTabIcon"
import Link  from 'next/link'

const experienceList = [
    {
        id: 'admin',
        title: "Admin 2.0",
        period: "2021.08 ~ ",
        pageAbout: "사용자들과 사업장의 정보 등을 관리하는 백오피스 페이지",
        describe: [
            "기존 Admin1.0 에서 2.0으로 리뉴얼하는 페이지를 구축하고 프론트 개발 리드를 하였습니다.",
            "Vue 와 Vue Router Tab 을 활용하여 Tab UI 로 간편하게 동작하도록 작업했습니다.",
            "컴포넌트 설계로 다양한 페이지의 중복코드 발생을 방지하였고, 신규 페이지의 개발속도를 단축시켰습니다.",
            "서비스 사용신청 사업장의 심사요청을 NICE 통신 연결로 자동 심사승인 플로우 연결하여 사업장 가입속도를 증가시켜 유치고객을 늘렸습니다.",
        ]
    },
    {
        id: 'payssam',
        title: "결제선생 랜딩페이지",
        period: "2021.08 ~ ",
        pageAbout: "결제선생 서비스 소개 홈페이지",
        pageUrl: "https://payssam.kr/",
        describe: [
            "등록심사 요청이 홀드 된 사업장에 재심사 요청을 하는 보완요청 페이지를 개발, 유지보수 작업을 하였습니다.",
            "반응형 레이아웃으로 개발하였습니다."
        ]
    },
    {
        id: 'manager',
        title: "결제선생 - 매니저사이트",
        period: "2021.08 ~ ",
        pageAbout: "결제선생 서비스에 가입한 사용자가 사업장을 등록, 서비스 이용, 사업장의 고객 관리를 위해 사용하는 페이지",
        describe: [
            "사용자의 사업장 등록 단계를 OCR(광학 문자 인식)을 연동하여 자동화 등록 프로세스의 프론트를 개발하고 유지보수하는 작업을 하였습니다.",
            "휴대폰 본인인증 화면을 ‘드림시큐리티’ 본인 확인 연동 작업으로 개발하였습니다.",
            "제휴카드사와의 고객 유치를 위한 이벤트 가입 페이지 개발, 유지보수 작업을 하였습니다.",
            "사업장 등록심사 미통과 사업장을 타겟으로 재심사 요청을 하는 보완요청 페이지를 개발, 유지보수 작업을 하였습니다.",
            "신규 프로세스 개발 및 기존 페이지의 유지보수 작업을 하였습니다.",
            "반응형 레이아웃으로 기본 모바일화면과 WebView 화면에 적합하도록 개발하였습니다."
        ]
    },
    {
        id: 'bill',
        title: "결제선생 - 청구서",
        period: "2021.08 ~ ",
        pageAbout: "결제선생 서비스를 이용하는 사업장에서 사업장의 고객에게 발송하는 결제 청구서 페이지 ",
        describe: [
            "제휴 간편결제 앱카드사와 공통 서비스 활용을 위한 등록 프로세스 페이지를 개발하였습니다.",
            "반응형 레이아웃으로 개발하였습니다.",
            "기존 프로세스와 화면의 유지보수 위주로 개발 작업을 하였습니다."
        ]
    },
    {
        id: 'hissam',
        title: "출결선생 - 출결체크",
        period: "2023.08 ~ 2023.09",
        pageAbout: "결제선생 서비스 이용 사업장 중 출결관리 시스템을 사용하는 사업장의 학생 출결 체크 페이지",
        pageUrl: "https://hissam.kr/",
        describe: [
            "신규서비스의 출결 조회&체크 화면을 개발하였습니다.",
            "리스트 형으로 각 리스트에서 출결 처리, 철회, 완료가 이루어지는 UI/UX를 개발하였습니다."
        ]
    },
    {
        id: 'other',
        title: "The Other",
        period: "-",
        describe: [
            "청구서, 출결 메시지 발송 체험 페이지 - 키오스크 화면 기준으로 메시지 발송체험하는 화면을 개발하였습니다.",
        ]
    },
]

const WorkExperience = () => {
    return (
        <div>
            <Title title="Work Experience" size="L"/>
            <div className="px-1 py-3.5 flex flex-col sm:flex-row">
                <Link href={'http://paymint.co.kr/'} target="_blank" className="flex items-center w-full h-fit font-semibold text-sky-500 text-[23px] bg-white py-4 sticky top-14 sm:top-16 sm:w-1/5 mr-[20px] hover:underline">
                    (주) 페이민트 <NewTabIcon iconInfo={{iconWidth:24, iconHeight:24, iconFill:'#0ea5e9'}} className="ml-[8px]"/>
                </Link>

                <div className="w-full sm:w-4/5">
                    {
                        experienceList.map( (exp, index) => {
                            return (
                                <div key={exp.id} className={`pb-8 ${index < (experienceList.length - 1) ? 'border-bottom-gray' : index === (experienceList.length - 1) ? 'pb-0'  : ''}`}>
                                    <div className={`w-full flex items-center justify-between pb-2 ${index === 0 ? 'pt-4' : 'pt-8'}`}>
                                        {
                                            exp.pageUrl && <Link href={exp.pageUrl} target="_blank" className='hover:underline underline-offset-1 flex items-center text-sky-500'>
                                                <Title title={exp.title} size="S" />
                                                <NewTabIcon iconInfo={{iconWidth:20, iconHeight:20, iconFill:'#0ea5e9'}} className="ml-[3px] sm:ml-[5px]"/>
                                            </Link>
                                        }
                                        { !exp.pageUrl && <Title title={exp.title} size="S" /> }
                                        <p className="text-xs sm:text-sm text-gray-600">{ exp.period }</p>
                                    </div>
                                    
                                    <div className={`text-xs sm:text-sm text-gray-600 ${exp.title === 'The Other' ? 'hidden' : ''}`}>
                                        <span className="mr-2">👉🏻</span>{ exp.pageAbout }
                                        {exp.id === 'hissam' && <span className="block mt-1 ml-3.5 text-[11px] text-gray-500">* 연결링크는 출결선생 안내 랜딩페이지 입니다. (출석체크 페이지는 서비스 이용자에 한해서 진입이 가능한 페이지)</span>}
                                    </div>

                                    <div className="pt-8 experience-desc-list">
                                        {
                                            exp.describe.map( (desc, index) => {
                                                return (
                                                    <DotWithText key={`${exp.id}_desc_${index}`} sideText={desc} textSize="base"/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkExperience