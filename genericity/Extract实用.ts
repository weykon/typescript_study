import { person } from "../Decorators/DecoratorTest";

namespace Extract实用 {
    interface FooParams {
        type: 'foo';
        value: string;
    }

    interface BarParams {
        type: 'bar';
        value: number;
    }

    type Params = FooParams | BarParams;

    function test<TType extends Params["type"]>(type: TType, value: (Extract<Params, { type: TType }>)['value']) {

    }
    test("bar", 2);
    test("foo", "2");



    // firstly 
    type Extract<T, U> = T extends U ? T : never;
    type CatMew = "miao:"
    type Dog = "wang:"
    type peterCat = Extract<CatMew, "miao:">;

    // Event Option 
    type MyEvent = Event1 | Event2
    class Event1 {
        name !: "1";
        option!: number
        back!: string
    }
    class Event2 {
        name !: "2";
        option!: string;
        back !: number
    }
    function send<T extends MyEvent['name']>(name: T, option: (Extract<MyEvent, { name: T }>)["option"]): (Extract<MyEvent, { name: T }>)["back"] {
        const back = 1;
        return back as any
    }
    // const s: string = send("1", 1);
    // const s1: number = send("1", 1);
    // const n: number = send("2", "2");
    // const n1: string = send("2", "2");

    type InputParam =
        | { name: string }
        | { todo: () => {} }

    type TypeInName = Extract<InputParam, { name: string }>
    type TypeInTodo = Extract<InputParam, { todo: () => {} }>

    function typeInName(t: InputParam): t is TypeInName {
        return "name" in t
    }
    typeInName({ name: '1' })

    // just like 
    type Weapon =
        | { name: 'ak47', zoom: "4x" }
        | { name: 'm4' }
    function isWeaponEquipZoom(weapon: Weapon): weapon is Extract<Weapon, { zoom: any }> {
        return "zoom" in weapon
    }
    const ak: Weapon = { name: 'ak47', zoom: '4x' }
    const a = isWeaponEquipZoom({ name: 'm4' })
    const b = isWeaponEquipZoom(ak)
    console.log('1', a, b);


    // Event param Option 
    type EventName =
        | { name: 'goHome', by: "car", todo: (peopleNum: number) => void }
        | { name: 'goTrip', by: "plane", todo: (planeName: string) => void }

    function eventFire<T extends EventName['name']>(name: T, option: Extract<EventName, { name: T }>['by']) { }

    eventFire('goHome', 'car');
    eventFire('goTrip', "plane");

    function eventOn<T extends EventName["name"]>(name: T, todo: Extract<EventName, { name: T }>['todo']) { }

    eventOn('goHome', (peopleNum: number) => { })
    eventOn('goTrip', (name: string) => { });


    // 开始
    {
        class Holder<T> {
            listen!: (val: T) => void;
        }
        const hs = new Holder<string>();
        const hn = new Holder<number>();

        type HoldersObject = { [n: string]: Holder<any> };

        function combineHolders<T extends HoldersObject>(h: T)
            : Holder<{
                [HolderName in keyof T]: T[HolderName] extends Holder<infer P>
                ? P : any }
            > {
            return undefined as any;
        }

        const comb_1 = combineHolders({
            hs,
            hn,
        });

        comb_1.listen({ hs: "", hn: 0 });
    }

    type ModeType = 'edit' | 'other'
    type Mode<T> = EditMode<T> | Other<T>
    type EditMode<T> = { type: 'edit', modes: { normal: T extends { normal: infer R } ? R : never, edit: T extends { edit: infer U } ? U : never } }
    type Other<K> = { type: 'other', modes: { other: K } }
    type GoMode = <Type extends ModeType,MODE extends Mode<MODE>>(type: Type, modes: Extract<MODE,{type: Type}>['modes']  )=>{}
    const goMode : GoMode= <Type extends ModeType,MODE extends Mode<MODE>>(type: Type ,modes: Extract<MODE,{type: Type}>['modes'])=>{
        return {}
    }
}