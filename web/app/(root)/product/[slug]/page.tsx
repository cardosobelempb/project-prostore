import ProductPrice from "@/components/shared/product/product-price"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProductBySlug } from "@/lib/actions/product/get-product-by-slug.action"
import { notFound } from "next/navigation"

type ProductDetailsPageProps = {
	params: Promise<{ slug: string }>
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = async ({ params }) => {
	const { slug } = await params
	const product = await getProductBySlug(slug)
	if (!product) notFound()

	console.log(product.name)
	return (
		<>
			<section>
				<div className="grid grid-cols1 md:grid-cols-5">
					<div className="col-span-2">
						<h1>Image</h1>
					</div>
					<div className="col-span-2 p-5">
						<div className="flex flex-col gap-6">
							<p>
								{product.brand} {product.category}
							</p>
							<h1 className="h3-bold">{product.name}</h1>
							<p>
								{Number(product.rating)} {product.numReviews} Reviwes
							</p>
							<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
								<ProductPrice
									className="bg-green-100 text-green-700 px-5 py-2 rounded-full"
									value={Number(product.price)}
								/>
							</div>
							<div className="mt-10">
								<h2 className="font-semibold">Description</h2>
								<p>{product.description}</p>
							</div>
						</div>
					</div>
					<div className="">
						<Card>
							<CardContent className="p-4 space-y-3">
								<div className="flex justify-between">
									<h3>Price</h3>
									<ProductPrice value={Number(product.price)} />
								</div>
								<div className="flex justify-between">
									<h4>Status</h4>
									{product.stock > 0 ? (
										<Badge variant="outline">In Stock</Badge>
									) : (
										<Badge variant="destructive">Out off Stock</Badge>
									)}
								</div>
								{product.stock > 0 && (
									<div className="flex-center">
										<Button className="w-full">Add To Cart</Button>
									</div>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</>
	)
}

export default ProductDetailsPage
