'use-client'

import { ButtonNumber } from "@/types/SendMessageTypes";

interface ButtonProps {
    buttonTargetNumber: ButtonNumber,
    className: string,
    clickNumberButton: (targetNumber:ButtonNumber) => void,
    deleteLastNumber: () => void,
}

export default function NumberButton (props: ButtonProps) {

    function clickNumber(targetNumber:ButtonNumber) {
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