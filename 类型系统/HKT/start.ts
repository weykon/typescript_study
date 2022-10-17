
export interface URItoKind<A> {
    'Array': Array<A>;
}

export interface URItoKind2<A, B> {
    'Map': Map<A, B>
}

export type URIS = keyof URItoKind<unknown>;
export type URIS2 = keyof URItoKind2<unknown, unknown>;

export type Kind<F extends URIS, A> = URItoKind<A>[F];
export type Kind2<F extends URIS2, A, B> = URItoKind2<A, B>[F];


// some key : "module augmentation."
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation


type Container<T> = { w: T, h: T }
type AnyTypeContain<T> = Container<T>
type Tree<A> = AnyTypeContain<A>

declare module './start' {
    interface URItoKind<A> {
        'Tree': Tree<A>;
    }
}


type Test1 = Kind<'Tree', number>