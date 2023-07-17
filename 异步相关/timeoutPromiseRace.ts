export namespace timeoutPromiseRace {


    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('timeout');
        }, 4 * 1000);
    })

    const missionPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('mission completed');
        }, 2 * 1000);
    })

    // Promise.race([timeoutPromise, missionPromise])
    //     .then((value) => {
    //         console.log(value);
    //     })
    //     .catch((reason) => {
    //         console.log(reason);
    //     })

    // Failed example 
    // const missionsPromise = Promise.all([
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('mission1 completed');
    //         }, 2 * 1000);
    //     }),
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('mission2 completed');
    //         }, 3 * 1000);
    //     })
    // ]);
    // const timeoutPromise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('timeout');
    //     }, 3 * 1000);
    // });
    // Promise.race([timeoutPromise2, missionsPromise])
    //     .then((value) => {
    //         console.log('then',value);
    //     })
    //     .catch((reason) => {
    //         console.log('catch',reason);
    //     })

    function resolve(value: number, seconds: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve(value), seconds * 1000)
        });
    }
    function reject(reason: string, seconds: number,) {
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                reject(reason), seconds * 1000)
        });
    }
    // let release = () => { };
    // reject('timeout', 10, release)
    Promise.race([Promise.all([resolve(2, 2), resolve(4, 4)]), reject('timeout', 10),])
        .then((n) => void console.log('suc', n))
        .catch((reason) => {
            console.log(reason);
        })

    // maybe also can release the timeout promise or delete the timer
    function wrapperReject(reason: string, seconds: number, wrap: (value: unknown) => void) {
        return new Promise((resolve, reject) => {
            let timer = setTimeout(() =>
                reject(reason), seconds * 1000)
            wrap = () => { clearTimeout(timer); resolve('ok'); }
            console.log('wrap,', wrap)
        })
    }
    let temp_wrap: any
    Promise.race([resolve(3, 3).finally(()=>{console.log('finally')}), wrapperReject('timeout', 2, temp_wrap),])
        .then((n) => { console.log('suc1', n, temp_wrap); })
        .catch((reason) => {
            console.log(reason);
        })
}
