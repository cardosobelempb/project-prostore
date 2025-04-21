import { IPagination } from "@shared/core";

import { IProductRepository } from "../product-repository";
import { IProduct } from "../../product.interface";

export class ProductInMemoryRepository implements IProductRepository {
  public items: IProduct.IPROPS[] = [];

  async findById(id: string): Promise<IProduct.IPROPS | null> {
    const product = this.items.find((item) => item.id === id);
    if (!product) {
      return null;
    }
    return product;
  }
  async findMany({ page }: IPagination): Promise<IProduct.IPROPS[]> {
    const products = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20);

    return products;
  }
  async create(entity: IProduct.IPROPS): Promise<void> {
    this.items.push(entity);
  }
  async update(entity: IProduct.IPROPS): Promise<void> {
    const index = this.items.findIndex((item) => item.id === entity.id);
    this.items[index] = entity;
  }
  async delete(entity: IProduct.IPROPS): Promise<void> {
    const index = this.items.findIndex((item) => item.id === entity.id);
    this.items.splice(index, 1);
  }
}
