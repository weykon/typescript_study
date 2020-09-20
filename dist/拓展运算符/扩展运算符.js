"use strict";
var AdditionSymbol;
(function (AdditionSymbol) {
    function params(arr, ...args) {
        console.log(arr, args, ...args);
    }
    params([1, 2], '2', '123');
    function addListener(type, target, ...args) {
    }
    function emit(type, target, ...args) {
    }
    class Event {
        Event() {
        }
    }
    class LashiEvent {
        Event() {
            let t = LashiEvent;
            return new t();
        }
    }
    addListener(new LashiEvent, '1', new LashiEvent().options);
})(AdditionSymbol || (AdditionSymbol = {}));
//# sourceMappingURL=扩展运算符.js.map