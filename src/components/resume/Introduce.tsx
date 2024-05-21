import Title from "./Title"

const Introduce = ({ isMobile }:Readonly<{isMobile: string}>) => {
    return (
        <div>
            <Title title="Introduce" size="L"/>
            <div className="whitespace-pre-line px-1 py-3.5 text-sm sm:text-base">
                <p>
                        안녕하세요. 3년차 프론트엔드 개발자 <b className="text-lg">최우진</b> 입니다.
                        <br/>
                        <br/>
                        웹 프론트엔드 개발자로 성장해오면서 코드 작성시 가장 중요하게 느낀 바는 읽기 수월한 코드, 중복이 적은 코드 였습니다.
                        그렇기에 중복 작성을 지양하고, UI를 컴포넌트 세분화를 통해 재사용이 용이하도록 작성하기를 추구합니다. 작업의 방향은 언제나 긍정적으로 생각하며 유연한 사고로 바라보도록 노력합니다.
                        <br/>
                        <br/>
                        다양한 사람과 소통하는 것을 좋아하는 성격을 가지고 있습니다. 그래서 협업을 위한 소통은 늘 즐겁습니다.
                        <br/>
                        어떤 결과물이든 모든 사람의 역량이 모이지 않으면 빛을 발하지 않는다는 것을 알기에 다양한 직무의 프로젝트 구성 팀원들과 이해와 배려를 기반으로 커뮤니케이션 하며 협업해왔습니다.
                        <br/>
                        <br/>
                        하고싶은 것은 꼭 해야하는 성향 덕분에 새로운 것을 알아가는 것에 있어 두려움이 없었고, 제게 그 과정은 늘 즐겁습니다. 그래서 다양한 학습과 경험을 마다하지않으며 이를 통해 프론트엔드 개발자로서 성장해나가고 있습니다.
                </p>
            </div>
        </div>
    )
}

export default Introduce