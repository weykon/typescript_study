"use strict";
var GenericityOption;
(function (GenericityOption) {
    class Event {
        constructor(ctor) {
            this.ctor = ctor;
        }
        Event() {
            return new this.ctor();
        }
    }
    class GetUpEvent extends Event {
        Event() {
            let t = GetUpEvent;
            return new t();
        }
    }
})(GenericityOption || (GenericityOption = {}));
//# sourceMappingURL=%E6%B3%9B%E5%9E%8B%E5%8C%96Option.js.map