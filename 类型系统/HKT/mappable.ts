import { Kind, URIS } from "./start";

interface Mappable<F extends URIS> {
    readonly map: <A, B>(f: (a: A) => B) => (as: Kind<F, A>) => Kind<F, B>;
}

const mappableArray: Mappable<'Array'> = {
    // here `as` will have type A[], without any menthioning of the utility type `Kind`:
    map: f => as => as.map(f)
};
const mappableSet: Mappable<'Set'> = {
    // a little bit unfair — you can make it more efficient by iterating over the iterator for the set manually,
    // but the purpose of this article is not to make the implementation as efficient as possible, but to explain the concept
    map: f => as => new Set(Array.from(as).map(f))
};
// here I will assume that Tree is a normal inductive type with two constructors: Leaf and Node,
// leaves store data, nodes store a set of subtrees:
const mappableTree: Mappable<'Tree'> = {
    map: f => as => {
        switch (true) {
            case as.tag === 'Leaf': return f(as.value);
            case as.tag === 'Node': return node(as.children.map(mappableTree.map(f)));
        }
    }
};