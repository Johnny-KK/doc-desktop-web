# npm

## 常用操作

### install

```shell
npm i <packageName> // 安装package
npm i <packageName@version> // 安装指定版本package
npm i <packageName> --verbose // 显示下载安装进度
npm i <packageName> -D // development
npm i <packageName> -S // production
npm i <packageName> -G // global
npm i <packageName> -e // 安装到 dependencies 模块依赖精确版本
```

### npm uninstall

### update

```shell
npm outdated // 列出可更新package
npm update // 更新
npm update <packageName> -D/-S/-G // 更新指定package
```

### audit

```shell
npm audit // 查明特定的漏洞和缺陷
npm audit fix // 检测项目依赖中的漏洞并自动安装需要更新的有漏洞的依赖
```

### npm view <moduleName> 查看模块注册信息