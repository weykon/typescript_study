"use strict";
var GenericityClassGetCtor;
(function (GenericityClassGetCtor) {
    //是传参数进去的
    class AppleDevice {
        constructor(ctor) {
            this.ctor = ctor;
        }
        AppleDevice() {
            return new this.ctor();
        }
    }
    class IPad {
    }
    class Buy {
        constructor(ctor) {
            this.ctor = ctor;
        }
        BuyBackHome() {
            return new this.ctor();
        }
    }
    // let buyAIpad = new Buy<AppleDevice<IPad>>(IPad.prototype)
    //类比?
    class AddComponent {
        constructor(ctor) {
            this.ctor = ctor;
        }
        AddComponent() {
            return new this.ctor();
        }
    }
    class Node {
        addComponent() {
            return AddComponent;
        }
    }
    //-------------典型-------------
    class Create {
        constructor(ctor) {
            this.ctor = ctor;
        }
        GetNewInst() {
            return new this.ctor();
        }
    }
    let ipadCreator = new Create(IPad);
    ipadCreator.GetNewInst();
    //-------------典型--------完----
})(GenericityClassGetCtor || (GenericityClassGetCtor = {}));
//# sourceMappingURL=%E5%9C%A8%E6%B3%9B%E5%9E%8B%E7%B1%BB%E4%B8%AD%E8%8E%B7%E5%8F%96%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0.js.map