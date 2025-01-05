export type StickyTitleInfo = {
    id: string,
    title: string,
    link?: string,
    addExplanation?: string;
}

export type DetailWorkExperienceInfo = {
    title?: string,
    period?: string,
    describe?: string[]
}

export type WorkPageAbout = {
    period: string,
    pageAbout: string | TrustedHTML,
}