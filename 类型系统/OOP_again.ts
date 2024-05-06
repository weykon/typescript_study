namespace OOPAgain {
    interface Human {
        eat(): void;
        clear(): void;
    }

    class Woman implements Human {
        eat() {
            console.log("Woman is eating");
        }
        clear() {
            console.log("Woman is clearing");
        }
    }

    class Man implements Human {
        eat() {
            console.log("Man is eating");
        }
        clear() {
            console.log("Man is clearing");
        }
    }

    class Food {
        eating(human: Human) {
            console.log("Eating food");
            human.eat();
        }
        eaten(human: Human) {
            console.log("Food eaten");
            human.clear();
        }
    }

    function run() {
        let food = new Food();
        let heli = new Woman();
        let wy = new Man();

        food.eating(heli);
        food.eaten(heli);

        let apple = new Food();
        apple.eating(heli);
        apple.eaten(heli);

        apple.eating(wy);
    }
}

// 较于之前的类型系统
namespace 较于之前的类型系统 {
    class Man { } class Woman { }
    type Human = Man | Woman
    function Somestuff<T extends Human>(human: T) {
        let _human = human as unknown as { new(): Human }
        if (_human instanceof Man) {

        } else if ( _human instanceof Woman){ 

        }
    }
}