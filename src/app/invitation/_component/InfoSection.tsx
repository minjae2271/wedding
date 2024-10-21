import { GiAmpleDress } from "react-icons/gi";
import { FaParking, FaChild } from "react-icons/fa";
import { IoIosBed, IoIosGift } from "react-icons/io";

type Props = {
  country: string
  dressCode: string;
  gift: string;
  children: boolean;
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
  //     name: "Name",
  //     send: 'Send',
  //   },
  //   de: {
  //     dressCode: "Kleiderordnung",
  //     gift:
  //       "Geschenkwunsch",
  //     name: "Name",
  //     send: 'Senden',
  //   },
  //   fr: {
  //     dressCode: "Code vestimentaire",
  //     write:
  //       "Préférence de cadeau",
  //     name: "Nom",
  //     send: 'Envoyer',
  //   },
  // } as const;

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl underline font-lora">
        <span>Information</span>
      </div>
      <div className="flex flex-col gap-2 mt-6 text-sm font-quicksand">
        <span className="flex justify-start items-center gap-2">
          <GiAmpleDress />
          {dressCode}
        </span>
        <span className="flex justify-start items-center gap-2">
          <IoIosGift />
          {gift}
        </span>
        <span className="flex justify-start items-center gap-2">
          <FaParking />
          Parkmöglichkeiten gibt es in der Tiefgarage
        </span>
        <span className="flex justify-start items-center gap-2">
          <IoIosBed />
          Unterkunft wird bereitgestellt.
        </span>
        <span className="flex justify-start items-center gap-2">
          <FaChild />
          Uns ist es wichtig, dass unsere Hochzeit ein Tag ist, an dem wir uns
          voll und ganz auf unsere Freunde und Familie konzentrieren können. Aus
          diesem Grund haben wir uns entschieden, dass keine Kinder an der
          Hochzeit teilnehmen werden. Wir danken euch für euer Verständnis und
          freuen uns darauf, gemeinsam mit euch zu feiern.
        </span>
      </div>
    </div>
  );
}
