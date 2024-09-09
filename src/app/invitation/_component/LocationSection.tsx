'use client'

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"

export default function LocationSection() {
    const mapRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
                version: 'weekly'
            });


            const { Map } = await loader.importLibrary('maps')
            const { Marker } = await loader.importLibrary('marker')

            const position = {
                lat: -33.860664,
                lng: 151.208138
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 15,
                mapId: 'map',
                disableDefaultUI: true
            }

            
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
            const marker = new Marker({
                map: map,
                position: position
            })

        }   
        initMap()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-3xl font-light">
                <span>Location</span>
            </div>
            <div className="text-xl font-light">
                <span>Lotte World</span>
            </div>
            <div className="min-w-[350px] min-h-[300px]" ref={mapRef}></div>

        </div>
    )
}