import { ProductEntity, Pagination, ProductRepository } from '@core';
import { PrismaService } from '@/src/shared/infrastructure/database/prisma/prisma.service';

export class ProductPrismaRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}
  findById(id: string): Promise<ProductEntity | null> {
    throw new Error('Method not implemented.');
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
