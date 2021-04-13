export namespace 去除可选 {

    type RemoveOption<T> = { [P in keyof T]-?: T[P] }

    type person = {
        name: string,
        age?: number
    }

    const p: person = {
        name: "kate",
    }

    type detail = RemoveOption<person>

    const p_: person & detail = {
        name: "kate",
        age: 2
    }
}