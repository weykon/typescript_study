namespace 装饰器中的继承问题 {
  class A {
    a: number = 0;

    @dcrat()
    funcA(self: A) {
      console.log("A this", this);
    }
  }

  class B extends A {
    b: number = 1;

    @dcrat()
    funcB(self: B) {
      console.log("B this", this);
    }
  }

  function dcrat() {
    return function (
      target: any,
      name: string,
      descriptor: PropertyDescriptor
    ) {
      console.log("dcrat\n", "\n", target, "\n", name, "\n", descriptor, "\n");

      let ori = descriptor.value;

      descriptor.value = (self: any) => {
        console.log('target',target);
        console.log('self',self);
        self.b = 2;

        ori.call(self);
      };
    };
  }

  const a = new A();
  const b = new B();
  a.funcA(a);
  b.funcB(b);

  //可获取 实例对象了
}
