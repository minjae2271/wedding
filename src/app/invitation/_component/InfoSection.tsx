import { GiAmpleDress } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { IoIosBed, IoIosGift } from "react-icons/io";
import { MdChildFriendly } from "react-icons/md";

type Props = {
  country: string
  dressCode: string;
  gift: string;
  children: 'allowed' | 'notAllowed';
  parking: string;
  accomodation: string;
};

export default function InfoSection({
  country,
  dressCode,
  gift,
  children,
  parking,
  accomodation,
}: Props) {

  // const translation = {
  //   en: {
  //     dressCode: "DressCode",
  //     gift:
  //       "Gift Preference",
  //     parking: "parking",
  //     accomodation: 'accomodation',
  //   },
  //   de: {
  //     dressCode: "Kleiderordnung",
  //     gift:
  //       "Geschenkwunsch",
  //     parking: "Parkplatz",
  //     accomodation: 'Unterkunft',
  //   },
  //   fr: {
  //     dressCode: "Code vestimentaire",
  //     write:
  //       "Préférence de cadeau",
  //     parking: "parking",
  //     accomodation: 'hébergement',
  //   },
  // } as const;

  return (
    <div className="flex flex-col justify-center">
      <div className="text-center text-3xl underline font-lora">
        <span>Information</span>
      </div>
      <div className="flex flex-col gap-4 mt-6 font-quicksand">
        <span className="flex justify-start items-center gap-2 font-quicksand">
          <GiAmpleDress size={30}/>
          <span>{dressCode}</span>
        </span>
        <span className="flex justify-start items-center gap-2 font-quicksand">
          <IoIosGift size={30}/>
          <span>{gift}</span>
        </span>
        <span className="flex items-center gap-2 font-quicksand">
          <FaParking size={30}/>
          <span>{parking}</span>
        </span>
        <span className="flex items-center gap-2 font-quicksand">
          <IoIosBed size={30}/>
          <span>{accomodation}</span>
        </span>
        <span className="flex items-center gap-2 font-quicksand">
          <MdChildFriendly size={30}/>
          <span>{children}</span>
        </span>
      </div>
    </div>
  );
}
