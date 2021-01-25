namespace 类中取实例 {
  const data = { A: 2, B: 3 };

  @dcrat(data)
  class A {
    constructor() {}
    a = 1;
  }

  @dcrat(data)
  class B extends A {
    b = 2;
  }

  function classDcrat<T extends { new (...args: any[]): {} }>(ctor: T) {
    return class extends ctor {};
  }

  function dcrat(data: any) {
    return function (target: any) {
      console.log(target);
      console.log(target.prototype);
    };
  }

  console.log(new A());
  console.log(new B());
}
