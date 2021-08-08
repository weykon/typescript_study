namespace 新枪械 {
    abstract class Weapon {

        abstract comps: Array<WeaponComp>
        abstract name: string

        public AddComponent<T extends WeaponComp>() {

        }
    }

    abstract class WeaponComp {
        abstract name: string
    }

    class AK47 extends Weapon {
        comps!: WeaponComp[]
        name!: string
    }
    
    
}

