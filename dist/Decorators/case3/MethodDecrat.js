"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet(input) {
        console.log('中间');
        console.log("Hello, " + this.greeting, input);
    }
}
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
exports.default = Greeter;
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log('-3', target.constructor, descriptor.value);
        let origin = descriptor.value;
        descriptor.value = function (input) {
            console.log('重构', input);
            let newInput = input + 'New';
            origin.call(this, newInput);
            console.log('重构结束');
        };
        console.log('+3', target, descriptor);
    };
}
//# sourceMappingURL=MethodDecrat.js.map