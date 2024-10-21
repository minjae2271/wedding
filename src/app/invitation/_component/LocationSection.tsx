'use client'

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

type Props = {
    lat: number
    lng: number
    address: string
    locationName: string
}

export default function LocationSection({ lat, lng, address, locationName}: Props) {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
                version: 'weekly',
                libraries: ["places"],
            });


            const { Map } = await loader.importLibrary('maps')
            const { Marker } = await loader.importLibrary('marker')

            const position = {
                lat: lat,
                lng: lng
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 15,
                mapId: 'map',
                disableDefaultUI: true
            }

            
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
            
            new Marker({
                map: map,
                position: position
            })

        }   
        initMap()
    }, [])
    return (
        <div className="flex flex-col items-center">
            {/* <div className="text-3xl underline font-lora">
                <span>Ort</span>
            </div> */}
            <div className="flex flex-col items-center mt-6 gap-2">
                <div className="text-2xl font-Playfair italic">
                    <span>{locationName}</span>
                </div>

            </div>
            <div className="my-6 py-6 border-y-2">
                <div className="min-w-[350px] min-h-[300px]" ref={mapRef}></div>
            </div>
            <div className="">
                <span className="text-lg font-lora italic">{address}</span>
            </div>
        </div>
    )
}