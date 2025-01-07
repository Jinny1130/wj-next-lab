import { StickyTitleInfo, DetailWorkExperienceInfo, WorkPageAbout } from "@/types/ResumeTypes"

export const otherExperienceList: StickyTitleInfo[] = [
    {
        id: 'wjSendMessage',
        title: 'WJ.메시지발송',
        link: '/send-message',
        addExplanation: '메시지 체험 페이지로 연결됩니다.'
    },
    {
        id: 'readingOcean',
        title: '리딩오션',
        link: 'https://blog.naver.com/readingocean0228/223019069637',
        addExplanation: '리딩오션 프로그램 소개 블로그로 연결됩니다.'
    },
]

export const otherPageAbout: Record<string, WorkPageAbout> = {
    wjSendMessage: {
        period: "2024.05",
        pageAbout: "Next.js로의 마이그레이션을 위해 <b>사내 스터디를 진행</b>하며 제작한 사이드 프로젝트입니다. 이 프로젝트는 <b>Next.js</b> 프레임워크와 <b>AWS</b> 서비스에 대한 이해도를 높이는 데 초점을 두었습니다. 링크를 클릭하면 실제 메시지 발송이 가능한 페이지로 연결되며, <b>메시지 발송 및 수신</b> 과정을 직접 체험할 수 있습니다.",
    },
    readingOcean: {
        period: "",
        pageAbout: "(주)레듀텍 사의 '리딩오션' 서비스 내부의 유아의 독서 증진을 위한 동기부여 프로그램으로 <b>육성 시뮬레이션 게임</b>에 기반한 페이지입니다. 독서에 대한 흥미를 높여 유아의 지속적인 독서를 위한 <b>에듀케이션 프로그램</b>입니다.",
    },
}

export const detailOtherExperiences: Record<string, DetailWorkExperienceInfo[]> = {
    wjSendMessage: [
        {
            title: '메시지 발송 Side Project',
            period: '2024.05',
            describe: [
                "<b>Next.js, Typescript, AWS SNS, vercel</b> 을 활용하여 제작 및 배포하였습니다.",
                "반응형으로 제작하여 <b>모바일과 PC</b> 디바이스 간의 <b>UI 차이</b>를 두고 제작하였습니다.",
                "메세지는 AWS 사용이슈로 국제발신 메시지로 발송됩니다."
            ]
        },
    ],
    readingOcean: [
        {
            title: '독서미션 캐릭터 성장 게임 개발',
            period: '2022.12',
            describe: [
                "협업 개발자와 함께 <b>코드 컨벤션</b>을 정하고 준수하며 개발을 진행하였습니다.",
                "<b>독서 미션 수행, 포인트 획득, 꾸미기 아이템 구매 및 사용</b> 등의 화면들을 제작하였으며, 컴포넌트 단위로 분류하여 개발하였습니다.",
                "고객사의 <b>개발표준 및 개발환경을 준수</b>하고, 요청 기한에 맞춰 프로젝트 개발을 완성했습니다."
            ]
        },
    ],
}