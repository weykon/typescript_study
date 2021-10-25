export namespace 单例的装饰器 {
    function singleton<T extends { new(...args: any[]): {} }>(ctor: T) {
        return class extends ctor {
            public static i = new ctor();
        }
    }

    @singleton
    class A  {
    }

    console.log(A.i);
}


