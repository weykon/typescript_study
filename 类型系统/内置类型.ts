module 内置类型 {
    interface User { }
    type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;

    type Func = () => User
    type Test = ReturnType<Func>


    type Constructor = new (...args: any[]) => any;
    type ConstructorParameters<T extends new (...args: any[]) => any>
        = T extends new (...args: infer P) => any ? P : never;
    class TestClass {
        constructor(public name: string, public age: number) { }
    }
    type InstanceType<T extends new (...args: any[]) => any>
        = T extends new (...args: any[]) => infer R ? R : any;

    type Param = ConstructorParameters<typeof TestClass>;
    type Instace = InstanceType<typeof TestClass>
    
}