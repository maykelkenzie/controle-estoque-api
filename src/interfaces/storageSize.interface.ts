export interface iStorageSize {
    road: number
    stand: number
    row: number
}

export interface iStorageSizeResponse extends iStorageSize {
    id: number
}

export interface iStorageSizeUpdate {
    road?: number
    stand?: number
    row?: number
}