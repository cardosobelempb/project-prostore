import { IPagination } from '@shared/core'

import { ProductRepository } from '../product-repository'
import { Product } from '../../../domain'

export class ProductInMemoryRepository implements ProductRepository {
  public items: Product[] = []

  async findById(id: string): Promise<Product | null> {
    const product = this.items.find(item => item.id.getValue() === id)
    if (!product) {
      return null
    }
    return product
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    const product = this.items.find(item => item.slug.getValue() === slug)
    if (!product) {
      return null
    }
    return product
  }

  async findMany({ page }: IPagination): Promise<Product[]> {
    const products = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return products
  }
  async create(entity: Product): Promise<void> {
    this.items.push(entity)
  }
  async update(entity: Product): Promise<void> {
    const index = this.items.findIndex(item => item.id === entity.id)
    this.items[index] = entity
  }
  async delete(entity: Product): Promise<void> {
    const index = this.items.findIndex(item => item.id === entity.id)
    this.items.splice(index, 1)
  }
}
