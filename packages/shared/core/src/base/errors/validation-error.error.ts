import { FieldMessage } from './field-message.error'
import { StandardError } from './standard-error.error'

export class ValidationError extends StandardError {
  private erros: FieldMessage[] = []

  constructor(
    timestamp: Date,
    status: number,
    error: string,
    message: string,
    path: string,
  ) {
    super(timestamp, status, error, message, path)
  }

  addErros(fieldName: string, message: string): void {
    this.erros.push(new FieldMessage(fieldName, message))
  }

  getErros(): FieldMessage[] {
    return this.erros
  }
}
