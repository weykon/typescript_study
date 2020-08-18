var part1 = (() => {
    class State_class {
        constructor(draw) {
            this.draw = draw
        }
    }

    function State_func(draw) {
        this.draw = draw
    }

    //class 
    let s1cls = new State_class('bar')
    let s2cls = new State_class('foo')

    //func 
    let s1fc = new State_func('bar');
    let s2fc = new State_func('func');

    console.log(s1cls, s1fc.draw)
})()

var part2 = (() => {
    function State() { }
    State.prototype.draw = 'pie';

    let state1 = new State();
    let state2 = new State();
    console.log(state1.draw);
    console.log(state2.draw);
    state2.draw = 'bar';
    console.log(state1.draw);
    console.log(state2.draw);
    // 其实 state1 和 state2 只是 State 的一个引用
    console.log(state1.__proto__);
    console.log(state2.__proto__);

    console.log(State.prototype == state2.__proto__);
    //每一个实例对象都会默认携带一个constructor属性指向其构造函数，
    //那么原型对象为什么也会有一个constructor属性呢，其实他也是构造函数的一个实例

    //constructor 、 __proto__ 、 prototype

    //constructor 属性 是构造函数的一个实例
    class a { constructor() { } }
    let a1 = new a()
    function a() { something }
    // a1.constroctor  === a.prototype.constructor //true
})()