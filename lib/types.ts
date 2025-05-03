import { z } from 'zod'

export interface ListingSchema {
    id: number,
    title: string,
    description: string,
    listingType: string,
    address: string,
    rent: Number,
    numRooms: Number,
    contactInfo: string
}