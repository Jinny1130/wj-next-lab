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
        title: "어드민 사이트",
        period: "2021.08 ~ ",
        pageAbout: "결제선생 서비스를 이용하는 사용자들과 사업장을 관리하는 백오피스 페이지로, <b>기존 1.0 버전의 유지보수</b>와 리뉴얼된 <b>2.0 버전의 신규 구축 및 개발 리드를 담당</b>하였습니다. 또한, <b>CS 상담 관리, 사업장 등록, 결제 수단 관리, 정산 관리, 어드민 멤버 관리 등</b> 서비스 전반의 운영을 통합적으로 관리할 수 있는 <b>다양한 페이지들을 제작</b>하였습니다.",
        describe: [
            "기존 1.0 버전에서는 주로 유지보수 업무를 담당하며, 안정적인 운영을 위한 <b>문제 해결과 개선 작업</b>을 수행하였습니다.",
            "사수가 없는 환경에서 <b>Admin 2.0을 신규 구축</b>하고 <b>개발 리드를 담당</b>하였으며, 코드의 유지보수성과 확장성을 고려하여 <b>폴더 구조를 체계적으로 분류하고 정의</b>하였습니다.",
            "주요 기능별로 폴더를 나누어 <b>공통 컴포넌트, 유틸리티(helper) 함수, 스타일 파일 등</b>을 별도의 디렉토리에 정리하여 가독성을 높였습니다.",
            "컴포넌트 설계로 다양한 페이지의 <b>중복코드를 방지</b>하고, <b>신규 페이지의 개발속도를 단축</b>시켰습니다.",
            "서비스 사용 신청 사업장의 심사 과정을 <b>OCR 서류인식</b>과 <b>NICE 통신 연결을 통해 자동화</b>하여, <b>심사 승인 속도를 높이고 유치 고객을 증가</b>시켰습니다.",
            "1.0과 2.0 간의 이동 버튼을 각 페이지 메인에 추가하여, 새 창으로 열리는 페이지 간에 <b>postMessage로 로그인 정보 교환</b>을 통해 재로그인 없이 다른 버전의 어드민 서비스를 이용할 수 있도록 구현하였습니다.",
            "어드민 메뉴마다 연동되어 있는 <b>목록 조회 API</b>와 <b>엑셀 다운로드 목록 조회 API</b>를 <b>사용자의 동작 순간에 맞춰 분류</b>하여 연동함으로써, <b>API 과부하를 방지</b>하고 효율성을 높였습니다.",
            "외부 플러그인의 기능을 활용하면서, 기획 디자이너의 디자인 요구를 충족시키기 위해 <b>기존 플러그인 스타일을 재정의하고 컴포넌트로 제작</b>하여, <b>활용성을 높이고 타 팀과의 원활한 소통</b>을 이뤄냈습니다.",
        ]
    },
    {
        id: 'manager',
        title: "결제선생 - 매니저 사이트",
        period: "2021.08 ~ ",
        pageAbout: "결제선생 서비스에 가입한 사용자가 이용하는 사이트로 <b>사업장 등록, 청구서 관리 및 발송, 청구서 수신 고객 관리 등</b> 다양한 기능을 제공합니다. 매니저 사이트의 다양한 <b>신규 프로젝트에 참여</b>하였으며, 사용자 경험을 개선하기 위해 지속적으로 <b>기능을 업데이트하고 최적화</b>했습니다.",
        describe: [
            "매니저 사이트에서 <b>유지보수 작업을 통해 새로운 요구사항을 반영하고 기존 기능을 개선</b>하였습니다. 이 과정에서 <b>UI/UX 향상 및 코드 리팩토링을 수행</b>하여 사용자 경험을 개선하였습니다.",
            "<b>반응형 레이아웃</b>으로 기본 <b>모바일</b>화면과 <b>WebView</b> 화면에 적합하도록 개발하였습니다.",
            "<b>UI 요소들의 컴포넌트화</b>에 초점을 두고 개발하여 <b>협업과 유지보수에 용이</b>하도록 하였습니다.",
            "<b>비밀번호 유효성 체크를 복잡화</b>함으로써 <b>보안 및 웹 취약점을 개선</b>했습니다.",
            "<b>사용자 트래킹</b>을 위해 <b>Google Analytics(GA) 태그를 추가</b>하였습니다.",
            "사용자 본인확인 방식을 신분증 이미지 업로드에서 <b>드림시큐리티 연동 휴대폰 본인인증</b>으로 전환하였습니다. <b>웹과 AOS는 새 창으로, iOS는 리다이렉트 페이지로</b> 결과 값을 받아 <b>API 호출을 분기 처리</b>하여 <b>사용자 경험을 개선</b>했습니다.",
            "결제선생 이용을 위한 <b>사업장 등록 프로세스를 개선</b>하는 작업을 진행했습니다. 기존 서류 이미지 업로드 방식에서 <b>OCR을 이용한 자동화 방식으로 전환</b>하여, 등록 과정을 간소화하고 효율성을 높였습니다.",
            "진행 단계별 <b>사용자 동작</b>에 따라 <b>UI의 동적 구분</b>을 위해 컴포넌트 데이터를 <b>전역 상태 관리(Vuex)에 저장 및 조회</b>하여 UI의 동적 변화를 구현하고, <b>히스토리 앞뒤로의 이동이 용이</b>하도록 했습니다.",
            "등록 재심사를 요청하는 <b>보완요청 페이지</b>를 개발하고 유지보수 하였습니다.",
            "고객의 재심사 요청 시 <b>Slack으로 메시지 자동 발송</b>하는 기능을 추가하여 <b>업무처리 확인에 용이</b>하도록 작업했습니다.",
            "<b>제휴 간편결제 앱카드사</b>와 공통 <b>서비스 활용을 위한 등록 프로세스</b> 페이지인 <b>'우리카드 가맹점 신청', '카카오페이 결제수단 신청', '케이뱅크, 간편계좌이체 결제수단 신청' 등</b> 다양한 페이지를 개발하였습니다.",
        ]
    },
    {
        id: 'bill',
        title: "결제선생 - 청구서",
        period: "2021.08 ~ ",
        pageAbout: "결제선생 서비스를 이용하는 사업장에서 사업장 이용 고객에게 발송하는 <b>결제 청구 페이지</b>입니다. 이 페이지는 <b>'앱카드', 'KEY IN', '자동결제', '간편결제(페이앱)', '뱅킹앱' 등 다양한 결제 수단</b>을 제공하며, 고객은 별도의 앱 다운로드 없이 <b>카카오톡으로 청구서를 수신하고 결제</b>할 수 있습니다.",
        describe: [
            "<b>유지보수</b>에 중점을 두고 청구서 페이지의 <b>기존 프로세스와 UI를 관리</b>하고, 시스템의 기능을 최신화하였습니다.",
            "<b>모바일에 최적화</b> 된 <b>반응형 레이아웃</b>으로 개발하였으며, 디바이스 환경에 따라 결제앱 <b>아이콘을 동적으로 제어</b>하여 <b>사용자 경험을 최적화</b>하였습니다.",
            "<b>'KB Pay 알림결제 서비스 신청' 페이지를 제작</b>하였습니다. 고객이 페이앱 푸시알림을 받고 바로 결제할 수 있도록 하는 서비스로, <b>서비스 안내, 정보 입력, 약관 동의, 신청완료</b>로 구성된 짧은 프로세스로 구현하여 <b>미납률 감소 효과</b>를 이뤘습니다.",
        ]
    },
    {
        id: 'hissam',
        title: "출결선생",
        period: "2023.08 ~ 2023.09",
        pageAbout: "결제선생 서비스를 이용하는 사업장 중 <b>출석체크 서비스를 이용하는 사업장</b>에 제공되는 서비스입니다. 이 페이지를 통해 <b>학생과 수업 클래스를 등록</b>할 수 있으며, 서비스 이용등록 한 학생이 출석체크 시 <b>출결 알림 메시지</b>가 <b>보호자에게 전송</b>되는 서비스를 제공합니다.",
        pageUrl: "https://hissam.kr/",
        describe: [
            "출결선생 서비스의 <b>출석체크, 출결조회 페이지를 개발</b>하였습니다.",
            "리스트형 UI를 통해 <b>학생들의 출석 상태를 관리</b>하며, 각 리스트의 <b>'등원, 하원, 결석, 철회'</b>의 동작은 <b>컴포넌트 간의 상호작용 및 데이터 흐름</b>을 고려하여 <b>독립적으로 처리</b>되도록 개발하였습니다.",
            "<b>'출결선생' 런칭 홍보 페이지</b>를 개발하였습니다. 네컷만화 형식으로 구성 된 페이지며 <b>단일 컴포넌트</b>로 각 회차를 <b>동적 라우팅으로 구분</b>하여 prev/next 버튼을 통한 <b>간편한 회차 탐색</b>이 되도록 개발하였습니다.",
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
                                            {exp.id === 'hissam' && <span className="block mt-1 text-[11px] text-gray-500">* 연결링크는 출결선생 안내 랜딩페이지 입니다. (출석체크 페이지는 서비스 이용자에 한해서 진입이 가능함)</span>}
                                        </span>
                                    </div>

                                    <div className="pt-10 experience-desc-list text-[#2b2b2b]">
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