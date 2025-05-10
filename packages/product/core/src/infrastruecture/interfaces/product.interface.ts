import {
  BadRequestError,
  ConflictError,
  Either,
  IPagination,
  NotAllwedError,
  ResourceNotFoundError,
} from '@shared/core'
import { Product } from '../../domain/entities/product.entity'
import { ProductPresenter } from '../presenters/product-presenter'

export namespace IProduct {
  export interface IProps {
    id?: string
    name: string
    slug: string
    category: string
    description: string
    images: string[]
    price: number
    brand: string
    rating: number
    numReviews: number
    stock: number
    isFeatured?: boolean
    banner?: string | null
    isActive?: boolean
    createdAt: Date
    updatedAt?: Date | null
  }

  export interface IUpdateProduct extends Partial<IProps> {}

  export interface ICreateRequest {
    id?: string
    name: string
    slug: string
    category: string
    description: string
    images: string[]
    price: number
    brand: string
    rating: number
    numReviews: number
    stock: number
    isFeatured?: boolean
    banner?: string | null
  }

  export type ICreateResponse = Either<
    ResourceNotFoundError | ConflictError | BadRequestError,
    {}
  >

  export interface IDeleteRequest {
    productId: string
  }

  export type IDeleteResponse = Either<
    ResourceNotFoundError | NotAllwedError,
    {}
  >

  export interface IFindByIdRequest {
    productId: string
  }

  export type IFindByIdResponse = Either<
    ResourceNotFoundError | NotAllwedError,
    {
      product: Product
    }
  >

  export interface IGetBySlugRequest {
    slug: string
  }

  export type IGetBySlugResponse = Either<
    ResourceNotFoundError | NotAllwedError,
    {
      product: Product
    }
  >

  export type IFindByIdPresenter = {
    product: ProductPresenter
  }

  export interface IFindManyRequest {
    params: IPagination
  }

  export type IFindManyResponse = Either<
    null,
    {
      products: ProductPresenter[]
    }
  >

  export interface IUpdateRequest {
    productId: string
    name: string
    slug: string
    category: string
    description: string
    images?: string[]
    price: number
    brand: string
    rating: number
    numReviews: number
    stock: number
    isFeatured?: boolean
    banner?: string | null
    userId?: string
  }

  export type IUpdateResponse = Either<
    ResourceNotFoundError | NotAllwedError | BadRequestError,
    {}
  >
}
