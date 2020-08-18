# ts提供基本类型 : string、number ...

    - 我们可以用 type interface 来定义自己的雷总。

区别编程，大部分人是「对值编程」, 如:

    

``` Typescript
    if(person.isVIP){
        console.log('yes')
    }
    if(cnt > 5){
        //todo
    }
    const personNames = persons.map([ => p.name)
```

先看看需求：
---

    泛型就是对类型编程。 
        ----我

---

``` Typescript
    enum Sex{
        Man,Woman,Unknow,
    }
    interface Person{
        name: stirng;
        sex: sex;
        age: number;
    }
```

加入有一个新需求来到，这三个属性可以选填，不过手机号码要记下来。那么...

* 在原有 Person 中直接添加phone？ 显然很不可理，也有人没有phone的属性。
* 或者，添加一个新类型 MarketPerson

```Typescript 
interface MarketPerosn{

    name?: string
    sex?: Sex;
    age?:number;
    phone: string;

}

``` 
那么这显然是重复类型定义。惨////

* 解决方法有两种： 集合、泛型。 （类继承难道不是这么用么）

---
集合先上  
```TYPESCRIPT
type MarketPerson = Peson & {phone:stirng}
```

新添加的phone属性算是成功了， 但是其余三个属性要设置为可选属性。
那么我们定义一个函数，用于执行传入的类型后，返回的是一个类型里的属性全部变成可选的。

``` typescript
function Partial(Type){
    type ans = 空类型
    for(k in Type){
            空类型[k] = makeOptional(Type,k)
    }
    return ans
}
type PartialedPerson = Partial(Person)
```

再者，其实TS有做这样的工作：

``` Typescript
//ts~
type PartialPerson = Partial<Person>
type Partial<Type> = {do something}
//我们的~
function Partial(Type){do something}
type PartialPerson = Partial(Person)
```

---

则假设我们要新写一个interface
```Typescript 

    interface Person {
            name?: string
            sex?: Sex;
            age?: number;
    }

``` 
* 这样就没那么优雅了。

--- 

* 具体实现 

```typescript 
    type Partial<T> = { [P in keyof T] ?: T[P]};
    //对比 
    function t (name){
        return 'hello, ${name}';
    }

    //执行
    type PartialStudent = Partial<IStudent>
    t('lucy')
```

* 泛型与函数相似，是将类型看成值，然后对类型进行编程，是泛型的基本思想。

泛型类似于函数，只不过是作用在类型上，思想上和函数使用没有太多不同，泛型产生的具体类型也支持类型的操作。
比如: 

``` typescript
type ComponentType< P={} > = ComponentClass<P> | FunctionComponent<P>
```

虽然我暂时还没看懂这一句。我们继续向下看...

``` typescript
function id<T, U>(arg1: T, arg2: U): T {
  return arg1;
}
```

返回值也可以是复杂类型

``` typescript
function id<T, U>(arg1: T, arg2: U): [T,U]{
  return [arg1,arg2]
}
```

<T, U> ----形参
arg1: T 和 arg2: U 和 [T, U] 中的T和U 都是在使用形参
再看看下面用法：

``` typescript
type P = [number,string,boolean]
type Q = Date;

type R = [Q, ...P];
```

这是我看得懂的。

``` typescript
type Lucifer = LeetCode;
type LeetCode<T = {}> = {
    name: T;
};
const a : LeetCode<string>; // ok
const a : Lucifer<string>; //Type 'Lucifer' is not generic

//要改：
type Lucifer<T> = LeetCode<T>; //这样定义就ok了
```

新需求： 紧在眼眉的新需求呐～ 就是当我们泛型约束，想传入的参数，是操作参数的属性怎么办？

``` typescript
function trace<T>(arg : T): T{
    console.log(arg);
    return arg;
}
```

若我想用这句话打印传进来参数的size属性呢？就像是我传进来了一个长方形，我想用这个长方形底下的size属性。
---

* 在我们js思维里面，不是直接就：

``` javascript
function trace(someType) {
    console.log(someType.size)
    return someType.size;
}
```

* 吗？ 

---
不过按照这么写，这里面就没有泛型了呀。所以我们按照ts来写：

``` typescript
function trace<T>(arg: T): T{
    console.log(arg.size);  // Error: Property 'size' doesn't exist on type 'T'
    return arg;
}
```

这里面是报错的呀。是因为 T 在这个阶段可以是任何类型，而且连any这个类型都包括，它都不知道属不属于any了。那么我们就将 参数 类型限定下来。那么所谓的「类型约束」如何实现下来呢？

``` typescript
interface Sizeable {
    size: number;
}
function trace<T extends Sizeable>(arg: T):T{
    console.log(arg.size);
    return arg;
}
```

我们现在的解读： 现在的 T 不再是任意类型，而是被实现接口的 shape。
