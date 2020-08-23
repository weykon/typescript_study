"use strict";
class Foo {
}
const FooNumber = Foo;
//实现 new 关键字
function myNew() {
    let obj = {};
    let ctorClass = [].shift.call(arguments);
    obj['__proto__'] = ctorClass['propertype'];
    let params = arguments;
    let res = ctorClass.apply(obj, params);
    return res instanceof Object ? res : obj;
}
function A(name) {
    //@ts-ignore    
    this.name = name;
}
//@ts-ignore
let b = myNew(A, '1');
//# sourceMappingURL=table.js.map