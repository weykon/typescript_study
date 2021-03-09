namespace 问号点 {
  class A {
    constructor(public num: number) {}
  }
  function name1(index: number) {
    const arr = new Array<A>(3);
    return arr[index]?.num;
  }
  function name2(index: number) {
    const arr = new Array<A>(3);
    return arr[index]?.num;
  }
  console.log(name1(3)); //undefined
  console.log(name2(3)); //error
}
