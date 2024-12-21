/* ==================================================
    * "project/send-message" type 
================================================== */

export type ButtonNumber = (number | null);

export type ButtonNumbers = ButtonNumber[];

/* ==================================================
    * "project/todo" type 
================================================== */

export type Day = {
    id: string;
    name: string;
}

export type Week = Day[]

export type DayWithIndex = Day & {
    dayIndex: number;
}