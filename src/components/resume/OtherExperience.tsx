import Title from '@/components/resume/Title';
import StickyTitle from '@/components/resume/StickyTitle';
import {
  otherExperienceList,
  otherPageAbout,
} from '@/constants/resume/otherExperience';
import Career from '@/components/resume/Career';
import DetailWorkExperience from '@/components/resume/DetailWorkExperience';

const WorkExperience = () => {
  return (
    <div id="other_experience">
      <Title title="Other Experience" size="L" />

      {otherExperienceList.map((experience) => {
        return (
          <div
            key={experience.id}
            className="relative px-1 pt-[80px] sm:pt-[0] my-5 flex flex-col sm:flex-row"
          >
            <StickyTitle stickyTitleInfo={experience} />

            <div className="w-full sm:w-[76%]">
              {experience.id === 'paymint' ? (
                <Career />
              ) : (
                <div>
                  {otherPageAbout[experience.id].pageAbout && (
                    <div className="flex flex-start whitespace-pre-line py-3 text-sm sm:text-base text-[#222]">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: otherPageAbout[experience.id].pageAbout,
                        }}
                      ></span>
                    </div>
                  )}

                  <DetailWorkExperience
                    workCategory={'other'}
                    workId={experience.id}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
