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
    Manager.InitList.push(target.prototype.constructor);
}
class Manager {
    constructor() {
        console.log(Manager.InitList);
        Manager.Inst = this;
        Manager.InitList.forEach(e => {
            this[e.name] = new e();
        });
        console.log(Manager.Inst);
    }
}
Manager.InitList = [];
let ObjectManager = class ObjectManager {
    constructor() {
        this.test = 1;
    }
    Init() { }
};
ObjectManager = __decorate([
    ManagerRegister
], ObjectManager);
new Manager();
//# sourceMappingURL=练习-管理器注册.js.map