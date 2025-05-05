import { BadRequestError } from '../../errors'
import { I18nContext } from './i18n-context/i18n-context'

interface NameOptions {
  minLength?: number
  maxLength?: number
}

const i18nMock: I18nContext = {
  t: (key, options) => {
    if (key === 'errors.name.tooShort') {
      return `Name must be at least ${options?.args?.min} characters.`
    }
    return key // fallback: retorna a chave original
  },
}

export class NameVO {
  private readonly value: string

  constructor(name: string, options: NameOptions = {}, i18n?: I18nContext) {
    const min = options.minLength ?? 2
    const max = options.maxLength ?? 50

    const cleaned = name.trim().replace(/\s+/g, ' ')
    NameVO.validate(cleaned, min, max, i18n)
    this.value = cleaned
  }

  public getValue(): string {
    return this.value
  }

  public equals(other: NameVO): boolean {
    return this.value === other.getValue()
  }

  public static validate(
    name: string,
    min: number,
    max: number,
    i18n?: I18nContext,
  ): void {
    if (!name || name.trim().length === 0) {
      throw new BadRequestError(
        i18n?.t('errors.name.empty') ?? 'Name cannot be empty.',
      )
    }

    if (name.length < min) {
      throw new BadRequestError(
        i18n?.t('errors.name.tooShort', { args: { min } }) ??
          `Name must be at least ${min} characters.`,
      )
    }

    if (name.length > max) {
      throw new BadRequestError(
        i18n?.t('errors.name.tooLong', { args: { max } }) ??
          `Name must be at most ${max} characters.`,
      )
    }

    const nameRegex = /^[\p{L}\s'-]+$/u
    if (!nameRegex.test(name)) {
      throw new BadRequestError(
        i18n?.t('errors.name.invalidChars') ??
          'Name can only contain letters, spaces, apostrophes, and hyphens.',
      )
    }
  }
}

/*
Quero um prompt para fazer uma sequência de stories no Instagram para quebrar objeções da minha audiência para divulgar minha marca e meu site chamado surb - servicos urbanos , sou desemvolvedor especializada em frontend e backend a e quero mostrar que eu domino o assunto e que a falta de desemvolvedor é um mito
*/
