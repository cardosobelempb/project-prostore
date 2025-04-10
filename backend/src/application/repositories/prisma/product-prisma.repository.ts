import { ProductEntity, Pagination, ProductRepository } from '@core';
import { PrismaService } from '@/src/shared/infrastructure/database/prisma/prisma.service';
import { ProductPrismaMapper } from './mappers/product-prisma.mapper';

export class ProductPrismaRepository implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findById(id: string): Promise<ProductEntity | null> {
    const entity = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!entity) return null;

    return ProductPrismaMapper.toDomain(entity);
  }
  findMany(params: Pagination.Params): Promise<ProductEntity[]> {
    throw new Error('Method not implemented.');
  }
  create(entity: ProductEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(entity: ProductEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(entity: ProductEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
