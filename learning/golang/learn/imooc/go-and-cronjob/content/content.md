# 2.1 原理介绍

#$ Bash 工作模式

### 交互模式
- 交互模式
- 非交互模式
  - /bin/bash -c "ls -l"

### 执行原理
1. 提交任务
2. golang 创建管道
3. fork 子进程
4. child process 重定向输出
5. exec 执行 /bin/bash 程序: bin/bash -c "cmd"
6. 输出到管道, 父进程回收子进程

## 通过 command 类执行任务
- 定义在 os/exec 包里面


# 2.2 执行任务

## 包和获取
- 执行项目的时候定义当前的 GOPATH
  - export GOPATH=`pwd`
- 创建一个 github 的项目，go get github.com/aaronguostudio/go-prepare 包会下载到项目的 src 里面


<!-- 第二章结束 -->
