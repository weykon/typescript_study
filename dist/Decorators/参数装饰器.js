"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ParamDecorators;
(function (ParamDecorators) {
    function paramDecrat(target, methodName, paramIndex) {
        console.log(target, methodName, paramIndex);
    }
    class Hello {
        checkType(a, ...t) { }
    }
    __decorate([
        __param(1, paramDecrat)
    ], Hello.prototype, "checkType", null);
    ParamDecorators.a = new Hello();
    ParamDecorators.a.checkType('1', 2);
})(ParamDecorators || (ParamDecorators = {}));
//# sourceMappingURL=%E5%8F%82%E6%95%B0%E8%A3%85%E9%A5%B0%E5%99%A8.js.map