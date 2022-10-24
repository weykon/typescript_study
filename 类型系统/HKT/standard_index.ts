import { _, __, $ } from './index'


type FixedKeyType = 'Map'
type Tree<A, B> = {}
type Stack<A> = {}

// as the common way
type MapForSet = <A, B>(f: (a: A) => B) => (as: Set<A>) => Set<B>;
type MapForMap = <A, B>(f: (a: A) => B) => (as: Map<FixedKeyType, A>) => Map<FixedKeyType, B>;
type MapForTree = <A, B>(f: (a: A) => B) => (as: Tree<A>) => Tree<B>;
type MapForStack = <A, B>(f: (a: A) => B) => (as: Stack<A>) => Stack<B>;



// type MapFor??
interface MapFor extends _ {
    [target]: __<this>
}
type Mappable<T> = $<MapFor, T>
type MapSet<T> = Mappable<Set<T>>
type Map2Map<A, B> = Mappable<Map<A, B>>
type Map2Tree<A, B> = Mappable<Tree<A, B>>