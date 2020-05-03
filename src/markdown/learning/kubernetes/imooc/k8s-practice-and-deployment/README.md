# 微服务与 K8s

## 微服务特征

- 单一职责
- 轻量级通信
- 隔离性
- 有自己的数据
- 技术多样性

## 微服务的通讯

- 模式
  - 1 to 1 or 1 to many
  - sync or async
- 通讯
  - REST API
  - MQ
  - RPC
    - dubbo
    - dubbox
    - motan
    - grpc
    - thrift
- RPC
  - 参考因素
    - I/O
      - 长连接还是短链接
    - 线程调度模型
    - 序列化方式
      - 对效率有影响
    - 多语言支持
      - 是否支持多种编程语言
    - 服务治理
  - 流行的框架
    - Dubbo / Dubbox
    - Mottan
    - Thrift
    - grpc

## 微服务的发现

## 服务编排

- 流行的工具
  - mesos
  - docker swarm
  - kubernetes

## SpringBoot, SprintCloud 与微服务

- SpringCloud 核心组件
  - Netflix Eureka
    - 服务发现
  - Netflix Ribbon
    - 负载均衡
  - Netflix Hystrix
    - 服务注册
  - Netfilx zuul
    - 服务网关
  - Spring Cloud Config
    - 服务配置
