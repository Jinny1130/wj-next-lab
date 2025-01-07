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
    & + p {
        max-width: calc(100% - 36px);
        word-break: keep-all;
    }
`

const StickyTitle:React.FC<OwnProps> = ({ stickyTitleInfo }) => {
    return (
        <div className={`sticky_title w-full h-fit font-semibold text-sky-500 bg-white py-4 sticky top-14 sm:top-16 ${stickyTitleInfo.id === 'paymint' ? ' text-[22px]' : 'text-[20px]'}`}>
            {
                stickyTitleInfo.link ?
                <Link href={ stickyTitleInfo.link || '' } target="_blank" className="flex items-center hover:underline">
                    { stickyTitleInfo.title }
                    <NewTabIcon iconInfo={{iconWidth:22, iconHeight:22, iconFill:'#0ea5e9'}} className="ml-[5px]"/>
                </Link>
                :
                <div>
                    { stickyTitleInfo.title }
                </div>
            }
            {
                 stickyTitleInfo.addExplanation &&
                <div className="flex items-start text-[10px] font-normal text-[#888]">
                    <Mark />
                    <p className="mr-[3px] sm:mr-0 sm:block">
                        { stickyTitleInfo.addExplanation }
                    </p>
                </div>
            }
        </div>
    )
}

export default StickyTitle