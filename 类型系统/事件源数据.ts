module 事件源数据 {

    type PropEventSource<T> = {
        on<Key extends string & keyof T>
            (eventName: `${Key}Changed`, callback: (newValue: T[Key]) => void)
            : void;
    }

}