import { registerInfo as IregisterInfo } from "@/model/Register";
import Invitation from "@/components/Invitation";
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
      <div className="abolute bottom-0 sticky w-full flex justify-between gap-4 ">
        <Button
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
