namespace GenericityClassGetCtor {
    //是传参数进去的
    class AppleDevice<T>{
        constructor(private ctor: { new(): T }) { }
        public AppleDevice<T>() {
            return new this.ctor()
        }
    }

    class IPad {

    }

    class Buy<T>{
        constructor(public ctor: { new(): T }) { }
        public BuyBackHome() {
            return new this.ctor()
        }
    }

    // let buyAIpad = new Buy<AppleDevice<IPad>>(IPad.prototype)

    //类比?
    class AddComponent<T>  {
        constructor(public ctor: { new(): T }) { }
        public AddComponent() {
            return new this.ctor()
        }
    }
    class Node {
        public addComponent<T>() {
            return AddComponent
        }
    }


    //-------------典型-------------
    class Create<T>{
        constructor(private ctor: { new(): T }) {
        }
        public GetNewInst() {
            return new this.ctor()
        }
    }
    let ipadCreator = new Create(IPad)
    ipadCreator.GetNewInst()
    //-------------典型--------完----
}   