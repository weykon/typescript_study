import { Comp } from "./Comp";
import { CompLog } from "./Comp";
@CompLog
export default class PlayerComp extends Comp {
    constructor() {
        super();
    }
    public name: string = 'PlayerComp'
}