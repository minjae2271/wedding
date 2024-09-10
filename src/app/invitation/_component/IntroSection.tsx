import Image from "next/image";
import img from '../../../../public/images/img.jpg'

export default function IntroSection() {
    return (
        <div className="flex flex-col items-center">
            <Image src={img} height={466} alt="img" className="rounded-xl"/>
            <div className="w-full font-light text-xl flex justify-center items-center mt-6 gap-6">
                <p className="text-2xl font-Playfair italic">Wiebke</p>
                <p className="text-3xl font-sevillana">&</p> 
                <p className="text-2xl font-Playfair italic">Minjae</p>
            </div>
            <div className="w-full flex justify-center items-center mt-4 gap-6">
            <p className="text-md text-center text-balance font-quicksand">Mit großer Freude laden wir euch ein, unsere Hochzeit zu feiern.</p>
                {/* <p className="text-md text-center text-balance font-quicksand">Together with joy, we invite you to celebrate our wedding.</p> */}
            </div> 
        </div>
    )
}