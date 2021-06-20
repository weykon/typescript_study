namespace WeaponSystem {

    abstract class Weapon<T>{
        abstract comps: Array<WeaponComp<T>>
        abstract name: string
        public AddComponent(t: WeaponComp<T>) {
            this.comps.push(t)
            return t
        }
        only?: {}

    }


    abstract class WeaponComp<T>{
        comp_name!: string
        type!: T
    }

    abstract class SightOption<T> extends WeaponComp<T>{
        from!: T
    }

    class FourZoom<T extends Weapon<T>> extends SightOption<T>{
        constructor() {
            super();
        }
        from!: T
        checkOnly() {
            this.from.only
        }
    }


    class AK47 extends Weapon<AK47>{
        comps!: WeaponComp<AK47>[]
        name!: string
        only!: {}
    }


    const ak47 = new AK47()
    const fourzoomcomp = ak47.AddComponent(new FourZoom<AK47>());


}
