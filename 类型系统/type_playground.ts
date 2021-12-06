namespace type_playground {

    class A { num!: number }
    class B { string!: string }

    type a = A;

    type b = B;

    function func<T extends A | B>(t: T) {
        type C = T extends A ? A : B;

    }


    type InferSomething<T> = T extends infer U ? U : any;


    type MyFuncReturnValue = ReturnType<() => true>

    type inferred = InferSomething<true>


    type InferSomething2<T> = T extends { a: infer A, b: number } ? A : any;
    type inffered1 = InferSomething2<{ a: "hello", b: 1 }>


    type KeyType<T> = T extends Array<infer P> ? P : any;

    const c: KeyType<Array<number>> = 1

    const d = new Array<number>()

    function selectInferType<T>(t: T extends Array<infer R> ? R : never) { }

    selectInferType<Array<number>>(1)
}