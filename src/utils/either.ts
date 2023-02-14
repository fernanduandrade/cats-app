type Left<L> = { kind: 'left'; leftValue: L }
type Right<R> = { kind: 'right'; rightValue: R }

type EitherType<L, R> = Left<L> | Right<R>

export class Either<L, R> {
  // eslint-disable-next-line no-useless-constructor
  private constructor (private readonly value: EitherType<L, R>) {}

  static left<L, R> (left: L): Either<L, R> {
    return new Either<L, R>({ kind: 'left', leftValue: left })
  }

  static right<L, R> (right: R): Either<L, R> {
    return new Either<L, R>({ kind: 'right', rightValue: right })
  }

  isLeft (): boolean {
    return this.value.kind === 'left'
  }

  isRight (): boolean {
    return this.value.kind === 'right'
  }

  fold<T> (leftFn: (left: L) => T, rightFn: (right: R) => T): T {
    return this.value.kind === 'left'
      ? leftFn(this.value.leftValue)
      : rightFn(this.value.rightValue)
  }

  flatMap<T> (fn: (right: R) => Either<L, T>): Either<L, T> {
    return this.fold(
      leftValue => Either.left(leftValue),
      rightValue => fn(rightValue)
    )
  }

  flatMapLeft<T> (fn: (left: L) => Either<T, R>): Either<T, R> {
    return this.fold(
      leftValue => fn(leftValue),
      rightValue => Either.right(rightValue)
    )
  }

  map<T> (fn: (right: R) => T): Either<L, T> {
    return this.flatMap(right => Either.right(fn(right)))
  }

  mapLeft<T> (fn: (left: L) => T): Either<T, R> {
    return this.flatMapLeft(left => Either.left(fn(left)))
  }

  get (errorMessage?: string) {
    return this.getOrThrow(errorMessage)
  }

  getOrThrow (errorMessage?: string) {
    const throwFn = () => {
      throw Error(
        errorMessage || `Error has ocurred while retrieving value: ${this.value}`
      )
    }

    return this.fold(
      () => throwFn(),
      rightValue => rightValue
    )
  }

  getLeft () {
    const throwFn = () => {
      throw Error('The value is right: ' + JSON.stringify(this.value))
    }

    return this.fold(
      leftValue => leftValue,
      () => throwFn()
    )
  }

  getOrElse (defaulValue: R): R {
    return this.fold(
      () => defaulValue,
      someValue => someValue
    )
  }
}
