'use-client';

import styled from 'styled-components';
import { detailWorkExperiences } from '@/constants/resume/workExperience';
import { detailOtherExperiences } from '@/constants/resume/otherExperience';
import DetailExperienceTitle from '@/container/resume/components/DetailExperienceTitle';
import DotWithText from '@/container/resume/components/DotWithText';

interface OwnProps {
  workId: string;
  workCategory?: string;
}

const DetailWorkExperienceWrap = styled.div`
  letter-spacing: -0.2px;

  .detail_exp_title .blue_title {
    font-size: 18px;
  }
  .project_summary {
    &::before {
      content: '';
      display: block;
      width: 3px;
      height: calc(100% - 22px);
      background-color: #e0e0e0;
      position: absolute;
      top: 8px;
      left: 0;
    }
  }
`;

const DetailWorkExperience: React.FC<OwnProps> = ({ workId, workCategory }) => {
  const experiences = workCategory
    ? detailOtherExperiences
    : detailWorkExperiences;

  const detailWorkExperienceClassName = (index: number, workId: string) => {
    if (index === 0) {
      if (workId === 'other') {
        return 'pt-4 pb-6';
      } else {
        return 'pt-8 pb-6';
      }
    }
    return 'py-6';
  };

  return (
    <DetailWorkExperienceWrap>
      {experiences[workId].map((work, index) => (
        <div
          className={detailWorkExperienceClassName(index, workId)}
          key={index}
        >
          <DetailExperienceTitle
            detailTitle={work.title}
            detailPeriod={work.period}
          />

          {work.projectSummary && (
            <div
              className="project_summary relative w-full pt-[5px] pb-[10px] pl-[10px] text-[14px] sm:text-[16px]"
              dangerouslySetInnerHTML={{ __html: work.projectSummary }}
            ></div>
          )}

          <div className="dot_describe_wrap">
            {work.describe?.map((workDesc, index) => (
              <DotWithText
                key={`${workId}_desc_${index}`}
                sideText={workDesc}
                textSize="base"
              />
            ))}
          </div>
        </div>
      ))}
    </DetailWorkExperienceWrap>
  );
};

export default DetailWorkExperience;
