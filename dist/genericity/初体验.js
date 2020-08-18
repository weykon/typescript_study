"use strict";
var oneTaste;
(function (oneTaste) {
    const m_name = 'lucy';
    console.log(m_name);
    class mRole {
        Action() { }
    }
    class mHuman extends mRole {
        Action() { 1; }
    }
    class mMonster extends mRole {
        Action() {
            '2';
        }
    }
    function getAction(node) {
        return node.Action;
    }
    function genraicityGetAction(_type, nOrS) {
        console.log(nOrS);
        // return _type.Action
    }
    let a = new mHuman();
    let aAction = getAction(a);
    let b = new mMonster();
    let bAction = genraicityGetAction(b, b);
    console.log('done');
})(oneTaste || (oneTaste = {}));
//# sourceMappingURL=初体验.js.map