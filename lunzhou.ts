import { person } from "./Decorators/DecoratorTest";

namespace 轮轴 {
    // type script
    console.log('程序开始')


    function todo(a: number, b: number) {
        console.log('todo 执行')

        console.log(a + b)
    }

    todo(20, 20);

    class Object {

    }

    class Person extends Object {
        name !: string
        chest?: string
        hight?: string
        education!: string

        constructor(name: string, education: string = "本科") {
            super();
            this.name = name
            this.education = education
        }
    }


    let lunzhou = new Person("轮轴")

    console.log(`${lunzhou.name} : ${lunzhou.education}`)


    function 低级_应聘(person: Person) {
        if (person.education === "本科") {
            return true
        } else {
            return false
        }
    }

    低级_应聘(lunzhou)
    class Car extends Object {

    }



    console.log('程序结束')


}