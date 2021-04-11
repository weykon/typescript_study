
export namespace returnOrNone {

    export async function main() {
        await run1();
        await run2();
        console.log('done')
    }

    async function run1() {

        return await new Promise<void>((suc, fail) => {
            setTimeout(() => {
                console.log(1)
                suc()
            }, 2 * 1000);
        })
    }
    async function run2() {
        await new Promise<void>((suc, fail) => {
            setTimeout(() => {
                console.log(2)
                suc()
            }, 2 * 1000);
        })
    }
}

returnOrNone.main();