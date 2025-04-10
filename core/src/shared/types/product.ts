export namespace Product {
	export type Props = {
		id?: string
		name: string
		slug: string
		category: string
		description: string
		images: string[]
		price: number
		brand: string
		rating: number
		numReviews: number
		stock: number
		isFeatured: boolean
		banner?: string | null
		isActive: boolean
		createdAt: Date
		updatedAt?: Date | null
	}
}
