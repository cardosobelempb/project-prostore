import { Prisma } from "@prisma/client"

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

	export type Request = {
		products: Props[]
		title?: string
		limit?: number
	}
}
