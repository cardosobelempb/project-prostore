import { ProductEntity } from "../../anterprise/entity/product"
export class ProductPresenter {
	static toHTTP(product: ProductEntity) {
		return {
			id: product.id.toString(),
			name: product.name,
			isActive: product.isActive,
			createdAt: product.createdAt,
			updatedAt: product.updatedAt,
		}
	}
}
