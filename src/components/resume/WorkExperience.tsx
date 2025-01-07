import Title from "@/components/resume/Title"
import StickyTitle from "@/components/resume/StickyTitle"
import { workExperienceList, workPageAbout } from "@/constants/resume/workExperience";
import Career from "@/components/resume/Career";
import DetailWorkExperience from "@/components/resume/DetailWorkExperience";

const WorkExperience = () => {
    return (
        <div>
            <Title title="Work Experience" size="L"/>

            {
                workExperienceList.map((experience) => {
                    return (
                        <div key={experience.id} className="px-1 my-5 flex flex-col sm:flex-row">
                            <StickyTitle stickyTitleInfo={experience} />

                            <div className="w-full sm:w-[76%]">
                                {
                                    experience.id === 'paymint' ?
                                    <Career />
                                    :
                                    <div>
                                        {
                                            workPageAbout[experience.id].pageAbout &&
                                            <div className="flex flex-start whitespace-pre-line py-3 text-sm sm:text-base text-[#222]">
                                                <span dangerouslySetInnerHTML={{ __html: workPageAbout[experience.id].pageAbout }}></span>
                                            </div>
                                        }
                                        
                                        <DetailWorkExperience workId={ experience.id } />
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WorkExperience