namespace AdditionSymbol {
    function params(arr: Array<number>, ...args: any) {
        console.log(arr, args, ...args)
    }
    params([1, 2], '2', '123')

    function addListener<T extends Event<T>>(...args: Option[]) {

    }

    function emit(type: string, target?: any, ...args: any) {

    }

    interface Option {
        name: string
        value: Function | any
    }
    class Event<T>{
        public static mname: string
        public static options: Option[]
        public Event<T>() {
        }
    }

    class LashiEvent implements Event<LashiEvent> {
        public Event<T extends LashiEvent>(): LashiEvent {
            let t = LashiEvent as unknown as { new(): T }
            return new t()
        }
        public static mname: string
        public static options: Option[] = [{
            name: '第一option',
            value: (str: string) => { console.log('我是Option的Key1', str) }
        }, {
            name: '第二option',
            value: (num: number) => { console.log('我是Option的Key2', num) }
        }]


        public SetOption(...option: Option[]): Option[] {
            return option
        }
    }
    class LaniaoEvent implements Event<LaniaoEvent>{
        public Event<T>(): void {

        }
    }

    addListener<Event<LashiEvent>>(...LashiEvent.options)
    addListener<Event<LashiEvent>>(...(new LashiEvent()).SetOption(
        { name: 'sa', value: () => { } },
        { name: 'asdasd', value: () => { } }
    ))
}


