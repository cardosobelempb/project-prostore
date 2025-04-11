import { APP_NAME } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBasket } from "lucide-react"

import HeaderMenu from "./header-menu"
import { logo } from "@/public/assets"

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex-between">
				<div className="flex-start">
					<Link rel="preload" as="image" href="/" className="flex-start">
						<ShoppingBasket className="stroke-white bg-yellow-400 w-12 h-12 p-1 rounded" />
						<span className="hidden lg:block font-bold text-2xl ml-3">{APP_NAME}</span>
					</Link>
				</div>
				<HeaderMenu />
			</div>
		</header>
	)
}

export default Header
