"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Player批量属性;
(function (Player批量属性) {
    //OLD     BAD
    class Player {
        constructor() {
            this.prop = ['name', 'ts', 'asd'];
            console.log(this);
        }
    }
    __decorate([
        pramaDecorator()
    ], Player.prototype, "prop", void 0);
    let obj = {};
    let propk = ['name', 'ts', 'asd'];
    let propv = ['asd', 0, 2];
    let PropMap = new Map();
    PropMap.set('name', 'asd');
    PropMap.set('ts', 2);
    propk.forEach((e, i) => {
        obj[e] = propv[i];
    });
    //OLD ------- BAD =============================
    // Object.defineProperties(Player.prototype.prop,
    //     {
    //         some: { value: 123 },
    //         prop: { value: ['sss'] }
    //     });
    function pramaDecorator() {
        return function (targetProp, propName) {
            console.log(targetProp);
            (targetProp['prop']).forEach((e, i) => {
                Object.defineProperty(targetProp, e, propv[i]);
            });
        };
    }
    console.log(new Player());
})(Player批量属性 || (Player批量属性 = {}));
//# sourceMappingURL=Player%E6%89%B9%E9%87%8F%E5%B1%9E%E6%80%A7.js.map