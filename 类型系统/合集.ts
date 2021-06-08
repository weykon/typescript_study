/** 联合类型 */
module 合集 {

    type Name = { name: string };
    type Age = { age: number };
    type NameOrAge = Name | Age;
    type MyBoolean = true | false;

    type ServerResponse = { status: "ok" } | { status: "err", log: string }
    const a: ServerResponse = { status: "ok", log: "string" } //err 
}
