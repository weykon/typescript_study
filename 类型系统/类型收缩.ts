module 类型收缩 {



    function triple(input: number | string): number | string {
        if (typeof input === 'number') {
            return input * 3;
        } else {
            return (new Array(4)).join(input)
        }
    }


    type Name = string
    type GreetWord = ("hello" | "hi")
    type GreetSentence = `${GreetWord} ${Name}`

    function greet(hi: GreetSentence) {
        return `xixixi, ${hi}`
    }

    greet("hello Name")  // ok
    greet("helloName")  // err
}