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
        ori(targetPropertype);
        let t1 = new Date().getTime();
        console.log(`@ End--------> ... ${propName} -function\n ${(t1 - t0) / 1000}s`);
    };
}
class SomeClass {
    Todo(a) {
        console.log('1', a);
    }
}
__decorate([
    FuncLog
], SomeClass.prototype, "Todo", null);
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
//# sourceMappingURL=函数始末打印.js.map