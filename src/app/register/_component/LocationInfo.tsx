"use client";

import {
  locationInfo as IlocationInfo,
  registerInfo as IregisterInfo,
} from "@/model/Register";
import { useEffect, useRef, useCallback, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { toast } from "sonner"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type Props = {
  onNext: (data: IlocationInfo) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  registerInfo: IregisterInfo;
};

export default function BasicInfo({
  onNext,
  onPrevPage,
  onNextPage,
  registerInfo,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [locationName, setLocationName] = useState(
    registerInfo.locationInfo.locationName
  );
  const [address, setAddress] = useState(registerInfo.locationInfo.address);
  const [lat, setLat] = useState(registerInfo.locationInfo.lat);
  const [lng, setLng] = useState(registerInfo.locationInfo.lng);

  const [isAddress, setIsAddress] = useState(true)

  const requireCheck = () => {
    let isValid = true;
  
    if (!address) {
      setIsAddress(false);
      toast("Please, Choose the place!");
      isValid = false;
    } else {
      setIsAddress(true);
    }

    return isValid;
  }; 

  const initializeAutocomplete = useCallback(() => {
    if (inputRef.current) {
      const center = { lat: 34.082298, lng: -82.284777 };
      const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
      };

      const options = {
        bounds: defaultBounds,
        types: ["establishment"],
        fields: ["address_components", "geometry", "icon", "name"],
        strictBounds: false,
      };

      const autocomplete = new google.maps.places.Autocomplete(
        inputRef.current,
        options
      );

      return autocomplete;
    }
  }, [inputRef]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
        version: "weekly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: lat,
        lng: lng,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "map",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      };

      if (mapRef.current) {
        const map = new Map(mapRef.current, mapOptions);
        new Marker({
          map,
          position: position,
        });
        let markers: google.maps.Marker[] = [];

        if (inputRef.current) {
          map.controls[google.maps.ControlPosition.TOP_CENTER].push(
            inputRef.current as HTMLElement
          );
          const autocomplete = initializeAutocomplete();

          if (autocomplete) {
            autocomplete.addListener("place_changed", () => {
              const place = autocomplete.getPlace();

              if (markers) {
                markers.forEach((marker) => {
                  marker.setMap(null);
                });
                markers = [];
              }
              setLocationName("");
              setAddress("");
              setLat(0);
              setLng(0);

              const markerPosition = {
                lat: place.geometry?.location?.lat() as number,
                lng: place.geometry?.location?.lng() as number,
              };

              markers.push(
                new Marker({
                  map,
                  // icon,
                  title: place.name,
                  position: markerPosition,
                })
              );
              map.setCenter(markerPosition);

              setLocationName(place.name as string);
              place.address_components?.map((comp) => {
                if (comp.types.includes("street_number")) {
                  setAddress((prev) => prev + comp.long_name + ", ");
                }
                if (
                  !comp.types.includes("country") &&
                  !comp.types.includes("postal_code")
                ) {
                  setAddress((prev) => prev + comp.long_name + " ");
                }
              });
              setLat(markerPosition.lat);
              setLng(markerPosition.lng);
            });
          }

          // map.addListener("bounds_changed", () => {
          //     searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
          // });

          // let markers: google.maps.Marker[] = [];

          // searchBox.addListener('places_changed', () => {
          //     const places = searchBox.getPlaces()

          //     if (places?.length == 0){
          //         return
          //     }

          //     markers.forEach((marker) => {
          //         marker.setMap(null)
          //     })
          //     markers = []

          //     const bounds = new google.maps.LatLngBounds();

          //     places?.forEach((place) => {
          //         if (!place.geometry || !place.geometry.location) {
          //             console.log("Returned place contains no geometry")
          //             return
          //         }
          //         const icon = {
          //             url: place.icon as string,
          //             size: new google.maps.Size(71, 71),
          //             origin: new google.maps.Point(0, 0),
          //             anchor: new google.maps.Point(17, 34),
          //             scaledSize: new google.maps.Size(25, 25),
          //         };

          //         markers.push(
          //             new google.maps.Marker({
          //                 map,
          //                 icon,
          //                 title: place.name,
          //                 position: place.geometry.location
          //             })
          //         )
          //         if (place.geometry.viewport) {
          //             // Only geocodes have viewport.
          //             bounds.union(place.geometry.viewport);
          //           } else {
          //             bounds.extend(place.geometry.location);
          //         }
          //     })
          //     map.fitBounds(bounds);
          // })
        }
      }
    };
    initMap();
  }, [initializeAutocomplete]);

  return (
    <section className="relative min-w-[350px] min-h-screen flex flex-col items-center px-4">
      <div className="flex flex-col w-full gap-2">
        <p className="text-2xl font-quicksand mr-auto">Location</p>
        <div
          className="w-full md:w-[500px] lg:w-[800px] lg:h-[350px] min-h-[300px]"
          ref={mapRef}
        >
          <Input
            className={`w-[90%] ml-2 mt-2 bg-white border-slate-500 ${!isAddress ? 'border-red-500 animate-bounceY' : ""}`}
            type="search"
            ref={inputRef}
          ></Input>
        </div>
      </div>
      <div className="w-full flex justify-between gap-4 absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
        <Button
          size={"nav"}
          variant="outline"
          onClick={() => {
            onNext({
              locationName,
              address,
              lat,
              lng,
            });
            onPrevPage();
          }}
        >
          <MdArrowBackIos />
          Date
        </Button>
        <Button
          size={"nav"}
          variant="outline"
          onClick={() => {
            onNext({
              locationName,
              address,
              lat,
              lng,
            });

            if(requireCheck()) {
              onNextPage();
            }
          }}
        >
          Photo
          <MdArrowForwardIos />
        </Button>
      </div>
    </section>
  );
}
