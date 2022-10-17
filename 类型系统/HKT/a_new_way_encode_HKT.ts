// 对于fp-ts ， 还有另一个做法，

interface MyInterface {
    readonly x?: unknown
    readonly y: this["x"]
}

type X = (MyInterface & { readonly x: number })["x"]


// Single Parameter Encoding
interface HKT {
    // will reference the A type
    readonly _A?: unknown

    // will represent the computed type
    readonly type?: unknown
}
type Kind<F extends HKT, A> =
    F extends { readonly type: unknown } ?
    // F has a type specified, it is concrete (like F = ArrayHKT)
    (F & {
        readonly _A: A
    })["type"]
    // F is generic, we need to mention all of the type parameters
    // to guarantee that they are never excluded from type checking
    : {
        readonly _F: F
        readonly _A: () => A
    }
interface ArrayHKT extends HKT {
    readonly type: Array<this["_A"]>
}

type New_X = Kind<ArrayHKT, number>


// My practice -- Some specified
interface HigherKindedType {
    readonly _AType?: unknown
    readonly type?: unknown
}
type BeTypedAsVarFrom<GenericType extends HigherKindedType, SpecifiedType> =
    GenericType extends { readonly type: unknown } ?
    (GenericType & { readonly _AType: SpecifiedType })['type']
    : {
        readonly _GenericType: GenericType
        readonly _AType: () => SpecifiedType
    };

// declare a interface as "string"
interface MySomethingHKT extends HigherKindedType {
    readonly type: Array<this['_AType']>
}
// application
type SpawnMyHKTForSomething = BeTypedAsVarFrom<MySomethingHKT, { num: number }>