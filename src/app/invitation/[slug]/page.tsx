import CalendarSection from "../_component/CalenderSection"
import IntroSection from "../_component/IntroSection"
import LocationSection from "../_component/LocationSection"
import PicturesSection from "../_component/PicturesSection"
import RSVPSection from "../_component/RSVP"
import GuestBookSection from "../_component/GuestBookSection"
// import InfoSection from "../_component/InfoSection"

type Props = {
    params : {
        slug: string
    }
}

export default function InvitationPage({ params }: Props) {
    const { slug } = params
    console.log(slug)

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