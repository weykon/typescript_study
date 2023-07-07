export namespace PromiseWaitEvent {
    let eventTarget = new EventTarget();
    let event = new Event('myEvent');
    let new_promise: any = null
    new_promise = new Promise<void>((resolve, reject) => {
        eventTarget.addEventListener('myEvent', function (e) {
            resolve()
        })
    })
    setTimeout(() => {
        eventTarget.dispatchEvent(event);
    }, 3 * 1000);
    async function waitEvent() {
        console.log('Start waiting for event');
        await new_promise!;
        console.log('Event has been fired');
    }
    waitEvent();


    // 2. 挂下管理的resolve 和 reject
    // let eventTarget2 = new EventTarget();
    // let event2 = new Event('myEvent');
    // let new_promise2: any = null;
    // function resultHandle(resolve: any, reject: any) {
    //     eventTarget2.addEventListener('myEvent', function (e) {
    //         resolve()
    //     })
    // }
    // new_promise2 = new Promise<void>(resultHandle);

}