import { Entity, Optional, UniqueEntityUUID } from "../../shared/enterprise"
import { Product } from "../../shared/types"

export class ProductEntity extends Entity<Product.Props> {
	get name() {
		return this.name
	}

	set name(name: string) {
		this.props.name = name
	}

	get slug() {
		return this.slug
	}

	set slug(slug: string) {
		this.props.slug = slug
	}

	get category() {
		return this.category
	}

	set category(category: string) {
		this.props.category = category
	}

	get description() {
		return this.description
	}

	set description(description: string) {
		this.props.description = description
	}

	get images() {
		return this.images
	}

	set images(images: string[]) {
		this.props.images = images
	}

	get price() {
		return this.price
	}

	set price(price: number) {
		this.props.price = price
	}

	get brand() {
		return this.brand
	}

	set brand(brand: string) {
		this.props.brand = brand
	}

	get rating() {
		return this.rating
	}

	set rating(rating: number) {
		this.props.rating = rating
	}

	get numReviews() {
		return this.numReviews
	}

	set numReviews(numReviews: number) {
		this.props.numReviews = numReviews
	}

	get stock() {
		return this.stock
	}

	set stock(stock: number) {
		this.props.stock = stock
	}

	get isFeatured() {
		return this.isFeatured
	}

	set isFeatured(isFeatured: boolean) {
		this.props.isFeatured = isFeatured
	}

	get banner() {
		return this.banner
	}

	set banner(banner: string | null) {
		this.props.banner = banner
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

	private touch() {
		this.props.updatedAt = new Date()
	}

	static create(
		props: Optional<Product.Props, "createdAt" | "updatedAt">,
		id?: UniqueEntityUUID
	) {
		const category = new ProductEntity(
			{
				...props,
				isActive: props.isActive ?? true,
				createdAt: props.createdAt ?? new Date(),
			},
			id
		)

		return category
	}
}
