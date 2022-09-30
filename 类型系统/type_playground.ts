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

    type ReturnFunctionReturnType<T> = T extends () => (infer R) ? R : never

    type AA = () => () => number

    type What_a_FuntionBack = ReturnFunctionReturnType<AA>


    type Custom = { abc: string }
    let abc: { [k in keyof Partial<Custom>]: Custom[k] } = { abc: 'abc' }
    let cba: Partial<Custom> = { abc: 'abc' }
    type ABC = typeof abc
    type CBA = typeof cba
    type Eq0 = ABC extends CBA ? true : false
    type Eq1 = CBA extends ABC ? true : false
    const boolean0: Eq1 = true   // ok
    const boolean1: Eq1 = false   // err

    // how to check the Partial type and print out 
    type HowTheType = Partial<Custom>
}