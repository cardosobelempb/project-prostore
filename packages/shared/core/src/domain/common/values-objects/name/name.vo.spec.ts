import { NameVO } from './name.vo'

describe('NameVO', () => {
  it('should create a valid name', () => {
    const name = new NameVO('Maria da Silva')
    expect(name.getValue()).toBe('Maria da Silva')
  })

  it('should trim and normalize spaces', () => {
    const name = new NameVO('   João    da  Silva ')
    expect(name.getValue()).toBe('João da Silva')
  })

  it('should throw on empty string', () => {
    expect(() => new NameVO('')).toThrow('Name cannot be empty.')
  })

  it('should throw on invalid characters', () => {
    expect(() => new NameVO('John123')).toThrow()
    expect(() => new NameVO('***')).toThrow()
  })

  it('should throw if too short', () => {
    expect(() => new NameVO('A')).toThrow()
  })

  it('should throw if too long', () => {
    const longName = 'A'.repeat(100)
    expect(() => new NameVO(longName)).toThrow()
  })

  it('should compare equality', () => {
    const name1 = new NameVO('João Silva')
    const name2 = new NameVO('João Silva')
    const name3 = new NameVO('Maria Silva')

    expect(name1.equals(name2)).toBe(true)
    expect(name1.equals(name3)).toBe(false)
  })
})
