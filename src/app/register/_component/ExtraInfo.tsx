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
import { GiAmpleDress } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { IoIosBed, IoIosGift } from "react-icons/io";
import { MdChildFriendly } from "react-icons/md";

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
  const [isParking, setIsParking] = useState(true)
  const [isCAccomodation, setIsCAccomodation] = useState(true)

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

    if (!parking) {
      setIsChildrenAllowed(false);
      toast("Please, choose the option for parking!");
      isValid = false;
    } else {
      setIsParking(true);
    }

    if (!accomodation) {
      setIsChildrenAllowed(false);
      toast("Please, choose the option for accomodation!");
      isValid = false;
    } else {
      setIsCAccomodation(true);
    }
  
    return isValid;
  };

  return (
    <section className="relative md:min-w-[350px] lg:min-w-[500px] min-h-screen flex flex-col items-center px-4">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-2 text-2xl font-quicksand" htmlFor="dressCode"><GiAmpleDress /><span>Dress Code</span></Label>
          <Input
            id="dressCode"
            value={dressCode}
            onChange={(e) => setDressCode(e.target.value)}
            className={`h-10 ${!isDressCode ? "border-red-500 animate-bounceY" : ""}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-2 text-2xl font-quicksand" htmlFor="gitfPreference"><IoIosGift /><span>Gift Preference</span></Label>
          <Input
            id="gitfPreference"
            value={giftPreference}
            onChange={(e) => setGiftPreference(e.target.value)}
            className={`h-10 ${!isGiftPreference ? "border-red-500 animate-bounceY" : ""}`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-2 text-2xl font-quicksand mb-2" htmlFor="childrenAllowed"><MdChildFriendly /><span>Are Children allowed?</span></Label>
          <RadioGroup id="childrenAllowed" defaultValue={childrenAllowed} onValueChange={(e: string) => e === 'allowed' ? setChildrenAllowed('allowed') : setChildrenAllowed('notAllowed')}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='allowed' id="r1" />
              <Label htmlFor="r1"><span className="font-mono">Yes, children are welcomed!</span></Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notAllowed" id="r2" />
              <Label htmlFor="r2"><span className="font-mono">I&apos;m sorry, children are not allowed</span></Label>
            </div>
          </RadioGroup>
        </div>
      <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-2 text-2xl font-quicksand mb-2" htmlFor="parking"><FaParking /><span>Parking</span></Label>
          <RadioGroup className="gap-3" id="parking" defaultValue={parking} onValueChange={(e: string) => setParking(e)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='possible' id="p1" />
              <Label htmlFor="p1"><span className="font-mono">Yes, Parking is available</span></Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='limited' id="p2" />
              <Label htmlFor="p2"><span className="font-mono">It is available, but space are limited</span></Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="impossible" id="p3" />
              <Label htmlFor="p3"><span className="font-mono">No, Parking is unavailable</span></Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notSure" id="p4" />
              <Label htmlFor="p4"><span className="font-mono">I am not sure</span></Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-2 text-2xl font-quicksand mb-2" htmlFor="accomodation"><IoIosBed /><span>Accomodation</span></Label>
          <RadioGroup className="gap-3" id="accomodation" defaultValue={accomodation} onValueChange={(e: string) => setAccomodation(e)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='provided' id="a1" />
              <Label htmlFor="a1"><span className="font-mono">We provide accomodation for guests</span></Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='notProvided' id="a2" />
              <Label htmlFor="a2"><span className="font-mono">Guests need to book own accomodation</span></Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notSure" id="a3" />
              <Label htmlFor="a3"><span className="font-mono">I am not sure</span></Label>
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
