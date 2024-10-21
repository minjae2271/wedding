"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "./Calender.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {
  country: string
  date: Date
  time: Date
  brideName: string
  groomName: string
}

export default function CalendarSection({ country, date, time, brideName, groomName}: Props) {

  const getMinute = () => {
    if(time.getMinutes() < 10) {
      return '0' + time.getMinutes()
    }
    return time.getMinutes()
  }
  const getRestDate = () => {
    const today = new Date()
    const timeDifference = date.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  }

  return (
    <div className="flex flex-col items-center mt-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl font-thin font-lora">{`${date?.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`}</span>
        <div className="flex items-center justify-center gap-4">
          {/* <span className="text-xl font-thin font-lora italic">Saturday</span> */}
          {/* <span className="text-xl font-thin font-lora italic">{date.get}</span> */}
          {/* <span>,</span> */}
          <span className="text-xl font-thin font-lora italic">{`${time.getHours()} : ${getMinute()}`}</span>
        </div>
      </div>
      <div>
        <Calendar
          calendarType="gregory"
          locale={country}
          prev2Label={null}
          prevLabel={null}
          next2Label={null}
          nextLabel={null}
          showNeighboringMonth={false}
          value={date}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-6">
        <div className="flex gap-4 font-light text-lg font-Playfair italic">
          <p className="">{brideName}</p>
          <p className="">♥</p>
          <p className="">{groomName}</p>
        </div>
        <div className="flex justify-center items-center mt-6 gap-3 text-lg font-quicksand">
          {country === 'en' &&
          <>
            <span className="text-xl">Wedding is in</span>
            <span className="py-1 px-2 rounded-xl  transform animate-bounce bg-purple-200">{getRestDate()}</span>
            <span className="">days!</span>
          </> 
          }
          {country === 'de' &&
          <>
            <span className="text-xl">Die Hochzeit ist in</span>
            <span className="py-1 px-2 rounded-xl  transform animate-bounce bg-purple-200">{getRestDate()}</span>
            <span className="">Tagen!</span>
          </> 
          }
          {country === 'fr' &&
          <>
            <span className="text-xl">Le mariage est dans</span>
            <span className="py-1 px-2 rounded-xl  transform animate-bounce bg-purple-200">{getRestDate()}</span>
            <span className="">jours!</span>
          </> 
          }
        </div>
      </div>
    </div>
  );
}
