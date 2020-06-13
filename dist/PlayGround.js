"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decorators = void 0;
/** 装饰器 */
var Decorators;
(function (Decorators) {
    function f() {
        console.log("f(): evaluated");
        return function (_target, _propertyKey, _descriptor) {
            console.log("f(): called");
        };
    }
    Decorators.f = f;
    function g() {
        console.log("g(): evaluated");
        return function (_target, _propertyKey, _descriptor) {
            console.log("g(): called");
        };
    }
    var C = /** @class */ (function () {
        function C() {
        }
        C.prototype.method = function () { todoSomething(); };
        __decorate([
            little_decorator()
        ], C.prototype, "method", null);
        return C;
    }());
    Decorators.C = C;
    function little_decorator() {
        console.log('little_decorator start');
        return function (_target, _propertyKey, _descriptor) {
            console.log("little_decorator : end " + _target + "," + _propertyKey);
        };
    }
    function todoSomething() {
        console.log('todoSomething');
    }
})(Decorators = exports.Decorators || (exports.Decorators = {}));
//# sourceMappingURL=PlayGround.js.map