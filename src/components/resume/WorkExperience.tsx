'use-client'

import styled from 'styled-components';
import Title from "@/components/resume/Title"
import StickyTitle from "@/components/resume/StickyTitle"
import { workExperienceList, workPageAbout } from "@/constants/resume/workExperience";
import Career from "@/components/resume/Career";
import DetailWorkExperience from "@/components/resume/DetailWorkExperience";

const StickyTitleWrap = styled.div`
    position: relative;
    width: 24%;
    
    &::before {
        content: '';
        display: block;
        width: 1.5px;
        height: -webkit-fill-available;
        background: linear-gradient(transparent, #00acff, transparent);
        opacity: .25;
        position: absolute;
        right: 18px;
        top: 0;
        z-index: 2;
    }

    @media (max-width: 639px) {
        width: 100%;
        &::before {
            display: none;
        }
    }
`

const WorkExperience = () => {
    return (
        <div>
            <Title title="Work Experience" size="L"/>

            {
                workExperienceList.map((experience) => {
                    return (
                        <div key={experience.id} className="px-1 my-5 flex flex-col sm:flex-row">
                            <StickyTitleWrap>
                                <StickyTitle stickyTitleInfo={experience} />
                            </StickyTitleWrap>

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