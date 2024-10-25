'use client'

// import { registerInfo as IregisterInfo } from "@/model/Register";
import { useQuery } from "@tanstack/react-query";
import { getInvitation } from "../_lib/getInvitation";

export function useInvitation(slug: string) {

      const { data, isLoading, isError,  error } = useQuery({
        queryKey: ['invitation', slug],
        queryFn: () => getInvitation(slug)
      })
      
      return { data, isLoading, isError, error}
}