import { StickyTitleInfo, DetailWorkExperienceInfo, WorkPageAbout } from "@/types/ResumeTypes"

export const workExperienceList: StickyTitleInfo[] = [
    {
        id: 'paymint',
        title: '(주) 페이민트',
        link: 'http://paymint.co.kr/',
        addExplanation: '페이민트 회사 페이지로 연결됩니다.'
    },
    {
        id: 'admin',
        title: '어드민',
    },
    {
        id: 'manager',
        title: '결제선생 - 매니저',
        link: 'https://payssam.kr',
        addExplanation: '서비스 안내 랜딩으로 연결됩니다.'
    },
    {
        id: 'bill',
        title: '결제선생 - 청구서',
        link: 'https://payssam.kr/form/bill',
        addExplanation: '서비스 체험 링크로 연결됩니다.'
    },
    {
        id: 'hissam',
        title: '출결선생',
        link: 'https://hissam.kr/',
        addExplanation: '서비스 안내 랜딩으로 연결됩니다.'
    },
    {
        id: 'other',
        title: 'Other Work',
    },
]

export const workPageAbout: Record<string, WorkPageAbout> = {
    admin: {
        period: "",
        pageAbout: "사내 백오피스 페이지로, 기존 1.0 버전에서 <b>2.0 버전으로 신규 구축 및 개발 리드</b>를 담당 하였습니다. 노후화 된 서버의 이관문제로 기존 1.0 페이지도 일정부분 유지가 되어야했기 때문에, <b>기존 1.0 버전의 유지보수</b>도 함께 병행 작업 하였습니다.<br/>페이지 내부의 <b>CS 상담 관리, 사업장 등록, 결제 수단 관리, 정산 관리, 어드민 멤버 관리</b> 등 서비스 전반의 운영을 통합적으로 관리할 수 있는 <b>다양한 메뉴들을 개발</b>하였습니다.",
    },

    manager: {
        period: "",
        pageAbout: "결제선생 서비스에 가입한 사용자가 이용하는 사이트로 <b>사업장 등록, 청구서 관리 및 발송, 청구서 수신 고객 관리 등</b> 다양한 기능을 제공합니다. 매니저 사이트의 다양한 <b>신규 프로젝트에 참여</b>하였으며, 사용자 경험을 개선하기 위해 지속적으로 <b>기능을 업데이트하고 최적화</b>했습니다.",
    },

    bill: {
        period: "",
        pageAbout: "결제선생 서비스를 이용하는 사업장에서 사업장 이용 고객에게 발송하는 <b>결제 청구 페이지</b>입니다. 이 페이지는 <b>'앱카드', 'KEY IN', '자동결제', '간편결제(페이앱)', '뱅킹앱' 등 다양한 결제 수단</b>을 제공하며, 고객은 별도의 앱 다운로드 없이 <b>카카오톡으로 청구서를 수신하고 결제</b>할 수 있습니다.",
    },

    hissam: {
        period: "",
        pageAbout: "출결선생은 결제선생 사업장 중 <b>출석체크 기능</b>을 사용하는 사업장에 제공되는 서비스입니다. <b>수업 클래스와 학생을 등록</b>할 수 있으며, 학생 출석체크를 완료하면 보호자에게 <b>출결 알림 메시지가 전송</b>되는 기능을 주로 제공하고 있습니다.",
    },

    other: {
        period: "",
        pageAbout: "결제선생 및 출결선생의 핵심 기능인 <b>청구서와 출결 메시지 발송을 체험</b>할 수 있는 페이지로, 서비스 이용을 간접적으로 경험할 수 있습니다."
    }
}

export const detailWorkExperiences: Record<string, DetailWorkExperienceInfo[]> = {
    admin: [
        {
            title: '',
            period: '',
            describe: []
        }
    ],
    manager: [],
    bill: [],
    hissam: [],
    other: []
}