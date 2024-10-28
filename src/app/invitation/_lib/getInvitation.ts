"use client";

import { registerInfo } from "@/model/Register";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";

export async function getInvitation(slug: string): Promise<registerInfo> {
  const supabase = createBrowserSupabaseClient();

  const { data, error } = await supabase
    .from("wedding")
    .select(
    `
        groomName:groom_name,
        brideName:bride_name,
        country,
        date,
        time,
        locationName:location_name,
        address,
        lat,
        lng,
        mainImage:main_image,
        dressCode:dress_code,
        childrenAllowed:children_allowed,
        giftPreference:gift_preference,
        parking,
        accomodation,
        images (
            image:image_url,
            name
        )
    `
    )
    .eq("slug", slug);

  if (error) throw error;

  if (!data || data.length === 0) {
    throw new Error("No invitation found.");
  }

  const registerData: registerInfo = {
    basicInfo: {
      groomName: data[0].groomName,
      brideName: data[0].brideName,
      country: data[0].country,
    },
    timeInfo: {
      date: new Date(data[0].date),
      time: new Date(data[0].time),
    },
    locationInfo: {
      locationName: data[0].locationName,
      address: data[0].address,
      lat: data[0].lat,
      lng: data[0].lng,
    },
    pictureInfo: {
      previewMainImage: data[0].mainImage,
      previewImages: data[0].images,
      mainImage: undefined,
      images: [],
    },
    extraInfo: {
      dressCode: data[0].dressCode,
      childrenAllowed: data[0].childrenAllowed,
      giftPreference: data[0].giftPreference,
      parking: data[0].parking,
      accomodation: data[0].accomodation,
    },
  };

  return registerData;
}
