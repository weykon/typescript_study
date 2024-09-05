
abstract class CodeThing {
    abstract name: string
}

function ManagerRegister(target: any) {
    console.log(target.prototype.constructor)
    Manager.CtorList.push(target.prototype.constructor)
    console.log('Manager.CtorList', Manager.CtorList)
}

class Manager {
    constructor() {
        console.log('build up: ')
        Manager.Inst = this;
        let count = 0;
        Manager.CtorList.forEach(e => {
            console.log('count: ', count += 1);
            (<any>this)[e.name] = new e();
            Manager.ManagersName.push(e.name);
            console.log('Manager.ManagersName:', e.name);
            console.log('on this : ', (<any>this)[e.name]);
        })
    }
    public static CtorList: Array<{ new(): any }> = []
    public static Inst: Manager
    public static ManagersName: Array<string> = []
    public Init() {
        console.log('on Init')
        let OriginList = Manager.ManagersName.map(u => {
            console.log('read property:', (<any>this)[u]['Init'].toString(),);
            return (<any>this)[u]['Init'];
        })
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
        });
        console.log('reset Init fns : ', Manager.ManagersName.map(e => (<any>this)[e]['Init']['toString']()))
        return this;
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

console.log(Object.keys(new Manager().Init()))
// (new Manager().Init() as any)
//     ['ObjectManager'].Init()
