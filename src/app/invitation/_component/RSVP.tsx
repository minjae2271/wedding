'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function RSVPSection() {
    const [join, setJoin] = useState<boolean | null>(null)
    const [name, setName] = useState('')
    const [howMany, setHowMany] = useState(1)
    // const [toggle, setToggle] = useState<boolean>(false)
    // console.log("toggle",toggle)

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div className="text-3xl underline font-lora">
                {/* <span>Confirmation</span> */}
                <span>RSVP</span>
            </div>
            <div className="font-quicksand text-balance text-center">
                <span>Bitte lasst uns wissen, ob ihr an unserem besonderen Tag dabei sein könnt.</span>
            </div>
            <div className="flex flex-col gap-6 font-quicksand text-xl">
                <Button className={join === true ? "bg-purple-200" : ""} variant={'custom'} size={'lg'} onClick={() => {setJoin(true)}}>Ja, ich nehme teil</Button>
                <Button className={join === false ? "bg-purple-200" : ""} variant={'custom'} size={'lg'} onClick={() => {setJoin(false)}}>Nein, ich bin leider verhindert</Button>
                     <Card className={`${join ? "opacity-100" : "opacity-0"} transition ease-in-out delay-200 duration-200 mt-6`}>
                        <CardHeader>
                            <CardTitle>Teilnahme bestätigen</CardTitle>
                            <CardDescription>Für unsere Planung bitten wir höflich um Ihre Teilnahmebestätigung.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action="">
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor={"name"}>Name</Label>
                                        <Input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder={"Wie ist Ihr Name?"}/>
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor={"name"}>Teilnehmerzahl</Label>
                                        <Input value={howMany} onChange={(e) => setHowMany(Number(e.target.value))} id="name" type="number" placeholder={"Mit wie vielen Personen dürfen wir rechnen?"}/>
                                    </div>
                                </div>
                                <Button variant={'custom'} type="submit" className="mt-6">Send</Button>
                            </form>
                        </CardContent>
                     </Card>
            </div>
        </div>
    )
}