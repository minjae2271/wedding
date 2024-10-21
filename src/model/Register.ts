export interface extraInfo {
    dressCode: string
    childrenAllowed: boolean | undefined
    giftPreference: string
    parking: string
    accomodation: string
}

export interface pictureInfo {
    previewMainImage: string
    previewImages: { image: string; name: string }[]
    mainImage: FormData | undefined
    images: { formData: FormData; name: string }[];
}

export interface timeInfo {
    date: Date | undefined,
    time: Date | undefined
}

export interface basicInfo {
    groomName: string
    brideName: string
    country: string
}

export interface locationInfo {
    locationName: string
    address: string
    lat: number
    lng: number
}

export interface registerInfo {
    basicInfo: basicInfo
    timeInfo: timeInfo
    locationInfo: locationInfo
    pictureInfo: pictureInfo
    extraInfo: extraInfo
}