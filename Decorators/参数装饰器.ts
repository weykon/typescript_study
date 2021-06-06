namespace ParamDecorators {

    function paramDecrat(target: any, methodName: string, paramIndex: number) {
        console.log(1, target, 2, methodName, 3, paramIndex)
    }

    class Hello {

        public fix: boolean = true;

        public checkType<T>(@paramDecrat a: string, @paramDecrat ...t: T[]) {
            console.log(this.fix);
            this.fix = true;
            console.log(this.fix);
        }
    }

    export let a = new Hello();
    const inputStr = '4'
    const hello = new Hello()
    a.checkType<any>(inputStr, 2, hello)

    class Target {

        public fix: boolean = true;

        public checkType<T>(@paramDecrat a: string, @paramDecrat t: T) {
            console.log(this.fix);
            this.fix = true;
            console.log(this.fix);
        }
    }

    let b = new Target();
    b.checkType<any>(inputStr, hello)


}