'use client'

import { useRouter } from 'next/navigation';
import { useMutation } from "@tanstack/react-query";
import { insertRegister } from "../_lib/insertRegister";
import { registerInfo as IRegisterInfo } from "@/model/Register";

import { FaCheckCircle } from "react-icons/fa";
import { MdSmsFailed } from "react-icons/md";
import { toast } from "sonner"

export function useRegister(registerInfo: IRegisterInfo) {
      const router = useRouter()

      const { mutate, isPending } = useMutation({
        mutationFn: () => insertRegister(registerInfo),
        onSuccess: () => {
            toast.success("Wedding Invitation is now ready!", {
                icon: <FaCheckCircle />,
                position: 'bottom-center'
            });
            router.replace('/')
        },
        onError: (error) => {
          toast.error("Creating Wedding Invitation Failed... Please try again.", {
            icon: <MdSmsFailed color='red'/>,
            position: 'bottom-center',
            description: `${error.message}`
        });
        }
      })
      
      return { mutate, isPending }
}