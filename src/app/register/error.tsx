// app/error.tsx

"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-2xl font-semibold text-red-600">Something went wrong!</h1>
      <p className="mt-2 text-gray-700">{error.message}</p>
      <div className="mt-6 space-x-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-gray-600 bg-white hover:bg-gray-100 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}
