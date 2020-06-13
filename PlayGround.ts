/** 装饰器 */
export namespace Decorators {
    export function f() {
        console.log("f(): evaluated");
        return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
            console.log("f(): called");
        }
    }

    function g() {
        console.log("g(): evaluated");
        return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
            console.log("g(): called");
        }
    }

    export class C {
        @little_decorator()
        method() { todoSomething() }
    }

    function little_decorator() {
        console.log('little_decorator start')
        return function (_target: any, _propertyKey: string, _descriptor: PropertyDescriptor) {
            console.log(`little_decorator : end ${_target},${_propertyKey}`)
        }
    }


    function todoSomething() {
        console.log('todoSomething')
    }
}