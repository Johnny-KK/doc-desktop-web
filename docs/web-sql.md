# WebSQL

## 前言

`WebSQL`是基于浏览器的关系型数据库，目前`w3c`主推`IndexedDB`，`WebSQL`标准目前处于废弃状态，使用时注意兼容性。`SQL`语法参照`SQLite 3.6.19`。

## 兼容性

+ IE no
+ Edge >=76
+ Firefox no
+ Chrome >=4

## 主要API

### 打开创建数据库 - openDatabase

```js
const db = window.opneDatabase(name, version, describe, size, callback);
```

### 事务 - transaction

```js
db.transaction();
```

### 执行SQL - executeSql

```js
db.executeSql(sql, param, successCallback, errorCallback);
```