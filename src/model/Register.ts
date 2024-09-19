export interface extraInfo {
    dressCode: string
    childrenAllowed: boolean
    gitfPreference: string
}

export interface pictureInfo {
    previewImages: string[]
    images: FormData[]
}

export interface timeInfo {
    date: Date | undefined,
    time: Date | undefined
}

export interface basicInfo {
    groomName: string
    brideName: string
    language: string
}

export interface locationInfo {
    locationName: string
    address: string
    lat: number
    lng: number
    parking: string
    accomodation: string
}

export interface registerInfo {
    basicInfo: basicInfo
    timeInfo: timeInfo
    locationInfo: locationInfo
    pictureInfo: pictureInfo
    extraInfo: extraInfo
}