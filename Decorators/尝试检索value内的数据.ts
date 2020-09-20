namespace 非正常尝试 {
    class SomeClass {
        constructor() {
        }

        showBanner() { }
        @ModifyDecorator()
        todo() {
            this.showBanner()
        }
    }


    function ModifyDecorator(param?: any) {
        return function (targetProp: any, funcName: string, descriptor: PropertyDescriptor) {
            let oriStr = descriptor.value.toString()
            // oriStr = 'function to() {\nababbc\n}'
            let oriFuncInner = oriStr.match(/\{([^}]+)\}/)[1];
            let newFuncStr = (<string>oriFuncInner).replace('this.showBanner()', 'console.log("new FUNC...hahaha")')
            let newFunc = new Function(newFuncStr);
            descriptor.value = newFunc;
        }
    }



    let a = new SomeClass();
    a.todo();

    //成功
}
