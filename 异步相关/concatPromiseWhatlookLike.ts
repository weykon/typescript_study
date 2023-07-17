export namespace ConcatPromiseWhatlookLike {
    function doublePromise() {
        return new Promise((suc, fail) => {
            setTimeout(() => {
                console.log('doublePromise');
                suc(
                    new Promise((suc, fail) => {
                        setTimeout(() => {
                            console.log('doublePromise2');
                            suc('the last');
                        }, 2 * 1000);
                    })
                );
            }, 2 * 1000);
        })
    }

    doublePromise()
        .then((suc) => { console.log('finished 1'); return suc; })
        .then((suc) => console.log('finished 2', suc))
}