'use client'

import { useEffect, useRef } from "react"
import { Loader } from "@googlemaps/js-api-loader"
import { FaParking } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

export default function LocationSection() {
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
                lat: 51.6084,
                lng: 12.0672
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
            <div className="text-3xl underline font-lora">
                {/* <span>Location</span> */}
                <span>Ort</span>
            </div>
            <div className="flex flex-col items-center mt-6 gap-2">
                <div className="text-2xl font-Playfair italic">
                    <span>Schloss Ostrau</span>
                </div>
                <div className="text-xl font-lora italic ">
                    <span>Schloßstraße 26, 06193 Petersberg</span>
                </div>
            </div>
            <div className="mt-6 py-6 border-y-2">
                <div className="min-w-[350px] min-h-[300px]" ref={mapRef}></div>
            </div>
            <div className="flex flex-col gap-2 mt-6 text-sm font-quicksand">
                <span className="flex justify-start items-center gap-2"><FaParking />Parkmöglichkeiten gibt es in der Tiefgarage</span>
                <span className="flex justify-start items-center gap-2"><IoIosBed />Unterkunft wird bereitgestellt.</span>
            </div>
        </div>
    )
}