import {
  IService,
  left,
  NotAllwedError,
  ResourceNotFoundError,
  right,
  UUIDVO,
} from '@shared/core'

import { IProduct } from '../../infrastruecture/interfaces'
import { ProductRepository } from '../../infrastruecture/repositoies/product-repository'

export class ProductFindByIdService
  implements IService<IProduct.IFindByIdRequest, IProduct.IFindByIdResponse>
{
  constructor(private readonly productRepositor: ProductRepository) {}

  async execute(
    request: IProduct.IFindByIdRequest,
  ): Promise<IProduct.IFindByIdResponse> {
    const product = await this.productRepositor.findById(request.productId)
    if (!product) {
      return left(new ResourceNotFoundError('Resource not fond'))
    }

    if (!product.id.equals(new UUIDVO(request.productId))) {
      return left(new NotAllwedError('Not allowed'))
    }

    return right({ product })
  }
}
