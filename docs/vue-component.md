# Vue 组件

## 前言

> 记录目前使用过的`vue`组件。

## vant

+ [github](https://github.com/youzan/vant)
+ [文档](https://youzan.github.io/vant/#/zh-CN/intro)

### `vue-cli3`按需引入

+ 安装`vant`

```shell
npm i vant -S
```

+ 配置`babel.config.js`

```js
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
};
```

+ 在页面中引入要使用的组件即可，例如

```vue
<template>
  <van-cell>vant</van-cell>
</template>

<scrpit lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Cell } from 'vant';

  @Component({
    components: { [Cell.name]: Cell }
  })
  export default class Demo extends Vue {}
</script>
```

## element-ui

+ [github](https://github.com/ElemeFE/element)
+ [文档](https://element.eleme.cn/#/zh-CN)

### `vue-cli3`按需引入

+ 安装

```shell
npm i element-ui -S --verbose
```

+ 配置`babel.config.js`

```js
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
};
```

+ 在页面中引入要使用的组件即可，例如

```vue
```

## 拖拽 -- Vue.Draggable

`Draggable`是基于`Sortable`的`vue`拖拽插件。

+ [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)
+ [Sortable](https://github.com/SortableJS/Sortable)