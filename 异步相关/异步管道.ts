export namespace 异步管道_promise队列 {

    let curPromise = Promise.resolve();

    // const list = new Array(2)
    // list.fill(0)
    // list.forEach(async (e) => {
    //     curPromise = curPromise.then(async () => {
    //         await new Promise((suc, fail) => {
    //             setTimeout(() => {
    //                 console.log(e);
    //                 suc(e)
    //             }, 1 * 1000);
    //         })
    //     })
    // })

    // curPromise.then(() => { console.log('done') })

    export function promiseQue<T>(queArr: (() => Promise<T>)[]) {
        let curP = Promise.resolve();
        queArr.forEach(async (e) => {
            curP = curP.then(async () => {
                await e();
            })
        });

        return curP.then(() => { })
    }

    promiseQue<void>([
        () => new Promise<void>((suc, fail) => {
            console.log('1');
            setTimeout(() => {
                suc()
            }, 2 * 1000);
        }),
        () => new Promise<void>((suc, fail) => { console.log('2'); suc(); }),
    ].map((e: any, i: number) => {
        return () => new Promise<void>(async (suc, fail) => {
            console.log(i);
            setTimeout(() => {
                suc()
            }, 1 * 1000);
        })
    }
    ));



    const resolveInTwoSeconds = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(2), 2000);
        })
    };

    const resolveInThreeSeconds = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(3), 3000);
        })
    };

    const resolveInFiveSeconds = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(5), 5000);
        })
    };

    (async function () {
        const asyncFunctions = [resolveInTwoSeconds, resolveInThreeSeconds, resolveInFiveSeconds];
        for await (const asyncFn of asyncFunctions) {
            const result = await asyncFn();
            console.log(result);
        }
    })();


}