"use client";

import { useEffect, useState } from "react";
import BasicInfo from "./_component/BasicInfo";
import TimeInfo from "./_component/TimeInfo";
import LocationInfo from "./_component/LocationInfo";
import ExtraInfo from "./_component/ExtraInfo";
import Preview from "./_component/Preview";
import { Progress } from "@/components/ui/progress";
import {
  basicInfo as IbasicInfo,
  timeInfo as ItimeInfo,
  locationInfo as IlocationInfo,
  registerInfo as IregisterInfo,
  pictureInfo as IpictureInfo,
  extraInfo as IextraInfo,
} from "@/model/Register";
import PictureInfo from "./_component/PictureInfo";
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbCircleNumber5Filled } from "react-icons/tb";
import { getProgress } from "@/utils/getProgress";

import { Toaster } from "@/components/ui/sonner"

export default function RegisterPage() {
  const [registerInfo, setRegisterInfo] = useState<IregisterInfo>({
    basicInfo: {
      groomName: "",
      brideName: "",
      country: "",
    },
    timeInfo: {
      date: undefined,
      time: undefined,
    },
    locationInfo: {
      locationName: "",
      address: "",
      lat: 51.5045103,
      lng: 11.9682259,
      parking: "",
      accomodation: "",
    },
    pictureInfo: {
        previewMainImage: '',
        previewImages: [],
        mainImage: undefined,
        images: []
    },
    extraInfo: {
      dressCode: "",
      childrenAllowed: undefined,
      gitfPreference: "",
    },
  });
  const [step, setStep] = useState<
    "basicInfo" | "timeInfo" | "locationInfo" | "pictureInfo" | "extraInfo" | "preview"
  >("basicInfo");
  const [progressPercent, setProgressPercent] = useState(0)
  
  useEffect(() => {
    if(step === 'preview') {
      setProgressPercent(100)
      return
    }
    const {inPercent} = getProgress(step)
    setProgressPercent(inPercent)
  }, [step])

  console.log(registerInfo)

  return (
    <main className="w-full h-full flex flex-col items-center">
        <div className="relative sm:w-[60%] w-[80%] flex my-24">
          <Progress value={progressPercent} className="w-full" />
          <TbCircleNumber1Filled className={`absolute top-0 transform -translate-y-3 -translate-x-5 bg-purple-100 transition-all duration-500 rounded-xl`} size={30} color={progressPercent === 0 ? "#f76b8a": "#cca8e9"}/>
          <TbCircleNumber2Filled className={`absolute top-0 transform -translate-y-3 -translate-x-5 bg-purple-100 transition-all duration-500 rounded-xl`} style={{ left: `25%` }} size={30} color={progressPercent === 25 ? "#f76b8a": "#cca8e9"}/>
          <TbCircleNumber3Filled className={`absolute top-0 transform -translate-y-3 -translate-x-5 bg-purple-100 transition-all duration-500 rounded-xl`} style={{ left: `50%` }} size={30} color={progressPercent === 50 ? "#f76b8a": "#cca8e9"}/>
          <TbCircleNumber4Filled className={`absolute top-0 transform -translate-y-3 -translate-x-5 bg-purple-100 transition-all duration-500 rounded-xl`} style={{ left: `75%` }} size={30} color={progressPercent === 75 ? "#f76b8a": "#cca8e9"}/>
          <TbCircleNumber5Filled className={`absolute top-0 transform -translate-y-3 -translate-x-5 bg-purple-100 transition-all duration-500 rounded-xl`} style={{ left: `100%` }} size={30} color={progressPercent === 100 ? "#f76b8a": "#cca8e9"}/>
        </div>
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
            onNextPage={() => setStep("preview")}
            registerInfo={registerInfo}
          />
        )}
        {step === "preview" && (
          <Preview
            onPrevPage={() => setStep("extraInfo")}
            onSubmitRegister={() => console.log("submit")}
            registerInfo={registerInfo}
          />
        )}
    <Toaster />
    </main>
  );
}
