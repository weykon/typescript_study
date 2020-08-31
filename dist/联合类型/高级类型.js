"use strict";
console.log('asd');
var aTYPE;
(function (aTYPE) {
    function FixInput(t) {
        console.log('1');
        let input = t;
        input instanceof Man ?
            console.log('man', input.dick) :
            input instanceof Woman ?
                console.log('woman', input.breast) :
                console.log('unknown');
    }
    class Man {
        constructor() {
            this.dick = 1;
        }
    }
    class Woman {
    }
    let man = new Man();
    let woman = new Woman();
    FixInput(woman);
})(aTYPE || (aTYPE = {}));
//# sourceMappingURL=高级类型.js.map