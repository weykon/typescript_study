namespace 索引 {
    class Animal {
        type!: string;
    }
    class Dog extends Animal {
        name!: string;
    }

    class AnimalArray {
        dog!: Dog;
        readonly [index: number]: Dog;
        readonly [index: string]: Dog;
    }

    let myArray: AnimalArray = {
        dog:
            { type: "animal", name: "terry" },
        ["1"]: new Dog(),
        [2]: new Dog(),
    }

    console.log(myArray.dog["name"]); // terry

}
