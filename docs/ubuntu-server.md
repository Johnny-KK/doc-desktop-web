# Ubuntu Server

## 固定IP

+ 如果为`vmware`虚拟机，设置网络适配器为桥接模式

+ 修改配置

```shell
# 备份配置
sudo cp /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.bak

# 替换配置内容如下
network:
    ethernets:
        ens33:
            addresses: [192.168.0.120/24]
            dhcp4: false
            gateway4: 192.168.0.1
            nameservers:
                addresses: [192.168.0.1]
    version: 2

# 重启网络服务
sudo netplan apply
```