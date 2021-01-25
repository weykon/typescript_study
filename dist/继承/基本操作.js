"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(speed) {
        console.log(`${speed}`);
    }
}
class Snake extends Animal {
    constructor(name) { super(name); }
    move(speed = 5) {
        console.log(`snake move speed : ${speed}`);
        super.move(speed);
    }
}
class Horse extends Animal {
    constructor(name) { super(name); }
    move(speed = 10) {
        console.log(`horse move speed : ${speed}`);
        super.move(speed);
    }
}
//# sourceMappingURL=%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C.js.map