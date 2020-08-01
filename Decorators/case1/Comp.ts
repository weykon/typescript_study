
export let CompList = new Array<Comp>()

export function CompLog(target: Comp) {
    CompList.push(target)    
}


export class Comp {
    constructor() {
        console.log('base COMP ctor...')
    }
    public name: string | undefined
}