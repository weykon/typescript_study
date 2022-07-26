namespace InferInfer {
    // 声明待推断的类型

    type Unpacked<T> = T extends (infer U)[] ? U : T;

    type Foo<T> = T extends { a: infer U, b: infer R } ? U | R : T
    type T1 = Foo<{ a: number, b: string }>

    type FilterTypes<T, U> = {
        [Key in keyof T]: T[Key] extends U ? Key : never
    };
    type FilterTypes1<T, U> = {
        [Key in keyof T]: Key extends U ? Key : never
    };

    type Stack<T> = {
        top: T;
        rest: Stack<T>;
    } | null;

    type WorkStack = Stack<{ id: number }>;
    const workStack: WorkStack = {
        top: { id: 1 },
        rest: null,
    }

    // 泛中泛的标识？ 
    class TypeContanier<T>{

    }

    class HighContanier<T>{
        constructor() {
            return 1
        }
    }

    function toTypeOutLowestType<T>(t: T extends HighContanier<infer R> ? R : never) {

    }

    const a = new HighContanier<number>()
    toTypeOutLowestType<HighContanier<number>>(1)
}

