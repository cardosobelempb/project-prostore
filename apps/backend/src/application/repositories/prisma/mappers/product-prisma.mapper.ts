import { Prisma, Product as ProductMapper } from '@prisma/client';
import { Product } from '@product/core';
import { UUIDVO } from '@shared/core';

export class ProductPrismaMapper {
  static toDomain(raw: ProductMapper): Product {
    return Product.create(
      {
        id: raw.id,
        name: raw.name,
        images: raw.images,
        slug: raw.slug,
        category: raw.category,
        description: raw.description,
        price: raw.price.toNumber(),
        brand: raw.brand,
        rating: raw.rating.toNumber(),
        numReviews: raw.numReviews,
        stock: raw.stock,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UUIDVO(raw.id),
    );
  }

  static toPrisma(entity: Product): Prisma.ProductUncheckedCreateInput {
    return {
      id: entity.id.getValue(),
      name: entity.name.getValue(),
      images: entity.images,
      slug: entity.slug.getValue(),
      category: entity.category,
      description: entity.description.getValue(),
      price: entity.price,
      brand: entity.brand,
      rating: entity.rating,
      numReviews: entity.numReviews,
      stock: entity.stock,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
