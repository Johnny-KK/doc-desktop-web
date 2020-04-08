# Windows

## `powershell`常用命令

```shell
# 创建目录
mkdir <dicName>

# 创建文件
new-item <fileName>

# 在文件中写入内容--覆盖
<file-content> > <filePath>

# 在文件中写入内容--追加
<file-content> >> <filePath>
```

## 密钥`ssh`连接`ubuntu`

+ `win10`自带`OpenSSH`，可以直接生成密钥，默认生成的密钥位于`user/.ssh`目录下
```shell
ssh-keygen -t rsa
```

+ 修改`ubuntu`配置，如果没有该文件则自己新建，将公钥文件内容添加到文件的最后一行
```shell
vim ~/.ssh/authorized_keys
```

+ 此时再登录时即可

## Win + Linux 混合开发

### 前言

> 为了将开发工作逐步迁移到`Linux`中，同时使用`Windows`系统进行日常办公，尝试使用混合开发模式。

### 基本思路

+ 宿主系统使用`Windows10`
+ `Windows`使用`vmware`创建`Linux`虚拟机，网络适配器使用桥接模式并固定`IP`，[参见](./ubuntu.md#固定ip)，并在`Windows`中给`Linux`的`IP`绑定域名
+ `Linux`内配置开发环境，包括`git node jdk docker`等
+ `Windows`中安装`vscode`，利用`vscode`中的`Remote-SSH`，连接到`Linux`进行开发，[参见](./vscode.md#远程开发-ssh)

## 文件备份

```shell
robocopy C:\Users\kk\Documents\dev\temp F:\temp /MIR /R:3 /W:3 /MT:64 /XD "node_modules" "target" /UNILOG+:F:\backup.log /NDL /NP

# /MIR: 等价于/E /PURGE，复制子目录，包括空的，同时删除源文件夹中不存在但目标文件夹中存在的文件。
# /R:3 失败最多重试3次
# /W:3 每次失败等待3秒
# /MT:64 用64个线程执行该任务
# /UNILOG+: 以追加、Unicode的方式写入日志
# /NDL: 日志无目录列表
# /NP: 日志无进度
# /XD "node_modules" "target" 排除的文件夹
```

## 定时任务

## 性能监视器

> 性能监视器是`Windows`自带的用于系统性能分析监控软件。

### 打开性能监视器

win + R 运行 perfmon

### 新建自定义数据收集器集

性能 => 监视工具 => 性能监视器(右键) => 新建 => 数据收集器集 => 按照提示完成新建任务

### 为数据收集器集添加收集项

性能 => 数据收集器集 => 用户定义 => 新建的数据收集器集 => (在右侧右键)属性 => 添加