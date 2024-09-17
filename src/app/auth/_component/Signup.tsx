"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { signupFunc } from "../_lib/signup";
import { signupWithGoogleFunc } from "../_lib/signupWithGoogle";
import { FaRegCommentDots } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type Props = {
  setView: React.Dispatch<React.SetStateAction<string>>;
};

export default function Signup({ setView }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationRequired, setConfirmationRequired] = useState(false);

  const verifyPassword = (checkPassword: string) => {
    if (password !== checkPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const checkSignin = () => {
    if (!email) {
      alert("Email is reqired");
      return;
    }
    if (!password) {
      alert("Password is reqired");
      return;
    }
    if (email && password && passwordMatch) {
      signupMutation.mutate();
    }
  };

  const signUpWithGoogle = useMutation({
    mutationFn: async () => {
      const { data, error } = await signupWithGoogleFunc();

      if (data) {
        console.log("google", data)
      }

      if (error) {
        alert(error.message)
      }
    }
  })

  const signupMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await signupFunc(email, password);

      console.log("data", data);

      if (data) {
        console.log("data", data);
        setConfirmationRequired(true);
      }

      if (error) {
        setConfirmationRequired(false);
        alert(error.message);
      }
    },
  });

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-quicksand">SignUp</h1>
      <div className="pt-10 pb-6 px-10 flex flex-col items-center justify-center gap-3 min-w-[350px] shadow-lg border border-slate-300 rounded-xl bg-gradient-to-br from-purple-50 to-light-blue-50">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full space-y-1.5">
            <Label htmlFor={"Email"}>Email</Label>
            <Input
              className="peer text-xs pl-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <p className="pl-1 pt-1 hidden peer peer-invalid:block text-pink-600 text-xs transition-all duration-300 ease-in-out">
              Please provide a valid email address.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-1.5">
          <Label htmlFor={"Password"}>Password</Label>
          <Input
            className="text-xs pl-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          {password && (
            <div>
              <Input
                className={`text-xs pl-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 ${
                  passwordMatch === false ? "border-pink-500 text-pink-600" : ""
                }`}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  verifyPassword(e.target.value);
                }}
                type="password"
                placeholder="Please enter your password again"
              />
              {passwordMatch === false && (
                <p className="pl-1 pt-1 text-pink-600 text-xs transition-all duration-300 ease-in-out">
                  Password does not match.
                </p>
              )}
            </div>
          )}
        </div>

        <Button
          className="w-full mt-2 font-quicksand hover:bg-purple-100 transition-all duration-500"
          variant={"custom"}
          onClick={checkSignin}
          disabled={confirmationRequired || signupMutation.isPending}
        >
          {signupMutation.isPending && <FaRegCommentDots />}
          {confirmationRequired
            ? "please check the eamil"
            : "Send verification Email"}
        </Button>
        <Button className="w-full font-quicksand" variant={"custom"} onClick={() => signUpWithGoogle.mutate()}>
          <FcGoogle size={20} />
        </Button>
        <div className="flex justify-center items-baseline gap-3 py-4 w-full text-center border-non bg-transparent text-xs">
          Already have an account?
          <button
            className="text-blue-400 text-sm font-bold"
            onClick={() => setView("SIGNIN")}
          >
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
}
