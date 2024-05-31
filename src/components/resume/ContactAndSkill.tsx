import Image from "next/image"
import Title from './Title';

const ContactAndSkill = () => {
    return (
        <div className="contact-wrap w-full flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="myself-image w-full mb-10 rounded-md sm:rounded-full sm:w-1/3 sm:mb-0 md:mr-20 sm:mr-10">
                <Image src="/images/woojin_czech.jpg" alt="우진사진" width={220} height={220} />
            </div>

            <div className="w-full sm:w-2/3">
                
                <Title title="Contact & Channel" size="S" />
                <div className="px-1 py-2">
                    <div className="flex items-center">
                        <p className="w-1/4 text-sm flex font-semibold text-gray-800 items-baseline">
                            <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Phone
                        </p>
                        <a className="w-3/4 text-sm text-gray-400 underline hover:text-sky-400" href="sms:050-6602-1642">050-6602-1642</a>
                    </div>
                    <div className="flex items-center">
                        <p className="w-1/4 text-sm flex font-semibold text-gray-800 items-baseline">
                            <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Email
                        </p>
                        <a className="w-3/4 text-sm text-gray-400 underline hover:text-sky-400" href="mailto:cwjin94@gmail.com">jinnyc1130@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                        <p className="w-1/4 text-sm flex font-semibold text-gray-800 items-baseline">
                            <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Github
                        </p>
                        <a className="w-3/4 text-sm text-gray-400 underline hover:text-sky-400" href="https://github.com/jinny1130" target="_blank">https://github.com/jinny1130</a>
                    </div>
                </div>

                <div className="flex items-start pt-4">
                    <div className="w-1/2">
                        <Title title="Tech Stack" size="S" />
                        <div className="w-full text-sm px-1 py-2">
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Vue, Vuex
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Javascript
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Html, CSS, SCSS
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>React, Next.js
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Typescript
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <Title title="Used Tool" size="S" />
                        <div className="w-full text-sm px-1 py-2">
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Git, Github, GitLab
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>VSCode, WebStorm
                            </p>
                            <p className="flex items-baseline">
                                <i className="block w-1 h-1 rounded-full bg-sky-400 mr-1"/>Figma, Slack, Monday
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactAndSkill