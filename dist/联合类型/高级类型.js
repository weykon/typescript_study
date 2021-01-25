"use strict";
console.log('asd');
var aTYPE;
(function (aTYPE) {
    function FixInput(t) {
        let input = t;
        input instanceof Man ?
            console.log('man', input.mouse) :
            input instanceof Woman ?
                console.log('woman', input.eyes) :
                console.log('unknown');
    }
    class Man {
        constructor() {
            this.mouse = 1;
        }
    }
    class Woman {
    }
    let man = new Man();
    let woman = new Woman();
    FixInput(woman);
})(aTYPE || (aTYPE = {}));
//# sourceMappingURL=%E9%AB%98%E7%BA%A7%E7%B1%BB%E5%9E%8B.js.map