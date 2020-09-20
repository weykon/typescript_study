"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mSymbol = exports.Decorators = void 0;
/**
 * ---------
 *  装饰器
 * -----------
 * */
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
    class C {
        method() { todoSomething(); }
    }
    __decorate([
        little_decorator()
    ], C.prototype, "method", null);
    Decorators.C = C;
    function little_decorator() {
        console.log('little_decorator start');
        return function (_target, _propertyKey, _descriptor) {
            console.log('little_decorator : end', _target, _propertyKey);
        };
    }
    function todoSomething() {
        console.log('todoSomething');
    }
    /**
     * 泛型装饰器
     */
    function TypeInDecorator(t) {
    }
    Decorators.TypeInDecorator = TypeInDecorator;
    function TypeInDecorator0(t) {
    }
    Decorators.TypeInDecorator0 = TypeInDecorator0;
    function TypeInDecorator1(target) {
    }
    Decorators.TypeInDecorator1 = TypeInDecorator1;
})(Decorators = exports.Decorators || (exports.Decorators = {}));
/**
 * -------------------------
 * Symbol 和 迭代器
 * ---------------------
 * */
var mSymbol;
(function (mSymbol) {
    class Component {
        constructor(name) {
            this.name = name;
        }
    }
    class Frame {
        constructor(name, components) {
            this.name = name;
            this.components = components;
            this.pointer = 0;
        }
        next() {
            if (this.pointer < this.components.length) {
                return {
                    done: false,
                    value: this.components[this.pointer++]
                };
            }
            else {
                return {
                    done: true,
                    value: this.components[0] //null
                };
            }
        }
    }
    let frame = new Frame('Door', [
        new Component('top'),
        new Component('bottom'),
        new Component('left'),
        new Component('right')
    ]);
    let iteratorResult1 = frame.next(); // {done: false, value:Component:{name:'top'}}
    //...
    let iteratorResult4 = frame.next(); // {done: true, value : null}
    /**
    * ---------------------------------
    */
    /**
     * ---------------------------------
     * 新一次实现 ,  Symbol.iterator
     * ---------------------------------
     */
    class Frame1 {
        constructor(name, components) {
            this.name = name;
            this.components = components;
        }
        [Symbol.iterator]() {
            let pointer = 0;
            let components = this.components;
            return {
                next() {
                    if (pointer < components.length) {
                        return {
                            done: false,
                            value: components[pointer++]
                        };
                    }
                    else {
                        return {
                            done: true,
                            value: components[0]
                        };
                    }
                }
            };
        }
    }
})(mSymbol = exports.mSymbol || (exports.mSymbol = {}));
//# sourceMappingURL=PlayGround.js.map