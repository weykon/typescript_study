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


    let eventTarget1 = new EventTarget();
    let event1 = new Event('myEvent1');
    let promise: any = null
    class EventClass {
        constructor() {
            promise = new Promise((suc, fail) => {
                eventTarget1.addEventListener('myEvent1', function (e) {
                    suc(true)
                })
            });
        }
        async ready() {
            setTimeout(() => {
                eventTarget1.dispatchEvent(event1);
            }, 2 * 1000);
            console.log('Start waiting for event1');
            await promise!;
            console.log('Event has been fired1');
        }
    }
    new EventClass().ready()

    let finished = false;
    let eventTarget2 = new EventTarget();
    let eventTarget3 = new EventTarget();
    let event2 = new Event('myEvent2');
    eventTarget2.addEventListener('myEvent2', function (e) {
        console.log('myEvent2 to eventTarget2')
    })
    eventTarget3.addEventListener('myEvent2', function (e) {
        console.log('myEvent2 to eventTarget3')
    });
    setTimeout(() => {
        eventTarget2.dispatchEvent(event2);
        eventTarget3.dispatchEvent(event2);
    }, 2 * 1000);
    setTimeout(() => {
        finished ? console.log('finished') : console.log('not finished');
    }, 1*1000);
}