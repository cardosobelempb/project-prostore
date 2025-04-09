import { p11, p12, p21, p22, p31, p32, p41, p42, p51, p52, p61, p62 } from "@/app/assets"
import { randomUUID } from "crypto"
import { StaticImageData } from "next/image"

export type Product = {
	id?: string
	name: string
	slug: string
	category: string
	description: string
	images: (string | StaticImageData)[]
	price: number
	brand: string
	rating: number
	numReviews: number
	stock: number
	isFeatured: boolean
	banner?: string | null
}

export type ProductProps = {
	products: Product[]
}

const sampleData: ProductProps = {
	products: [
		{
			id: randomUUID(),
			name: "Polo Sporting Stretch Shirt",
			slug: "polo-sporting-stretch-shirt",
			category: "Men's Dress Shirts",
			description: "Classic Polo style with modern comfort",
			images: [p11, p12],
			price: 59.99,
			brand: "Polo",
			rating: 4.5,
			numReviews: 10,
			stock: 5,
			isFeatured: true,
			banner: "banner-1.jpg",
		},
		{
			id: randomUUID(),
			name: "Brooks Brothers Long Sleeved Shirt",
			slug: "brooks-brothers-long-sleeved-shirt",
			category: "Men's Dress Shirts",
			description: "Timeless style and premium comfort",
			images: [p21, p22],
			price: 85.9,
			brand: "Brooks Brothers",
			rating: 4.2,
			numReviews: 8,
			stock: 10,
			isFeatured: true,
			banner: "banner-2.jpg",
		},
		{
			id: randomUUID(),
			name: "Tommy Hilfiger Classic Fit Dress Shirt",
			slug: "tommy-hilfiger-classic-fit-dress-shirt",
			category: "Men's Dress Shirts",
			description: "A perfect blend of sophistication and comfort",
			images: [p31, p32],
			price: 99.95,
			brand: "Tommy Hilfiger",
			rating: 4.9,
			numReviews: 3,
			stock: 0,
			isFeatured: false,
			banner: null,
		},
		{
			id: randomUUID(),
			name: "Calvin Klein Slim Fit Stretch Shirt",
			slug: "calvin-klein-slim-fit-stretch-shirt",
			category: "Men's Dress Shirts",
			description: "Streamlined design with flexible stretch fabric",
			images: [p41, p42],
			price: 39.95,
			brand: "Calvin Klein",
			rating: 3.6,
			numReviews: 5,
			stock: 10,
			isFeatured: false,
			banner: null,
		},
		{
			id: randomUUID(),
			name: "Polo Ralph Lauren Oxford Shirt",
			slug: "polo-ralph-lauren-oxford-shirt",
			category: "Men's Dress Shirts",
			description: "Iconic Polo design with refined oxford fabric",
			images: [p51, p52],
			price: 79.99,
			brand: "Polo",
			rating: 4.7,
			numReviews: 18,
			stock: 6,
			isFeatured: false,
			banner: null,
		},
		{
			id: randomUUID(),
			name: "Polo Classic Pink Hoodie",
			slug: "polo-classic-pink-hoodie",
			category: "Men's Sweatshirts",
			description: "Soft, stylish, and perfect for laid-back days",
			images: [p61, p62],
			price: 99.99,
			brand: "Polo",
			rating: 4.6,
			numReviews: 12,
			stock: 8,
			isFeatured: true,
			banner: null,
		},
	],
}

export default sampleData
