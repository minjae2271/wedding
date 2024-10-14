"use client";
import { timeInfo as ItimeInfo, registerInfo as IregisterInfo } from "@/model/Register";
import { DateTimePicker, TimePicker } from "@/components/ui/datetime-picker";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { getCountryCode } from "@/utils/getCountryCode";
import { useEffect, useState } from "react";
import { type Locale} from 'date-fns/locale';

type Props = {
  onNext: (data: ItimeInfo) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  registerInfo: IregisterInfo
};
export default function TimeInfo({ onNext, onPrevPage, onNextPage, registerInfo }: Props) {
  const [date, setDate] = useState(registerInfo.timeInfo.date);
  const [time, setTime] = useState(registerInfo.timeInfo.time);
  const [locale, setLocale] = useState<Locale | undefined>(undefined)

  useEffect(() => {
    setLocale(getCountryCode(registerInfo.basicInfo.country))
  }, [registerInfo.basicInfo.country])

  return (
    <section className="relative min-w-[350px] h-full flex flex-col items-center px-4">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col gap-4">
          <p className="text-2xl font-quicksand">When is the wedding?</p>
          <DateTimePicker
            granularity="day"
            yearRange={1}
            value={date}
            onChange={setDate}
            locale={locale}
          />
        </div>
        <div className="w-full mt-12">
          {/* <p className="text-2xl font-quicksand">What Time is the wedding?</p> */}
          <TimePicker granularity="minute" date={time} onChange={setTime} />
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
        <Button
          size={'nav'}
          variant="outline"
          onClick={() => {
            onNext({ date: date!, time: time! });
            onPrevPage();
          }}
        >
          <MdArrowBackIos />
          Basic Info
        </Button>
        <Button
          size={'nav'}
          variant="outline"
          onClick={() => {
            onNext({ date: date!, time: time! });
            onNextPage();
          }}
        >
          Location
          <MdArrowForwardIos />
        </Button>
      </div>
    </section>
  );
}
