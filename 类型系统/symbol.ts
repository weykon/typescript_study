namespace Symbol_touch {
    const build = Symbol("build")

    type Builder = {
        [K: string]: Builder
        [build]?: () => string
    }


    declare const build0: unique symbol
    type Builder0 = {
        [build0]?: () => string
        [K: string]: Builder0
    }

    const aaa: Builder0 = { [build0]: () => '', abc: {} }


    // unique symbol 唯一类型
    // The new type is only allowed on const declarations
    // and readonly static properties, 
    // and in order to reference a specific unique symbol, 
    // you’ll have to use the typeof operator.
    declare const fromStringForABC: unique symbol;
    type FromStringForABC<T> = T extends string ? T : typeof fromStringForABC
    type Compare<T extends string> = T extends FromStringForABC<T> ? 'yes' : 'no'
    type Check = Compare<FromStringForABC<string>>

    export declare namespace TypePlay {
        const container: unique symbol
        type Container<T> = typeof container
        type ObjectWithinContainer<T> = Container<T>
    }

    type NewObject = TypePlay.ObjectWithinContainer<{ name: string }>
    const newObject: NewObject = Symbol({
        name: "1"
    })
}
