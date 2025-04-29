export class ErrorConstants {
  private constructor() {}

  static readonly ENTITY_NOT_FOUND: string = '.Entity not found '
  static readonly RESOURCE_NOT_FOUND: string = '.Resource not found '
  static readonly VALID_SORT: string = '.No valid sortable fields were defined '
  static readonly EMAIL_NOT_FOUND: string = '.Email not found '
  static readonly USER_NOT_FOUND: string = '.User not found '
  static readonly USER_FOUND: string = '.User found '
  static readonly INTEGRITY_VIOLATION: string = '.Integrity violation '
  static readonly DATA_INTEGRITY_VIOLATION: string =
    '.Data integrity violation '
  static readonly INVALID_USER: string = '.Invalid user '
  static readonly ACCESS_DENIED: string = '.Access denied '
  static readonly FORBIDDEN: string = '.Forbidden '
  static readonly NOT_FOUND: string = '.Resource not found '
  static readonly BAD_REQUEST: string = '.Database exception '
  static readonly UNPROCESSABLE_ENTITY: string = '.Validation exception '
  static readonly VALIDATION_ERROR: string = '.Validation error '
  static readonly UNAUTHORIZED: string = '.Unauthorized '
  static readonly INVALID_CREDENTIALS: string = '.Invalid credentials '
  static readonly INVALID_TOKEN: string = '.Invalid token '
  static readonly INVALID_CREDENTIALS_OR_TOKEN: string =
    '.Invalid credentials or token '
}
