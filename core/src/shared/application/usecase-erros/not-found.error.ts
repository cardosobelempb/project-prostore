import { UseCaseError } from "./usecase-erro.interface"
export class NotFoundError extends Error implements UseCaseError {
	constructor() {
		super("Not allowed")
	}
}
