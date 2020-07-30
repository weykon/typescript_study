//------函数装饰器-----
function BadGuySkin<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log('to Addtition BEFORE?');
    return class extends constructor {
        hasBadGuyProp = 'sorry woman'
    }
}

function normalBody() {
    console.log('eat food~');
}

@BadGuySkin
export class person {
    constructor() {
        console.log('this is normal person')
    }

    public Wear() {

    }


}



//-------------------