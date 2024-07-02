import Title from "./Title"
import DotWithText from "./DotWithText"
import NewTabIcon from "../common/NewTabIcon"
import Link  from 'next/link'

const sideProjectList = [
    {
        id: "readingOcean",
        title: "독서미션 캐릭터 성장 게임",
        period: "2022.12",
        pageAbout: "리딩오션 내부의 유아의 독서 증진을 위한 동기부여 프로그램으로 <b>육성 시뮬레이션 게임</b>에 기반한 페이지입니다. 독서에 대한 흥미를 높여 유아의 지속적인 독서를 위한 <b>에듀케이션 프로그램</b>입니다.",
        pageUrl: "https://blog.naver.com/readingocean0228/223019069637",
        describe: [
            "협업 개발자와 함께 <b>코드 컨벤션</b>을 정하고 준수하며 개발을 진행하였습니다.",
            "독서 미션 수행, 포인트 획득, 꾸미기 아이템 구매 및 사용 등의 화면들을 제작하였으며, <b>컴포넌트 단위로 분류</b>하여 개발하였습니다.",
            "고객사의 <b>개발표준 및 개발환경을 준수</b>하고, 요청 기한에 맞춰 프로젝트 개발을 완성했습니다.",
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
                                        {
                                            project.pageUrl && <Link href={project.pageUrl} target="_blank" className='hover:underline underline-offset-1 flex items-center text-sky-500'>
                                                <Title title={project.title} size="S" />
                                                <NewTabIcon iconInfo={{iconWidth:20, iconHeight:20, iconFill:'#0ea5e9'}} className="ml-[3px] sm:ml-[5px]"/>
                                            </Link>
                                        }
                                        { !project.pageUrl && <Title title={project.title} size="S" /> }
                                        <p className="text-xs sm:text-sm text-gray-600">{ project.period }</p>
                                    </div>
                                    
                                    <div className={`flex text-xs sm:text-[14px] leading-6 text-gray-600}`}>
                                        <span className="mr-2">👉🏻</span>
                                        <span>
                                            {project.pageAbout && <span dangerouslySetInnerHTML={{ __html: project.pageAbout }}></span>}
                                            {project.id === 'readingOcean' && <span className="block mt-1 text-[11px] text-gray-500">* 연결링크는 리딩오션 프로그램 소개 블로그 페이지 입니다.</span>}
                                        </span>
                                    </div>

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