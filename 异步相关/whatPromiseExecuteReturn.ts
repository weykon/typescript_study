export namespace wahtPromiseExecuteReturn {
    function promise1() {
        return new Promise((suc, fail) => {
            setTimeout(() => {
                console.log('promise1');
                suc(true);
            }, 1 * 1000);
        });
    }
    function promise2() {
        return new Promise((suc, fail) => {
            setTimeout(() => {
                console.log('promise2');
                suc(true);
            }, 2 * 1000);
        });
    }

    const a = promise1();
    setTimeout(() => {
        // 如果超过了时间去then的话
        a.then((suc) => { console.log('aaaa') })
    }, 5 * 1000);


    const arr = [];
    arr.push(promise1(), promise2());

    Promise.all(arr).then((suc) => {
        console.log('all finished', suc);
    })
}