"use client";

import { useState } from "react";
import BasicInfo from "./_component/BasicInfo";
import TimeInfo from "./_component/TimeInfo";
import LocationInfo from "./_component/LocationInfo";
import ExtraInfo from "./_component/ExtraInfo";

import {
  basicInfo as IbasicInfo,
  timeInfo as ItimeInfo,
  locationInfo as IlocationInfo,
  registerInfo as IregisterInfo,
  pictureInfo as IpictureInfo,
  extraInfo as IextraInfo,
} from "@/model/Register";
import PictureInfo from "./_component/PictureInfo";

export default function RegisterPage() {
  const [registerInfo, setRegisterInfo] = useState<IregisterInfo>({
    basicInfo: {
      groomName: "",
      brideName: "",
      language: "",
    },
    timeInfo: {
      date: undefined,
      time: undefined,
    },
    locationInfo: {
      locationName: "",
      address: "",
      lat: 0,
      lng: 0,
      parking: "",
      accomodation: "",
    },
    pictureInfo: {
        previewImages: [],
        images: []
    },
    extraInfo: {
      dressCode: "",
      childrenAllowed: true,
      gitfPreference: "",
    },
  });
  const [step, setStep] = useState<
    "basicInfo" | "timeInfo" | "locationInfo" | "pictureInfo" | "extraInfo"
  >("basicInfo");

  console.log(registerInfo);

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="min-w-[300px]">
        {step === "basicInfo" && (
          <BasicInfo
            onNext={(data: IbasicInfo) => {
              setRegisterInfo((prev) => ({ ...prev, basicInfo: data }));
            }}
            onNextPage={() => setStep("timeInfo")}
            registerInfo={registerInfo}
          />
        )}
        {step === "timeInfo" && (
          <TimeInfo
            onNext={(data: ItimeInfo) => {
              setRegisterInfo((prev) => ({ ...prev, timeInfo: data }));
            }}
            onPrevPage={() => setStep("basicInfo")}
            onNextPage={() => setStep("locationInfo")}
            registerInfo={registerInfo}
          />
        )}
        {step === "locationInfo" && (
          <LocationInfo
            onNext={(data: IlocationInfo) => {
              setRegisterInfo((prev) => ({ ...prev, locationInfo: data }));
            }}
            onPrevPage={() => setStep("timeInfo")}
            onNextPage={() => setStep("pictureInfo")}
            registerInfo={registerInfo}
          />
        )}
        {step === "pictureInfo" && (
          <PictureInfo
            onNext={(data: IpictureInfo) => {
              setRegisterInfo((prev) => ({ ...prev, pictureInfo: data }));
            }}
            onPrevPage={() => setStep("locationInfo")}
            onNextPage={() => setStep("extraInfo")}
            registerInfo={registerInfo}
          />
        )}
        {step === "extraInfo" && (
          <ExtraInfo
            onNext={(data: IextraInfo) => {
              setRegisterInfo((prev) => ({ ...prev, extraInfo: data }));
            }}
            onPrevPage={() => setStep("pictureInfo")}
            onSubmitRegister={() => console.log("submit")}
          />
        )}
      </div>
    </main>
  );
}
