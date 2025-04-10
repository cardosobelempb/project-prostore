import { UseCaseError } from "./usecase-erro.interface"

export class AppointmentAlreadyExistsError extends Error implements UseCaseError {
	constructor(identifier: string) {
		super(`Appointment "${identifier}" already exists.`)
	}
}
