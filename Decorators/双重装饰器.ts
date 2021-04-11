namespace doubleDecorator {
    class SomeClass {
        public classThing: string = 'people'
        constructor() {

        }
        @decoratorA() @decoratorB()
        todo() {
            console.log('todo', this.classThing)
        }
    }

    function decoratorA() {
        return function (tagetProp: any, funcName: string, descriptor: PropertyDescriptor) {
            let ori = descriptor.value
            descriptor.value = function () {
                (<SomeClass>this).classThing = 'monster';
                console.log('a')
                ori.call(this)
            }
        }
    }

    function decoratorB() {
        return function (tagetProp: any, funcName: string, descriptor: PropertyDescriptor) {
            let ori = descriptor.value
            descriptor.value = function () {
                (<SomeClass>this).classThing = 'toy';
                console.log('b')
                ori.call(this)
            }
        }
    }

    let a = new SomeClass();
    console.log(a.classThing)
    a.todo()
}