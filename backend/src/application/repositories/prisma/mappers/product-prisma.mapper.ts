import { ProductEntity, UniqueEntityUUID } from '@core';
import { Product as ProductMapperPrisma, Prisma } from '@prisma/client';

export class ProductPrismaMapper {
  static toDomain(raw: ProductMapperPrisma): ProductEntity {
    return ProductEntity.create(
      {
        name: raw.name,
        brand: raw.brand,
        category: raw.category,
        description: raw.description,
        images: raw.images,
        isFeatured: raw.isFeatured,
        numReviews: raw.numReviews,
        price: new Prisma.Decimal(raw.price).toNumber(),
        rating: new Prisma.Decimal(raw.rating).toNumber(),
        slug: raw.slug,
        isActive: raw.isActive,
        stock: raw.stock,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityUUID(raw.id),
    );
  }

  static toPrisma(entity: ProductEntity): Prisma.ProductUncheckedCreateInput {
    return {
      id: entity.id.toString(),
      name: entity.name,
      slug: entity.slug,
      category: entity.category,
      description: entity.description,
      brand: entity.brand,
      stock: entity.stock,
      isActive: entity.isActive,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
