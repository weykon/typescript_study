
const build = Symbol("build")

type Builder = {
    [K: string]: Builder
    [build]: () => string
}