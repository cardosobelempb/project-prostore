import { IService } from "@shared/core";

import { IProductRepository } from "../entities/repositoies/product-repository";
import { IProduct } from "../entities/product.interface";

export class ProductFindById implements IService<string, IProduct.IOUT> {
  constructor(private readonly productRepositor: IProductRepository) {}

  async execute(input: string): Promise<IProduct.IOUT | null> {
    const product = this.productRepositor.findById(input);
    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }
}
