"use strict";
class mNode {
    constructor() {
        this._event = [];
    }
    emit(strType, ...args) {
    }
    on(strType, cb) {
    }
}
class mEvent {
}
let handle = new mNode();
handle.on('a', (e) => {
    console.log(e);
});
//# sourceMappingURL=EventManager.js.map