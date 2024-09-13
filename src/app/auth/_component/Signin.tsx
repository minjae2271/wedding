"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { SigninFunc } from "../_lib/signin";
import { GiShutRose } from "react-icons/gi";

type Props = {
  setView: React.Dispatch<React.SetStateAction<string>>;
};

export default function Signin({ setView }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await SigninFunc(email, password);

      if (data) {
        console.log(data);
      }

      if (error) {
        alert(error.message);
      }
    },
  });

  return (
    <div className="pt-10 pb-6 px-10 flex flex-col items-center justify-center gap-3 min-w-[350px] shadow-lg border border-slate-300 rounded-xl bg-gradient-to-br from-purple-50 to-light-blue-50">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="peer text-xs text-opacity-70 pl-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600"
        placeholder="Email"
      />

      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="text-xs pl-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600"
        placeholder="Password"
      />

      <Button
        className="w-full mt-2 font-quicksand"
        variant={"custom"}
        onClick={() => {
          signinMutation.mutate();
        }}
        disabled={signinMutation.isPending}
      >
        {signinMutation.isPending && <GiShutRose />}
        SignIn
      </Button>
      <Button className="w-full font-quicksand" variant={"custom"}>
        SignIn with Google
      </Button>
      <div className="flex justify-center items-center gap-3 py-4 w-full text-center border-non bg-transparent text-xs">
        Does not have account yet?
        <button
          className="text-blue-400 text-sm font-bold"
          onClick={() => setView("SIGNUP")}
        >
          SignUp
        </button>
      </div>
    </div>
  );
}
