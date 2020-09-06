
class Player {
    constructor() {
    }
}
let obj = {}
let propk = ['name', 'ts', 'asd']
let propv = ['asd', 0, 2]

let PropMap = new Map<string, any>()
PropMap.set('name', 'asd')
PropMap.set('ts', 2)

propk.forEach((e, i) => {
    (<any>obj)[e] = propv[i]
})
