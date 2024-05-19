'use-client'

import { useEffect, useState } from "react";
import NumberButton from "../common/NumberButton";

interface BoxProps {
    className: string,
}

const NumberButtonBox:React.FC<BoxProps> = (boxProps) => {

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
    const firstSettingNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

    useEffect(() => {
        if (selectedNumbers.length === 0) {
            setSelectedNumbers(firstSettingNumbers)
            setNumberTextColor(true);
        }
        else {
            setNumberTextColor(false);
        }

    }, [selectedNumbers])

    function setNumberTextColor(isFirst:boolean) {
        console.log(isFirst)
        console.log(selectedNumbers === firstSettingNumbers)
        const colorGray = 'text-[color:var(--GY-100,#E5E5E5)]';
        const colorBlue = 'text-[color:var(--BL-500,#008BFF)]';
        // console.log(document.querySelectorAll('.send-target-numbers p'))
    }

    return (
        <div className={`w-full [background:var(--wt-100,#FFF)] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10),0px_36px_72px_0px_rgba(0,0,0,0.10)] rounded-[48px] overflow-hidden ${boxProps.className}`}>
            <div className="[background:var(--GY-20,#FAFAFA)] flex flex-col items-start gap-2 flex-[1_0_0] p-12">
                <p className="text-[color:var(--GY-900,#2B2B2B)] [font-family:'Spoqa_Han_Sans_Neo'] text-xl font-bold leading-6 mb-2">전화번호를 입력해 주세요.</p>
                <div className="send-target-numbers flex items-center text-[color:var(--GY-900,#2B2B2B)] [font-family:'Spoqa_Han_Sans_Neo'] text-[40px] font-bold leading-[normal]">
                    <p className="start-phone-number mr-[10px]" style={{ fontSize: '40px' }}>010</p>
                    {
                        selectedNumbers.map((number, index) => 
                            <p id={`number_${index + 1}`} key={index} className={`${index === 3 ? 'mr-[10px]' : ''}`}>{number}</p>
                        )
                    }
                </div>
            </div>
            <div>
                <div className="px-[48px] py-[58px]">
                    <h3 className="text-[color:var(--GY-700,#555)] [font-family:'Spoqa_Han_Sans_Neo'] text-xl font-medium leading-7 mb-4">입력하신 전화번호로<br/>체험 메시지가 발송됩니다.</h3>
                    <p className=" text-[color:var(--GY-500,#808080)] [font-family:'Spoqa_Han_Sans_Neo'] text-xs font-normal leading-4">입력된 휴대전화번호는 메시지 발송 이외에<br/>다른 목적으로 사용하거나 수집하지 않습니다.</p>
                </div>
                <NumberButton />
            </div>
        </div>
    )
}

export default NumberButtonBox;