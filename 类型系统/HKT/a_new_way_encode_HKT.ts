// 对于fp-ts ， 还有另一个做法， 

import { type } from "os"

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
type SpawnMySomethingFromHKT = BeTypedAsVarFrom<MySomethingHKT, { num: number }>


// 大致的区别是， 这个使用this

// --------------------------------
type ADifferentMap<T extends HigherKindedType, NewUnit> =
    T extends { type: unknown } ?
    (T & { _AType: NewUnit })['type']
    : {
        _NewUnit: T
        _AType: NewUnit
    }
interface NewNewTypeExtendsHKTHaveThisReference_AType
    extends HigherKindedType {
    type: { newnew: 'newnew' } & this['_AType']
}
type So_Let_See = ADifferentMap<NewNewTypeExtendsHKTHaveThisReference_AType, { abcd: string }>
const see_see: So_Let_See = { newnew: "newnew", abcd: 'abcd' } // is ok
// --------------------------------



// --------------------------------
interface ForCoffeeHKT {
    readonly _type?: unknown
    readonly type?: this['_type'] & { wakeup_score: number }
}
type SpecifiedCoffee<T extends ForCoffeeHKT, U> = (T & { _type: U })['type']
interface Expresso extends ForCoffeeHKT {
    type: this['_type'] & {
        wakeup_score: number
        cup: 'small'
    }
}
type GetAnExpresso = SpecifiedCoffee<Expresso, { belong: 'weykon' }>
const anExpressoBelongWeykon: GetAnExpresso = {
    cup: "small",
    belong: "weykon",
    wakeup_score: 100
}
// 拿到一杯专属weykon的意式浓缩

// 这里真正使用起来常常会是函数的
type GetAnExpressoFn = () => GetAnExpresso
const spawnMyExpresso: GetAnExpressoFn = () => {
    return {
        cup: "small",
        belong: "weykon",
        wakeup_score: 100
    }
}
// 然后可以从行为类型层面不断定义，类似配置运作的系统？


// So, let me extend this
interface Latte extends ForCoffeeHKT {
    type: this['_type'] & {
        cup: Size,
        wakeup_score: number;
        drink: () => false
    }
}
type Size = 'big' | 'small' | 'medium';

// new motive
type DrinkIt<T extends ForCoffeeHKT, U> =
    T extends { type: unknown } ? (T & { _type: U })['type'] : never

type DrinkLatte = DrinkIt<Latte, {
    drink: () => false
}>

type AddProp<T extends string, U> = T extends `${Size}` ? U & { [k in Size]: number } : never
type ACup = {water: true}
type newCup = AddProp<'big', ACup>
// if add literal
// I think this method is not eazy to use string literal


// --------------------------------
