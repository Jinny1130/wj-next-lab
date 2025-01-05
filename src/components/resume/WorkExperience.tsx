'use-client'

import Title from "@/components/resume/Title"
import StickyTitle from "@/components/resume/StickyTitle"
import { workExperienceList, detailWorkExperiences, workPageAbout } from "@/constants/resume/workExperience";
import DetailExperienceTitle from "./DetailExperienceTitle";
import Career from "./Career";


const WorkExperience = () => {
    return (
        <div>
            <Title title="Work Experience" size="L"/>

            {
                workExperienceList.map((experience) => {
                    return (
                        <div key={experience.id} className="px-1 py-5 flex flex-col sm:flex-row">
                            <StickyTitle stickyTitleInfo={experience} />
                            <div className="w-full sm:w-[78%]">
                                {
                                    experience.id === 'paymint' ?
                                    <Career />
                                    :
                                    <div>
                                        <div className="whitespace-pre-line py-4 text-sm sm:text-base">
                                            <span dangerouslySetInnerHTML={{ __html: workPageAbout[experience.id].pageAbout }}></span>
                                        </div>
                                        
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