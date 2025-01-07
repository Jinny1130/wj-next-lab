import styled from 'styled-components';
import Title from "@/components/resume/Title"
import StickyTitle from "@/components/resume/StickyTitle"
import { otherExperienceList, otherPageAbout } from "@/constants/resume/otherExperience";
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
            <Title title="Other Experience" size="L"/>

            {
                otherExperienceList.map((experience) => {
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
                                            otherPageAbout[experience.id].pageAbout &&
                                            <div className="flex flex-start whitespace-pre-line py-3 text-sm sm:text-base text-[#222]">
                                                <span dangerouslySetInnerHTML={{ __html: otherPageAbout[experience.id].pageAbout }}></span>
                                            </div>
                                        }
                                        
                                        <DetailWorkExperience workCategory={'other'} workId={ experience.id } />
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