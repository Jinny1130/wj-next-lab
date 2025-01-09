import Link  from 'next/link'
import { StickyTitleInfo } from "@/types/ResumeTypes"
import NewTabIcon from "@/components/common/NewTabIcon"

interface OwnProps {
    stickyTitleInfo: StickyTitleInfo,
}

const StickyTitle:React.FC<OwnProps> = ({ stickyTitleInfo }) => {
    return (
        <div className='sticky_title_wrap absolute top-0 left-0 h-full z-[9]'>
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
                    <div className="sticky_title_explanation flex items-start text-[10px] font-normal text-[#888]">
                        <i className='mark'/>
                        <p className="mr-[3px] sm:mr-0 sm:block">
                            { stickyTitleInfo.addExplanation }
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

export default StickyTitle