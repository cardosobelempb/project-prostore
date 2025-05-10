import { IPagination } from '@shared/core';
import { Product, ProductRepository } from '@product/core';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { ProductPrismaMapper } from './mappers/product-prisma.mapper';

export class ProductPrismaRepository implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getProductBySlug(slug: string): Promise<Product | null> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });

    if (!product) {
      return null;
    }

    return ProductPrismaMapper.toDomain(product);
  }

  async findMany({ page }: IPagination): Promise<Product[]> {
    const products = await this.prismaService.product.findMany();

    return products.map(ProductPrismaMapper.toDomain);
  }

  async create(entity: Product): Promise<void> {
    const data = ProductPrismaMapper.toPrisma(entity);
    await this.prismaService.product.create({ data });
  }

  async update(entity: Product): Promise<void> {
    const product = ProductPrismaMapper.toPrisma(entity);
    await this.prismaService.product.update({
      where: {
        id: product.id,
      },
      data: product,
    });
  }

  async delete(entity: Product): Promise<void> {
    await this.prismaService.product.delete({
      where: {
        id: entity.id.getValue(),
      },
    });
  }
}
