'use client'

import Link  from 'next/link'
import styled from 'styled-components';
import { StickyTitleInfo } from "@/types/ResumeTypes"
import NewTabIcon from "@/components/common/NewTabIcon"

interface OwnProps {
    stickyTitleInfo: StickyTitleInfo,
}

const Mark = styled.i`
    &::before {
        content: '※';
        font-style: normal;
    }
    display: block;
    width: 10px;
    height: 10px;
    margin-right: 2px;
`

const StickyTitle:React.FC<OwnProps> = ({ stickyTitleInfo }) => {
    return (
        <div className='w-full h-fit font-semibold text-sky-500 text-[23px] bg-white py-4 sticky top-14 sm:top-16 sm:w-[25%] mr-[20px]'>
            {
                stickyTitleInfo.link ?
                <Link href={ stickyTitleInfo.link || '' } target="_blank" className="flex items-center hover:underline">
                    { stickyTitleInfo.title }
                    <NewTabIcon iconInfo={{iconWidth:24, iconHeight:24, iconFill:'#0ea5e9'}} className="ml-[8px]"/>
                </Link>
                :
                <div className="">
                    { stickyTitleInfo.title }
                </div>
            }
            {
                 stickyTitleInfo.addExplanation &&
                <div className="flex items-start text-[10px] font-normal text-[#888]">
                    <Mark />
                    <div>
                        {
                            stickyTitleInfo.addExplanation.map((explanation, index) => {
                                return (
                                    <span className="mr-[3px] sm:mr-0 sm:block">{ explanation }</span>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default StickyTitle