'use client'

import { useState } from "react"
import Signup from "./_component/Signup";
import Signin from "./_component/Signin";

export default function AuthPage() {

    const [view, setView] = useState('SIGNUP')

    return (
        <main className="w-full h-screen flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-purple-100 to-light-blue-100">
            {view === 'SIGNUP' ? <Signup setView={setView} /> : <Signin setView={setView}/>}
        </main>
    )
}