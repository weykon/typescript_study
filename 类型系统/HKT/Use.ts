import { Kind, URItoKind } from './start';
type Modal<A> = {} & A
declare module './start' {
    interface URItoKind<A> {
        'Modal': Modal<A>;
    }
}

type NewModal = Kind<'Modal', { OK: number }>

type SecondModal = Kind<'Modal', { OK1: number }>


type Modals =
    NewModal | SecondModal
