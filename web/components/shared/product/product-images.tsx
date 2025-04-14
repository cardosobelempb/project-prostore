"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const ProductImages = ({ images }: { images: string[] }) => {
	const [current, setCurrent] = useState(0)
	return (
		<div className="space-y-4">
			<Image
				className="min-h-[300px] object-cover object-center"
				alt={"product image"}
				src={`${images[current]}`}
				width={1000}
				height={1000}
			/>
			<div className="flex rounded">
				{images.map((image, index) => (
					<div
						key={index}
						className={cn(
							"rounded border-2 mr-2 cursor-pointer hover:border-orange-600",
							current === index && "border-orange-500 rounded border-2"
						)}
						onClick={() => setCurrent(index)}
					>
						<Image
							className="w-14 h-14"
							alt="image"
							src={`${image}`}
							width={100}
							height={100}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductImages
