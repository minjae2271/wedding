export interface basicInfo {
    groomName: string
    brideName: string
}

export interface locationInfo {
locationName: string
address: string
lat: number
lng: number
parking: string
}

export interface registerInfo {
basicInfo: basicInfo
locationInfo: locationInfo
}