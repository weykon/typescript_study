// before: we have to repeat many times
namespace A {
    type MapValuesWithFoo<O> = {
        [K in keyof O]: Foo<O[K]>
    }
    type MapValuesWithBar<O> = {
        [K in keyof O]: Bar<O[K]>
    }
}
namespace B {
    // with HKT
    type MapValues<O, T<~>> = {
        [K in keyof O]: T<O[K]>
    }
    type MapValuesWithFoo<O> = MapValues<O, Foo>
    type MapValuesWithBar<O> = MapValues<O, Bar>
}

namespace C {
    // with high order generics
    type MapValues<T<~>> = <O>{
        [K in keyof O]: T<O[K]>
  }
    type MapValuesWithFoo = MapValues<Foo>
    type MapValuesWithBar = MapValues<Bar>
}

declare function foo<T>(v: T): T
type params = Parameters<typeof foo>    // type params = for<T> [v: T]
type rets = ReturnType<typeof foo>      // type rets = for<T> T
type FT = for<T> FC<Props<T>>;


interface Functor<T> {
    map: <A, B>(f: (x: A) => B, t: $<T, [A]>) => $<T, [B]>;
  }