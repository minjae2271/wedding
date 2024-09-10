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
        <span className="text-2xl font-thin font-lora">2024. 11. 12</span>
        <div className="flex items-center justify-center gap-4">
          {/* <span className="text-xl font-thin font-lora italic">Saturday</span> */}
          <span className="text-xl font-thin font-lora italic">Montag</span>
          <span>,</span>
          <span className="text-xl font-thin font-lora italic">13 : 20 PM</span>
        </div>
      </div>
      <div>
        <Calendar
          calendarType="gregory"
          locale={"de"}
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
        <div className="flex gap-4 font-light text-lg font-Playfair italic">
          <p className="">Wiebke</p>
          <p className="">♥</p>
          <p className="">Minjae</p>
        </div>
        <div className="flex justify-center items-center mt-6 gap-3 text-lg font-quicksand">
          {/* <span className="text-xl">Wedding is in</span> */}
          <span className="">Die Hochzeit ist in</span>
          <span className="bg-white py-1 px-2 rounded-xl  transform animate-bounce bg-purple-200">24</span>
          {/* <span className="">days!</span> */}
          <span className="">Tagen!</span>
        </div>
      </div>
    </div>
  );
}
