"use client"

import React, { useState } from "react"
import { QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

type Props = {
    children: React.ReactNode
}

export default function RQProvider({ children }: Props) {
    const [client] = useState(
        new QueryClient({
            // queryCache: new QueryCache({
            //     onError: (error) => {
            //         errorHandler(error.message)
            //     }
            // }),
            // mutationCache: new MutationCache({
            //     onError: (error) => {
            //         errorHandler(error.message)
            //     }
            // }),
            defaultOptions: {
                queries: {
                    staleTime: 30 * 60 * 1000, // 30분
                    gcTime: 60 * 60 * 1000, // 1시간
                    refetchOnWindowFocus: false, // 포커스 시 자동 리패치 비활성화
                    retry: false, // 에러 발생 시 자동 재시도 비활성화
                }
            }
        })
    )

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}