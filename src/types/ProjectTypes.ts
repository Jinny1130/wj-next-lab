/* ==================================================
    * "project/send-message" type 
================================================== */

export type numbers = buttonNumber[];

export type buttonNumber = (number | null);

/* ==================================================
    * "project/todo" type 
================================================== */

export type week = day[]

export type day = {
    id: string;
    name: string;
}

export type dayWithIndex = day & {
    dayIndex: number;
}