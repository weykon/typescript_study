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

    const aaa : Builder0 = {[build0]: ()=>'', abc: {} }

}
