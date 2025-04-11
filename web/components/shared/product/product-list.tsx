// import { Product } from "@core"
import { Product } from "@/lib/types/product.type"
import ProductCard from "./product-card"

const ProductList = ({ products, title, limit }: Product.Request) => {
	const limitedData = limit ? products?.slice(0, limit) : products
	return (
		<div className="my-10">
			<h2 className="h2-bold mb-4">{title}</h2>
			{limitedData?.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grow gap-4">
					{limitedData.map((product: Product.Props) => {
						return <ProductCard key={product.id} product={product} />
					})}
				</div>
			) : (
				<div>
					<p>No products found</p>
				</div>
			)}
		</div>
	)
}

export default ProductList
