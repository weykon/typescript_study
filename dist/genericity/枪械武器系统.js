"use strict";
class Weapon {
    AddComponent(t) {
        this.comps.push(t);
        return t;
    }
}
class WeaponComp {
    constructor(ctor) {
        this.ctor = ctor;
    }
    WeaponCopm() {
        return new this.ctor();
    }
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
    constructor(ctor) {
        super(SightOption.prototype.ctor);
        this.ctor = ctor;
    }
    WeaponCopm() {
        return new this.ctor();
    }
}
class ZoomSight extends SightOption {
    constructor(ctor, name, zoom) {
        super(ctor);
        this.ctor = ctor;
        this.name = name;
        this.zoom = zoom;
    }
}
let ak = new AK47();
console.log(ak);
ak.AddComponent();
console.log(ak);
//# sourceMappingURL=%E6%9E%AA%E6%A2%B0%E6%AD%A6%E5%99%A8%E7%B3%BB%E7%BB%9F.js.map