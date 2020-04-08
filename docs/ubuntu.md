# Ubuntu

## 常用命令

```shell
# 复制文件
cp <filepath> <filepath>

# 显示文件内容
cat <filename>

# 查看文件夹大小
du -h --max-depth=0

# 关机
shutdown -r now
```

## 固定IP

+ 如果为`vmware`虚拟机，设置网络适配器为桥接模式

+ 修改配置
```shell
# 备份配置
sudo cp /etc/network/interfaces /etc/network/interfaces.bak

# 替换配置内容如下
auto lo
iface lo inet loopback
auto ens33
iface ens33 inet static
address 192.168.1.115
netmask 255.255.255.0
gateway 192.168.1.1

# 备份DNS配置
sudo cp /etc/systemd/resolved.conf /etc/systemd/resolved.conf.bak

# 修改DNS配置为
DNS=8.8.8.8 223.5.5.5
```

+ 重启系统

## 关闭/开启图形界面

```shell
# 关闭
sudo systemctl set-default multi-user.target
sudo reboot

# 开启
sudo systemctl set-default graphical.target
sudo reboot
```

## `apt`配置镜像源

```shell
# 首先备份原配置文件
sudo cp /etc/apt/sources.list  /etc/apt/sources.list.bak

# 清空配置文件 替换为以下内容
sudo vi /etc/apt/sources.list

# 中科大源
deb https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu-ports/ bionic-proposed main restricted universe multiverse

# 阿里云源
deb-src http://archive.ubuntu.com/ubuntu xenial main restricted #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted multiverse universe #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted multiverse universe #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial universe
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates universe
deb http://mirrors.aliyun.com/ubuntu/ xenial multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse #Added by software-properties
deb http://archive.canonical.com/ubuntu xenial partner
deb-src http://archive.canonical.com/ubuntu xenial partner
deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted
deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted multiverse universe #Added by software-properties
deb http://mirrors.aliyun.com/ubuntu/ xenial-security universe
deb http://mirrors.aliyun.com/ubuntu/ xenial-security multiverse

# 清华大学源
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security universe
deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security multiverse

# 更新
sudo apt-get update
```

## `ubuntu 18.04`安装`mongodb`

```shell
# 在终端输入GPK码
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

# 添加mongoDB源
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb.list

# Install MongoDB Server
sudo apt update
sudo apt install mongodb-org

# 对mongoDB Server的管理
sudo systemctl enable mongod
sudo systemctl start mongod

# 验证mongoDB4.0
mongod --version
```

## `ubuntu 18.04`安装`node`

```shell
# Ubuntu 18.04在其默认存储库中包含一个版本的Node.js
sudo apt update
sudo apt install nodejs

# 安装npm
sudo apt install npm

# 利用n来管理版本
sudo npm install -g n

# 升级node -- 长期支持
sudo n lts
```

## `ubuntu 18.04`安装`docker`


```shell
# 由于apt官方库里的docker版本可能比较旧，所以先卸载可能存在的旧版本
sudo apt-get remove docker docker-engine docker-ce docker.io

# 更新apt包索引
sudo apt-get update

# 安装以下包以使apt可以通过HTTPS使用存储库
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# 添加Docker官方的GPG密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 安装stable存储库
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu artful stable" 

# 再更新一下apt包索引
sudo apt-get update

# 安装最新版本的Docker CE
sudo apt-get install -y docker-ce

# 查看docker服务是否启动
systemctl status docker

# 若未启动，则启动docker服务
sudo systemctl start docker
```

## `ubuntu 18.04`安装`open jdk`

```shell
sudo apt install openjdk-8-jdk
```

## `ubuntu 18.04`安装`maven`

```shell
# 创建maven目录
sudo mkdir /usr/maven

# 进入maven目录
cd /usr/maven/

# 下载maven
sudo wget https://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.1/binaries/apache-maven-3.6.1-bin.tar.gz

# 解压
sudo tar -zxvf apache-maven-3.6.1-bin.tar.gz

# 删除文件
sudo rm -rf ./apache-maven-3.6.1-bin.tar.gz

# 编辑文件 .bashrc
sudo vim ~/.bashrc

# 在.bashrc文件最后面添加添加:
export M2_HOME=/usr/maven/apache-maven-3.6.1
export CLASSPATH=$CLASSPATH:$M2_HOME/lib
export PATH=$PATH:$M2_HOME/bin

# 重新加载资源
source ~/.bashrc

# 查看maven
mvn --version

# 修改maven设置 复制替换setting.xml文件 示例如下
cd /user/maven/apache-maven-3.6.1/config
```
[setting示例](./assets/setting.xml)

## `ubuntu 18.04`安装`svn`

```shell
# 更新依赖
sudo apt-get update

# 安装
sudo apt-get install subversion
```

## `ubuntu 18.04`安装`apache tomcat`

## 常见问题

### 无法上网

>mtu 1500 qdisc noop state DOWN group default qlen 1000

+ 解决办法：在配置文件`/etc/network/interfaces`最后添加配置
```
# The primary network interface
allow-hotplug ens33
iface ens33 inet dhcp
```

+ 重启系统