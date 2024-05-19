'use client'

import NumberButtonBox from '@/components/send-message/NumberButtonBox'

export default function SendMessageMain() {
    return (
        <>
            <title>메시지 발송 Demo | WOOJINNY</title>

            <div className="fixed inset-x-0 inset-y-0 size-full [background:var(--BL-600,#1A7CFD)]">
                <div className="size-full p-[72px] flex flex-col justify-end items-center self-stretch">
                    <NumberButtonBox className=""></NumberButtonBox>
                </div>
            </div>
        </>
    );
}