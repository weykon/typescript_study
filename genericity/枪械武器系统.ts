abstract class Weapon {
    abstract comps: Array<WeaponComp>
    abstract name: string
}

class WeaponComp {

}

enum WeaponEnum {

}

class AK47 extends Weapon {
    comps!: WeaponComp[]
    name!: string
}

abstract class Model<T extends Weapon> extends WeaponComp {
    abstract modelData: string
    abstract modelList: Array<WeaponComp>
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

