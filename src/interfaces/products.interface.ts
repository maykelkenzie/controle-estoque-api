import { iStorage } from "./storage.interface"

export interface iProduct {
    name: string
    price: number
    quantity: number
    validity: Date
    isActive?: boolean
    storage?: iStorage
}

export interface iProductResponse extends iProduct {
    id: string
    createdAt: Date
    updatedAt: Date
}

export interface iProductUpdate {
    name?: string
    price?: number
    quantity?: number
    validity?: Date
}