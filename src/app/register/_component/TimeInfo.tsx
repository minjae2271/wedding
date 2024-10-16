"use client";
import { timeInfo as ItimeInfo, registerInfo as IregisterInfo } from "@/model/Register";
import { DateTimePicker, TimePicker } from "@/components/ui/datetime-picker";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
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

  const [isDate, setIsDate] = useState(true)
  const [isTime, setIsTime] = useState(true)

  const requireCheck = () => {
    let isValid = true;
  
    if (!date) {
      setIsDate(false);
      toast("Please, Choose the wedding Date!");
      isValid = false;
    } else {
      setIsDate(true);
    }

    if (!time) {
      setIsTime(false);
      toast("Please, fill in the time!");
      isValid = false;
    } else {
      setIsTime(true);
    }

    return isValid;
  };

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
              isDate={isDate}
            />
        </div>
        <div className="w-full flex flex-col gap-4 mt-12">
          <p className="text-2xl font-quicksand">What Time is the wedding?</p>
          <TimePicker granularity="minute" date={time} onChange={setTime} isTime={isTime}/>
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
            if(requireCheck()) {
              onNextPage();
            }
          }}
        >
          Location
          <MdArrowForwardIos />
        </Button>
      </div>
    </section>
  );
}
