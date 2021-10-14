export namespace 调用泛型下类型的静态方法 {
    class Base {
        public static TypeInit() {
            console.log('TypeInit')
        }
    }

    class Ext extends Base {
        public static TypeInit() {
            console.log('TypeInit')
        }
    }


    function toInit<T extends Base>(t: HandleStatic<T>) {
        t['TypeInit']()
    }

    toInit(Ext)

    type HandleStatic<T> = { new(): T, TypeInit: () => void }
}