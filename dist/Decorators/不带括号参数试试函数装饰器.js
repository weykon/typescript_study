"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Ouerrrrrr;
(function (Ouerrrrrr) {
    function funcDecorator(target) {
        console.log('decorator', target);
    }
    class SomeClass {
        todo() {
        }
    }
    __decorate([
        funcDecorator //报错。  不成立    
    ], SomeClass.prototype, "todo", null);
})(Ouerrrrrr || (Ouerrrrrr = {}));
//# sourceMappingURL=%E4%B8%8D%E5%B8%A6%E6%8B%AC%E5%8F%B7%E5%8F%82%E6%95%B0%E8%AF%95%E8%AF%95%E5%87%BD%E6%95%B0%E8%A3%85%E9%A5%B0%E5%99%A8.js.map