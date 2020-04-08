# Git

## 常用命令

```shell
# 查看git用户名
git config user.name

# 查看邮箱配置
git config user.email

# 全局配置用户名
git config --global user.name "name"

# 全局配置邮箱
git config --global user.email "eamil"

# Ubuntu 设置记住密码
vim ~/.gitconfig
# 在配置文件中加入
# [credential]
#     helper = store

# 检查状态
git status

# 查看当前仓库地址
git remote show origin

# 添加文件
git add <fileName>

# 提交记录
git commit -a -m 'message'

# 推送分支
git push origin master

# 查看分支
git branch

# 创建分支
git branch <branchName>

# 切换分支
git checkout <branchName>

# 创建并切换分支
git checkout -b <branchName>

# 合并分支到当前分支
git merge <branchName>

# 删除分支
git branch -d <branchName>
```


## 待整理
基本命令

如果需要把一个本地搭建好的项目纳入到Git仓库中，在项目目录下运行
$ git init

如果需要拷贝一个项目到本地
$ git clone

git add 添加至版本控制
git commit -m 提交
git checkout 回退上个版本 放弃修改				
git reset
git log 查看git操作历史

git commit --amend 覆盖提交 用于某次提交中漏了某些文件没有提交，这个提交命令可以作为和上次提交覆盖一起作为一次提交，可以修改提交描述
git reset HEAD 取消暂存的文件，取消多加入的文件
git checkout --file 撤销对文件的修改
git reset --hard 版本号

远程仓库

git clone
git pull 拉取代码至本地
git push push 代码到远程
git remote 建立远程仓库

git branch 查看分支
git branch 分支名 新建分支
git checkout 分支名 切换分支

分支合并

git merge 分支名 将指定分支合并到当前分支
