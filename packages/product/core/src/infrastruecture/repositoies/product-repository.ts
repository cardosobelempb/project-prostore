import { Repository } from '@shared/core'
import { Product } from '../../domain'

export interface ProductRepository extends Repository<Product> {
  getProductBySlug(slug: string): Promise<Product | null>
}
