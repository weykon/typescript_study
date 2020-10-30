class Role { }
class Human extends Role { humanAction: any = 1; }
class Monster extends Role { monsterAction: any = 2; }

type TypeRole<T> =
    T extends Human ? 'Human' :
    T extends Monster ? 'Monster' :
    'Role';

let n = new Human()

function getActiond<TypeRole>(t: TypeRole) {
    console.log('action', t)
}

getActiond<Human>(n)
console.log(n instanceof Monster, n instanceof Human, typeof n)