export namespace 构造映射 {
    const CtorList: Array<{ new(): any }> = []
    const Name_CtorMap: Map<string, { new(): any }> = new Map();
    const Ctor_NameMap: Map<{ new(): any }, string> = new Map();
    @ctorDcrat
    class A { constructor() { console.log("A") } }
    @ctorDcrat
    class B { constructor() { console.log("B") } }

    function ctorDcrat<T extends { new(...args: any[]): {} }>(target: T) {
        console.log(target.prototype.constructor.name)
        CtorList.push(target.prototype.constructor)
        Name_CtorMap.set(target.prototype.constructor.name, target.prototype.constructor);
        Ctor_NameMap.set(target.prototype.constructor, target.prototype.constructor.name);
    }

    console.log(CtorList, Name_CtorMap, Ctor_NameMap)

    class node {
        private _compNameList: string[] = [];
        private _compList: Array<any> = [];

        addComp<T extends { new(): {} }>(t: T) {
            this._compNameList.push(Ctor_NameMap.get(t) as string)
        }
        getComp<T extends { new(): any }>(t: T) {
            const compName = Ctor_NameMap.get(t);
            return this._compNameList.find(e => { return e === compName })
        }
    }
    const unit = new node()
    unit.addComp(A)
    unit.getComp(B)
}