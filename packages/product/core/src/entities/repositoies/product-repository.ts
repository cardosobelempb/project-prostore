import { IRepository } from "@shared/core";
import { IProduct } from "../product.interface";

export interface IProductRepository extends IRepository<IProduct.IPROPS> {}
