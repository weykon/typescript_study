class Controller {
    private ACTICECONTROL!: boolean
    private inputFactor!: number
    protected ObjectType: string = 'Controller'
    constructor() { }
}

class NPCctrl extends Controller {
    public getObjectType() { return this.ObjectType }
}

class CreateController<T extends Controller>{
    constructor(private ctor: { new(): T }) { }
    public GetNew() { return new this.ctor() }
}



let NPCctrlCreator = new CreateController<NPCctrl>(NPCctrl)
let npcctrl = NPCctrlCreator.GetNew()
npcctrl.getObjectType()


// 泛型类
class gCtrl<T>{
    private ACTICECONTROL!: boolean
    private inputFactor!: number
    public GetCtor<T>(t: { new(): T }) {
        return t
    }
}
class sonGCtrl extends gCtrl<sonGCtrl>{
    public sonProp: string = `i'm son`
    constructor() {
        super()
    }
}
function instAsonClass<T extends gCtrl<T>>(t: { new(): T }) {
    return new t();
}

let instAson = instAsonClass(sonGCtrl)
console.log(instAson)