import { z } from "zod"

export namespace AuthSchema {
	export const signInForm = z.object({
		email: z
			.string()
			.email("Invalid email address")
			.min(3, "Email must be at least 3 characters"),
		password: z.string().min(3, "Password must be at least 3 characters"),
	})
}
