import {
  IService,
  left,
  NotAllwedError,
  ResourceNotFoundError,
  right,
  UUIDVO,
} from '@shared/core'

import { IProduct } from '../../infrastruecture'
import { ProductRepository } from '../../infrastruecture/repositoies/product-repository'

export class ProductFindBySlugService
  implements IService<IProduct.IGetBySlugRequest, IProduct.IGetBySlugResponse>
{
  constructor(private readonly productRepositor: ProductRepository) {}

  async execute(
    request: IProduct.IGetBySlugRequest,
  ): Promise<IProduct.IGetBySlugResponse | null> {
    const product = await this.productRepositor.getProductBySlug(request.slug)
    if (!product) {
      return left(new ResourceNotFoundError('Resource not fond'))
    }

    if (!product.id.equals(new UUIDVO(request.slug))) {
      return left(new NotAllwedError('Not allowed'))
    }

    return right({ product })
  }
}
