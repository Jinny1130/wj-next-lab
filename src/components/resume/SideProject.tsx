import Title from "./Title"
import DotWithText from "./DotWithText"

const sideProjectList = [
    {
        id: "readingOcean",
        title: "독서미션 캐릭터 성장 게임",
        period: "2022.12",
        pageAbout: "리딩오션 내부의 유아의 독서 증진을 위한 동기부여 프로그램으로 육성 시뮬레이션 게임에 기반한 페이지",
        describe: [
            "프로젝트 팀원들과 코드컨벤션을 맞춰 개발하였습니다.",
            "포인트 취득, 상품 구매, 구매한 상품 사용의 화면을 개발하였습니다.",
            "각 화면의 API를 연동시켜 데이터 조회 및 화면 업데이트가 되도록 개발하였습니다."
        ]
    },
]

const SideProject = () => {
    return (
        <div>
            <Title title="Side Project" size="L" />
            <div className="px-1 py-3.5 flex flex-col sm:flex-row">
                <h3 className="block w-full h-fit font-semibold text-sky-500 text-2xl bg-white py-4 sticky top-14 sm:top-16 sm:w-1/5">리딩오션</h3>

                <div className="w-full sm:w-4/5">
                    {
                        sideProjectList.map( (project, index) => {
                            return (
                                <div key={project.id} className={`pb-8 ${index < (sideProjectList.length - 1) ? 'border-bottom-gray' : index === (sideProjectList.length - 1) ? 'pb-0'  : ''}`}>
                                    <div className={`w-full flex items-center justify-between pb-2 ${index === 0 ? 'pt-4' : 'pt-8'}`}>
                                        <Title title={project.title} size="S" />
                                        <p className="text-xs sm:text-sm text-gray-600">{ project.period }</p>
                                    </div>
                                    
                                    <div className={`text-xs sm:text-sm text-gray-600 ${project.title === 'The Other' ? 'hidden' : ''}`}><span className="mr-2">👉🏻</span>{ project.pageAbout }</div>

                                    <div className="pt-8 side-project-desc-list">
                                        {
                                            project.describe.map( (desc, index) => {
                                                return (
                                                    <DotWithText key={`${project.id}_desc_${index}`} sideText={desc} textSize="base"/>
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

export default SideProject