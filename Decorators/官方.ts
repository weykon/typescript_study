function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    };
}

@classDecorator
class Greeter {
    property = 'property';
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

const greeter: Greeter = new Greeter('world');
console.log({ greeter }, greeter.hello)


