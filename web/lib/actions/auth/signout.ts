"use server"

import { signOut } from "@/lib/auth"

export async function signOutAuth() {
	await signOut()
}
