'use-client'

import Title from "@/components/resume/Title"
import StickyTitle from "@/components/resume/StickyTitle"
import { workExperienceList } from "@/constants/resume/workExperienceList";
import DetailExperienceTitle from "./DetailExperienceTitle";


const WorkExperience = () => {
    return (
        <div>
            <Title title="Work Experience" size="L"/>

            {
                Object.entries(workExperienceList).map(([key, experience]) => {
                    return (
                        <div key={key} className="px-1 py-3.5 flex flex-col sm:flex-row">
                            <StickyTitle stickyTitleInfo={experience.mainTitle} />
                            <div className="w-full sm:w-[75%]">
                                {
                                    experience.detailWorkExperiences?.map((detailWork, index) => (
                                        <div key={ detailWork.id || index }>
                                            <DetailExperienceTitle detailTitle={ detailWork.title } deatilPeriod={ detailWork.period } />
                                            <div>{ detailWork.describe }</div>
                                        </div>
                                    ))
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