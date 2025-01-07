'use-client'

import Title from "@/components/resume/Title"
import StickyTitle from "@/components/resume/StickyTitle"
import { workExperienceList, workPageAbout } from "@/constants/resume/workExperience";
import Career from "./Career";
import DetailWorkExperience from "@/components/resume/DetailWorkExperience";


const WorkExperience = () => {
    return (
        <div>
            <Title title="Work Experience" size="L"/>

            {
                workExperienceList.map((experience) => {
                    return (
                        <div key={experience.id} className="px-1 py-5 flex flex-col sm:flex-row">
                            <StickyTitle stickyTitleInfo={experience} />
                            <div className="w-full sm:w-[76%]">
                                {
                                    experience.id === 'paymint' ?
                                    <Career />
                                    :
                                    <div>
                                        <div className="whitespace-pre-line py-3 text-sm sm:text-base">
                                            <span dangerouslySetInnerHTML={{ __html: workPageAbout[experience.id].pageAbout }}></span>
                                        </div>
                                        
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