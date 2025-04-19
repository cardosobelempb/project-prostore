import { IService } from "@shared/core";
import { Product } from "../entities";
import { IProductRepository } from "../entities/repositoies/product-repository";

export class ProductFindById implements IService<string, Product.IOUT> {
  constructor(private readonly productRepositor: IProductRepository) {}

  async execute(input: string): Promise<Product.IOUT | null> {
    const product = this.productRepositor.findById(input);
    if (!product) {
      throw new Error("Product not found");
    }

    return product;
  }
}
