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

type Props = {
  onNext: (data: IextraInfo) => void;
  onPrevPage: () => void;
  onSubmitRegister: () => void;
  registerInfo: IregisterInfo;
};

export default function PictureInfo({
  onNext,
  onPrevPage,
  onSubmitRegister,
  registerInfo,
}: Props) {
  const [dressCode, setDressCode] = useState(registerInfo.extraInfo.dressCode);
  const [gitfPreference, setGitfPreference] = useState(
    registerInfo.extraInfo.gitfPreference
  );
  const [childrenAllowed, setChildrenAllowed] = useState(
    registerInfo.extraInfo.childrenAllowed
  );

  return (
    <section className="min-w-[350px] flex flex-col items-center gap-6 px-4">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="dressCode">Dress Code</Label>
          <Input
            id="dressCode"
            value={dressCode}
            onChange={(e) => setDressCode(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="gitfPreference">Gitf Preference</Label>
          <Input
            id="gitfPreference"
            value={gitfPreference}
            onChange={(e) => setGitfPreference(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="childrenAllowed">Are Children allowed?</Label>
          <RadioGroup id="childrenAllowed" defaultValue="allowed" onValueChange={(e) => e === 'allowed' ? setChildrenAllowed(true) : setChildrenAllowed(false)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='allowed' id="r1" />
              <Label htmlFor="r1">Yes, children are welcomed!</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notAllowed" id="r2" />
              <Label htmlFor="r2">I'm sorry, children are not allowed</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="w-full flex justify-around gap-4 mt-6">
        <Button
          variant="outline"
          onClick={() => {
            onNext({
              dressCode: dressCode,
              childrenAllowed: childrenAllowed,
              gitfPreference: gitfPreference,
            });
            onPrevPage();
          }}
        >
          Pictures
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            onNext({
              dressCode: dressCode,
              childrenAllowed: childrenAllowed,
              gitfPreference: gitfPreference,
            });
            onSubmitRegister();
          }}
        >
          See Preview
        </Button>
      </div>
    </section>
  );
}
