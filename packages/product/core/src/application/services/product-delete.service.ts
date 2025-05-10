import {
  IService,
  left,
  NotAllwedError,
  ResourceNotFoundError,
  right,
  UUIDVO,
} from '@shared/core'
import { IProduct, ProductRepository } from '../../infrastruecture'

export class ProductDeleteService
  implements IService<IProduct.IDeleteRequest, IProduct.IDeleteResponse>
{
  constructor(private readonly productRepository: ProductRepository) {}
  async execute(
    input: IProduct.IDeleteRequest,
  ): Promise<IProduct.IDeleteResponse> {
    const { productId } = input
    const product = await this.productRepository.findById(productId)

    if (!product) {
      return left(new ResourceNotFoundError('Resource not fond'))
    }

    if (!product.id.equals(new UUIDVO(productId))) {
      return left(new NotAllwedError('Not allowed'))
    }

    await this.productRepository.delete(product)

    return right({})
  }
}
