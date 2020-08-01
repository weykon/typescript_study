console.log('------------------------------------------\n\n\n\n\n\n')
//------函数装饰器-----
function BadGuySkin<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log('to Addtition BEFORE?');
    return class extends constructor {
        hasBadGuyProp = 'sorry woman'
    }
}

function normalBody() {
    console.log('eat food~');
    return function (a: any, b: any, c: any) {
        console.log('\n', a, '\n', b, '\n', c)
        console.log('done done', typeof b, c.value.toString())
    }
}

@BadGuySkin
export class person {
    constructor() {
        console.log('this is normal person')
    }
    @normalBody()
    public Wear() {
        console.log('wear')
        return 'wear done'
    }
}

export let ObjectList = new Array<any>()
function CreateFirst(target: { new(): {} }) {
    ObjectList.push(target)
}
@CreateFirst
export class mObject {
    constructor() {
        console.log('fuck create me')
    }
    name:string = 'o'
}
//-------------------