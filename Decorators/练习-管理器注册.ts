
abstract class CodeThing {
    abstract name: string
}

function ManagerRegister(target: any) {
    Manager.CtorList.push(target.prototype.constructor)
}

class Manager {
    constructor() {
        Manager.Inst = this
        Manager.CtorList.forEach(e => {
            (<any>this)[e.name] = new e()
            Manager.ManagersName.push(e.name)
        })
    }
    public static CtorList: Array<{ new(): any }> = []
    public static Inst: Manager
    public static ManagersName: Array<string> = []
    public Init() {
        let OriginList = Manager.ManagersName.map(u => (<any>this)[u]['Init'])
        const TopFunction = () => {
            console.log('Top Func')
        }
        const BackFunction = () => {
            console.log('Back Func')
        }
        Manager.ManagersName.map((u, i) => (<any>this)[u]['Init'] = () => {
            TopFunction()
            OriginList[i]()
            BackFunction()
        })
    }
}

@ManagerRegister
class ObjectManager {
    public test: number = 1
    constructor() { }
    public Init() { console.log('Origin Object') }
}

@ManagerRegister
class TerrainManager {
    public Data = {}
    constructor() { }
    public Init() { console.log('Origin Terrain') }
}


new Manager()