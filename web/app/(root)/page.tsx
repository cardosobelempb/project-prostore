import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants"
import { Metadata } from "next"
import Loading from "../loading"

export const metadata: Metadata = {
	title: "Home",
}

const HomePage = () => {
	return (
		<>
			<h1 className="text-black">Prostore</h1>
		</>
	)
}
export default HomePage
