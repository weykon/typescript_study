abstract class Weapon {
    abstract comps: Array<WeaponComp>
    abstract name: string
    public AddComponent<T extends WeaponComp>() {
        let newCompType = WeaponComp as { new(): T }
        let newComp = new newCompType()
        this.comps.push(newComp)
        return newComp
    }
}

abstract class WeaponComp {
    abstract name: string
}

enum WeaponEnum {

}

class AK47 extends Weapon {
    comps: Array<WeaponComp> = [];
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

abstract class SightOption extends WeaponComp {
    abstract name: string
}

class ZoomSight extends SightOption {
    constructor(public name: string, public zoom: number) {
        super()
    }
}

let ak = new AK47()
console.log(ak)
ak.AddComponent<ZoomSight>()
console.log(ak)