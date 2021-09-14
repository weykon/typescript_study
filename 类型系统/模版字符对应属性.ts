module 模版字符对应属性 {


    type Way = "id" | "class"

    type Value = number

    type Prop = `${Way}-${Value}`

    const aProp: Prop = `id-1`

    // 拓展加限制
    type TWay =
        | {
            type: 'id',
            value: number
        }
        | {
            type: 'class',
            value: string
        }
        | {
            type: 'bool',
            value: 'true' | 'false'
        }

    type TProp<T extends TWay['type']> = `${TWay['type']}-${Extract<TWay, { type: T }>['value']}`

    const bProp: TProp<'bool'> = `bool-true`
}