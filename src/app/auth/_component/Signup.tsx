"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signupWithGoogleFunc } from "../_lib/signupWithGoogle";
import { signupWithFacebookFunc } from "../_lib/signupWithFacebook";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

export default function Signup() {

  const signUpWithGoogle = useMutation({
    mutationFn: async () => {
      const { data, error } = await signupWithGoogleFunc();

      if (data) {
        console.log("google", data);
      }

      if (error) {
        alert(error.message);
      }
    },
  });

  const signUpWithFacebook = useMutation({
    mutationFn: async () => {
      const { data, error } = await signupWithFacebookFunc()
      
      if (data) {
        console.log("facebook", data);
      }

      if (error) {
        alert(error.message);
      }
    }
    
  })

  return (
    <div className="flex flex-col items-center gap-6">
      {/* <h1 className="text-3xl font-quicksand">SignUp</h1> */}
      <div className="pt-10 pb-6 px-10 flex flex-col items-center justify-center gap-3 min-w-[350px] shadow-lg border border-slate-300 rounded-xl bg-gradient-to-br from-purple-50 to-light-blue-50">
        <Button
          className="w-full font-quicksand flex gap-2"
          variant={"custom"}
          onClick={() => signUpWithGoogle.mutate()}
        >
          <FcGoogle size={20}/>
          LogIn with Google
        </Button>
        <Button
          className="w-full font-quicksand flex gap-2"
          variant={"custom"}
          onClick={() => signUpWithFacebook.mutate()}
        >
          <FaFacebookSquare size={20} color="#4267B2"/>
          LogIn with Facebook
        </Button>
      </div>
    </div>
  );
}
