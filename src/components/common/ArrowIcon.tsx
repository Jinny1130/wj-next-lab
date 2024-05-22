'use-client'

import { svgIconInfo } from "@/types/CommonTypes"

interface iconProps {
    iconInfo: svgIconInfo,
    className: string,
}

const ArrowIcon = (props:iconProps) => {
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.iconInfo.iconWidth} height={props.iconInfo.iconHeight} fill={props.iconInfo.iconFill} viewBox={`0 0 ${props.iconInfo.iconWidth} ${props.iconInfo.iconHeight}`}>
            <g>
                <path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"/>
                <polygon points="7.293 13.293 8.707 14.707 12 11.414 15.293 14.707 16.707 13.293 12 8.586 7.293 13.293"/>
            </g>
        </svg>
    )
}

export default ArrowIcon;