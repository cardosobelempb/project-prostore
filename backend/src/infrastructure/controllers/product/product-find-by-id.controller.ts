import { ProductFindByIdService } from '@/src/application/services/product/product-find-by-id.service';
import { ZodValidationPipe } from '@/src/shared/infrastructure/pipes/zod-validation.pipe';
import { ProductPresenter } from '@core';
import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { z } from 'zod';

export namespace ProductFindByIdControllerProps {
  const schema = z.object({
    productId: z.string().uuid('Error 404 Not Found id doesn’t exist'),
  });

  export const request = new ZodValidationPipe(schema);

  export type Request = z.infer<typeof schema>;

  export interface Response {
    entity: ProductPresenter;
  }
}

@Controller('/products/:productId')
export class ProductFindByIdController {
  constructor(
    private readonly productFindByIdService: ProductFindByIdService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async handle(
    @Param(ProductFindByIdControllerProps.request)
    { productId }: ProductFindByIdControllerProps.Request,
  ): Promise<ProductFindByIdControllerProps.Response> {
    const result = await this.productFindByIdService.execute(productId);

    if (result.isLeft()) {
      const error = result.value;
      throw new BadRequestException(error.message);
    }

    return {
      entity: ProductPresenter.toHTTP(result.value.entity),
    };
  }
}
