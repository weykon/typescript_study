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
//# sourceMappingURL=在泛型类中获取构造函数.js.map