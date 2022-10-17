// 跳板可以理解成 “桥”

import { Kind } from "fp-ts/HKT"

type Me<A> = A
declare module 'fp-ts/HKT' {
    interface URItoKind<A> {
        'Me': Me<A>
    }
}

type Person = 'Me' | 'She'
type Vehicle<T> = { whomi: T }
type drive = <T extends Person>() => Kind<'Me', Vehicle<T>>