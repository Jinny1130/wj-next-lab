'use client'

import Image from "next/image";
import { Day, Week } from '@/types/TodoTypes';

interface TodoProps {
    selectedDay: String,
    seletWeeklyTab: (tabId:string) => void
}

const weeklyTabMenu:Week = [
    { id:'logo', name:'LOGO' },
    { id:'mon', name:'MON' },
    { id:'tue', name:'TUE' },
    { id:'wed', name:'WED' },
    { id:'thu', name:'THU' },
    { id:'fri', name:'FRI' },
    { id:'sat', name:'SAT' },
    { id:'sun', name:'SUN' }
]

const WeeklyTab = (props:TodoProps) => {

    function selectTab(id:string) {
        props.seletWeeklyTab(id);
    }

    return (
        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
            {
                weeklyTabMenu.map((tab:Day) => {
                    return (
                        <p key={ tab.id }  className={`rounded-t-lg w-1/12 h-10 text-center ${ props.selectedDay.toUpperCase() === tab.name ? 'bg-white hover:bg-white text-rose-950' : 'bg-pink-200 hover:bg-pink-100 text-rose-50 hover:text-rose-300' }` }>
                            <button className={`block w-full h-full py-2.5 ${tab.id === 'logo' ? 'flex items-center justify-center' : ''}`} onClick={() => selectTab(tab.id)}>
                                { 
                                    tab.id === 'logo' ? <Image src="/images/wj.png" alt="WJ Logo" width={30} height={30} priority /> : tab.name
                                }
                            </button>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default WeeklyTab