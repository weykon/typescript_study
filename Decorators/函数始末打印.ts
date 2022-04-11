export namespace 函数打印 {

    function FuncLog(targetPropertype: any, propName: string, descriptor: PropertyDescriptor) {
        // console.log('targetPropertype', targetPropertype, 'propName', propName)
        let ori = descriptor.value
        descriptor.value = async function (...args: any[]) {
            console.log(`%cStart--- @:${propName}(${[...arguments]}) `, "background:green");
            const t0 = new Date().getTime()
            const res = await ori.call(this, ...args)
            const t1 = new Date().getTime()
            console.log(`%cEnd--- @:${propName}(${[...arguments]}) ${(t1 - t0) }ms`, "background:red");
            return res
        }
        return descriptor
    }

    class SomeClass {
        constructor(public index: number) {
            this.index = index
        }
        @FuncLog
        public Todo(num: number) {
            console.log('index', this.index, num);
        }
    }

    let aa = new SomeClass(4)
    let bb = new SomeClass(7)

    aa.Todo(1)
    bb.Todo(2)
    // // 装饰器工厂，根据传入的参数调用相应的装饰器
    // function log(...args: any[]) {
    //     switch (args.length) {
    //         case 3: // 可能是方法装饰器或参数装饰器
    //             // 如果第三个参数是数字，那么它是索引，所以这是参数装饰器
    //             if (typeof args[2] === "number") {
    //                 return logParameter.apply(this, args);
    //             }
    //             return logMethod.apply(this, args);
    //         case 2: // 属性装饰器 
    //             return logProperty.apply(this, args);
    //         case 1: // 类装饰器
    //             return logClass.apply(this, args);
    //         default: // 参数数目不合法
    //             throw new Error('Not a valid decorator');
    //     }
    // }

}
