namespace 装饰器中的继承问题 {
  class A {
    a: number = 0;
    @dcrat()
    funcA() {"A"}
  }

  class B extends A {
    b: number = 1;

    @dcrat()
    funcB() {"B"}
  }

  function dcrat() {
    return function (
      target: any,
      name: string,
      descriptor: PropertyDescriptor
    ) {
        
    };
  }
}
