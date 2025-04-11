"use server"

import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants"
import { PrismaClient } from "@prisma/client"

// get latest products
export async function getLatestProducts() {
	const prisma = new PrismaClient()
	const data = await prisma.product.findMany({
		take: LATEST_PRODUCTS_LIMIT,
		orderBy: { createdAt: "desc" },
	})

	return data
}
