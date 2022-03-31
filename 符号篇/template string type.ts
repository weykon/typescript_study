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

    type t5 = replace<'ooo2o', 'o', 'ø'>

    //去除
    type P = 'P'
    type NoP = Exclude<"P" | 'O', `P`>
    type HasP = Extract<"P" | 'O', `P`>
    const name: NoP = 'O' // only "O"   

    type BanWord = `${string}dao` | `` | ' '
    type FindSome<Input, Find extends string> =
        string extends Input ? '' :
        Input extends '' ?
        '' : Input extends `${infer L}${Find}${infer R}` ? `包含了${Find}` : Input

    const inputStr = '123123dao'
    type inputType = typeof inputStr
    type isCan = inputType extends `${string}dao` ? never : inputType
    function checkName<T extends string>(name: T extends BanWord ? never : T) {

    }
    // checkName("dao/dao")   //error.   OK 


}
