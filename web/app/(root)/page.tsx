import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Home",
}

const HomePage = () => {
	return (
		<>
			<h1>Prostore</h1>
		</>
	)
}
export default HomePage
