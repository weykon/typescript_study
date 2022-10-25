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
// Example 2: Done!


// Example 3: 
// Phone as Device to export some interface.
type Phone = { name: string, version: string, brand: string }
type Respberry = { name: 'respberry', version: string }
type STM = { name: 'stm', version: string }
type Device = Phone | Respberry | STM
interface DeviceCall {
    from: Device
    to: Device
}
interface PhoneCallDeviceToOpenDoor<TargetDevice extends Device> extends HKT<DeviceCall> {
    from: Phone,
    to: TargetDevice
    [target]: (to: Source<this>['to']) => void
}
const respberry: Respberry = {
    name: "respberry",
    version: ""
}
const iphone: Phone = {
    name: "",
    version: "",
    brand: ""
}
const toRespberry: Target<PhoneCallDeviceToOpenDoor<Respberry>, {
    from: Phone, to: Respberry
}> = (to: Respberry) => { }
// Example 3: Done!


// Example 4: 
// Genernal Type as parameters
type ATYpe<CarryT> = CarryT extends string ? never : CarryT
interface WhateverTypeAndBeOneThing extends HKT<unknown> {
    [target]: ATYpe<Source<this>>
}
type OutputToDo = Target<WhateverTypeAndBeOneThing, 's'>
// this time is important getting the concept of Input/Source to Carry the target
// and change something
// fantastic!
// Example 4: Done!

// Example 5: 
type CarDoor = { open: () => Promise<'ok'>, close: () => Promise<'done'> }
type Weykon = { slogan: 'I am cool!', name: 'weykon' };
type PersonMustHaveSlogan = { slogan: string }
type Open<Who extends PersonMustHaveSlogan, What, Then> = (slogan: Who['slogan'], what: What) => Then
// type CarDoorWithPerson<T>
interface CarDoorWithPersonWhatWillHappen extends HKT<PersonMustHaveSlogan> {
    [target]: Open<Source<this>, CarDoor, ReturnType<CarDoor['open']>>
};
type So_WhenWeykonOpenTheDoor = Target<CarDoorWithPersonWhatWillHappen, Weykon>
type Param = Parameters<So_WhenWeykonOpenTheDoor>
const system_run_command: So_WhenWeykonOpenTheDoor = () => Promise.resolve('ok')
type WithRequiredParamFunction =
    AFunction<Param, ReturnType<Target<CarDoorWithPersonWhatWillHappen, Weykon>>>;
const run_required_parameters: WithRequiredParamFunction = () => Promise.resolve('ok'); // Why here is not required

// addition
// manual compose function
type AFunction<P extends Array<any>, R> = (...args: P) => R
// not warning, need to use object carry parameters
type ObjectParam<T> = T extends [...infer R] ? [R[0], R[1]] : never;
type TransfromObject = { slogan: ObjectParam<Param>[0], name: ObjectParam<Param>[1] }
// Example 5: Done!


// Example 6:
type $<T extends HKT<any, any>, S extends Source<T>> =
    (T & { [source]: S })[typeof target];
interface UseTheNewSymbol extends HKT<unknown> {
    [target]: Source<this>
}
type Using = $<UseTheNewSymbol, {}>
interface PackThisBridge<T, K> extends HKT<K> {
    [target]: Source<this>
}
interface CarryGeneric extends HKT<unknown> {
    [target]: Source<this>
}
type AGeneric<T> = T  // here will be change for how to carry generic
type TTT<T> = $<CarryGeneric, AGeneric<T>>
// so I finished the lower level of generic, as a parameter
// Example 6: Done!

// Example 7: 
// let me rename all types above example to make easy understand
type HowToDealTypeVariable<Var> = Var
interface CatchType extends HKT<unknown> {
    [target]: Source<this>
}
type WhateverIWantToDo<Var> = $<CatchType, HowToDealTypeVariable<Var>>
type NowIKnowDoingWhat<T> = HowToDealTypeVariable<T>
type WayOneToArrayBound<T> = Array<NowIKnowDoingWhat<T>>;
type WayTwoToObjectBound<T> = T & NowIKnowDoingWhat<T>;
type WayThreeToHaveSomeOperation<T> = NowIKnowDoingWhat<T> extends { hungry: boolean } ? 'eat' : 'dead';
type WayFourToRefactor<T> = keyof NowIKnowDoingWhat<T>;
// Example 7: Done!