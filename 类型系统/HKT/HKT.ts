import type { identity } from 'fp-ts';
import type { Kind, URIS } from 'fp-ts/HKT';

export namespace HKT_Start {

    type OrderId = string;

    type OrderState = 'active' | 'deleted';

    interface User {
        readonly name: string;
        readonly isActive: boolean;
    }


    interface OrderHKD<F extends URIS> {
        readonly id: Kind<F, OrderId>;
        readonly issuer: Kind<F, User>;
        readonly date: Kind<F, Date>;
        readonly comment: Kind<F, string>;
        readonly state: Kind<F, OrderState>;
    }

    // interface Order {
    //     readonly id: OrderId;
    //     readonly issuer: User;
    //     readonly date: Date;
    //     readonly comment: string;
    //     readonly state: OrderState;
    // }

    type Order = OrderHKD<identity.URI>;


    // typescript can not to do this below
    // interface Mappable<F> {
    //     // Type 'F' is not generic. ts(2315)
    //     readonly map: <A, B>(f: (a: A) => B) => (as: F<A>) => F<B>;
    // }
}