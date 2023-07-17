
export namespace 试试内部属性函数被外部重定义然后调用 {
    class C {
        customFunc = () => {
            console.log('source')
        }
        run() {
            this.customFunc();
        }
    }


    const c = new C();
    c.run()
    c.customFunc = () => {
        console.log('changed');
    }
    c.run();
}