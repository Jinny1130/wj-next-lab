'use client';

import WeeklyTab from '@/container/todo/WeeklyTab';
import TodoMainTab from '@/container/todo/TodoMainTab';
import TodoTab from '@/container/todo/TodoTab';
import { DayWithIndex } from '@/types/TodoTypes';
import { useState, useEffect } from 'react';

const weeklyButtons: DayWithIndex[] = [
  { id: 'mon', name: 'MON', dayIndex: 1 },
  { id: 'tue', name: 'TUE', dayIndex: 2 },
  { id: 'wed', name: 'WED', dayIndex: 3 },
  { id: 'thu', name: 'THU', dayIndex: 4 },
  { id: 'fri', name: 'FRI', dayIndex: 5 },
  { id: 'sat', name: 'SAT', dayIndex: 6 },
  { id: 'sun', name: 'SUN', dayIndex: 7 },
];

export default function TodoMain() {
  const [selectedDay, setSelectedDay] = useState('logo');

  return (
    <>
      <title>Todo List 📋| WOOJINNY</title>

      <div className="todo-main-wrap fixed inset-x-0 inset-y-0 size-full flex flex-col p-24 h-full">
        <WeeklyTab
          selectedDay={selectedDay}
          seletWeeklyTab={(tabId) => setSelectedDay(tabId)}
        ></WeeklyTab>

        <div className="h-[calc(100%-2.5rem)] bg-white rounded-se-md rounded-b-md">
          <div className="h-full flex flex-col items-center justify-center">
            {selectedDay === 'logo' ? (
              <TodoMainTab weeklyButtons={weeklyButtons}></TodoMainTab>
            ) : (
              <TodoTab selectedDay={selectedDay}></TodoTab>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
