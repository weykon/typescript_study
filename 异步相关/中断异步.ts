export namespace 中断异步 {

    async function let_see_promise_race() {
        const ready_get = await Promise.race(
            [
                new Promise<number>((suc, fail) => setTimeout(() => {
                    console.log('1000 fail')
                    fail(1)
                }, 1000)),
                new Promise<number>((suc, fail) => setTimeout(() => {
                    console.log('2000 pass')
                    suc(2)
                }, 2000)),
            ]
        );

        console.log('I never reach HERE !')


    }


    async function warpMaybeInterruptPromiseFn(beInterruptFn: () => Promise<boolean>, income_promise: () => Promise<unknown>) {


        return Promise.race([b, income_promise])
    }


    let_see_promise_race();

    const ctrller = new AbortController();

    const task = new Promise((resolve, reject) => {
        ctrller.signal.addEventListener("abort", () => {
            reject();
        });
    });

    ctrller.abort();

    function i_will_click_and_interrupt_that() {
        console.log('I do the worst');
        // there is a class Can do this, AbortController.
        // if we nor have , take some event drive
    }


}