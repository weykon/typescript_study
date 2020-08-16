class Role { }
class Human extends Role { humanAction: any }
class Monster extends Role { monsterAction: any }

type TypeRole<T> =
    T extends Human ? 'Human' :
    T extends Monster ? 'Monster' :
    'Role';

let n = new Human()
