export interface iStorage {
    road: number
    stand: number
    row: number
}

 export interface iStorageResponse extends iStorage {
    id: string
}

export interface iStorageUpdate {
    road?: number
    stand?: number
    row?: number
}