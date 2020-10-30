abstract class Weapon<T>{
    abstract comps: Array<WeaponComp<T>>
    abstract name: string
    public AddComponent<T extends WeaponComp<T>>(t: T) {
        this.comps.push(t)
        return t
    }

}

abstract class WeaponComp<T> {
    abstract name: string
    constructor(protected ctor: { new(): T }) { }
    public WeaponCopm() {
        return new this.ctor();
    }
}

enum WeaponEnum {

}

class AK47 extends Weapon<AK47>{
    comps: Array<WeaponComp<AK47>> = [];
    name!: string
    constructor() {
        super()
    }
}

abstract class Model<T extends Weapon> extends WeaponComp {
    abstract modelData: string
    abstract modelList: Array<WeaponComp>
}
abstract class WeaponPos {
    constructor(public x: number, public y: number) { }
}

class WeaponData<T> {
    private static Config: [
        { ak47: { name: 'ak47', damge: 100 } },
        { m4a1: { name: 'm4a1', damge: 80 } }
    ]
    public static config<T extends Weapon>(t: T) {
        let data = {}
        WeaponData.Config.some(element => {
            Object.keys(element)[0] === t.name && (data = element)
            return true
        });
    }
}

abstract class SightOption<T> extends WeaponComp<SightOption<T>> {
    abstract name: string
    constructor(protected ctor: { new(): T }) { super(SightOption.prototype.ctor) }
    public WeaponCopm() {
        return new this.ctor();
    }
}

class ZoomSight extends SightOption {
    constructor(private ctor: { new(): ZoomSight }, public name: string, public zoom: number) {
        super(ctor)
    }
}

let ak = new AK47()
console.log(ak)
ak.AddComponent<WeaponComp<ZoomSight>>()
console.log(ak)