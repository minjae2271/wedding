"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos } from "react-icons/md";

import { basicInfo as IbasicInfo, registerInfo as IregisterInfo } from "@/model/Register";
import { useState } from "react";
import SelectCountry from "./SelectCountry";

type Props = {
  onNext: (data: IbasicInfo) => void;
  onNextPage: () => void;
  registerInfo: IregisterInfo
};
export default function BasicInfo({ onNext, onNextPage, registerInfo }: Props) {
  const [brideName, setBrideName] = useState(registerInfo.basicInfo.brideName);
  const [groomName, setGroomName] = useState(registerInfo.basicInfo.groomName);
  const [country, setCountry] = useState(registerInfo.basicInfo.language)

  return (
    <section className="flex flex-col items-center gap-6">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="bridename">Bride Name</Label>
          <Input
            id="bridename"
            value={brideName}
            onChange={(e) => setBrideName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="groomname">Groom Name</Label>
          <Input
            id="groomname"
            value={groomName}
            onChange={(e) => setGroomName(e.target.value)}
          />
        </div>
        <div className="mt-4">
            <SelectCountry setValue={setCountry} value={country}/>
        </div>
      </div>
        { <Button
        className="flex gap-4 mt-6"
        variant='outline'
          onClick={() => {
            onNext({
              groomName: groomName,
              brideName: brideName,
              language: country,
            });
            onNextPage();
          }}
        >
          Date & Time
        <MdArrowForwardIos />    
        </Button>}
    </section>
  );
}
