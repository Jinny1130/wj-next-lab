'use-client'

import { buttonNumber } from "@/types/SendMessageNumber";

interface buttonProps {
    buttonTargetNumber: buttonNumber,
    className: string,
    clickNumberButton: (targetNumber:buttonNumber) => void,
    deleteLastNumber: () => void,
}

export default function NumberButton (props: buttonProps) {

    function clickNumber(targetNumber:buttonNumber) {
        if (targetNumber && targetNumber >= 0) {
            props.clickNumberButton(targetNumber);
        }
        else {
            props.deleteLastNumber();
        }
    }

    return (
        <button className={`${props.className} hover:text-red-500 hover:rounded hover:bg-gray-100 hover:rounded-full`} onClick={ props.buttonTargetNumber !== null ? () => clickNumber(props.buttonTargetNumber) : undefined }>
            {props.buttonTargetNumber && props.buttonTargetNumber >= 0 ? props.buttonTargetNumber : ''}
        </button>
    );
}