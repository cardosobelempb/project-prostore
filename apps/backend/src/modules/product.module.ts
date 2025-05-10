import { Module } from '@nestjs/common';
import { ProductFindAllService, ProductRepository } from '@product/core';
import { ProductFindAllController } from 'src/infrastruecture/controllers/product/product-find-all.controller';
import { PRODUCT_REPOSITORY } from 'src/shared/constants/repositories.constants';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductFindAllController],
  providers: [
    {
      provide: ProductFindAllService,
      useFactory: (productRepository: ProductRepository) => {
        return new ProductFindAllService(productRepository);
      },
      inject: [PRODUCT_REPOSITORY],
    },
  ],
})
export class ProductModule {}
