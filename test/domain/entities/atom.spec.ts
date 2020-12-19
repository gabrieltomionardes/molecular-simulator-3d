import { Atom } from '../../../src/domain/entities/atom'

describe('Atom', () => {
  test('should return fail if symbol is empty', () => {
    const maybeAtom = Atom.create({
      symbol: '',
      valence: 1
    })

    expect(maybeAtom.isFailure).toBe(true)
    expect(maybeAtom?.error?.message).toBe('The symbol can not be empty')
  })

  test('should return fail if valence is negative', () => {
    const maybeHydrogen = Atom.create({
      symbol: 'H',
      valence: -1
    })

    expect(maybeHydrogen.isFailure).toBe(true)
    expect(maybeHydrogen.error?.message).toBe('The valence can not be negative')
  })

  test('should return ok if props is ok', () => {
    const maybeHydrogen = Atom.create({
      symbol: 'H',
      valence: 1
    })

    expect(maybeHydrogen.isFailure).toBe(false)
    expect(maybeHydrogen.value).toBeTruthy()
  })

  test('should return is stable if valence equals chemical bonds (hydrogen)', () => {
    const maybeHydrogen = Atom.create({
      symbol: 'H',
      valence: 1
    })

    const { value: hydrogen } = maybeHydrogen

    hydrogen?.bond()

    expect(hydrogen?.isStable).toBe(true)
  })

  test('should return is stable if valence equals chemical bonds (carbon)', () => {
    const maybeHydrogen = Atom.create({
      symbol: 'C',
      valence: 4
    })

    const { value: hydrogen } = maybeHydrogen

    hydrogen?.bond(4)

    expect(hydrogen?.isStable).toBe(true)
  })

  test('should return is not stable if valence equals chemical bonds (carbon)', () => {
    const maybeHydrogen = Atom.create({
      symbol: 'C',
      valence: 4
    })

    const { value: hydrogen } = maybeHydrogen

    hydrogen?.bond(3)

    expect(hydrogen?.isStable).toBe(false)
  })
})
