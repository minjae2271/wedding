"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import { toast } from "sonner"

import {
  basicInfo as IbasicInfo,
  registerInfo as IregisterInfo,
} from "@/model/Register";
import { useState } from "react";
import SelectCountry from "./SelectCountry";
import { set } from "date-fns";
// import ForwardButton from "./ForwardButton";

type Props = {
  onNext: (data: IbasicInfo) => void;
  onNextPage: () => void;
  registerInfo: IregisterInfo;
};
export default function BasicInfo({ onNext, onNextPage, registerInfo }: Props) {
  const [brideName, setBrideName] = useState(registerInfo.basicInfo.brideName);
  const [groomName, setGroomName] = useState(registerInfo.basicInfo.groomName);
  const [country, setCountry] = useState(registerInfo.basicInfo.country);

  const [isBrideName, setIsBrideName] = useState(true)
  const [isGroomName, setIsGroomName] = useState(true)
  const [isCountry, setIsCountry] = useState(true)

  const requireCheck = () => {
    let isValid = true;
  
    // Bride Name 검증
    if (!brideName) {
      setIsBrideName(false);
      toast("Please, fill in the Bride name!");
      isValid = false;
    } else {
      setIsBrideName(true);
    }
  
    // Groom Name 검증
    if (!groomName) {
      setIsGroomName(false);
      toast("Please, fill in the Groom name!");
      isValid = false;
    } else {
      setIsGroomName(true);
    }
  
    // Country 검증
    if (!country) {
      setIsCountry(false);
      toast("Please, choose the country!");
      isValid = false;
    } else {
      setIsCountry(true);
    }
  
    // 모든 필드가 유효한 경우 true 반환
    return isValid;
  };

  return (
    <section className="relative min-w-[350px] h-full flex flex-col items-center px-4">
      <div className="w-full flex flex-col min-h gap-6">
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-quicksand" htmlFor="bridename">
            Bride Name
          </Label>
          <Input
            className={`h-10 ${!isBrideName ? "border-red-500" : ""}`}
            id="bridename"
            value={brideName}
            onChange={(e) => setBrideName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-quicksand" htmlFor="groomname">
            Groom Name
          </Label>
          <Input
            className={`h-10 ${!isGroomName ? "border-red-500" : ""}`}
            id="groomname"
            value={groomName}
            onChange={(e) => setGroomName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Label className="text-2xl font-quicksand" htmlFor="country">
            Country
          </Label>
          <SelectCountry setValue={setCountry} value={country} isCountry={isCountry}/>
        </div>
      </div>
      <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
      {
        <Button
          size={'nav'}
          onClick={() => {
            onNext({
              groomName,
              brideName,
              country,
            });
            if(requireCheck()) {
              onNextPage();
            }
          }}
        >
          Date
          <MdArrowForwardIos />
        </Button>
      }
      </div>
    </section>
  );
}
