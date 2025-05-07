import { BadRequestError } from '../../errors'
import { I18nContext } from './i18n-context/i18n-context'

interface NameOptions {
  minLength?: number
  maxLength?: number
}

export class NameVO {
  private readonly value: string

  constructor(name: string, options: NameOptions = {}, i18n?: I18nContext) {
    const min = options.minLength ?? 2
    const max = options.maxLength ?? 50

    const cleaned = NameVO.normalize(name)
    NameVO.assertIsValid(cleaned, min, max, i18n)
    this.value = cleaned
  }

  public getValue(): string {
    return this.value
  }

  public equals(other: NameVO): boolean {
    return this.value === other.getValue()
  }

  private static normalize(name: string): string {
    return name.trim().replace(/\s+/g, ' ')
  }

  private static assertIsValid(
    name: string,
    min: number,
    max: number,
    i18n?: I18nContext,
  ): void {
    const t =
      i18n?.t ?? ((key: string, o?: any) => NameVO.defaultMessages(key, o))

    if (!name || name.trim().length === 0) {
      throw new BadRequestError(t('errors.name.empty'))
    }

    if (name.length < min) {
      throw new BadRequestError(t('errors.name.tooShort', { args: { min } }))
    }

    if (name.length > max) {
      throw new BadRequestError(t('errors.name.tooLong', { args: { max } }))
    }

    const parts = name.split(' ')
    if (parts.length < 2) {
      throw new BadRequestError(t('errors.name.surnameMissing'))
    }

    const nameRegex = /^[\p{L}\s'-]+$/u
    if (!nameRegex.test(name)) {
      throw new BadRequestError(t('errors.name.invalidChars'))
    }
  }

  private static defaultMessages(
    key: string,
    options?: { args?: Record<string, any> },
  ): string {
    const args = options?.args ?? {}
    const messages: Record<string, string> = {
      'errors.name.empty': 'Name cannot be empty.',
      'errors.name.tooShort': `Name must be at least ${args.min} characters.`,
      'errors.name.tooLong': `Name must be at most ${args.max} characters.`,
      'errors.name.surnameMissing': 'Surname is required.',
      'errors.name.invalidChars':
        'Name can only contain letters, spaces, apostrophes, and hyphens.',
    }

    return messages[key] ?? key
  }
}
