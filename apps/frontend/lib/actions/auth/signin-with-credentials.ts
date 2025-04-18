"use server"

import { signIn } from "@/lib/auth"
import { AuthSchema } from "@/lib/validators/auth.schema"
import { isRedirectError } from "next/dist/client/components/redirect-error"

export async function signInWithCredentials(prevState: unknown, formData: FormData) {
	try {
		// Set user from form and validate it with Zod schema
		const user = AuthSchema.signInForm.parse({
			email: formData.get("email"),
			password: formData.get("password"),
		})

		await signIn("credentials", user)

		return { success: true, message: "Signed in successfully" }
	} catch (error) {
		if (isRedirectError(error)) {
			throw error
		}

		return { success: false, message: "Invalid email or password" }
	}
}
