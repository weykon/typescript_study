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
        promise: any
        constructor() {
            
            this['promise'] = new Promise((suc, fail) => {
                eventTarget.addEventListener('myEvent1', function (e) {
                    suc(true)
                })
            });
        }
        async ready() {
            setTimeout(() => {
                eventTarget1.dispatchEvent(event1);
            }, 3 * 1000);
            console.log('Start waiting for event1');
            await this.promise!;
            console.log('Event has been fired1');
        }
    }
    new EventClass().ready()
}