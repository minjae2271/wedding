import Image from "next/image";
import img from '../../../../public/images/img.jpg'

export default function Intro() {
    return (
        <div className="flex flex-col items-center">
            <Image src={img} height={466} alt="img" className="rounded-xl"/>
            <div className="w-full font-light text-xl flex justify-center items-center mt-6 gap-6">
                <p className="">Minjae</p>
                <p className="">&</p> 
                <p className="">Wiebke</p>
            </div>
            <div className="w-full font-light text-sm flex justify-center items-center mt-6 gap-6">
                <p className="text-center text-balance">Together with joy, we invite you to celebrate our wedding.</p>
            </div>
        </div>
    )
}