import { BadRequestError } from '../../errors'

export class UUIDVO {
  private readonly value: string

  constructor(uuid?: string) {
    const finalUUID = uuid ?? UUIDVO.generate()

    if (!UUIDVO.isValid(finalUUID)) {
      throw new BadRequestError(`Invalid UUIDv4 format: "${finalUUID}"`)
    }

    this.value = finalUUID
  }

  // Retorna o valor encapsulado
  public getValue(): string {
    return this.value
  }

  public equals(id: UUIDVO) {
    return id.getValue() === this.value
  }

  // Verifica se o UUID atual é válido (útil em cenários mais flexíveis)
  public isValid(): boolean {
    return UUIDVO.isValid(this.value)
  }

  // Gera um UUIDv4 válido
  public static generate(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  // Valida se um UUID é v4 válido
  public static isValid(uuid: string): boolean {
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return regex.test(uuid)
  }
}
