import { BadRequestError } from '../../errors'

interface NameOptions {
  minLength?: number
  maxLength?: number
}

export class PhoneVO {
  private readonly value: string

  constructor(phone: string, options: NameOptions = {}) {
    const cleaned = PhoneVO.clean(phone)

    if (!PhoneVO.isValid(cleaned)) {
      throw new BadRequestError(`Telefone inválido: ${phone}`)
    }

    const min = options.minLength ?? 11
    const max = options.maxLength ?? 20

    this.validate(phone, min, max)
    this.value = phone

    this.value = cleaned
  }

  private validate(phone: string, min: number, max: number): void {
    if (!phone || phone.trim().length === 0) {
      throw new BadRequestError('Phone cannot be empty.')
    }

    if (phone.length < min) {
      throw new BadRequestError(`Phone must be at least ${min} characters.`)
    }

    if (phone.length > max) {
      throw new BadRequestError(`Phone must be at most ${max} characters.`)
    }
  }

  public getValue(): string {
    return this.value
  }

  public equals(other: PhoneVO): boolean {
    return this.value === other.getValue()
  }

  public format(): string {
    const digits = this.value

    const ddd = digits.slice(0, 2)
    const isMobile = digits.length === 11 // 9 dígitos + DDD
    const firstPart = isMobile ? digits.slice(2, 7) : digits.slice(2, 6)
    const secondPart = isMobile ? digits.slice(7) : digits.slice(6)

    return `(${ddd}) ${firstPart}-${secondPart}`
  }

  public static isValid(phone: string): boolean {
    const cleaned = this.clean(phone)

    // Aceita apenas números com DDD (2) + número (8 ou 9 dígitos)
    if (!/^\d{10,11}$/.test(cleaned)) return false

    const ddd = cleaned.slice(0, 2)
    const number = cleaned.slice(2)

    // Opcional: rejeita DDDs inválidos (lista parcial)
    if (!['11', '21', '31', '41', '51', '61', '71', '81', '91'].includes(ddd)) {
      return false
    }

    // Valida número fixo ou celular
    if (number.length === 9 && number[0] !== '9') return false // celular deve começar com 9
    if (
      number.length === 8 &&
      number[0] &&
      !['2', '3', '4', '5'].includes(number[0])
    )
      return false // fixo

    return true
  }

  private static clean(phone: string): string {
    return phone.replace(/\D/g, '')
  }
}

/*
const tel1 = new PhoneVO('(11) 91234-5678')
const tel2 = new PhoneVO('+55 (11) 91234-5678')

console.log(tel1.getValue()) // "11912345678"
console.log(tel2.equals(tel1)) // true

const tel3 = new PhoneVO('11912345678')
console.log(tel3.format()) // (11) 91234-5678

const fixo = new PhoneVO('(11) 2345-6789')
console.log(fixo.format()) // (11) 2345-6789

const tel4 = new PhoneVO('11912345678')
console.log(tel4.format()) // (11) 91234-5678
*/
