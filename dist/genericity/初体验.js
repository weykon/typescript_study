"use strict";
const m_name = 'lucy';
console.log(m_name);
class mRole {
    Action() { }
}
class mHuman extends mRole {
    Action() { 1; }
}
class mMonster extends mRole {
    Action() { 2; }
}
function getAction(node) {
    return node.Action;
}
function genraicityGetAction(type) {
    return type.Action;
}
let a = new mHuman();
let aAction = getAction(a);
let b = new mMonster();
let bAction = genraicityGetAction(b);
console.log(aAction, bAction);
//# sourceMappingURL=初体验.js.map