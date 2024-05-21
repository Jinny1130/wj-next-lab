'use-client'

interface buttonProps {
    buttonTargetNumber: (number | null),
    className: string
}

export default function NumberButton (props: buttonProps) {
    return (
        <button className={`${props.className} hover:text-red-500 hover:rounded hover:bg-gray-100`}>
            {props.buttonTargetNumber}
        </button>
    );
}