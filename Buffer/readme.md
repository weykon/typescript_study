最近搞了一下热敏打印机的png打印，通过html截图以base64编码的二进制buffer来输入到pngjs包的工具函数中，由于react native，对截图功能的可选择性比较差，nodejs的等等包库不支持，需要深入包体里面，一个一个依赖来解决。

这篇主要记录一下这个过程中，对字符，字节，编码的认识。

```ts
Buffer.from([1,2,3]);
```

从不同编码创建Buffer，对于Buffer二进制数据文件来说，都是一样的，只是解读、解析的编码不一样。

比如

```ts
const a = fs.readFileSync('./1.png')
const b = fs.readFileSync('./1.png', { encoding: 'base64' })
const c = Buffer.from(b, 'base64')
console.log('c', c.toString('hex'))
```

这上面的代码有几个知识点：
* 同一文件的数据，可以用不同编码来读取记录
* buffer的toString 可以直接输出对应编码的纯文本数据
* 不论是什么编码，只要认准buffer就ok
- 如果涉及数据更改，解析的时候注意是解析出来数字，而不是字符，是需要在识别解析完全的编码下去改变数据才有意义


## 拼接

```ts
let b = Buffer.from('')
b = Buffer.concat([b, Buffer.from([01, 01])])
```
