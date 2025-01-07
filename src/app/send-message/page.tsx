'use client'

import NumberButtonBox from '@/components/send-message/NumberButtonBox'
import Footer from '@/components/common/Footer';

export default function SendMessageMain() {
    return (
        <>
            <title>최우진 | Send SNS ✉️</title>

            <div className="fixed inset-x-0 inset-y-0 size-full [background:var(--BL-600,#1A7CFD)]">
                <div className="size-full sm:p-[72px] flex flex-col justify-end items-center self-stretch">
                    <NumberButtonBox className=""></NumberButtonBox>
                    <Footer footerFor={'sendMessage'} />
                </div>
            </div>
        </>
    );
}