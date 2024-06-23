'use-client'

import Title from "./Title"
import DotWithText from "./DotWithText"
import NewTabIcon from "../common/NewTabIcon"
import Link  from 'next/link'

interface Experience {
    id: string;
    title: string;
    period: string;
    pageAbout?: string | TrustedHTML;
    pageUrl?: string;
    describe: string[];
  }

const experienceList:Experience[] = [
    {
        id: 'admin',
        title: "Admin 2.0",
        period: "2021.08 ~ ",
        pageAbout: "결제선생 서비스를 이용하는 사용자들과 사업장을 관리하는 백오피스 페이지이며 기존에 사용 중이던 <b>1.0 버전</b>과 리뉴얼 된 <b>2.0 버전</b>으로 나누어져 있습니다. 이 페이지에서는 <b>CS 상담 관리</b>, <b>사업장 등록</b>, <b>결제 수단 관리</b>, <b>정산 관리</b>, <b>어드민 멤버 관리</b> 등 서비스 전반의 운영을 통합적으로 관리할 수 있는 기능을 제공합니다.",
        describe: [
            "기존 1.0 버전에서는 주로 유지보수 업무를 담당하며, 안정적인 운영을 위한 <b>문제 해결과 개선 작업</b>을 수행하였습니다.",
            "사수가 없는 환경에서 <b>Admin 2.0을 신규 구축</b>하고 <b>개발 리드를 담당</b>하였으며, 코드의 유지보수성과 확장성을 고려하여 <b>폴더 구조를 체계적으로 분류하고 정의</b>하였습니다.",
            "주요 기능별로 폴더를 나누어 <b>공통 컴포넌트, 유틸리티(helper) 함수, 스타일(css/scss) 파일 등</b>을 별도의 디렉토리에 정리하여 가독성을 높였습니다.",
            "컴포넌트 설계로 다양한 페이지의 <b>중복코드 발생을 방지</b>하였고, <b>신규 페이지의 개발속도를 단축</b>시켰습니다.",
            "서비스 사용 신청 사업장의 심사 과정을 <b>OCR 서류인식</b>과 <b>NICE 통신 연결을 통해 자동화</b>하여, <b>심사 승인 속도를 높이고 유치 고객을 증가</b>시켰습니다.",
            "1.0과 2.0 간의 이동 버튼을 각 페이지 메인에 추가하여, 새 창으로 열리는 페이지 간에 <b>postMessage로 로그인 정보 교환</b>을 통해 재로그인 없이 다른 버전의 어드민 서비스를 이용할 수 있도록 구현하였습니다.",
            "어드민 메뉴마다 연동되어 있는 <b>목록 조회 API</b>와 <b>엑셀 다운로드 목록 조회 API</b>를 <b>사용자의 동작 순간에 맞춰 분류</b>하여 연동함으로써, <b>API 과부하를 방지</b>하고 효율성을 높였습니다.",
            "외부 플러그인 사용시 플러그인의 기능 활용과 동시에 기획 디자이너의 디자인 요구 충족을 위해 <b>스타일을 재정의하고 컴포넌트로 제작</b>하여, <b>활용성을 높이고 타 팀과의 원활한 소통</b>을 이뤄냈습니다.",
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
        id: 'kiosk',
        title: "결제선생 및 출결선생 체험페이지",
        period: "2024.01",
        pageAbout: "결제선생 및 출결선생의 핵심 기능인 <b>청구서와 출결 메시지 발송을 체험</b>할 수 있는 페이지로, 서비스 이용을 간접적으로 경험할 수 있습니다.",
        describe: [
            "<b>HTML, CSS, 및 Vanilla JS를 사용</b>하여 페이지를 제작하였습니다.",
            "'Spline 3D'와 'Lottie' 이미지를 JavaScript로 연동해 <b>인터랙티브한 UI 페이지를 구현</b>했습니다.",
            "2일이라는 <b>제한된 기한 내</b>에 효율적으로 페이지를 완성하여 <b>높은 품질의 결과물을 제공</b>했습니다.",
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
                                    
                                    <div className={`flex text-xs sm:text-[14px] leading-6 text-gray-600 ${exp.title === 'The Other' ? 'hidden' : ''}`}>
                                        <span className="mr-2">👉🏻</span>
                                        <span>
                                            {exp.pageAbout && <span dangerouslySetInnerHTML={{ __html: exp.pageAbout }}></span>}
                                            {exp.id === 'hissam' && <span className="block mt-1 ml-3.5 text-[11px] text-gray-500">* 연결링크는 출결선생 안내 랜딩페이지 입니다. (출석체크 페이지는 서비스 이용자에 한해서 진입이 가능함)</span>}
                                        </span>
                                    </div>

                                    <div className="pt-8 experience-desc-list text-[#2b2b2b]">
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