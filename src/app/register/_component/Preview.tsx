import { registerInfo as IregisterInfo } from "@/model/Register";
import Invitation from "@/app/_components/Invitation";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type Props = {
  onPrevPage: () => void;
  onSubmitRegister: () => void;
  registerInfo: IregisterInfo;
};

export default function Preview({ onPrevPage, registerInfo, onSubmitRegister }: Props) {
  return (
<>
      <Invitation registerInfo={registerInfo} />
      <div className="abolute bottom-10 sticky w-full flex justify-around gap-4">
        <Button
                className="bg-purple-100 border-slate-500"
          size={"nav"}
          onClick={() => {
            if (onPrevPage) {
              onPrevPage();
            }
          }}
        >
          <MdArrowBackIos />
          Extra Info
        </Button>
        <Button
        className="bg-purple-100 border-slate-500 hover:scale-125 transform transition-transform duration-300"
          size={"nav"}
          onClick={() => {
            if (onSubmitRegister) {
              onSubmitRegister();
            }
          }}
        >
          <MdArrowForwardIos />
          Submit
        </Button>
      </div>
    </>
  );
}
