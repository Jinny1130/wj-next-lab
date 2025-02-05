import Title from '@/container/resume/components/Title';
import DetailExperienceTitle from '@/container/resume/components/DetailExperienceTitle';

const teamTeckStack = [
  {
    id: 'main',
    title: 'Team Main Teck Stack',
    teckList: [
      'Vue',
      'Vuex',
      'Vue-Router',
      'Javascript',
      'Webpack',
      'Axios',
      'SCSS',
      'CSS',
      'GitLab',
      'Jira',
      'Confluence',
      'Slack',
    ],
  },
  {
    id: 'sub',
    title: 'Team Sub Teck Stack',
    teckList: [
      'Next.js',
      'React',
      'Typescript',
      'Jotai',
      'styled-components',
      'Tailwind',
    ],
  },
];

export default function Career() {
  return (
    <div className="whitespace-pre-line py-4 text-sm sm:text-base">
      <div className="career_period_wrap">
        <Title title={'2021.08.02 ~ 재직중 '} size="S" />
      </div>

      <div className="pt-3 pb-8 text-sm sm:text-base">
        <b>비대면 결제 서비스</b>를 주력으로 하는 <b>핀테크 스타트업</b>{' '}
        페이민트에서 근무했습니다.
        <br />
        <br />
        입사 시점 "10,000개 가맹점, 월 거래 취급액 250억"에서 시작하여{' '}
        <b>"가맹점 70,000개, 월 거래 취급액 2,000억"</b>에 이르기까지,{' '}
        <b>빠르게 성장하는 서비스</b>를 개발하고 운영했습니다.
        <br />
        <br />
        결제선생의 <b>'어드민 사이트', '매니저 사이트', '청구서'</b> 등 여러
        페이지에 대한 작업 경험이 있으며, 신규 서비스 개발, 기존 서비스 유지
        보수, 운영 오류 처리 및 조치 등 다양한 업무를 경험했습니다. 특히{' '}
        <b>어드민 사이트(Back Office)의 프론트엔드 개발을 주도</b>했습니다.
        <br />
        <br />
        현재는 매니저 사이트와 어드민 사이트 위주로 프론트를 맡고 있으며, 청구서
        프로젝트의 <b>마이그레이션(Next.js) 작업을 진행</b>하고 있습니다.
      </div>

      <div className="teck_stack_wrap">
        {teamTeckStack.map((teamTeckStack) => (
          <div
            key={teamTeckStack.id}
            className="sm:flex sm:items-start pb-[10px]"
          >
            <DetailExperienceTitle detailTitle={teamTeckStack.title} />
            <div className="w-full sm:w-[calc(100% - 180px)]">
              {teamTeckStack.teckList.map((teck) => (
                <span key={teck} className="teck">
                  {teck}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
