import { WorkExperienceInfo } from "@/types/ResumeTypes"

export const workExperienceList: Record<string, WorkExperienceInfo> = {
    paymint: {
        mainTitle:{
            title: '(주) 페이민트',
            link: 'http://paymint.co.kr/',
        },
    },
    admin: {
        mainTitle:{
            title: '어드민',
        },
        detailWorkExperiences: [
            {},
        ]
    },
    manager: {
        mainTitle:{
            title: '결제선생 - 매니저',
            link: 'https://payssam.kr',
        },
        detailWorkExperiences: [
            {},
        ]
    },
    bill: {
        mainTitle:{
            title: '결제선생 - 청구서',
        },
        detailWorkExperiences: [
            {},
        ]
    },
    hissam: {
        mainTitle:{
            title: '출결선생',
            link: 'https://hissam.kr/',
        },
        detailWorkExperiences: [
            {},
        ]
    },
    other: {
        mainTitle:{
            title: 'Other Work',
        },
        detailWorkExperiences: [
            {},
        ]
    },
}