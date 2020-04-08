# MUI

## 前言

> 记录`mui`开发中遇到的一些坑。

## 检测网络变化

```js
document.addEventListener("netchange", function() {
  var nt = plus.networkinfo.getCurrentType();
  console.log(nt);
}, false);
```

## 新页面不读取缓存

```js
//打开关于页面
mui.openWindow({
  url: localStorage.getItem('test'),
  id: 'getHtml',
  createNew: true,
  styles: {
    top: '51px',
    bottom: '51px',
    cachemode:"noCache", // 禁止读取缓存
  }
});
```