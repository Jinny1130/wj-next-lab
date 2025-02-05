import Image from 'next/image';
import Title from '@/container/resume/components/Title';

const contact = {
  Email: {
    title: 'jinnyc1130@gmail.com',
    link: 'jinnyc1130@gmail.com',
  },
  Github: {
    title: 'https://github.com/jinny1130',
    link: 'https://github.com/jinny1130',
  },
  Notion: {
    title: '👩🏻‍💻 w.o_o.jinny 의 소소한 기록',
    link: 'https://www.notion.so/w-o_o-jinny-160fc3f57ced80dbaa65d9403d01c39e?pvs=4',
  },
};

export default function ContactAndSkill() {
  return (
    <div className="contact-wrap w-full flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="myself-image w-full mb-10 rounded-md sm:rounded-full sm:w-1/3 sm:mb-0 md:mr-20 sm:mr-10">
        <Image
          src="/images/woojin_czech.jpg"
          alt="우진사진"
          width={200}
          height={200}
        />
      </div>

      <div className="w-full sm:w-2/3">
        <Title title="Contact & Channel" size="M" />
        <div className="px-1 py-2">
          {Object.entries(contact).map(([key, value]) => {
            return (
              <div className="flex items-center py-1" key={key}>
                <p className="w-1/4 text-sm flex font-semibold text-gray-800 items-baseline">
                  <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1" />
                  {key}
                </p>
                <a
                  className="w-3/4 text-sm text-gray-400 underline hover:text-sky-400"
                  href={`${key === 'Email' ? 'mailto:' : ''}${value.link}`}
                  target={key !== 'Email' ? '_blank' : ''}
                >
                  {value.title}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
