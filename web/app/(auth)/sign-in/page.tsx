import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { APP_NAME } from "@/lib/constants"
import CredentialsSignInForm from "@/components/credentials-signIn-form/credentials-signIn-form"

export const metadata: Metadata = {
	title: "Sign In",
}

const SignInPage = () => {
	return (
		<div className="w-full max-w-md mx-auto">
			<Card>
				<CardHeader className="space-y-4">
					<Link href="/" className="flex-center">
						<Image
							className="w-24 h-24"
							priority={true}
							src={"assets/images/logo.svg"}
							width={100}
							height={100}
							alt={`${APP_NAME} logo`}
						/>
					</Link>
					<CardTitle className="text-center">Sign In</CardTitle>
					<CardDescription className="text-center">
						Select a method to sign in to your account
						<CredentialsSignInForm />
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">{/* FORM HERE */}</CardContent>
			</Card>
		</div>
	)
}

export default SignInPage
