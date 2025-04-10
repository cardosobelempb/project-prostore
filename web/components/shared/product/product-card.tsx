import { Card, CardContent, CardHeader } from "@/components/ui/card"

import { Product } from "@/lib/types/product.type"
import Image from "next/image"
import Link from "next/link"
import ProductPrice from "./product-price"

type ProductCardProps = {
	product: Product.Props
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<Card className="w-full max-w-sm plce">
			<CardHeader className="p-0 items-center">
				<Link href={`/product/${product.slug}`}>
					<Image
						priority={true}
						src={product.images![0]}
						alt={product.name}
						height={300}
						width={300}
					/>
				</Link>
			</CardHeader>
			<CardContent className="p-4 grid gap-4">
				<div className="text-xs">{product.brand}</div>
				<Link href={`/product/${product.slug}`}>
					<h2 className="text-sm font-medium">
						{/* {product.name.substring(0, 20).trim().concat("...")} */}
						{product.name}
					</h2>
				</Link>
				<div className="flex-between gap-4">
					<p>{product.rating.toString()} stars</p>
					{product.stock > 0 ? (
						<ProductPrice className="font-bold" value={Number(product.price)} />
					) : (
						<p className="text-destructive">Out of Stock</p>
					)}
				</div>
			</CardContent>
		</Card>
	)
}

export default ProductCard
