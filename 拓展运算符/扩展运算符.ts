namespace AdditionSymbol {
    function params(arr: Array<number>, ...args: any) {
        console.log(arr, args, ...args)
    }
    params([1, 2], '2', '123')

    function addListener<T extends Event<T>>(type: T, target?: any, ...args: Option[]) {

    }

    function emit(type: string, target?: any, ...args: any) {

    }

    interface Option {

    }
    class Event<T>{
        public mname!: string
        public options!: Option[]
        public Event<T>() {
        }
    }

    class LashiEvent implements Event<LashiEvent> {
        public Event<T extends LashiEvent>(): LashiEvent {
            let t = LashiEvent as { new(): T }
            return new t()
        }
        public mname!: string
        public options!: Option[]

    }


    addListener<Event<LashiEvent>>(new LashiEvent)
}


