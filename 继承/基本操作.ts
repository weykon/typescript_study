class Animal {
    constructor(public name: string) { }
    move(speed: number) {
        console.log(`${speed}`)
    }
}


class Snake extends Animal {
    constructor(name: string) { super(name) }
    move(speed = 5) {
        console.log(`snake move speed : ${speed}`)
        super.move(speed)
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name) }
    move(speed = 10) {
        console.log(`horse move speed : ${speed}`)
        super.move(speed)
    }
}
