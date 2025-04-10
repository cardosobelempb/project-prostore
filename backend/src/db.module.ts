import { Module } from '@nestjs/common';
import { ProductPrismaRepository } from './application/repositories/prisma/product-prisma.repository';
import { PrismaService } from './shared/infrastructure/database/prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'ProductRepository',
      useClass: ProductPrismaRepository,
    },
    {
      provide: 'ProductRepository',
      useFactory: (prismaService: PrismaService) => {
        return new ProductPrismaRepository(prismaService);
      },
      inject: ['PrismaService'],
    },
  ],
  exports: [
    PrismaService,
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'ProductRepository',
      useClass: ProductPrismaRepository,
    },
    {
      provide: 'ProductRepository',
      useFactory: (prismaService: PrismaService) => {
        return new ProductPrismaRepository(prismaService);
      },
      inject: ['PrismaService'],
    },
  ],
})
export class DbModule {}
