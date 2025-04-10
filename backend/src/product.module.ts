import { ProductRepository } from '@core';
import { Module } from '@nestjs/common';
import { ProductFindByIdService } from './application/services/product/product-find-by-id.service';
import { DbModule } from './db.module';
import { ProductFindByIdController } from './infrastructure/controllers/product/product-find-by-id.controller';

@Module({
  imports: [DbModule],
  controllers: [ProductFindByIdController],
  providers: [
    {
      provide: ProductFindByIdService,
      useFactory: (productRepository: ProductRepository) => {
        return new ProductFindByIdService(productRepository);
      },
      inject: ['ProductRepository'],
    },
  ],
})
export class ProductModule {}
