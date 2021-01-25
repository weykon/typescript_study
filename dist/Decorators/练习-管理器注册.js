"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class CodeThing {
}
function ManagerRegister(target) {
    Manager.CtorList.push(target.prototype.constructor);
}
class Manager {
    constructor() {
        Manager.Inst = this;
        Manager.CtorList.forEach(e => {
            this[e.name] = new e();
            Manager.ManagersName.push(e.name);
        });
    }
    Init() {
        let OriginList = Manager.ManagersName.map(u => this[u]['Init']);
        const TopFunction = () => {
            console.log('Top Func');
        };
        const BackFunction = () => {
            console.log('Back Func');
        };
        Manager.ManagersName.map((u, i) => this[u]['Init'] = () => {
            TopFunction();
            OriginList[i]();
            BackFunction();
        });
    }
}
Manager.CtorList = [];
Manager.ManagersName = [];
let ObjectManager = class ObjectManager {
    constructor() {
        this.test = 1;
    }
    Init() { console.log('Origin Object'); }
};
ObjectManager = __decorate([
    ManagerRegister
], ObjectManager);
let TerrainManager = class TerrainManager {
    constructor() {
        this.Data = {};
    }
    Init() { console.log('Origin Terrain'); }
};
TerrainManager = __decorate([
    ManagerRegister
], TerrainManager);
new Manager();
//# sourceMappingURL=%E7%BB%83%E4%B9%A0-%E7%AE%A1%E7%90%86%E5%99%A8%E6%B3%A8%E5%86%8C.js.map