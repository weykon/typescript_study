"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('------------------------------------------\n\n\n\n\n\n');
//------函数装饰器-----
function BadGuySkin(constructor) {
    console.log('to Addtition BEFORE?');
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.hasBadGuyProp = 'sorry woman';
        }
    };
}
function normalBody() {
    console.log('eat food~');
    return function (a, b, c) {
        console.log('\n', a, '\n', b, '\n', c);
        console.log('done done', typeof b, c.value.toString());
    };
}
let person = class person {
    constructor() {
        console.log('this is normal person');
    }
    Wear() {
        console.log('wear');
        return 'wear done';
    }
};
__decorate([
    normalBody()
], person.prototype, "Wear", null);
person = __decorate([
    BadGuySkin
], person);
exports.person = person;
exports.ObjectList = new Array();
function CreateFirst(target) {
    exports.ObjectList.push(target);
}
let mObject = class mObject {
    constructor() {
        this.name = 'o';
        console.log('fuck create me');
    }
};
mObject = __decorate([
    CreateFirst
], mObject);
exports.mObject = mObject;
//-------------------
//# sourceMappingURL=DecoratorTest.js.map