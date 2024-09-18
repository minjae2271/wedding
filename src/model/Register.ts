export interface extraInfo {
    dressCode: string
    childrenAllowed: boolean
    gitfPreference: string
}

export interface pictureInfo {
    pictures: string[]
}

export interface timeInfo {
    date: Date,
    time: string
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
    locationInfo: locationInfo
    pictureInfo: pictureInfo
    extraInfo: extraInfo
}