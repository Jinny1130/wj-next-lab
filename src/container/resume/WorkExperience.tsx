import {
  workExperienceList,
  workPageAbout,
} from '@/constants/resume/workExperience';
import Title from '@/container/resume/components/Title';
import StickyTitle from '@/container/resume/components/StickyTitle';
import Career from '@/container/resume/Career';
import DetailWorkExperience from '@/container/resume/DetailWorkExperience';

export default function WorkExperience() {
  return (
    <div id="work_experience">
      <Title title="Work Experience" size="L" />

      {workExperienceList.map((experience) => {
        return (
          <div
            key={experience.id}
            className="relative px-1 pt-[80px] sm:pt-[0] my-[40px] flex flex-col sm:flex-row"
          >
            <StickyTitle stickyTitleInfo={experience} />

            <div className="w-full sm:w-[76%]">
              {experience.id === 'paymint' ? (
                <Career />
              ) : (
                <div>
                  {workPageAbout[experience.id].pageAbout && (
                    <div className="flex flex-start whitespace-pre-line py-3 text-sm sm:text-base text-[#222]">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: workPageAbout[experience.id].pageAbout,
                        }}
                      ></span>
                    </div>
                  )}

                  <DetailWorkExperience workId={experience.id} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
