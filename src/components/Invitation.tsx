import CalendarSection from "@/app/invitation/_component/CalenderSection";
import IntroSection from "@/app/invitation/_component/IntroSection";
import LocationSection from "@/app/invitation/_component/LocationSection";
import PicturesSection from "@/app/invitation/_component/PicturesSection";
import RSVPSection from "@/app/invitation/_component/RSVP";
import GuestBookSection from "@/app/invitation/_component/GuestBookSection";
import InfoSection from "@/app/invitation/_component/InfoSection";

import { registerInfo as IregisterInfo } from "@/model/Register";

type Props = {
  registerInfo?: IregisterInfo;
};

export default function Invitation({ registerInfo }: Props) {
  return (
    <main className="min-w-[375px] min-h-screen md:w-[400px] md:mt-6 md:rounded-3xl bg-gradient-to-br from-purple-100 to-light-blue-50 flex flex-col mx-auto">
      <div className="w-full ">
        <div className="flex flex-col items-center relative px-6 pt-6 md:pt-12 min-h-screen">
          <IntroSection
            MainImage={registerInfo?.pictureInfo.previewMainImage as string}
            brideName={registerInfo?.basicInfo.brideName as string}
            groomName={registerInfo?.basicInfo.groomName as string}
            country={registerInfo?.basicInfo.country as string}
          />
        </div>
        <div className="flex flex-col items-center relative px-6 pt-6 min-h-85dvh">
          <CalendarSection
            country={registerInfo?.basicInfo.country as string}
            brideName={registerInfo?.basicInfo.brideName as string}
            groomName={registerInfo?.basicInfo.groomName as string}
            date={registerInfo?.timeInfo.date as Date}
            time={registerInfo?.timeInfo.time as Date}
          />
        </div>
        <div className="flex flex-col items-center relative px-6 pt-6 min-h-85dvh">
          <LocationSection
            lat={registerInfo?.locationInfo.lat as number}
            lng={registerInfo?.locationInfo.lng as number}
            address={registerInfo?.locationInfo.address as string}
            locationName={registerInfo?.locationInfo.locationName as string}
          />
        </div>
        {(registerInfo?.pictureInfo.previewImages.length as number) > 0 ? (
          <div className="flex flex-col items-center relative pt-6 min-h-screen">
            <PicturesSection
              carouselImages={registerInfo?.pictureInfo.previewImages}
            />
          </div>
        ) : null}
        <div className="flex flex-col items-center relative px-6 pt-6 min-h-85dvh">
          <RSVPSection country={registerInfo?.basicInfo.country as string}/>
        </div>
        <div className="flex flex-col items-center relative px-6 pt-6 min-h-screen">
          <GuestBookSection country={registerInfo?.basicInfo.country as string}/>
        </div>
        <div className="flex flex-col items-center relative px-6 pt-6 min-h-screen">
          <InfoSection
            country={registerInfo?.basicInfo.country as string}
            dressCode={registerInfo?.extraInfo.dressCode as string}
            gift={registerInfo?.extraInfo.giftPreference as string}
            children={registerInfo?.extraInfo.childrenAllowed as boolean}
            parking={registerInfo?.extraInfo.parking as string}
            accomodation={registerInfo?.extraInfo.accomodation as string}
          />
        </div>
      </div>
    </main>
  );
}
