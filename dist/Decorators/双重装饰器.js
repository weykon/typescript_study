"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var doubleDecorator;
(function (doubleDecorator) {
    class SomeClass {
        constructor() {
            this.classThing = 'people';
        }
        todo() {
            console.log('todo', this.classThing);
        }
    }
    __decorate([
        decoratorA(),
        decoratorB()
    ], SomeClass.prototype, "todo", null);
    function decoratorA() {
        return function (tagetProp, funcName, descriptor) {
            let ori = descriptor.value;
            descriptor.value = function () {
                this.classThing = 'monster';
                console.log('a');
                ori.call(this);
            };
        };
    }
    function decoratorB() {
        return function (tagetProp, funcName, descriptor) {
            let ori = descriptor.value;
            descriptor.value = function () {
                this.classThing = 'toy';
                console.log('b');
                ori.call(this);
            };
        };
    }
    let a = new SomeClass();
    console.log(a.classThing);
    a.todo();
})(doubleDecorator || (doubleDecorator = {}));
//# sourceMappingURL=%E5%8F%8C%E9%87%8D%E8%A3%85%E9%A5%B0%E5%99%A8.js.map