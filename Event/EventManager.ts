namespace EventManager {
    type MyEvent = { name: string, func: Function }



    class EventBus {




    }



    class EventHadler {
        on(name: string, func: Function, target: EventHadler = this) {
            if (!this._event[name]) {
                this._event[name] = [];
            }
            if (target !== this) {
                this._event[name].push({ func: func, once: false, isDone: false, target: target });
            }
            this._event[name].push({ func: func, once: false, isDone: false });
        }
        once(name: string, func: Function) {
            if (!this._event[name]) {
                this._event[name] = [];
                this._event[name].push({ func: func, once: true, isDone: false });
            }
        }
        emit(name: string, ...params: any[]) {
            if (!this._event[name]) {
                return
            }
            this._event[name].forEach(e => {
                if (!e.isDone) {
                    return
                }
                e.isDone = true;
                e.func.call(e.target ? e.target : this, ...params);
            })
        }
        off(name: string, func: Function) {

        }
        _event: { [name: string]: { func: Function, once: boolean, isDone: boolean, target?: EventHadler }[] } = {}

        offAll() {
            this._event = {}
        }

    }



}
