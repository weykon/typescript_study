type SigleParamOrParamArray<T> = T | Array<T>

function inputSomeThing<T>(name: SigleParamOrParamArray<T>) {
    console.log('in')
    name instanceof Array ?
        (name as Array<T>).forEach(e => {
            console.log(e)
        })
        : console.log(name);
}


type NameOrNameArray = string | string[];

function createName(name: NameOrNameArray) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}

var greetingMessage = `Greetings, ${createName(["Sam", "Smith"])}`;
console.log(greetingMessage);

inputSomeThing(['asd', 123])
inputSomeThing(123)