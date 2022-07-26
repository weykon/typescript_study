"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function FuncLog(targetPropertype, propName, descriptor) {
    let ori = descriptor.value;
    descriptor.value = function () {
        console.log(`@ Start--------> ...${propName} -function`);
        let t0 = new Date().getTime();
        console.log(targetPropertype);
        ori.bind(targetPropertype)();
        let t1 = new Date().getTime();
        console.log(`@ End--------> ... ${propName} -function\n ${(t1 - t0) / 1000}s`);
    };
}
class SomeClass {
    constructor(index) {
        this.index = index;
        this.index = index;
    }
    Todo() {
        console.log('index', this.index);
    }
}
__decorate([
    FuncLog
], SomeClass.prototype, "Todo", null);
//@ts-ignore
let aa = window.aa = new SomeClass(4);
//@ts-ignore
window.bb = new SomeClass(7);
aa.Todo();
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
//# sourceMappingURL=%E5%87%BD%E6%95%B0%E5%A7%8B%E6%9C%AB%E6%89%93%E5%8D%B0.js.map