export interface HKT<S = undefined, T = unknown> {
    [source]: S
    [target]: T
}
export type Source<T extends HKT<any, any>> = T[typeof source];
export type $<T extends HKT<any, any>, S extends Source<T>> =
    (T & { [source]: S })[typeof target];

export type _ = HKT<unknown>;
export type __<T extends _> = Source<T>