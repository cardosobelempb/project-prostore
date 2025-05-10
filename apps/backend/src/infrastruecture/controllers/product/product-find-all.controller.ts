import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';

import {
  IProduct,
  ProductFindAllService,
  ProductPresenter,
} from '@product/core';
import { IPagination, right } from '@shared/core';

@Controller('products')
export class ProductFindAllController {
  constructor(private readonly productFindAllService: ProductFindAllService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async handle(@Query() { page }: IPagination) {
    const result = await this.productFindAllService.execute({ page });
    const products = result.value.products;
    return {
      products: products.map((p) => ProductPresenter.toHTTP(p)),
    };
  }
}
