import { FieldMessage } from '../errors'
import { MethodArgumentNotValidError } from '../errors/exceptions'
import { ValidErrors } from './valid-errors.validator'
import { ValidationErrors } from './validation-errors.validator'
import { ValidatorConstants } from './validator-constants.validator'

export class ValidatorUtils {
  private constructor() {}

  static throwOnError(validErrors: ValidErrors): void {
    if (validErrors.hasErrors()) {
      throw new MethodArgumentNotValidError(ValidErrors.toString())
    }
  }

  static validMinLength(
    fieldName: string,
    minLength: number,
    validErrors: ValidErrors,
  ): boolean {
    if (fieldName?.trim().length < minLength) {
      validErrors.addErrors(
        fieldName,
        `${ValidatorConstants.MIN_LENGTH}${minLength} caracteres`,
      )
      return false
    }
    return true
  }

  static validMaxLength(
    fieldName: string,
    maxLength: number,
    FieldMessages: FieldMessage[],
  ): boolean {
    if (fieldName?.trim().length > maxLength) {
      FieldMessages.push(
        new FieldMessage(
          fieldName,
          `${ValidatorConstants.MIN_LENGTH}${maxLength} caracteres`,
        ),
      )
      return false
    }
    return true
  }

  static validateRequired(
    fieldName: string,
    validErrors: ValidErrors,
  ): boolean {
    if (!fieldName?.trim()) {
      validErrors.addErrors(
        fieldName,
        `${fieldName}${ValidatorConstants.REQUIRED_FIELD}`,
      )
      return false
    }
    return true
  }

  static validateRequiredObject(
    field: any,
    fieldName: string,
    validErrors: ValidationErrors,
  ): boolean {
    if (field === null || field === undefined) {
      validErrors.addErrors(fieldName, ValidatorConstants.REQUIRED_FIELD)
      return false
    }
    return true
  }

  static validateMaxLength(
    field: string,
    fieldName: string,
    maxLength: number,
    ValidateErrors: ValidationErrors,
  ): boolean {
    if (field?.trim().length > maxLength) {
      ValidateErrors.addErrors(
        fieldName,
        `${ValidatorConstants.MAX_LENGTH}${maxLength} caracteres`,
      )
      return false
    }
    return true
  }

  static validateMinLength(
    field: string,
    fieldName: string,
    minLength: number,
    ValidateErrors: ValidationErrors,
  ): boolean {
    if (field?.trim().length < minLength) {
      ValidateErrors.addErrors(
        fieldName,
        `${ValidatorConstants.MIN_LENGTH}${minLength} caracteres`,
      )
      return false
    }
    return true
  }

  static validateMaxValueValid(
    field: number | null,
    fieldName: string,
    maxValue: number,
    ValidateErrors: ValidationErrors,
  ): boolean {
    if (field !== null && field !== undefined && field > maxValue) {
      ValidateErrors.addErrors(fieldName, ValidatorConstants.MAX_VALUE)
      return false
    }
    return true
  }

  static validateMinValueValid(
    field: number | null,
    fieldName: string,
    minValue: number,
    ValidateErrors: ValidationErrors,
  ): boolean {
    if (field !== null && field !== undefined && field < minValue) {
      ValidateErrors.addErrors(fieldName, ValidatorConstants.MIN_VALUE)
      return false
    }
    return true
  }
}
