function FuncLog1(target: any, propName: string, descriptor: PropertyDescriptor) {
    let ori = descriptor.value
    descriptor.value = function () {
        console.log(`@ Start--------> ...${propName} -function`);
        let t0 = new Date().getTime()
        ori.call(this)
        let t1 = new Date().getTime()
        console.log(`@ End--------> ... ${propName} -function\n ${(t1 - t0)}`);
    }
}
function FuncLog2() {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        let ori = descriptor.value
        descriptor.value = function () {
            console.log(`@ Start--------> ...${propName} -function`, typeof this);
            let t0 = new Date().getTime()
            ori.call(this)
            let t1 = new Date().getTime()
            console.log(`@ End--------> ... ${propName} -function\n ${(t1 - t0)}`);
        }
    }
}

class test {
    constructor(
        public count: number = 10
    ) {
        this.count = count
    }
    @FuncLog1
    ifFunc() {
        let a = 0
        let count = this.count
        for (let i = 0; i < count; i++) {
            if (i >= 1) {
                a++
            }
        }
    }
    @FuncLog2()
    Nsymbol() {
        let a = 0;
        let count = this.count
        for (let i = 0; i < count; i++) {
            i >= 1
                && a++
        }
    }
}

let a = new test(1000000000);
a.ifFunc();
a.Nsymbol();


// 结论： && 更快


