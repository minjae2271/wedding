import CalendarSection from "@/app/invitation/_component/CalenderSection"
import IntroSection from "@/app/invitation/_component/IntroSection"
import LocationSection from "@/app/invitation/_component/LocationSection"
import PicturesSection from "@/app/invitation/_component/PicturesSection"
import RSVPSection from "@/app/invitation/_component/RSVP"
import GuestBookSection from "@/app/invitation/_component/GuestBookSection"
import {
    registerInfo as IregisterInfo,
  } from "@/model/Register";

type Props = {
    onPrevPage: () => void;
    onSubmitRegister: () => void
    registerInfo: IregisterInfo;
}

export default function Preview({ onPrevPage, registerInfo }: Props) {
    return (
        <main className="min-w-[375px] h-full md:w-[400px] md:mt-6 md:rounded-3xl bg-gradient-to-br from-purple-100 to-light-blue-50 flex flex-col mx-auto">
            <div className="w-full ">
                <div className="flex flex-col items-center relative px-6 pt-6 md:pt-12 min-h-screen bg-gradient-to-br from-purple-50 to-light-blue-100">
                    <IntroSection />
                </div>
                <div className="flex flex-col items-center relative px-6 pt-6 min-h-screen" >
                    <CalendarSection />
                </div>
                <div className="flex flex-col items-center relative px-6 pt-6 min-h-screen" >
                    <LocationSection />
                </div>
                <div className="flex flex-col items-center relative pt-6 min-h-screen" >
                    <PicturesSection />
                </div>
                <div className="flex flex-col items-center relative px-6 pt-6 min-h-screen" >
                    <RSVPSection />
                </div>
                <div className="flex flex-col items-center relative px-6 pt-6 min-h-screen" >
                    <GuestBookSection />
                </div>
                {/* <div className="flex flex-col items-center relative px-6 pt-6 min-h-screen" >
                    <InfoSection />
                </div> */}
            </div>

        </main>
    )
}