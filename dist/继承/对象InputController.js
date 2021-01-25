"use strict";
class Controller {
    constructor() {
        this.ObjectType = 'Controller';
    }
}
class NPCctrl extends Controller {
    getObjectType() { return this.ObjectType; }
}
class CreateController {
    constructor(ctor) {
        this.ctor = ctor;
    }
    GetNew() { return new this.ctor(); }
}
let NPCctrlCreator = new CreateController(NPCctrl);
let npcctrl = NPCctrlCreator.GetNew();
npcctrl.getObjectType();
// 泛型类
class gCtrl {
    GetCtor(t) {
        return t;
    }
}
class sonGCtrl extends gCtrl {
    constructor() {
        super();
        this.sonProp = `i'm son`;
    }
}
function instAsonClass(t) {
    return new t();
}
let instAson = instAsonClass(sonGCtrl);
console.log(instAson);
//# sourceMappingURL=%E5%AF%B9%E8%B1%A1InputController.js.map