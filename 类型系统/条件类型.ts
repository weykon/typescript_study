module 条件类型 {
    function process(text: string | null): string | null {
        return text && text.replace(/f/g, 'p');
    }

    // process("foo").toUpperCase() // err
    process("foo")?.toUpperCase()

    // function processT<T extends string | null>(text: T):string extends T ? string: null{
    //     return text && text.replace(/f/g,'p')
    // }



    type Diff<T, U> = T extends U ? never : T;
    type DiffDemo = Diff<'a' | 'b' | 'c', 'a' | 'b'>

    // 递归
    type Stack<T> = {
        top: T;
        rest: Stack<T>
    } | null;

    interface IdLabel { id: number }
    interface NameLabel { name: string }
    type NameOrId<T extends number | string> = T extends number
        ? IdLabel
        : NameLabel;



    type MessageOf<T extends { message: unknown }> = T["message"]

    interface Email {
        message: string;
    }
    interface Dog {
        bark(): void
    }

    type EmailMessageContents = MessageOf<Email>


    // Or
    type MessageOf_<T> = T extends { message: unknown } ? T['message'] : never


    type Flatten<T> = T extends any[] ? T[number] : T;
    type Str = Flatten<string[]>

    type Flatten_<Type> = Type extends Array<infer Item> ? Item : Type;



    type ParamType<T> = T extends (param: infer P) => any ? P : T;


    interface User {
        name: string
        age: number
    }
    type Func = (user: User) => void;

    type Param = ParamType<Func>
    type AA = ParamType<string>

    type arrayEleType = Flatten_<Array<string>>
}