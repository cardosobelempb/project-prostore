import ProductList from "@/components/shared/product/product-list"
import { getLatestProducts } from "@/lib/actions/product/get-latest-products.action"

import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Home",
}

const HomePage = async () => {
	const latesProducts = await getLatestProducts()

	return (
		<div className="space-y-8">
			<h2 className="h2-bold">Latest Products</h2>
			<ProductList title="Newest Arrivals" products={latesProducts} limit={6} />
		</div>
	)
}
export default HomePage
