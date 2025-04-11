import { Prisma } from "@prisma/client"
import z from "zod"
import { ProductValidator } from "@/lib/validators/product.validator"

export namespace Product {
	export type Props = z.infer<typeof ProductValidator.create> & {
		id?: string
		rating: Prisma.Decimal
		numReviews: number
		isActive: boolean
		createdAt: Date
		updatedAt?: Date | null
	}
}
