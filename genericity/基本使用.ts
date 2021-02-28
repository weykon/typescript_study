namespace 基本使用 {
  type Dog<T> = { name: string; type: T };
  const dog: Dog<number> = { name: "ww", type: 20 };

  class Cat<T> {
    private type: T;
    constructor(type: T) {
      this.type = type;
    }
  }
  const cat: Cat<number> = new Cat<number>(20);
  function swipe<T, U>(value: [T, U]): [U, T] {
    return [value[1], value[0]];
  }
  swipe<Cat<number>, Dog<number>>([cat, dog]);

  //  泛型推断 infer   来判断返回值类型;
  type Foo<T> = T extends {t: infer Test} ? Test :string 

}
