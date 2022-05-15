import 'reflect-metadata'
namespace Autowired {
    const Autowired = (target: any, key: string) => {
        console.log(target, key);
        const type = Reflect.getMetadata('design:type', target, key)
        return target[key] = new type()
    }
    class Key {
        constructor(private name:string){}
    }
    class Person {
        heHasAKey: Key = new Key('myKey')
    }

    class LetMeTest {
        @Autowired
        person!: Person
        test() {
            console.log(this.person.heHasAKey);
        }
    }

    new LetMeTest().test();
}