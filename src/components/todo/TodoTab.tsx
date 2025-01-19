'use client';

interface TodoProps {
  selectedDay: string;
}

export default function TodoTab(props: TodoProps) {
  return <div>{props.selectedDay}</div>;
}
