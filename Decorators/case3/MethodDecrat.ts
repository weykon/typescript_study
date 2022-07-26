 class Greeter3 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet(input: string) {
        console.log('---中间--')
        console.log("Hello, " + this.greeting, input)
        console.log('---中间--')
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('-3', target.constructor, descriptor.value)
        let origin = descriptor.value
        descriptor.value = function (input: string) {
            console.log('重构', input);
            let newInput = input + 'New'
            origin.call(this, newInput)
            console.log('重构结束')
        };
        console.log('+3', target, descriptor)

    };
}

let gre = new Greeter3('what is this')
gre.greet('dame back')
