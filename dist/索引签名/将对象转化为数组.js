"use strict";
var 将对象转化为数组;
(function (将对象转化为数组) {
    const Obj = {
        name: '1',
        Pos: [1, 1],
        id: 1
    };
    function TransList(obj) {
        let list = [];
        Object.keys(obj).map((e) => {
            list[e] = obj[e];
        });
        return list;
    }
    console.log(TransList(Obj));
    const Obj1 = {
        id: 1,
        id1: 2,
        id2: 3,
        length: 3
    };
    Array.from(Obj1);
})(将对象转化为数组 || (将对象转化为数组 = {}));
//# sourceMappingURL=将对象转化为数组.js.map