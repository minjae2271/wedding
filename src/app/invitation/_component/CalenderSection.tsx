"use client";

import { useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import "./Calender.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarSection() {
  const [value, onChange] = useState<Value>(new Date(2024, 10, 11));

  return (
    <div className="flex flex-col items-center mt-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl font-thin">2024. 11. 12</span>
        <div className="flex items-center justify-center gap-4">
          <span className="text-xl font-thin">Saturday</span>
          <span>,</span>
          <span className="text-xl font-thin">13 : 20 PM</span>
        </div>
      </div>
      <div>
        <Calendar
          calendarType="gregory"
          locale="en"
          prev2Label={null}
          prevLabel={null}
          next2Label={null}
          nextLabel={null}
          showNeighboringMonth={false}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <div className="flex gap-4 font-light text-xl">
          <p className="text-xl">Minjae</p>
          <p className="text-2xl">♥</p>
          <p className="text-xl">Wiebke</p>
        </div>
        <div className="flex gap-2 justify-center items-center text-lg font-light">
      <span>wedding is in</span>
        <span>24</span>
        <span>days!</span>
        </div>
        
      </div>
    </div>
  );
}
