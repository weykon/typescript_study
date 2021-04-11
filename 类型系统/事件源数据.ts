module 事件源数据 {

    type PropEventSource<T> = {
        on<Key extends string & keyof T>
            (eventName: `${Key}Changed`, callback: (newValue: T[Key]) => void)
            : void;
    }

    type MyMoneyChange = PropEventSource<{ 支出项目: any }>

    function go() {

        let moneyChange: MyMoneyChange = {
            on<支出项目>
        }
    }

}