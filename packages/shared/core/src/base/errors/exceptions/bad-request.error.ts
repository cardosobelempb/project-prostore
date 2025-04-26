export class BadRequestError extends Error {
  constructor(message: string) {
    super(message, { cause: { statusCode: 400 } })
  }
}
