export namespace 循环 {

    // 递归
    type Example<
        C extends boolean = true,
        Tuple extends unknown[] = [1]
    > = C extends true ? Example<false, [...Tuple, 1]> : Tuple;

    type Result = Example

    // 分布式条件
    type Example1<T> = T extends number ? T : never;
    type Result1 = Example1<"1" | "2" | 3 | 4>

    // 映射
    type Example2<T extends string | number | symbol> = {
        [K in T]: K
    }

    type Result2 = Example2<"1" | "2" | 3 | 4>

    const AA = {
        BB: { a: 1, b: 1 },
        CC: { a: 1, b: 1, c: 1 }
    }

    // 元组转union
    type ElementOf<T> = T extends Array<infer P> ? P : never;
    type Tuple = [string, number];
    type TupleToUnion = ElementOf<Tuple>; // type TupleToUnion = string | number

    // 
    type KeysAndValues<Something> = {
        [k in keyof Something]: {
            key: k,
            value: Something[k]
        }
    }[keyof Something]
    type something = {
        a: number,
        b: string,
        c: "literal"
    }
    type Re = KeysAndValues<something>

    type ToUnionOfArray<T> = T extends infer I ? I[] : never;

    // 模式匹配理解 
    'abc'.replace(/a(b)c/, '$1,$1,$1');    // => 'b,b,b'

    // 去掉最后一个元素 pop
    type Pop<T extends unknown[]> = T extends [...infer Rest, infer R] ?
        [...Rest] : never;

    // shift
    type Shift<T extends unknown[]> = T extends [infer R, ...infer Rest] ?
        [...Rest] : never;

    // trim 
    type TrimLeft<Str extends string> = Str extends `${' ' | '\t' | '\n'}${infer Rest}` ?
        TrimLeft<Rest> : Str;

    // 类型添加、High Kinded Type HTK
    type GenericFunction = (...x: never[]) => unknown;
    abstract class HKT {
        readonly _1?: unknown;
        new!: GenericFunction
    }
    type Apply<F extends HKT, _1> = ReturnType<
        (F & {
            readonly _1: _1;
        })["new"]
    >;
    type MapTuple<X extends readonly unknown[], F extends HKT> = {
        [K in keyof X]: Apply<F, X[K]>;
    };

    // 声明一个接口然后保持一个只读属性，然后Type出这个属性的类型。

    interface Container {
        readonly x?: unknown;
        readonly y: this["x"]
    }

    type Y = (Container & { readonly x: number })["y"]



    // 普通数组递归

    // example
    type ArrayStruct<Head extends string, Tail extends string[]> = [Head, ...Tail];
    type Join<Arr extends string[], Sp extends string>
        = Arr extends [] ? ''
        : Arr extends ArrayStruct<infer Head, []> ? Head
        : Arr extends ArrayStruct<infer Head, infer Tail> ?
        `${Head}${Sp}${Join<Tail, Sp>}`
        : never;
    type Test = Join<['foo', 'bar', 'hello'], ','>

    // my
    type ArrayAvatar<Head extends string, Tail extends string[]> = [Head, ...Tail];

    type MyJoin<Arr extends string[], Symbol extends string>
        = Arr extends [] ? ''
        : Arr extends ArrayAvatar<infer Head, []> ? Head
        : Arr extends ArrayAvatar<infer Head, infer Tail> ?
        `${Head}${Symbol}${MyJoin<Tail, Symbol>}`
        : never
    type Test0 = MyJoin<['foo', 'bar', 'hello'], '|'>

    type IsEmptyArr<T> = T extends [] ? '' : never
    type IsOneElementArr<T> = T extends ArrayAvatar<infer Head, []> ? Head : never
    type Circle<T, Symbol extends string> =
        T extends ArrayAvatar<infer Head, infer Tail> ?
        `${Head}${Symbol}${MyJoin<Tail, Symbol>}`
        : never
    type AbstractJoinFn<Arr extends string[], Symbol extends string>
        = IsEmptyArr<Arr> extends '' ?
        IsOneElementArr<Arr> extends Arr[0] ?
        Circle<Arr, Symbol> : never : never
    type Test1 = AbstractJoinFn<['foo', 'bar', 'hello'], '|'>
    // 尾递归思想
    // Process(Environment) -> Environment'
    //    Test(Environment) -> True | False
    // Loop(Test,Process,Environment) -> if(Test(Environment))
    //                                   then Loop(Test,Process,Environment)
    //                                   else Environment
}