function addAge(args: number) {
    return function (target: Function) {
        target.prototype.age = args;
    };
}

@addAge(18)
class Hello {
    name: string;
    age: number = 1;
    constructor() {
        console.log('hello');
        this.name = 'yugo';
    }
}

console.log(Hello.prototype.age);//18
let hello = new Hello();

console.log(hello.age);//18


//------------------------------------


function dcrat(args: any) {
    return function (target: Function) {
        target.prototype.prop = args;
    }
}

@dcrat(2)
export class Normal {
    prop: any;
    constructor() {
        console.log('Normal ctor...')


        console.log('Normal ctor done .... ')
    }

    canModifyFunc() {
        console.log('OriginFunc')
    }
}


//---------------------
function addCopm(comp:string) {
    return function (target: any) {
        
    }
}

@addCopm('skin')
function Monkey() {
    console.log('normal monkey')
}
