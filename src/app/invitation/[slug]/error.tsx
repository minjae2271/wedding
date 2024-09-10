'use client'

import Link from "next/link"

export default function Error() {

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-purple-100 to-light-blue-50">
            <h2 className="text-2xl font-bold p-4 bg-white rounded-2xl">Error occured... </h2>
            <div className="flex flex-col items-center mt-6 gap-1">
                <p className="text-lg">please try again</p>
                <p className="text-lg"> or contact us below</p>
            </div>
            <Link className="mt-6 underline" href={'/'}>
                Link to our Website
            </Link>
            <p className="text-lg">or</p>
            <p className="text-lg">wedding@gmail.com</p>
        </div>
    )
}