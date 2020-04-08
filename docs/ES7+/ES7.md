# ES7

## Array.prototype.includes() [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

> includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

```js
[1, 2, 3].includes(2);      // true
[1, 2, 3].includes(4);      // false
[1, 2, 3].includes(3, 3);   // false
[1, 2, 3].includes(3, -1);  // true
[1, 2, NaN].includes(NaN);  // true
```

## 指数操作符

> 在ES7中引入了指数运算符**，**具有与Math.pow(..)等效的计算结果。