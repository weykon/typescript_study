"use strict";
class Role {
}
class Human extends Role {
    constructor() {
        super(...arguments);
        this.humanAction = 1;
    }
}
class Monster extends Role {
    constructor() {
        super(...arguments);
        this.monsterAction = 2;
    }
}
let n = new Human();
function getActiond(t) {
    console.log('action', t);
}
getActiond(n);
console.log(n instanceof Monster, n instanceof Human, typeof n);
//# sourceMappingURL=type.js.map