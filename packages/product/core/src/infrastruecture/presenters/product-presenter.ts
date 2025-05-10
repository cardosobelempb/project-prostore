import { DateUtils } from '@shared/core'
import { Product } from '../../domain/entities/product.entity'

export class ProductPresenter {
  static toHTTP(entity: Partial<Product>) {
    return {
      id: entity.id?.getValue(),
      name: entity.name?.getValue(),
      description: entity.description?.getValue(),
      images: entity.images,
      createdAt: entity.createdAt,
      // updatedAt: DateUtils.formatDate(entity.updatedAt!),
    }
  }
}
