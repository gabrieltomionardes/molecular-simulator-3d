type ResultProps<T> = {
  isSuccess: boolean
  value?: T
  error?: Error
}

export class Result<T> {
  private readonly _isSuccess: boolean
  private readonly _value: T
  private readonly _error: Error
  private constructor (props: ResultProps<T>) {
    this._isSuccess = props.isSuccess
    this._value = props.value
    this._error = props.error
  }

  public static ok<R>(value: R): Result<R> {
    return new Result({ isSuccess: true, value })
  }

  public static fail<R> (error: Error): Result<R> {
    return new Result({ isSuccess: false, error })
  }

  public get value (): T {
    return this._value
  }

  public get isFailure(): boolean {
    return !this._isSuccess
  }

  public get error(): Error {
    return this._error
  }
}