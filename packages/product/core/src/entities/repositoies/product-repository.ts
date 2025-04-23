import { Repository } from '@shared/core'
import { IProduct } from '../product.interface'

export interface IProductRepository extends Repository<IProduct.IPROPS> {}
