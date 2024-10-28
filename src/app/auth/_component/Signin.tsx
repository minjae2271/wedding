"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signupWithGoogleFunc } from "../_lib/signupWithGoogle"
import { FcGoogle } from "react-icons/fc";

type Props = {
  setView: React.Dispatch<React.SetStateAction<string>>;
};

export default function Signin({ setView }: Props) {


  const googleSigninMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await signupWithGoogleFunc()
      
      if (data) {
        console.log(data);
      }

      if (error) {
        alert(error.message);
      }
    }
  })

  return (
    <div className="flex flex-col items-center gap-6">
    <h1 className="text-3xl font-quicksand">SignIn</h1>
    <div className="pt-10 pb-6 px-10 flex flex-col items-center justify-center gap-3 min-w-[350px] shadow-lg border border-slate-300 rounded-xl bg-gradient-to-br from-purple-50 to-light-blue-50">
      <Button
        className="w-full"
        variant={"custom"}
        onClick={() => {
          googleSigninMutation.mutate()
        }}
      >
        <FcGoogle size={20}/>
      </Button>
      <div className="flex flex-col items-center py-4 w-full gap-2">

      <div className="flex justify-center items-center gap-3 text-center border-non bg-transparent text-xs">
        Don not have account yet?
        <button
          className="text-blue-400 text-sm font-bold"
          onClick={() => setView("SIGNUP")}
        >
          SignUp
        </button>
      </div>
      <div className="flex justify-center items-baseline gap-3 text-center border-non bg-transparent text-xs">
        <button
          className="text-blue-400 text-xs font-bold"
        >
          forgot your password?
        </button>
      </div>
      </div>
    </div>
    </div>
  );
}
