import { Prisma } from "@prisma/client"
import { ProductValidator } from "../validators/product.validator"
import { z } from "zod"

export namespace Product {
	export type Props = {
		id?: string
		name: string
		slug: string
		category: string
		description: string
		images: string[]
		price: Prisma.Decimal
		brand: string
		rating: Prisma.Decimal
		numReviews: number
		stock: number
		isFeatured: boolean
		banner?: string | null
		isActive: boolean
		createdAt: Date
		updatedAt?: Date | null
	}

	export type Insert = z.infer<typeof ProductValidator.create> & {
		id?: string
		rating: Prisma.Decimal
		numReviews: number
		isActive: boolean
		createdAt: Date
		updatedAt?: Date | null
	}
}
