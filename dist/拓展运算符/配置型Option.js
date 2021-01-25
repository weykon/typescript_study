"use strict";
var AdditionSymbol;
(function (AdditionSymbol) {
    function params(arr, ...args) {
        console.log(arr, args, ...args);
    }
    params([1, 2], '2', '123');
    function addListener(...args) {
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
        SetOption(...option) {
            return option;
        }
    }
    LashiEvent.options = [{
            name: '第一option',
            value: (str) => { console.log('我是Option的Key1', str); }
        }, {
            name: '第二option',
            value: (num) => { console.log('我是Option的Key2', num); }
        }];
    class LaniaoEvent {
        Event() {
        }
    }
    addListener(...LashiEvent.options);
    addListener(...(new LashiEvent()).SetOption({ name: 'sa', value: () => { } }, { name: 'asdasd', value: () => { } }));
})(AdditionSymbol || (AdditionSymbol = {}));
//# sourceMappingURL=%E9%85%8D%E7%BD%AE%E5%9E%8BOption.js.map