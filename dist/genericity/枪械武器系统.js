"use strict";
class Weapon {
    AddComponent() {
        let newCompType = WeaponComp;
        let newComp = new newCompType();
        this.comps.push(newComp);
        return newComp;
    }
}
class WeaponComp {
}
var WeaponEnum;
(function (WeaponEnum) {
})(WeaponEnum || (WeaponEnum = {}));
class AK47 extends Weapon {
    constructor() {
        super();
        this.comps = [];
    }
}
class Model extends WeaponComp {
}
class WeaponPos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class WeaponData {
    static config(t) {
        let data = {};
        WeaponData.Config.some(element => {
            Object.keys(element)[0] === t.name && (data = element);
            return true;
        });
    }
}
class SightOption extends WeaponComp {
}
class ZoomSight extends SightOption {
    constructor(name, zoom) {
        super();
        this.name = name;
        this.zoom = zoom;
    }
}
let ak = new AK47();
console.log(ak);
ak.AddComponent();
console.log(ak);
//# sourceMappingURL=枪械武器系统.js.map