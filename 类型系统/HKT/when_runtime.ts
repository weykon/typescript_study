namespace when_runtime {
    declare const source: unique symbol;
    declare const target: unique symbol;
    interface HKT<S = undefined, T = unknown> {
        [source]: S
        [target]: T
    }
    type Source<T extends HKT<any, any>> = T[typeof source];
    type $<T extends HKT<any, any>, S extends Source<T>> =
        (T & { [source]: S })[typeof target];

    type _ = HKT<unknown>;
    type __<T extends _> = Source<T>


    interface ThinkingConnect extends _ {
        [target]: __<this>
    }
    type ContaionerOfTwoPeopleThink<A, B> =
        DeepCompare<A, B>
    type ThinkConfict<A, B> = $<ThinkingConnect, ContaionerOfTwoPeopleThink<A, B>>
    const me = { think: 'eat' } as const
    const you = { think: 'eat' } as const
    const she = { think: 'sleep' } as const
    type event = ThinkConfict<typeof me, typeof you>
    type DeepCompare<A, B> = A extends B ?
        Error<{ [k in keyof (A | B)]: B[k] extends infer R ? R : never }> extends never ? never : 'ok'
        : never;
    type Error<Obj> = Obj[keyof Obj] extends never ? never : Obj;
    type compare = DeepCompare<typeof me, typeof you>   // ok
    type compareWithShe = DeepCompare<typeof you, typeof she>   // never
}
