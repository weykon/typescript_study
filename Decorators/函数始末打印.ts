function FuncLog(targetPropertype: Object, propName: string, descriptor: PropertyDescriptor) {
    let ori = descriptor.value
    descriptor.value = function () {
        console.log(`@ Start--------> ...${propName} -function`);
        let t0 = new Date().getTime()
        ori(targetPropertype)
        let t1 = new Date().getTime()
        console.log(`@ End--------> ... ${propName} -function\n ${(t1 - t0) / 1000}s`);
    }

}


class SomeClass {
    @FuncLog
    public Todo(a?: Object) {
        console.log('1', a);
    }
}

// 装饰器工厂，根据传入的参数调用相应的装饰器
function log(...args: any[]) {
    switch (args.length) {
        case 3: // 可能是方法装饰器或参数装饰器
            // 如果第三个参数是数字，那么它是索引，所以这是参数装饰器
            if (typeof args[2] === "number") {
                return logParameter.apply(this, args);
            }
            return logMethod.apply(this, args);
        case 2: // 属性装饰器 
            return logProperty.apply(this, args);
        case 1: // 类装饰器
            return logClass.apply(this, args);
        default: // 参数数目不合法
            throw new Error('Not a valid decorator');
    }
}
