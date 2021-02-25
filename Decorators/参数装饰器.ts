namespace ParamDecorators {

    function paramDecrat(target: any, methodName: string, paramIndex: number) {
        console.log(1, target, 2, methodName, 3, paramIndex)
    }

    class Hello {

        public fix: boolean = true;

        public checkType<T>(a: string, @paramDecrat ...t: T[]) { 
            console.log(this.fix);
            this.fix = true;
            console.log(this.fix);
        }
    }

    export let a = new Hello()
    a.checkType<number>('1', 2)

}