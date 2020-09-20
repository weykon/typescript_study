namespace ParamDecorators {

    function paramDecrat(target: any, methodName: string, paramIndex: number) {
        console.log(target, methodName, paramIndex)

    }

    class Hello {



        public checkType<T>(a: string, @paramDecrat ...t: T[]) { }
    }

    export let a = new Hello()
    a.checkType<number>('1', 2)

}