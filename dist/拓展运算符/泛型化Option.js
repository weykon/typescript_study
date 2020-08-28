"use strict";
var GenericityOption;
(function (GenericityOption) {
    class Event {
    }
    class GetUpEvent extends Event {
    }
    class TestSameNameFunc {
        constructor() {
            console.log('1');
        }
        TestSameNameFunc() {
            console.log('2');
        }
    }
    let test = new TestSameNameFunc();
})(GenericityOption || (GenericityOption = {}));
//# sourceMappingURL=泛型化Option.js.map