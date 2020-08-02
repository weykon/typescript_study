import * as BlackBorad from './Decorators/case2/BlackBorad'
import { person } from './Decorators/DecoratorTest'
import * as Decora from './Decorators/DecoratorTest'
import PlayerComp from './Decorators/case1/PlayerComp';
import EnemyComp from './Decorators/case1/EnemyComp';
import { CompList } from './Decorators/case1/Comp'
function main() {
    console.log('程序开始...')

    Decora.ObjectList.forEach(e => {
        let a = new e();
        console.log(a.name)
    })

    console.log('----------end')
}


function mainCase1() {
    console.log('start....')


    CompList.forEach(e => {
        new (e as any)();
        console.log(e)
    });

    console.log('end....')
}

function mainCase2() {
    console.log('程序开始')
    let a = new BlackBorad.Normal()
    console.log('log~~~~: ', a.prop)
}

mainCase2()