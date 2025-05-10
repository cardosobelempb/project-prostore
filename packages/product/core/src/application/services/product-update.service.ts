import { IService, left, ResourceNotFoundError, right } from '@shared/core'
import { IProduct } from '../../../dist'
import { ProductRepository } from '../../infrastruecture'

export class ProductUpdateService
  implements IService<IProduct.IUpdateRequest, IProduct.IUpdateResponse>
{
  constructor(private readonly productRepositor: ProductRepository) {}

  async execute(
    request: IProduct.IUpdateRequest,
  ): Promise<IProduct.IUpdateResponse> {
    const product = await this.productRepositor.findById(request.productId)

    if (!product) {
      return left(new ResourceNotFoundError(''))
    }

    const result = product.clone({ ...request })

    await this.productRepositor.update(result)

    return right({})
  }
}
