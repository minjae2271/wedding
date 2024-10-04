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
    setLocale(getCountryCode(registerInfo.basicInfo.language))
  }, [registerInfo.basicInfo.language])

  return (
    <section className="min-w-[350px] flex flex-col items-center gap-6 px-4">
      <div className="w-full flex flex-col gap-6">
        <div className="w-72 space-y-2">
          <p>When is the wedding?</p>
          <DateTimePicker
            granularity="day"
            yearRange={5}
            value={date}
            onChange={setDate}
            locale={locale}
          />
        </div>
        <div className="w-72 space-y-2">
          <p>What Time is the wedding?</p>
          <TimePicker granularity="minute" date={time} onChange={setTime} />
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 mt-6">
        <Button
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
