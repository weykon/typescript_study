namespace templateStringType {

    type World = "world";

    type Greeting = `hello ${World}`;




    // replace all
    type ReplaceAll<S, A extends string, B extends string> =
        string extends S ? '' :
        S extends '' ? '' :
        S extends `${infer L}${A}${infer R}` ? `${L}${B}${ReplaceAll<R, A, B>}` : S

    type t6 = ReplaceAll<'hello world', 'o', 'ø'> // 'hellø wørld'

    function test<T extends t6>(params: T) {

    }

    test("hellø wørld");

    type replace<S, A extends string, B extends string> =
        string extends S ? "" : (S extends `${infer L}${A}${infer R}` ? `${L}${B}${ReplaceAll<R, A, B>}` : S)

    type t5 = replace<'ooo', 'o', 'ø'>
}
