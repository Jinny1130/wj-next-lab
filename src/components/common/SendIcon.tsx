'use-client'

import { svgIconInfo } from "@/types/CommonTypes"

interface iconProps {
    iconInfo: svgIconInfo,
    className?: string,
}

const SendIcon = (props:iconProps) => {
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.iconInfo.iconWidth} height={props.iconInfo.iconHeight} fill={props.iconInfo.iconFill} viewBox={`0 0 ${props.iconInfo.iconWidth} ${props.iconInfo.iconHeight}`}>
            <path d="M4.23352 24.6167C3.53352 23.9167 3.30018 22.8667 3.65018 21.9334L6.68352 14.0001L3.65018 6.18339C3.18352 5.13339 3.53352 4.08339 4.35018 3.26672C5.16685 2.56672 6.21685 2.45005 7.26685 2.91672L24.3002 11.6667C25.1168 12.1334 25.7002 12.9501 25.7002 13.8834C25.7002 14.8167 25.1168 15.7501 24.3002 16.1001L7.15018 25.0834C6.21685 25.5501 5.05018 25.4334 4.23352 24.6167ZM8.78352 15.1667L5.86685 22.7501C5.86685 22.7501 5.86685 22.8667 5.86685 22.9834C5.98352 23.1001 6.10018 22.9834 6.10018 22.9834L21.2668 15.1667H8.78352ZM21.1502 12.8334L5.98352 5.01672C5.98352 5.01672 5.86685 4.90005 5.75018 5.01672C5.63352 5.13339 5.63352 5.25005 5.75018 5.25005L8.78352 12.8334H21.1502Z">
            </path>
        </svg>
    )
}

export default SendIcon;