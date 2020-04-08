# Docker

## 配置中科大镜像

修改配置文件
vi /etc/docker/daemon.json
{
    "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}

## 常用命令

```shell
# 镜像查询
docker search [docker-name]

# 查看
docker ps -l

# 关闭
docker kill

# 删除
docker rm [container ID]

# 
docker rmi [name]

# 复制文件到内部
docker cp [file-path] [container ID]:[file-path]
```