import { Atom } from '../../../src/domain/entities/atom'

describe('Atom', () => {
  test('should return fail if symbol is empty', () => {
    const maybeAtom = Atom.create('')

    expect(maybeAtom.isFailure).toBe(true)
    expect(maybeAtom?.error?.message).toBe('Simbolo não pode ser vázio')
  })

  test('should return ok if symbol is not empty', () => {
    const maybeHydrogen = Atom.create('H')

    expect(maybeHydrogen.isFailure).toBe(false)
    expect(maybeHydrogen.value).toBeTruthy()
    expect(maybeHydrogen.value?.symbol).toBe('H')
  })
})
