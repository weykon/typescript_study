# 类型推导

是一项新内容，需要我们认识。
首先来一段顾名思义的代码：

``` typescript
    const a = 'lucifer';
    a.toFixed(); // Property 'toFixed' doesn't exist on type 'string'.
    a.includes('1'); //ok
```

这是一个很简单的例子。不过这个类型推导更能用到我们的泛型类型推导中：

``` typescript
function id<T>(arg: T):T{
    return arg;
}
id<string>('lucifer'); //ok
id('lucifer') //基于了类型推导了。所以才可以这样写。
```

# 默认参数

泛型也有默认参数：
```typescript 
type A<T = string> = Array<T>; 
const aa : A = [1]; // type 'number' is not assignable to type 'string'.
const bb : A = ['1']; //ok
const cc: A<number> = [1]; // ok
```


---
# 停停停 🤚！ 什么时候用泛型？
+ 需要作用到很多类型的时候，比如我们介绍的 id 函数的泛型声明。
+ 需要被用到很多地方的时候，比如我们介绍的 Partial 泛型。