"use client"

import { registerInfo } from "@/model/Register";
import { createBrowserSupabaseClient } from "@/utils/supabase/client";

export async function insertRegister(registerInfo: registerInfo) {
    const supabase = createBrowserSupabaseClient();
    const { data: session, error: sessionError } = await supabase.auth.getSession()
    
    if(sessionError) {
        throw sessionError
    }
    if (!session) {
        throw new Error("user session not found.");
    }

    const user_id = session.session?.user.id
    console.log('insert session', session)

    const { data: insertData, error: insertError } = await supabase
        .from('wedding')
        .insert({
            user_id,
            bride_name: registerInfo.basicInfo.brideName,
            groom_name: registerInfo.basicInfo.groomName,
            country: registerInfo.basicInfo.country,
            date: registerInfo.timeInfo.date,
            time: registerInfo.timeInfo.time,
            location_name: registerInfo.locationInfo.locationName,
            address: registerInfo.locationInfo.address,
            lat: registerInfo.locationInfo.lat,
            lng: registerInfo.locationInfo.lng,
            dress_code: registerInfo.extraInfo.dressCode,
            children_allowed: registerInfo.extraInfo.childrenAllowed,
            gift_preference: registerInfo.extraInfo.giftPreference,
            parking: registerInfo.extraInfo.parking,
            accomodation: registerInfo.extraInfo.accomodation,
        })

        if(insertError) {
            throw insertError
        }
        if (!insertData) {
            throw new Error("register insert not found.");
        }
        
        if (insertData) {
            console.log('insert data', insertData)
        }

        return insertData
}