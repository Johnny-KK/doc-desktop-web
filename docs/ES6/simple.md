# ES6 Simple

## let 和 const 命令

+ 块级作用域
+ 无变量提升
+ 禁止重复声明
+ 暂时性死区
+ 与顶层对象脱钩

## 变量的解构赋值

+ 数组的解构赋值  
要求等号右边具备`Iterator`接口。

+ 对象的解构赋值

+ 字符串的解构赋值

+ 数值和布尔值的解构赋值

## 字符串的扩展

+ 字符的`Unicode`表示法  

```js
// js表示字符的方法
'\z' === 'z'
'\172' === 'z'
'\x7A' === 'z'
'\u007A' === 'z' // \u+unicode unicode范围0000-FFFF
'\u{7A}' === 'z' // \u+unicode unicode范围可以大于FFFF
```

+ 字符串的遍历器接口  
字符串新增`Iterator`接口，使用`for...of`遍历可以识别大于`0xFFFF`的码点。

+ 直接输入`U+2028`(行分隔符)和`U+2029`(段分隔符)  
`JSON`允许直接在字符串中使用`U+2028`和`U+2029`，为了防止`JSON.parse`解析报错，允许在`JS`字符串中直接使用，在正则表达式中依然不允许直接使用。

+ `JSON.stringify()`的改造

+ 模板字符串

## 正则的扩展

+ RegExp 构造函数

## 字符串的新增方法

+ `String.fromCodePoint()` `unicode`码点转为字符

+ `String.prototype.codePointAt()` 字符转`unicode`码点

+ `String.prototype.normalize()` 按照指定的一种`unicode`正规形式将当前字符串正规化

+ `String.raw()` 获取一个模板字符串的原始字符串

+ `String.prototype.padStart()` 字符串头部补全

+ `String.prototype.padEnd()` 字符串尾部补全

+ `String.prototype.trimStart()` 消除字符串头部的空格

+ `String.prototype.trimLeft()` `trimStart`的别名

+ `String.prototype.trimEnd()` 消除字符串尾部的空格

+ `String.prototype.trimRight()` `trimEnd`的别名

+ `String.prototype.includes()` 是否找到了参数字符串

+ `String.prototype.startsWith()` 参数字符串是否在原字符串的头部

+ `String.prototype.endsWith()` 参数字符串是否在原字符串的尾部

+ `String.prototype.repeat()` 返回一个新字符串，表示将原字符串重复`n`次

+ `String.prototype.matchAll()` 返回一个正则表达式在当前字符串的所有匹配

## 数值的扩展

+ 二进制和八进制表示法 二进制`0b 0B` 八进制`0o 0O` 十六进制`0x 0X`

+ `Number.isFinite()` 检测传入的参数是否是一个有穷数

+ `Number.isNaN()` 检测传入的参数是否为`NaN`

+ `Number.parseInt()`

+ `Number.parseFloat()`

+ `Number.isInteger()`

+ `Number.EPSILON`

+ `Number.MAX_SAFE_INTEGER`

+ `Number.MIN_SAFE_INTEGER`

+ `Number.isSafeInteger()`

+ `Math.trunc()`

+ `Math.sign()`

+ `Math.cbrt()`

+ `Math.clz32()`

+ `Math.imul()`

+ `Math.fround()`

+ `Math.hypot()`

+ `Math.expm1()`

+ `Math.log1p()`

+ `Math.log10()`

+ `Math.log2()`

+ `Math.sinh(x)` 返回x的双曲正弦

+ `Math.cosh(x)` 返回x的双曲余

+ `Math.tanh(x)` 返回x的双曲正切

+ `Math.asinh(x)` 返回x的反双曲正弦

+ `Math.acosh(x)` 返回x的反双曲余弦

+ `Math.atanh(x)` 返回x的反双曲正切

## 数组的扩展

+ 扩展运算符

+ 数组的空位

+ `Array.prototype.sort()` 的排序稳定性

+ `Array.from()`

+ `Array.of()`

+ `Array.prototype.copyWithin()`

+ `Array.prototype.find()`

+ `Array.prototype.findIndex()`

+ `Array.prototype.fill()`

+ `Array.prototype.includes()`

+ `Array.prototype.flat()`

+ `Array.prototype.flatMap()`

+ `Array.prototype.entries()`

+ `Array.prototype.keys()`

+ `Array.prototype.values()`

## Symbol