export type StickyTitleInfo = {
    title: string,
    link?: string,
    addExplanation?: string[];
}

export type DetailWorkExperienceInfo = {
    id?: string,
    pageAbout?: string | TrustedHTML,
    title?: string,
    period?: string,
    pageUrl?: string,
    describe?: string[]
}

export type WorkExperienceInfo = {
    mainTitle: StickyTitleInfo,
    detailWorkExperiences?: DetailWorkExperienceInfo[],
}