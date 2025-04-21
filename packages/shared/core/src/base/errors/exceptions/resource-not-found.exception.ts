export class AppResourceNotFoundException extends Error {
  name = "ResourceNotFoundException";

  constructor(message: string) {
    super(message);
  }
}
