# Vue

## vue 开发环境的搭建

+ 安装并配置`nodejs` [windows]() [ubuntu](/ubuntu.html#ubuntu-18-04安装node)

+ 安装`vue-cli`脚手架

```shell
npm i @vue/cli -g --verbose
```

+ 创建`demo`项目

```shell
vue create vue-demo
```

## 父子组件传值

父传递到子 props
父主动获取子 $refs
子主动获取父 $parent

## 非父子组件传值

## v-model 语法糖

<input v-model="sth" />
===
<input :value="sth" @input="sth = $event.target.value" />

## 函数式组件