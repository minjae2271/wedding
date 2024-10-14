"use client";

import {
  locationInfo as IlocationInfo,
  registerInfo as IregisterInfo,
} from "@/model/Register";
import { useEffect, useRef, useCallback, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  const [parking, setParking] = useState(registerInfo.locationInfo.parking);
  const [accomodation, setAccomodation] = useState(
    registerInfo.locationInfo.accomodation
  );

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
        // componentRestrictions: { country: 'us' },
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
      // const { Place } = await loader.importLibrary('places')
      // const Places = await loader.importLibrary('places')

      const position = {
        lat: 51.6084,
        lng: 12.0672,
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
        let markers: google.maps.Marker[] = [];

        if (inputRef.current) {
          map.controls[google.maps.ControlPosition.TOP_CENTER].push(
            inputRef.current as HTMLElement
          );
          const autocomplete = initializeAutocomplete();

          if (autocomplete) {
            autocomplete.addListener("place_changed", () => {
              const place = autocomplete.getPlace();
              // console.log("place", place.geometry?.location?.lat());
              // console.log("place", place.geometry?.location?.lng());
              // console.log('markers', markers)

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
              // console.log("marker position", markerPosition)
              //   console.log("place", place);
              //   console.log("name", place.name);

              // const icon = {
              //     url: place.icon as string,
              //     size: new google.maps.Size(71, 71),
              //     origin: new google.maps.Point(0, 0),
              //     anchor: new google.maps.Point(17, 34),
              //     scaledSize: new google.maps.Size(25, 25),
              // };

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
    <section className="relative min-w-[350px] h-full flex flex-col items-center px-4">
      <div className="flex flex-col w-full gap-2">
        <p className="text-2xl font-quicksand mr-auto">Location</p>
        <div className="w-full min-h-[300px]" ref={mapRef}>
          <Input
            className="w-[90%] ml-2 mt-2 bg-white"
            type="search"
            ref={inputRef}
          ></Input>
        </div>
      </div>
      {/* <div className="w-full p-4">
        <h2>{locationName}</h2>
        <p>{address}</p>
      </div> */}
      {/* <div className="flex flex-col gap-2">
          <Label htmlFor="parking">Parking</Label>
          <RadioGroup id="parking" defaultValue="possible" onValueChange={(e) => setParking(e)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='possible' id="r1" />
              <Label htmlFor="r1">Yes, Parking is available</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value='limited' id="r2" />
              <Label htmlFor="r2">It is available, but space are limited</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="impossible" id="r3" />
              <Label htmlFor="r3">No, Parking is unavailable</Label>
            </div>
          </RadioGroup>
        </div> */}
      <div className="w-full flex justify-between gap-4 absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
        <Button
                  size={'nav'}
          variant="outline"
          onClick={() => {
            onNext({
              locationName,
              address,
              lat,
              lng,
              parking,
              accomodation,
            });
            onPrevPage();
          }}
        >
          <MdArrowBackIos />
          Date
        </Button>
        <Button
                  size={'nav'}
          variant="outline"
          onClick={() => {
            onNext({
              locationName,
              address,
              lat,
              lng,
              parking,
              accomodation,
            });
            onNextPage();
          }}
        >
          Photo
          <MdArrowForwardIos />
        </Button>
      </div>
    </section>
  );
}
