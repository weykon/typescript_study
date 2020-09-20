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
//# sourceMappingURL=泛型化Option.js.map