declare const common: unique symbol;
declare const out: unique symbol;

// 用于去包裹成为hkt的类型
interface TypeStore<T = unknown, U = unknown> {
    [common]: T,
    [out]: U
}

// 咖啡，咖啡
type CoffeeCommon = { name: string, place_of_origin: string };

// 用于连接
interface CoffeeContectHkt extends TypeStore<CoffeeCommon> {
    [out]: CoffeeCommon & this[typeof common]
}
// so we can pass all depend on the unknown keyword.

type Latte = TypeStore<CoffeeContectHkt, { heat: string }>

// Or generate a new type of setting Coffe type 

type CreateANewCoffeeType<T> = TypeStore<CoffeeContectHkt, T>

// but in same, 
type NewCoffee<T> = CoffeeCommon & T
type Latte1 = NewCoffee<{ heat: string }>  