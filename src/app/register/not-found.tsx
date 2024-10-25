// app/not-found.tsx

"use client"

import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Go to Home
      </button>
    </div>
  )
}
