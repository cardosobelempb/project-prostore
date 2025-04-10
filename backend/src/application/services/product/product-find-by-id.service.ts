import {
  Either,
  left,
  ProductEntity,
  ProductRepository,
  ResourceNotFoundError,
  right,
} from '@core';

export namespace ProductFindByIdServiceProps {
  export interface Request {}

  export type Response = Either<
    ResourceNotFoundError,
    { entity: ProductEntity }
  >;
}

export class ProductFindByIdService {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(
    productId: string,
  ): Promise<ProductFindByIdServiceProps.Response> {
    const entity = await this.productRepository.findById(productId);

    if (!entity) {
      return left(new ResourceNotFoundError());
    }

    return right({ entity });
  }
}
