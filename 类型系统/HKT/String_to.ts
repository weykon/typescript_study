namespace Array_to {
    interface HKT<S = undefined, T = unknown> {
        [source]: S
        [target]: T
    }
    type Source<T extends HKT<any, any>> = T[typeof source];
    type $<I extends HKT<any, any>, S extends Source<I>> =
        (I & { [source]: S })[typeof target];

    type _ = HKT<unknown>;
    type __<T extends _> = Source<T>



    // map funciton like
    type Tree<T> = any
    type Option<T> = any
    declare const mapArray:
        <A>(self: Array<A>, f: (a: A) => B) => Array<B>
    declare const mapTree:
        <A>(self: Tree<A>, f: (a: A) => B) => Tree<B>
    declare const mapOption:
        <A>(self: Option<A>, f: (a: A) => B) => Option<B>
    //

    // assume
    // type AType<Array,A,B> 
    // input: like Array

    // Map From String And Out for Array<T>
    interface StringMapArray<T> extends HKT<T> {
        [source]: T
        [target]: Source<this>
        // to source then to typeof target just as T what input
    }

    type SomeString = 'A' | 'B'
    interface HKTForString<S = SomeString, T = unknown> {
        [source]: S
        [target]: T
    }
    // -> source
    type StringIs<T extends HKTForString<any, any>> = T[typeof source]
    // -> target
    type ToType<
        I extends HKTForString<any, any>,
        S extends StringIs<I>
    >
        = (I & { [source]: S })[typeof target];
    interface SpawnAStringToType<T> extends HKTForString<'A'> {
        [target]: Array<T>
    }
    type WhatHappen = ToType<SpawnAStringToType<number>, 'A'>
    // 以上是最基本的string直指type


    // Example 1: 
    interface VarStringToType<S, T> extends HKTForString<S> {
        [target]: S extends 'A' ? Array<T> : boolean
    }
    type WhatHappen0 = ToType<VarStringToType<'A', number>, 'A'>
    type WhatHappen1 = ToType<VarStringToType<'B', unknown>, 'B'>
    // Example 1: Done!

    type FixedKeyType = 'AA'

    // Example 2: 
    type TypeString = 'Array' | 'Tree' | 'Set' | 'Map'
    interface VarStringToType0<S extends TypeString, A, B> extends HKTForString<TypeString> {
        [target]: S extends 'Array' ? (self: Array<A>, f: (a: A) => B) => Array<B> :
        S extends 'Tree' ? (self: Tree<A>, f: (a: A) => B) => Tree<B> :
        S extends 'Set' ? (f: (a: A) => B) => (as: Set<A>) => Set<B> :
        S extends 'Map' ? (f: (a: A) => B) => (as: Map<FixedKeyType, A>) => Map<FixedKeyType, B>
        : never
    }
    type ToType0<
        I extends HKTForString<any, any>,
    >
        = (I & { [source]: TypeString })[typeof target];
    type WhatHappen2 = ToType0<VarStringToType0<'Array', number, string>>
    type WhatHappen3 = ToType0<VarStringToType0<'Tree', number, string>>
    type WhatHappen4 = ToType0<VarStringToType0<'Set', number, boolean>>
    // Example 2: Done!
    
    
}