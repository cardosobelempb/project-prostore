'use server'

import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants'
import prisma from '@/db/prisma'
import { ObjectUtils } from '@shared/core'

// get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  })

  return ObjectUtils.convertToPlainObject(data)
}
