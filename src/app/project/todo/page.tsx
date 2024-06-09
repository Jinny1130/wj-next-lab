'use client'

import WeeklyTab from '@/components/todo/WeeklyTab'
import TodoTabBox from '@/components/todo/TodoTabBox'
import { useState, useEffect } from 'react';

export default function TodoMain() {
    const [ selectedDay, setSelectedDay ] = useState('logo');

    useEffect(() => {
        console.log(selectedDay)
    }, [selectedDay])

    return (
        <>
            <title>Todo List 📋| WOOJINNY</title>

            <div className='todo-main-wrap fixed inset-x-0 inset-y-0 size-full flex flex-col p-24 h-full'>
                <WeeklyTab selectedDay={selectedDay} seletWeeklyTab={(tabId) => setSelectedDay(tabId)}></WeeklyTab>
                        
                <div className="h-[calc(100%-2.5rem)] bg-white rounded-se-md rounded-b-md">
                    <TodoTabBox></TodoTabBox>
                </div>
            </div>
        </>
    )
}