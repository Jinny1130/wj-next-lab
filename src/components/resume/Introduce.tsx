import Title from "./Title"

const Introduce = ({ isMobile }:Readonly<{isMobile: string}>) => {
    return (
        <div>
            <Title title="Introduce" size="L"/>
            <div className="whitespace-pre-line px-1 py-3.5 text-sm sm:text-base">
                <p>
                        안녕하세요. <b className="text-lg">유연한 개발자 최우진</b>입니다.
                        <br/><br/>
                        현재 3년차 개발자로 재직 중이며, 다양한 사람과의 소통을 좋아하여 협업을 즐깁니다. 솔직하고 담백한 화법을 선호하며, 중재자로서 갈등을 해결한 경험이 많습니다.
                        <br/><br/>
                        동료의 의견을 존중하고 배려하며, 기술적 제한 사항을 기획자와 효과적으로 소통하고 필요 시 백엔드 명세 수정 요청을 설득하여 프로젝트가 원활히 진행되도록 합니다.
                        모든 사람의 역량이 모여야 결과물이 빛난다는 것을 알기에 다양한 직무의 팀원들과 이해와 배려를 기반으로 협업해 왔습니다.
                        <br/><br/>
                        하고 싶은 것은 꼭 해야 하는 성향 덕분에 새로운 것을 알아가는 것에 있어 두려움이 없었고, 제게 그 과정은 늘 즐겁습니다. 그래서 다양한 학습과 경험을 마다하지 않으며 이를 통해 프론트엔드 개발자로서 성장해 나가고 있습니다.
                </p>
            </div>
        </div>
    )
}

export default Introduce