'use client'

import styled from 'styled-components';
import NumberButtonBox from '@/components/send-message/NumberButtonBox'
import Footer from '@/components/common/Footer';

const FooterWrap = styled.div`
    > div{
        width: 100%;
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 15;
        padding: 10px;
        font-size: 11px;
    }
    @media (max-width: 639px) {
        > div{
            z-index: 1;
            bottom: 130px;
            font-size: 10px;
            color: rgba(255, 255, 255, .7);
        }
    }
`

export default function SendMessageMain() {
    return (
        <>
            <title>최우진 | Send SMS ✉️</title>

            <div className="fixed inset-x-0 inset-y-0 size-full [background:var(--BL-600,#1A7CFD)]">
                <div className="size-full sm:p-[72px] flex flex-col justify-end items-center self-stretch">
                    <NumberButtonBox className=""></NumberButtonBox>
                    <FooterWrap>
                        <Footer />
                    </FooterWrap>
                </div>
            </div>
        </>
    );
}