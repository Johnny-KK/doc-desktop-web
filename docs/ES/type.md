# 数据类型

## 原始数据类型 -- primitive values

> 截止到`ES10`一共是7种原始数据类型，其特征为值本身无法被改变。

* Undefined
* Null
* Boolean
* Number
* String
* Symbol
* BigInt

## 复杂数据类型

* Object

## 常见对象类型

## typeof 检测数据类型

```js
/** 基本数据类型 */
typeof Undefined_Variable // undefined
typeof null               // object 在这里空值null被认为是对一个空对象的引用
typeof true               // boolean
typeof 15                 // number
typeof 's'                // string
typeof Symbol('symbol')   // symbol
typeof 15n                // bigint

/** Function 对象 */
typeof (() => {})         // function function也是对象但由于其特殊属性需要与其他对象进行区分

/** 其余任何对象 */
typeof {}                 // object
typeof (new Date())       // object
typeof []                 // object
```

## 数据相等性判断

* `==`
* `===`
* `Object.is()`

[`MDN`详细参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness)