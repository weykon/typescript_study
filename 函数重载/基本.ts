namespace 函数重载 {



    function a<T>(p1: T): T;
    function a<T, K>(p1: T, p2?: K): T {
        return p1;
    }

    function addComponent<K>(type: { new(): K }): K;
    function addComponent<K, P1, P2, P3>(type: { new(): K }, p1?: P1, p2?: P2, p3?: P3): K {
        let component!: K;
        return component;
    }
}