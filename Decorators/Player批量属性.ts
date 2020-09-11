namespace Player批量属性 {
    //OLD     BAD
    class Player {
        @pramaDecorator()
        public prop = ['name', 'ts', 'asd'];

        constructor() {
            console.log(this)
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
    //OLD ------- BAD =============================

    // Object.defineProperties(Player.prototype.prop,
    //     {
    //         some: { value: 123 },
    //         prop: { value: ['sss'] }
    //     });

    function pramaDecorator() {
        return function (targetProp: any, propName: string) {
            console.log(targetProp);
            (<Array<string>>(targetProp['prop'])).forEach((e, i) => {
                Object.defineProperty(targetProp, e, propv[i])
            })
        }
    }

    console.log(new Player())
}


