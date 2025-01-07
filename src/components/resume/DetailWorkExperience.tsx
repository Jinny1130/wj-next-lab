'use-client'

import styled from 'styled-components';
import { detailWorkExperiences } from '@/constants/resume/workExperience';
import DetailExperienceTitle from '@/components/resume/DetailExperienceTitle';
import DotWithText from '@/components/resume/DotWithText';

interface OwnProps {
    workId: string,
}

const DetailWorkExperienceWrap = styled.div`
    .detail_exp_title .blue_title {
        font-size: 18px;
    }
`

const DetailWorkExperience:React.FC<OwnProps> = ({ workId }) => {
    return (
        <DetailWorkExperienceWrap>
            {
                detailWorkExperiences[workId].map((work, index) => (
                    <div className="py-8">
                        <DetailExperienceTitle detailTitle={work.title} detailPeriod={work.period} />
                        {
                            work.describe?.map((workDesc, index) => (
                                <DotWithText key={`${workId}_desc_${index}`} sideText={workDesc} textSize="base"/>
                            ))
                        }
                    </div>
                ))
            }
        </DetailWorkExperienceWrap>
    )
}

export default DetailWorkExperience