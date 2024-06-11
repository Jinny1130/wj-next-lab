'use-client'

import AWS from 'aws-sdk';
import "@/styles/send-message.scss";
import { ReactNode, useEffect, useState } from "react";
import NumberButton from "./NumberButton";
import { buttonNumber, numbers } from "@/types/ProjectTypes";
import { Jua } from "next/font/google";
import ArrowIcon from "../common/ArrowIcon";
import SendIcon from '../common/SendIcon';
import Image from 'next/image';

AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION
});

const FontJua = Jua({ weight: '400', subsets: ['latin'] });

interface BoxProps {
    className: string,
}

const NumberButtonBox: React.FC<BoxProps> = (boxProps) => {

    const [ selectedNumbers, setSelectedNumbers ] = useState<numbers>([1, 2, 3, 4, 5, 6, 7, 8]);
    const isFirstSettingNumbers = (selectedNumbers.join('') === '12345678');
    
    useEffect(() => {

        setNumberTextColor(isFirstSettingNumbers);

    }, [selectedNumbers])

    // 전화번호 text color
    function setNumberTextColor(isFirst: boolean) {
        const colorGray = 'text-[color:var(--GY-100,#E5E5E5)]';
        const colorBlack = 'text-[color:var(--GY-900,#2B2B2B)]';
        const colorBlue = 'text-[color:var(--BL-500,#008BFF)]';

        document.querySelectorAll('.send-target-numbers').forEach(el => {
            if (isFirst) {
                el.classList.remove(colorBlack);
                el.classList.add(colorGray);
                document.querySelector('.start-phone-number')?.classList.remove(colorBlue);
            }
            else if (!isFirst && selectedNumbers.length < 8) {
                el.classList.remove(colorGray);
                el.classList.add(colorBlack);
                document.querySelector('.start-phone-number')?.classList.remove(colorBlue);
            }
            else {
                el.classList.remove(colorGray);
                el.classList.remove(colorBlack);
                el.classList.add(colorBlue);
                document.querySelector('.start-phone-number')?.classList.add(colorBlue);
            }
        })
    }

    // 전화번호 입력 버튼 컴포넌트 render
    const NumberButtonsRender = () => {
        const buttonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, -1]
        const result:ReactNode[] = [];

        buttonNumbers.forEach((buttonNum, index) => {
            result.push(
                <div key={index + 1} className={`number-button flex justify-center w-1/3`}>
                    { 
                        (index + 1) === 10 ?
                            <></>
                            : <NumberButton  buttonTargetNumber={buttonNum} 
                                            className={`w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] ${index === (buttonNumbers.length - 1) ? "bg-[url('/images/send-message/number_back_btn.png')] bg-no-repeat bg-center bg-contain" : ''}`} 
                                            clickNumberButton={(number) => clickNumberButton(number)}
                                            deleteLastNumber={() => deleteLastNumber()} />
                    }
                </div>
            );
        })

        return result;
    };

    // NumberButton click
    function clickNumberButton(clickNumber:buttonNumber) {
        if (isFirstSettingNumbers) {
            setSelectedNumbers([clickNumber]);
        }
        else if (!isFirstSettingNumbers && selectedNumbers.length < 8) {
            setSelectedNumbers([...selectedNumbers, clickNumber]);
        }
    };

    // NumberButton delete click
    function deleteLastNumber() {
        const newNumbers = [...selectedNumbers]

        if (!isFirstSettingNumbers && selectedNumbers.length > 0) {
            newNumbers.pop();
            setSelectedNumbers(newNumbers.length === 0 ? [1, 2, 3, 4, 5, 6, 7, 8] : newNumbers);
        }
    }

    const [ showNumberBoard, setShowNumberBoard ] = useState<boolean>(false);
    const [ showSendButton, setShowSendButton ] = useState<boolean>(false);

    useEffect(() => {

        setMobileTopAreaTheme(showNumberBoard);
        if (!showNumberBoard) { setFirstNumber(); }

    }, [showNumberBoard])

    const whiteSvgIconInfo = {
        iconWidth: 24,
        iconHeight: 24,
        iconFill: '#FFF'
    }
    
    // mobile - top 영역 dimed 과 동일한 스타일컬러 지정 (eg. safari 로 진행시 iphone top area)
    function setMobileTopAreaTheme(showTopDimed:boolean) {
        if (showTopDimed) {
            const metaTag = document.createElement('meta');

            metaTag.setAttribute('name', 'theme-color');
            metaTag.setAttribute('content', '#145dbe');
            metaTag.id = 'safari-top-area';

            document.head.appendChild(metaTag);
        }
        else {
            const themeMetaTag = document.querySelector('#safari-top-area') 

            if (themeMetaTag !== null && document.head.contains(themeMetaTag)) {
                document.head.removeChild(themeMetaTag);
            }
        }
    }

    useEffect(() => {
        
        if (!isFirstSettingNumbers && selectedNumbers.length === 8) {
            return setShowSendButton(true);
        }
        return setShowSendButton(false);

    }, [selectedNumbers])

    function sendMessage() {
        // Create publish parameters
        const params = {
            Message: "안녕하세요. \n프론트엔드 개발자 최우진입니다 😀",
            PhoneNumber: `+82010${selectedNumbers.join('')}`,
        }
    
        const publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
        .publish(params)
        .promise()
    
        publishTextPromise
        .then(function (data:unknown) {
            alert("문자 발송 성공🎉")
            setFirstNumber();
        })
        .catch(function (err:Error) {
            alert('문자 발송 실패😢')
            console.error(err, err.stack)
        })
    }

    function setFirstNumber() {
        setSelectedNumbers([1, 2, 3, 4, 5, 6, 7, 8])
    }

    return (
        <div className={`relative size-full p-6 sm:p-0 sm:flex sm:flex-col sm:justify-between ${showNumberBoard ? 'before:block before:fixed before:size-full before:inset-x-0 before:inset-y-0 before:bg-black before:opacity-25' : ''}`}>

            <div className='w-full h-1/2 flex items-center justify-center'>
                <Image className='message-image w-1/2 max-w-[300px]' src={'/images/send-message/message_img.png'} alt={'메시지 이미지'} width={200} height={200} />
            </div>

            <div className={`w-full h-1/2 absolute sm:relative bottom-0 left-0 z-10 sm:flex sm:items-end`}>
                <button className="show-hide-button w-full flex sm:hidden item-center justify-center px-[10px] pt-[8px] pb-[18px] text-base font-bold text-white" onClick={ () => setShowNumberBoard(!showNumberBoard) }>
                    { <ArrowIcon iconInfo={ whiteSvgIconInfo } className={ `${showNumberBoard ? 'rotate-180' : 'rotate-0'} mr-1` } /> }{`${showNumberBoard ? 'CLOSE' : 'OPEN'} THE NUMBER PAD`}
                </button>

                <div className={` w-full ${showNumberBoard ? 'h-[600px]' : 'h-[40px]'} sm:h-fit transition-all sm:transition-none ease-in delay-50 sm:delay-0 [background:var(--wt-100,#FFF)] shadow-[0_-8px_30px_rgba(0,0,0,0.25)] sm:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.10),0px_36px_72px_0px_rgba(0,0,0,0.10)] rounded-t-[48px] sm:rounded-[48px] overflow-hidden ${boxProps.className} ${showNumberBoard && showSendButton ? '' : ''}`}>
                    
                    <div className={` sm:flex items-center justify-between px-10 py-12 ${showSendButton ? 'bg-[#1a7cfd1a] pt-8 pb-6 sm:py-12' : '[background:var(--GY-20,#FAFAFA)]'} `}>
                        <div className={`flex flex-col items-start gap-2`}>
                            <p className={`text-[color:var(--GY-900,#2B2B2B)] text-xl font-bold leading-6 mb-2 ${FontJua.className}`}>전화번호를 입력해 주세요.</p>
                            <div className={`flex items-center text-[40px] font-bold leading-[normal] ${FontJua.className}`}>
                                <p className="start-phone-number mr-[10px]" style={{ fontSize: '40px' }}>010</p>
                                {
                                    selectedNumbers.map((number, index) =>
                                        <p id={`number_${index + 1}`} key={index} className={`send-target-numbers ${index === 3 ? 'mr-[10px]' : ''} text-[color:var(--GY-100,#E5E5E5)]`}>{number}</p>
                                    )
                                }
                            </div>
                        </div>
                        
                        { 
                            showSendButton && 
                            <button className="flex items-center justify-center w-full sm:max-w-[300px] sm:h-[70px] text-[15px] sm:text-[20px] bg-[#008bff] font-bold text-[#fff] rounded-md sm:rounded-2xl hover:bg-[#0088f1] active:bg-[#0085ed] px-[16px] py-[10px] sm:px-[48px] sm:py-[16px] mt-2 sm:mt-0" onClick={sendMessage}>
                                발송하기 <SendIcon iconInfo={ whiteSvgIconInfo } className={`ml-2 size-[20px] sm:size-[24px]`} />
                            </button>
                        }
                    </div>

                    <div className="flex items-center flex-col sm:items-start sm:flex-row sm:min-h-[400px]">
                        <div className="w-full sm:w-1/2 min-w-[400px] sm:min-w-[50%] px-[48px] pt-8 sm:pt-[56px] pb-4 sm:pb-[48px]">
                            <h3 className="text-[color:var(--GY-700,#555)] text-[15px] sm:text-xl font-medium leading-7 mb-2 sm:mb-4">입력하신 전화번호로 <br className="hidden sm:block" />체험 메시지가 발송됩니다.</h3>
                            <p className=" text-[color:var(--GY-500,#808080)] text-xs font-normal leading-[18px]">입력된 휴대전화번호는 메시지 발송 이외에 <br className="hidden sm:block" />다른 목적으로 사용하거나 수집하지 않습니다.</p>
                        </div>
                        <div className={`buttons-wrap w-full sm:w-1/2 min-w-[400px] sm:min-w-[50%] px-[30px] sm:px-[70px] py-5 sm:pt-[40px] sm:pb-[72px] flex flex-wrap justify-between text-xl ${FontJua.className}`}>
                            { NumberButtonsRender() }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NumberButtonBox;