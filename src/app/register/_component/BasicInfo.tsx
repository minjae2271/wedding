"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos } from "react-icons/md";

import {
  basicInfo as IbasicInfo,
  registerInfo as IregisterInfo,
} from "@/model/Register";
import { useState } from "react";
import SelectCountry from "./SelectCountry";
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

  return (
    <section className="relative min-w-[350px] h-full flex flex-col items-center px-4">
      <div className="w-full flex flex-col min-h gap-6">
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-quicksand" htmlFor="bridename">
            Bride Name
          </Label>
          <Input
            className="h-10"
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
            className="h-10"
            id="groomname"
            value={groomName}
            onChange={(e) => setGroomName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <Label className="text-2xl font-quicksand" htmlFor="country">
            Country
          </Label>
          <SelectCountry setValue={setCountry} value={country} />
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
            onNextPage();
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
