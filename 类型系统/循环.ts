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

    // 映射 (固定写法)
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


}