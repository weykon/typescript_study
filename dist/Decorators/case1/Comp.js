"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompList = new Array();
function CompLog(target) {
    exports.CompList.push(target);
}
exports.CompLog = CompLog;
class Comp {
    constructor() {
        console.log('base COMP ctor...');
    }
}
exports.Comp = Comp;
//# sourceMappingURL=Comp.js.map