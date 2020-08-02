"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlackBorad = __importStar(require("./Decorators/case2/BlackBorad"));
const Decora = __importStar(require("./Decorators/DecoratorTest"));
const Comp_1 = require("./Decorators/case1/Comp");
function main() {
    console.log('程序开始...');
    Decora.ObjectList.forEach(e => {
        let a = new e();
        console.log(a.name);
    });
    console.log('----------end');
}
function mainCase1() {
    console.log('start....');
    Comp_1.CompList.forEach(e => {
        new e();
        console.log(e);
    });
    console.log('end....');
}
function mainCase2() {
    console.log('程序开始');
    let a = new BlackBorad.Normal();
    console.log('log~~~~: ', a.prop);
}
mainCase2();
//# sourceMappingURL=Main.js.map