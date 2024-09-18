"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { basicInfo as IbasicInfo } from "@/model/Register";
import { useState } from "react";
import SelectNation from "./SelectNation";

type Props = {
  onNext: (data: IbasicInfo) => void;
  onNextPage: () => void;
};
export default function BasicInfo({ onNext, onNextPage }: Props) {
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");

  return (
    <section className="max-w-3xl h-screen flex flex-col items-center gap-4 pt-24">
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
        <div className="flex justify-center">
            <SelectNation />
        </div>
      </div>
        <Button
        variant='outline'
          onClick={() => {
            onNext({
              groomName: groomName,
              brideName: brideName,
              language: "German",
            });
            onNextPage();
          }}
        >
          next
        </Button>
    </section>
  );
}
