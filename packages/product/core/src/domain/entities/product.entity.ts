import {
  DescriptionVO,
  Entity,
  NameVO,
  Optional,
  SlugVO,
  UUIDVO,
} from '@shared/core'
import { IProduct } from '../../infrastruecture/interfaces'

export class Product extends Entity<IProduct.IProps> {
  readonly name: NameVO
  readonly slug: SlugVO
  readonly description: DescriptionVO

  constructor(props: IProduct.IProps, id?: UUIDVO) {
    super(props, id)
    this.name = new NameVO(props.name)
    this.slug = SlugVO.create(props.slug)
    this.description = DescriptionVO.create(props.description)
  }

  get category() {
    return this.props.category
  }

  get images() {
    return this.props.images
  }

  get price() {
    return this.props.price
  }

  get brand() {
    return this.props.brand
  }

  get rating() {
    return this.props.rating
  }

  get numReviews() {
    return this.props.numReviews
  }

  get stock() {
    return this.props.stock
  }

  get isFeatured() {
    return this.props.isFeatured
  }

  get banner() {
    return this.props.banner
  }

  get isActive() {
    return this.props.isActive
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  static create(
    props: Optional<IProduct.IProps, 'createdAt'>,
    id?: UUIDVO,
  ): Product {
    const now = new Date()
    return new Product(
      {
        ...props,
        createdAt: props.createdAt ?? now,
        updatedAt: now,
      },
      id,
    )
  }

  clone(override: Partial<IProduct.IProps> = {}, id?: UUIDVO): Product {
    return Product.create(
      {
        ...this.props,
        ...override,
      },
      id,
    )
  }
}
