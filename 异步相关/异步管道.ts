export namespace 异步管道_promise队列 {

    let curPromise = Promise.resolve();

    const list = new Array(10)
    list.fill(0)
    list.forEach(async (e) => {
        curPromise = curPromise.then(async () => {
            await new Promise((suc, fail) => {
                setTimeout(() => {
                    console.log(e);
                    suc(e)
                }, 1 * 1000);
            })
        })
    })

    curPromise.then(() => { console.log('done') })

    export function promiseQue<T>(queArr: (() => Promise<T>)[]) {
        let curP = Promise.resolve();
        queArr.forEach(async (e) => {
            curP = curP.then(async () => {
                await e();
            })
        });

        return curP.then(()=>{})
    }
}