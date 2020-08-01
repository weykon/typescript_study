"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comp_1 = require("./Comp");
const Comp_2 = require("./Comp");
let EnemyComp = class EnemyComp extends Comp_1.Comp {
    constructor() {
        super();
        this.name = 'EnemyComp';
    }
};
EnemyComp = __decorate([
    Comp_2.CompLog
], EnemyComp);
exports.default = EnemyComp;
//# sourceMappingURL=EnemyComp.js.map