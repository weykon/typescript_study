/**
 * ---------
 *  装饰器 
 * -----------
 * */
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
            console.log('little_decorator : end', _target, _propertyKey)
        }
    }


    function todoSomething() {
        console.log('todoSomething')
    }

    /**
     * 泛型装饰器
     */
    export function TypeInDecorator<T>(t: { new(): T }) {

    }

    export function TypeInDecorator0<T>(t: new () => T) {

    }

    export function TypeInDecorator1<T>(target: new () => T) {

    }
}




/** 
 * -------------------------
 * Symbol 和 迭代器 
 * ---------------------
 * */
export namespace mSymbol {


    /**
     * ---------------------------------
     * 旧时实现
     * ---------------------------------
     */
    interface Iterator<T> {
        next(value?: any): IteratorResult<T>;
        return?(value?: any): IteratorResult<T>;
        throw?(e?: any): IteratorResult<T>;
    }
    interface IteratorResult<T> {
        done: boolean;
        value: T;
    }

    class Component {
        constructor(public name: string) { }
    }
    class Frame implements Iterator<Component>{
        private pointer = 0
        constructor(public name: string, public components: Component[]) {

        }

        public next(): IteratorResult<Component> {
            if (this.pointer < this.components.length) {
                return {
                    done: false,
                    value: this.components[this.pointer++]
                }
            } else {
                return {
                    done: true,
                    value: this.components[0] //null
                }
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
    class Frame1 implements Iterable<Component>{
        constructor(public name: string, public components: Component[]) { }

        [Symbol.iterator]() {
            let pointer = 0;
            let components = this.components

            return {
                next(): IteratorResult<Component> {
                    if (pointer < components.length) {
                        return {
                            done: false,
                            value: components[pointer++]
                        }
                    } else {
                        return {
                            done: true,
                            value: components[0]
                        };
                    }
                }
            }

        }
    }


    const build = Symbol("build")

    type Builder = {
        [K: string]: Builder
        [build]: () => string
    }
}  