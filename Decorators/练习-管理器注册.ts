
abstract class CodeThing {
    abstract name: string
}

function ManagerRegister(target: any) {

    Manager.InitList.push(target.prototype.constructor)
}

class Manager {
    constructor() {
        console.log(Manager.InitList)
        Manager.Inst = this
        Manager.InitList.forEach(e => {
            (<any>this)[e.name] = new e()
        })
        console.log(Manager.Inst)
    }
    public static InitList: Array<DateConstructor> = []
    public static Inst: Manager

}

@ManagerRegister
class ObjectManager {
    public test: number = 1
    constructor() { }
    public Init() { }
}


new Manager()