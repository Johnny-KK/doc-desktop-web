# PM2

## 前言

>PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

## 安装

```shell
npm i pm2 -g
```

## 基本使用

```shell
# 启动
pm2 start ./serve.js

# 启动vue脚本
pm2 start npm -- run serve

# 将目录dist作为静态服务器根目录 端口为9090
pm2 serve ./dist 9090

# 监测文件变化重启服务
pm2 start app.js --watch

# 结束服务
pm2 stop <id|name>

# 删除服务
pm2 delete <id|name>

# 重启服务
pm2 restart <id|name>

# 查看任务
pm2 show <id|name>

# 查看任务列表
pm2 list

# 监控每个node进程的cpu和内存使用情况
pm2 monit

# 显示所有进程的日志信息
pm2 logs
```

## 开机自启动设置

```shell
pm2 startup
# 然后根据提示执行命令
# 然后保存当前服务列表
pm2 save
```