/** 联合类型 */
module 合集 {

    type Name = { name: string };
    type Age = { age: number };
    type NameOrAge = Name | Age;
    type MyBoolean = true | false;

    type ServerResponse = { status: "ok" } | { status: "err", log: string }
    const a: ServerResponse = { status: "ok", log: "string" } //err 


    type A = { a: boolean, b: boolean }
    type B = { a: boolean, c: boolean }
    type C = { a: boolean, b: boolean, c: boolean }
    type D = A | B
    type Check0 = C extends D ? true : false // true
    type Check1 = D extends C ? true : false // false
}
