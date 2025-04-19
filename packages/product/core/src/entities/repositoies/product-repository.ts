import { IRepository } from "@shared/core";
import { Product } from "../product.entity";

export interface IProductRepository extends IRepository<Product.IPROPS> {}
