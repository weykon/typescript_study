export interface Hkt<I = unknown, O = unknown> {
  [Hkt.isHkt]: never,
  [Hkt.input]: I,
  [Hkt.output]: O,
}

export declare namespace Hkt {
  const isHkt: unique symbol
  const input: unique symbol
  const output: unique symbol

  type Input<T extends Hkt<any, any>> =
    T[typeof Hkt.input]

  type Output<T extends Hkt<any, any>, I extends Input<T>> =
    (T & { [input]: I })[typeof output]

  interface Compose<O, A extends Hkt<any, O>, B extends Hkt<any, Input<A>>> extends Hkt<Input<B>, O> {
    [output]: Output<A, Output<B, Input<this>>>,
  }

  interface Constant<T, I = unknown> extends Hkt<I, T> { }
}

interface ArrayHkt extends Hkt<unknown> {
  [Hkt.output]: Array<Hkt.Input<this>>
}

type X = Hkt.Output<ArrayHkt, number> // Array<number>

// ------------------------------ --
// ------------------------------ --
// ------------------------------ --
// ------------------------------ --
// ------------------------------ --
// ------------------------------ --
// self code
interface SpecificObjec extends Hkt<unknown> {
  [Hkt.output]: BaseProps & Hkt.Input<this>
}
type BaseProps = {
  name: string, id: number
}

type XX = Hkt.Output<ArrayHkt, number> // Array<number>

type Y = Hkt.Output<SpecificObjec, { Ok: boolean }>

// 作为泛型、类型以变量的思维
// 确实，类型与类型之间的对接，用一个类型来表示，
// 而这个类型是定义下来的class或者interface
// 通性类型要继承hkt来取得通性部分
// 接入部分就没有要求了。

type YY<_Y> = Hkt.Output<SpecificObjec, _Y>

type NewContanierToYY = YY<{ describe: '这样可以达到无限包裹了' }>

// 因为假设没有这款写法， 使用原始
type DataBase = { anything: string }
type NewThing = DataBase & {newthing: string}
type SecondThing = DataBase & {newthing: string}

// but i can 
// interface BaseTHingForHkt extends Hkt<>
