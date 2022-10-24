declare const source: unique symbol;
declare const target: unique symbol;
interface HKT<S = undefined, T = unknown> {
    [source]: S
    [target]: T
}
type Source<T extends HKT<any, any>> = T[typeof source];
type Target<T extends HKT<any, any>, S extends Source<T>> =
    (T & { [source]: S })[typeof target];




// Example 1: 
type SourceOfLocation = { type: string };

type Country = 'country'
type Town = 'town'

interface TheLocationScope extends HKT<SourceOfLocation> {
    // here can anything type to compose or map 
    // just define the target though source and set the look like
    [target]: Source<this>['type'] extends Country & Town ?
    'in_scope'
    : 'out_scope'
}

// here may can be calculated at type when the programming typecheck runtime
type FigureOut = Target<TheLocationScope, { type: 'country' }>

const instAVar: FigureOut = 'out_scope';

// so if I continue to package above
type ToFigureOutAboutLocationScope<T extends SourceOfLocation> = Target<TheLocationScope, T>

// and I can use this like a function when I programming on type;
type IfIDontKnowTheLocationNowWhatWillHappen = ToFigureOutAboutLocationScope<{ type: 'some place name' }>
// Example 1: Done!


// Example 2: 
// Higher kinded type as to see a view as a function need put in parameters
// so somewhere keep the logic about the relationship between a defined type and a unknown type
// and other concept is about DefinedType
interface DefinedType extends HKT<unknown> {
    // this first unknow means the input type has no any initail type at fixed;
    [target]: Source<this>

    // the logic here is Target -> Source, and target = source approximately directly map.
}
// So I can delcare the binder .
interface DefinedType1 extends HKT<unknown> {
    binder_type: 'Array'
    [target]: Binder<Source<this>, this['binder_type']>
}
type TheBinderType = 'Array' | 'Object' | 'Custom';
type Binder<T, t> = t extends 'Array' ? Array<T> : T;


// and 
interface DefinedType2<T> extends HKT<unknown> {
    binder_type: T
    [target]: Binder<Source<this>, this['binder_type']>
}
interface DT extends DefinedType2<'Object'> {
    binder_type: 'Object'
    [target]: Binder<Source<this>, this['binder_type']>
}
type DT_Object = Target<DT, { abc: 'abc' }>