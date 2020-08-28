namespace GenericityOption {

    interface Option<T extends Event<T>> {

    }

    class Event<T>{
        constructor(private ctor: { new(): T }) {

        }
        public Event<T>() {
            return new this.ctor()
        }
    }

    class GetUpEvent extends Event<GetUpEvent> {
        public Event<T extends GetUpEvent>(): GetUpEvent {
            let t = GetUpEvent as { new(): T }
            return new t()
        }
    }


    class TestSameNameFunc {
        constructor() {
            console.log('1')
        }

        public TestSameNameFunc() {
            console.log('2')
        }
    }


    let test = new TestSameNameFunc()


}