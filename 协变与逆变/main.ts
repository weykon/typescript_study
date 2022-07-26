export namespace Covariance_Inverter {
    type Cat = { meow: '~' }
    type Animal = {}

    let cat: Cat = { meow: '~' }

    let animal = {}



    animal = cat  // 这里不报错

    cat = animal  // 这里报错


}

export namespace Covariance_Inverter_from_rust {
    class Animal { }
    class Cat extends Animal { }
    class Dog extends Animal { }
    function capture<Animal>(x: Cage<Animal>) {
        x.inner = new Dog();   // 这里报错，但是在填入函数参数不报错，即不该在这里实例化
    }
    class Cage<T> {
        inner: T;
    }
    capture(new Cage<Dog>())  // 是这样使用
}

// 协变： 允许子类型转换为父类型
// 逆变： 允许父类型转换为子类型
