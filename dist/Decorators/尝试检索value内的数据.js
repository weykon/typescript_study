"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var 非正常尝试;
(function (非正常尝试) {
    class SomeClass {
        constructor() {
        }
        showBanner() { }
        todo() {
            this.showBanner();
        }
    }
    __decorate([
        ModifyDecorator()
    ], SomeClass.prototype, "todo", null);
    function ModifyDecorator(param) {
        return function (targetProp, funcName, descriptor) {
            let oriStr = descriptor.value.toString();
            // oriStr = 'function to() {\nababbc\n}'
            let oriFuncInner = oriStr.match(/\{([^}]+)\}/)[1];
            let newFuncStr = oriFuncInner.replace('this.showBanner()', 'console.log("new FUNC...hahaha")');
            let newFunc = new Function(newFuncStr);
            descriptor.value = newFunc;
        };
    }
    let a = new SomeClass();
    a.todo();
    //成功
})(非正常尝试 || (非正常尝试 = {}));
//# sourceMappingURL=%E5%B0%9D%E8%AF%95%E6%A3%80%E7%B4%A2value%E5%86%85%E7%9A%84%E6%95%B0%E6%8D%AE.js.map