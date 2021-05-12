namespace 将对象转化为数组 {
    const Obj = {
        name: '1',
        Pos: [1, 1],
        id: 1
    }

    function TransList(obj: typeof Obj) {
        let list: Array<string> = []
        Object.keys(obj).map((e: string) => {
            list[e as any] = (<any>obj)[e]
        })
        return list
    }

    console.log(TransList(Obj))


    const Obj1 = {
        id: 1,
        id1: 2,
        id2: 3,
        length: 3
    }

    console.log(Array.from(Obj1))
}