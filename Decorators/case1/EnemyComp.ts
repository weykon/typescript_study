
import { Comp } from "./Comp";
import { CompLog } from "./Comp";


@CompLog
export default class EnemyComp extends Comp {
    constructor() {
        super()
    }
    name: string = 'EnemyComp'
}