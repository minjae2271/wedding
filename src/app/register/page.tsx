'use client'

import { useState } from "react"
import BasicInfo from './_component/BasicInfo'
import LocationInfo from './_component/LocationInfo'

import { basicInfo as IbasicInfo, locationInfo as IlocationInfo, registerInfo as IregisterInfo } from '@/model/Register'

export default function RegisterPage() {
    const [registerInfo, setRegisterInfo] = useState<IregisterInfo>({
        basicInfo: {
            'groomName': '',
            'brideName': ''
    },
    locationInfo: {
        'locationName': '',
        'address': '',
        'lat': 0,
        'lng': 0,
        'parking': '',
    }
    })
    const [step, setStep] = useState<string[]>(['basicInfo', 'locationInfo', 'timeInfo'])
    const [idx, setIdx] = useState<number>(0)

    console.log(registerInfo)
    return (
        <main>
            {step[idx] === 'basicInfo' && <BasicInfo onNext={(data: IbasicInfo) => {
                setRegisterInfo(prev => ({ ...prev, basicInfo: data}))
            }}
            onNextPage = {() => setIdx(prev => prev + 1)}
            />}
            {step[idx] === 'locationInfo' && <LocationInfo onNext={(data: IlocationInfo) => {
                setRegisterInfo(prev => ({ ...prev, locationInfo: data}))
            }}
            onPrevPage = {() => setIdx(prev => prev - 1)}
            onNextPage = {() => setIdx(prev => prev + 1)}
            />}
        </main>
    )
}