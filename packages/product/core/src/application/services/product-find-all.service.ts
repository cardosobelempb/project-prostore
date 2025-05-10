import { IPagination, IService, right } from '@shared/core'
import { IProduct, ProductRepository } from '../../infrastruecture'

export class ProductFindAllService
  implements IService<IPagination, IProduct.IFindManyResponse>
{
  constructor(private readonly productRepositor: ProductRepository) {}
  async execute({
    page,
  }: IPagination): Promise<IProduct.IFindManyResponse | null> {
    const products = await this.productRepositor.findMany({ page })

    return right({ products })
  }
}
