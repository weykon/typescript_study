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
//# sourceMappingURL=基本操作.js.map