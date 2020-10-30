"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function FuncLog1(target, propName, descriptor) {
    let ori = descriptor.value;
    descriptor.value = function () {
        console.log(`@ Start--------> ...${propName} -function`);
        let t0 = new Date().getTime();
        ori.call(this);
        let t1 = new Date().getTime();
        console.log(`@ End--------> ... ${propName} -function\n ${(t1 - t0)}`);
    };
}
function FuncLog2() {
    return function (target, propName, descriptor) {
        let ori = descriptor.value;
        descriptor.value = function () {
            console.log(`@ Start--------> ...${propName} -function`, typeof this);
            let t0 = new Date().getTime();
            ori.call(this);
            let t1 = new Date().getTime();
            console.log(`@ End--------> ... ${propName} -function\n ${(t1 - t0)}`);
        };
    };
}
class test {
    constructor(count = 10) {
        this.count = count;
        this.count = count;
    }
    ifFunc() {
        let a = 0;
        let count = this.count;
        for (let i = 0; i < count; i++) {
            if (i >= 1) {
                a++;
            }
        }
    }
    Nsymbol() {
        let a = 0;
        let count = this.count;
        for (let i = 0; i < count; i++) {
            i >= 1
                && a++;
        }
    }
}
__decorate([
    FuncLog1
], test.prototype, "ifFunc", null);
__decorate([
    FuncLog2()
], test.prototype, "Nsymbol", null);
let a = new test(100000000);
// a.Nsymbol();
a.ifFunc();
// 结论： && 更快
//# sourceMappingURL=Test&&IF.js.map