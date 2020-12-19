import { Result } from '../../shared/result'

export type AtomProps = {
  symbol: string
  valence: number
}
export class Atom {
  private readonly _symbol: string
  private readonly _valence: number
  private _chemicalBond: number = 0

  private constructor (props: AtomProps) {
    this._symbol = props.symbol
    this._valence = props.valence
  }

  public static create (props: AtomProps): Result<Atom> {
    const { symbol, valence } = props

    if (symbol.length === 0) {
      return Result.fail<Atom>(new Error('The symbol can not be empty'))
    }

    if (valence < 0) {
      return Result.fail<Atom>(new Error('The valence can not be negative'))
    }

    return Result.ok<Atom>(new Atom(props))
  }

  public bond (quantity = 1): void {
    this._chemicalBond += quantity
  }

  public get isStable (): boolean {
    return this._valence === this._chemicalBond
  }
}
