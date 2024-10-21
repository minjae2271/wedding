'use client'

import {
  extraInfo as IextraInfo,
  registerInfo as IregisterInfo,
} from "@/model/Register";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type Props = {
  onNext: (data: IextraInfo) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  registerInfo: IregisterInfo;
};

export default function PictureInfo({
  onNext,
  onPrevPage,
  onNextPage,
  registerInfo,
}: Props) {
  const [dressCode, setDressCode] = useState(registerInfo.extraInfo.dressCode);
  const [giftPreference, setGiftPreference] = useState(
    registerInfo.extraInfo.giftPreference
  );
  const [childrenAllowed, setChildrenAllowed] = useState(
    registerInfo.extraInfo.childrenAllowed
  );
  const [parking, setParking] = useState(registerInfo.extraInfo.parking);
  const [accomodation, setAccomodation] = useState(
    registerInfo.extraInfo.accomodation
  );

  const [isDressCode, setIsDressCode] = useState(true)
  const [isGiftPreference, setIsGiftPreference] = useState(true)
  const [isChildrenAllowed, setIsChildrenAllowed] = useState(true)

  const requireCheck = () => {
    let isValid = true;
  
    if (!dressCode) {
      setIsDressCode(false);
      toast("Please, fill in the Dress Code!");
      isValid = false;
    } else {
      setIsDressCode(true);
    }
  
    if (!giftPreference) {
      setIsGiftPreference(false);
      toast("Please, fill in the Groom name!");
      isValid = false;
    } else {
      setIsGiftPreference(true);
    }

    if (!childrenAllowed) {
      setIsChildrenAllowed(false);
      toast("Please, choose the option for children!");
      isValid = false;
    } else {
      setIsChildrenAllowed(true);
    }
  
    // 모든 필드가 유효한 경우 true 반환
    return isValid;
  };

  return (
    <section className="relative md:min-w-[350px] lg:min-w-[500px] min-h-screen flex flex-col items-center px-4">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-quicksand" htmlFor="dressCode">Dress Code</Label>
          <Input
            id="dressCode"
            value={dressCode}
            onChange={(e) => setDressCode(e.target.value)}
            className={`${!isDressCode ? "border-red-500 animate-bounceY" : ""}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-quicksand" htmlFor="gitfPreference">Gift Preference</Label>
          <Input
            id="gitfPreference"
            value={giftPreference}
            onChange={(e) => setGiftPreference(e.target.value)}
            className={`${!isGiftPreference ? "border-red-500 animate-bounceY" : ""}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-2xl font-quicksand" htmlFor="childrenAllowed">Are Children allowed?</Label>
          <RadioGroup id="childrenAllowed" defaultValue="allowed" onValueChange={(e) => e === 'allowed' ? setChildrenAllowed(true) : setChildrenAllowed(false)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='allowed' id="r1" />
              <Label className="" htmlFor="r1">Yes, children are welcomed!</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notAllowed" id="r2" />
              <Label htmlFor="r2">I'm sorry, children are not allowed</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
        <Button
          size={"nav"}
          variant="outline"
          onClick={() => {
            onNext({
              dressCode,
              childrenAllowed,
              giftPreference,
              parking,
              accomodation,
            });
            onPrevPage();
          }}
        >
          <MdArrowBackIos />
          Pictures
        </Button>
        <Button
          size={"nav"}
          variant="outline"
          onClick={() => {
            onNext({
              dressCode,
              childrenAllowed,
              giftPreference,
              parking,
              accomodation,
            });

            if(requireCheck()) {
              onNextPage();
            }
          }}
        >
          See Preview
          <MdArrowForwardIos />
        </Button>
      </div>
    </section>
  );
}
