import { Result } from '../../shared/result'

export class Atom {
  private readonly _symbol: string
  private constructor (symbol: string) {
    this._symbol = symbol
  }

  public static create (symbol: string): Result<Atom> {
    if (symbol.length === 0) {
      return Result.fail<Atom>(new Error('Simbolo não pode ser vázio'))
    }

    return Result.ok<Atom>(new Atom(symbol))
  }

  public get symbol () {
    return this._symbol
  }
}
