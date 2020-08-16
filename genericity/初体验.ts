const m_name: string = 'lucy';
console.log(m_name)

class mRole { Action() { } }
class mHuman extends mRole { Action() { 1; } }
class mMonster extends mRole { Action() { 2; } }

type selectType = mHuman | mMonster
function getAction(node: selectType) {
    return node.Action
}

function genraicityGetAction<T extends mRole>(type: T) {
    return type.Action
}

let a = new mHuman()
let aAction = getAction(a)

let b = new mMonster()
let bAction = genraicityGetAction<typeof b>(b)

console.log(aAction, bAction)