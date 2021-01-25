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
//# sourceMappingURL=%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6.js.map