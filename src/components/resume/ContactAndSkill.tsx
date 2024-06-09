import Image from "next/image"
import Title from './Title';

const contact = {
    Email: 'jinnyc1130@gmail.com',
    Github: 'https://github.com/jinny1130',
}

const haveSkills = [
    { title: 'Strong', skillsName: [ 'Vue', 'Vuex', 'Javascript', 'Html', 'CSS', 'SCSS' ] },
    { title: 'Knowledge', skillsName: [ 'React', 'Next.js', 'Typescript', 'Vercel', 'Webpack', 'node.js ' ] },
    { title : 'Used Tool', skillsName: [ 'Git', 'Github', 'GitLab', 'VSCode', 'WebStorm', 'Figma', 'Slack' ] },
]

const ContactAndSkill = () => {
    return (
        <div className="contact-wrap w-full flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="myself-image w-full mb-10 rounded-md sm:rounded-full sm:w-1/3 sm:mb-0 md:mr-20 sm:mr-10">
                <Image src="/images/woojin_czech.jpg" alt="우진사진" width={220} height={220} />
            </div>

            <div className="w-full sm:w-2/3">
                
                <Title title="Contact & Channel" size="M" />
                <div className="px-1 py-2">
                    {
                        Object.entries(contact).map(([key, value]) => {
                            return (
                                <div className="flex items-center" key={key}>
                                    <p className="w-1/4 text-sm flex font-semibold text-gray-800 items-baseline">
                                        <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>{key}
                                    </p>
                                    <a className="w-3/4 text-sm text-gray-400 underline hover:text-sky-400" href={`${key === 'Email' ? 'mailto:' : ''}${value}`} target={key === 'Github' ? '_blank' : ''}>
                                        {value}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="sm:flex sm:flext-start pt-5">
                    <Title title="Skills" size="M"/>
                    <div className="mt-3 sm:ml-8 sm:mt-0">
                        {
                            haveSkills.map((skill, index) => {
                                return (
                                    <div className="w-full pb-2" key={index}>
                                        <Title title={skill.title} size="S" />
                                        <div className="flex flex-wrap w-full text-sm px-1 py-2">
                                        { skill.skillsName.map((name, idx) => {
                                            return (
                                                <p className="flex items-baseline mr-3 mb-2" key={idx}>
                                                    <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>{name}
                                                </p>
                                            )
                                        }) }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactAndSkill