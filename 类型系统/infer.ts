namespace InferInfer {
    type Unpacked<T> = T extends (infer U)[] ? U : T;

    type Foo<T> = T extends { a: infer U, b: infer R } ? U | R : T
    type T1 = Foo<{ a: number, b: string }>

    type FilterTypes<T, U> = {
        [Key in keyof T]: T[Key] extends U ? Key : never
    };

    type Stack<T> = {
        top: T;
        rest: Stack<T>;
    } | null;
}