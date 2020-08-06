"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlackBorad = __importStar(require("./Decorators/case2/BlackBorad"));
const Decora = __importStar(require("./Decorators/DecoratorTest"));
const Comp_1 = require("./Decorators/case1/Comp");
const MethodDecrat_1 = __importDefault(require("./Decorators/case3/MethodDecrat"));
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
function mainCase3() {
    console.log('程序开始');
    let a = new MethodDecrat_1.default('Kong');
    console.log('log~~~~: ');
    a.greet('Weykon');
}
mainCase3();
//# sourceMappingURL=Main.js.map