* 这里我们就定义了一个最简单的泛型操作符

``` typescript
type foo<T> = T;
```

这里的代码如何理解呢，其实这里我把代码转换成大家最熟悉的 Javascript 代码其实就不难理解了：

* 把上面的类型代码转换成 `JavaScript` 代码

``` typescript
function foo(T) {
    return T
}
```
