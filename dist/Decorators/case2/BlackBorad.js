"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function addAge(args) {
    return function (target) {
        target.prototype.age = args;
    };
}
let Hello = class Hello {
    constructor() {
        this.age = 1;
        console.log('hello');
        this.name = 'yugo';
    }
};
Hello = __decorate([
    addAge(18)
], Hello);
console.log(Hello.prototype.age); //18
let hello = new Hello();
console.log(hello.age); //18
//------------------------------------
function dcrat(args) {
    return function (target) {
        target.prototype.prop = args;
    };
}
let Normal = class Normal {
    constructor() {
        console.log('Normal ctor...');
        console.log('Normal ctor done .... ');
    }
    canModifyFunc() {
        console.log('OriginFunc');
    }
};
Normal = __decorate([
    dcrat(2)
], Normal);
exports.Normal = Normal;
//---------------------
//# sourceMappingURL=BlackBorad.js.map