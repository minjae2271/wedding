'use client'

import { useState } from "react"
import BasicInfo from './_component/BasicInfo'
import TimeInfo from "./_component/TimeInfo"
import LocationInfo from './_component/LocationInfo'
import ExtraInfo from './_component/ExtraInfo'

import { basicInfo as IbasicInfo, timeInfo as ItimeInfo,  locationInfo as IlocationInfo, registerInfo as IregisterInfo, pictureInfo as IpictureInfo, extraInfo as IextraInfo } from '@/model/Register'
import PictureInfo from "./_component/PictureInfo"

export default function RegisterPage() {
    const [registerInfo, setRegisterInfo] = useState<IregisterInfo>({
        basicInfo: {
            groomName: '',
            brideName: '',
            language: ''
        },
        locationInfo: {
            locationName: '',
            address: '',
            lat: 0,
            lng: 0,
            parking: '',
            accomodation: ''
        },
        pictureInfo: {
            pictures: []
        },
        extraInfo: {
            dressCode: '',
            childrenAllowed: true,
            gitfPreference: ''
        }
    })
    const [step, setStep] = useState<'basicInfo'| 'timeInfo'| 'locationInfo'| 'pictureInfo'| 'extraInfo'>('basicInfo')
    // const [idx, setIdx] = useState<number>(0)

    console.log(registerInfo)
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            {step === 'basicInfo' && <BasicInfo onNext={(data: IbasicInfo) => {
                setRegisterInfo(prev => ({ ...prev, basicInfo: data}))
            }}
            onNextPage = {() => setStep('timeInfo')}
            />}
            {step === 'timeInfo' && <TimeInfo onNext={(data: ItimeInfo) => {
                setRegisterInfo(prev => ({ ...prev, timeInfo: data}))
            }}
            onPrevPage = {() => setStep('basicInfo')}
            onNextPage = {() => setStep('locationInfo')}
            />}
            {step === 'locationInfo' && <LocationInfo onNext={(data: IlocationInfo) => {
                setRegisterInfo(prev => ({ ...prev, locationInfo: data}))
            }}
            onPrevPage = {() => setStep('timeInfo')}
            onNextPage = {() => setStep('pictureInfo')}
            />}
            {step === 'pictureInfo' && <PictureInfo onNext={(data: IpictureInfo) => {
                setRegisterInfo(prev => ({ ...prev, pictureInfo: data}))
            }}
            onPrevPage = {() => setStep('locationInfo')}
            onNextPage = {() => setStep('extraInfo')}
            />}
            {step === 'extraInfo' && <ExtraInfo onNext={(data: IextraInfo) => {
                setRegisterInfo(prev => ({ ...prev, extraInfo: data}))
            }}
            onPrevPage = {() => setStep('pictureInfo')}
            onSubmitRegister = {() => console.log('submit')}
            />}
        </main>
    )
}