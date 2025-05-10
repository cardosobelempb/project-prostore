import { DescriptionVO, IService, NameVO, right, SlugVO } from '@shared/core'
import { IProduct, ProductRepository } from '../../infrastruecture'
import { Product } from '../../domain'

export class ProductCreateService
  implements IService<IProduct.ICreateRequest, IProduct.ICreateResponse>
{
  constructor(private readonly productRepository: ProductRepository) {}
  async execute(
    request: IProduct.ICreateRequest,
  ): Promise<IProduct.ICreateResponse> {
    const { name } = request

    // Cria as entidades para validação
    const nameVO = new NameVO(name, { minLength: 3, maxLength: 60 })
    const descriptionVO = DescriptionVO.create(request.description)
    const slugVO = SlugVO.create(request.slug)

    const entity = Product.create({
      name: nameVO.getValue(),
      slug: slugVO.getValue(),
      category: request.category,
      description: descriptionVO.getValue(),
      images: request.images,
      price: request.price,
      brand: request.banner || '',
      rating: request.rating,
      numReviews: request.numReviews,
      stock: request.stock,
    })

    // Salva o usuário no banco de dados
    await this.productRepository.create(entity)

    return right({})
  }
}
