class Foo<T>{
    foo!: T;
}
const FooNumber = Foo as { new(): Foo<number> }

//实现 new 关键字
function myNew() {
    let obj = <any>{}
    let ctorClass = <any>[].shift.call(arguments)
    obj['__proto__'] = ctorClass['propertype']
    let params = arguments
    let res = ctorClass.apply(obj, params)
    return res instanceof Object ? res : obj
}
function A(name: string) {
    //@ts-ignore    
    this.name = name
}
//@ts-ignore
let b = myNew(A, '1')


type TypeContainer = abc | xyz;
class abc extends Foo<abc>{ abc!: number }
class xyz { xyz!: number }
function create<T extends TypeContainer>(t: { new(): Foo<T> }) {
    return new t();
}

create(abc)