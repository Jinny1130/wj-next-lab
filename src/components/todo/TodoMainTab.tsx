'use client'

import { DayWithIndex } from '@/types/TodoTypes'
import Image from "next/image"
import { useState } from "react"

interface TodoProps {
    weeklyButtons:DayWithIndex[],
}

export default function TodoMainTab (props:TodoProps) {

    const [selectDays, setSelectDays] = useState<DayWithIndex[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    const [todoList, setTodoList] = useState<string[]>([])

    // todo 요일명 체크
    const addOrRemoveDay = (checked:boolean, day:string) => {
        
        let checkedDay: DayWithIndex | undefined = props.weeklyButtons.find(el => el.id === day);

        if(checked && checkedDay) {
            setSelectDays([...selectDays, checkedDay]);
        }
        else {
            setSelectDays(selectDays.filter(el => el.id !== day));
        }

        sortingSelectDays();
    }
    // 선택된 요일 순서대로 나열
    const sortingSelectDays = () => {
        selectDays.sort((a:DayWithIndex, b:DayWithIndex): number => {
            return a.dayIndex - b.dayIndex;
        });

        let sortingDays = [];
        for (let i = 0 ; i < selectDays.length; i++) {
            sortingDays.push(
                <p key={i} className="text-md">
                    {selectDays[i].name} // {selectDays[i].dayIndex}
                </p>
            );
        }

        return sortingDays
    }

    // todo 입력 input
    const addTodo = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue('');
    }
    // todo 배열에서 삭제
    const deleteTodo = (delTodo:string) => {
        setTodoList(todoList.filter(todo => todo !== delTodo));
    }

    return (
        <>
        <p className="text-xl text-center">WHAT IS YOUR PLAN<br/>FOR<span className='block text-3xl font-bold text-pink-400'>TODAY</span></p>

        <div className='flex mt-14 w-80 justify-between'>
            {
                props.weeklyButtons.map((dayData:DayWithIndex) => {
                    return (
                        <label htmlFor={dayData.id}  key={dayData.id} className='cursor-pointer'>
                            <input  id={dayData.id}  name='day' type='checkbox'  onChange={ (e) => addOrRemoveDay(e.target.checked, dayData.id) } className='hidden' />
                            <p className={`w-10 h-10 text-xs text-center leading-10 rounded-full  hover:bg-gray-100 ${selectDays.find(day => day.id === dayData.id) ? 'bg-rose-200 text-white hover:bg-rose-200' : ''}`}>{dayData.name}</p>
                        </label>
                    )
                })
            }
        </div>

        <div className="flex mt-6 w-80 justify-between">
            <input  className="focus:outline-none placeholder:text-slate-400 w-64 h-10 px-2 py-1 border-hidden rounded-md bg-gray-100"
                        value={inputValue} 
                        type="text" 
                        onChange={(event) => setInputValue(event.target.value) } 
                        placeholder='✏️ TO DO' />

            <button className='w-14 border-solid border border-gray-300 rounded-md px-2 py-1 hover:border-gray-500 hover:bg-gray-500 hover:text-white disabled:hover:bg-gray-100 disabled:bg-gray-100  disabled:text-white disabled:border-gray-100 disabled:cursor-default' 
                        onClick={addTodo}>ADD</button>
        </div>

        <div className="mt-20 w-80">
            <div className='h-10  flex items-center justify-between'>
                <p className='w-1/2'> 선택된 요일 </p>
                <p className='w-1/2'> 할 일 </p>
            </div>
            
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    { sortingSelectDays() }
                </div>

                <div className='w-1/2'>
                    {
                        todoList.map((todo, index) => {
                            return (
                                <div key={`todo_${ index }`} className='w-full mt-4 first:mt-0 flex items-center'>
                                    <p className='w-4 mr-2'>✔️</p>
                                    <p className='w-[calc(100%-1.25rem)] text-md border-b-2'>{ todo }</p>
                                    <button onClick={ () => { deleteTodo(todo) } }>
                                        <Image src="/images/todo/trash-10-32.png" alt="삭제아이콘" width={20} height={20} priority />
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}