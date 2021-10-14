export class GameSystem {
    protected async init() { }
    protected async shootdown() { }


    public static initStep() {
        initStep.forEach(async (e) => {
            const _sys = await new e().init();
            this.sys_insts
        })
    }

    public static sys_insts: GameSystem[];

}


// example
class UIView extends GameSystem {
    async init() {

    }
}

class GamePlay extends GameSystem {

}

const initStep = [UIView, GamePlay]
