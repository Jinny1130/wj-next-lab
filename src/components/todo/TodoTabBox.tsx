'use client'

import { dayWithIndex } from '@/types/ProjectTypes'
import TodoMainTab from "./TodoMainTab";

const weeklyButtons:dayWithIndex[] = [
    { id:'mon', name:'MON', dayIndex:1 },
    { id:'tue', name:'TUE', dayIndex:2 },
    { id:'wed', name:'WED', dayIndex:3 },
    { id:'thu', name:'THU', dayIndex:4 },
    { id:'fri', name:'FRI', dayIndex:5 },
    { id:'sat', name:'SAT', dayIndex:6 },
    { id:'sun', name:'SUN', dayIndex:7 }
]

export default function TodoTabBox() {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <TodoMainTab weeklyButtons={weeklyButtons}></TodoMainTab>
        </div>
    );
}
