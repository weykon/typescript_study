"use strict";
function inputSomeThing(name) {
    console.log('in');
    name instanceof Array ?
        name.forEach(e => {
            console.log(e);
        })
        : console.log(name);
}
function createName(name) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}
var greetingMessage = `Greetings, ${createName(["Sam", "Smith"])}`;
console.log(greetingMessage);
inputSomeThing(['asd', 123]);
inputSomeThing(123);
//# sourceMappingURL=基本操作.js.map