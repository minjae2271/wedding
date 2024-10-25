import Image from "next/image";

type Props = {
    MainImage: string
    brideName: string
    groomName: string
    country: string
}

export default function IntroSection({ MainImage, brideName, groomName, country}: Props) {
    return (
        <div className="flex flex-col items-center gap-6">
            {/* <Image priority src={MainImage} width={350} height={466} alt="img" className="rounded-xl object-cover" style={{ width: "100%", height: "auto" }}/> */}
            <div className="relative w-[350px] h-[600px] flex items-center justify-center">
                <Image
                  priority
                  src={MainImage}
                  alt="image-preview"
                  fill
                  sizes="100vw"
                  className={`object-cover rounded-lg`}
                />
            </div>
            <div className="w-full font-light text-xl flex justify-center items-center gap-6">
                <p className="text-2xl font-Playfair italic">{brideName}</p>
                <p className="text-3xl font-sevillana">&</p> 
                <p className="text-2xl font-Playfair italic">{groomName}</p>
            </div>
            <div className="w-full flex justify-center items-center">
            { country === 'en' &&
                <p className="text-md text-center text-balance font-quicksand">Together with joy, we invite you to celebrate our wedding.</p>
            }    
            { country === 'de' && 
                <p className="text-md text-center text-balance font-quicksand">Mit großer Freude laden wir euch ein, unsere Hochzeit zu feiern.</p>
            }
            { country === 'fr' && 
                <p className="text-md text-center text-balance font-quicksand">C&apos;est avec joie que nous vous invitons à célébrer notre mariage.</p>
            }
            </div> 
        </div>
    )
}