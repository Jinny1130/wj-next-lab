'use-client'

import { buttonNumber } from "@/types/ProjectTypes";

interface buttonProps {
    buttonTargetNumber: buttonNumber,
    className: string,
    clickNumberButton: (targetNumber:buttonNumber) => void,
    deleteLastNumber: () => void,
}

export default function NumberButton (props: buttonProps) {

    function clickNumber(targetNumber:buttonNumber) {
        if (targetNumber !== null && targetNumber >= 0) {
            props.clickNumberButton(targetNumber);
        }
        else {
            props.deleteLastNumber();
        }
    }

    return (
        <button className={`${props.className} active:text-red-500 active:rounded active:bg-gray-100 active:rounded-full`} onClick={ props.buttonTargetNumber !== null ? () => clickNumber(props.buttonTargetNumber) : undefined }>
            {props.buttonTargetNumber !== null && props.buttonTargetNumber >= 0 ? props.buttonTargetNumber : ''}
        </button>
    );
}