# Maven

## maven 基础
- pox.xml
- 坐标
  - groupId
  - artifactId
  - version
- 常用 mvn 命令
  - mvn -v
  - mvn compile
  - mvn clean
  - mvn test
  - mvn package   // 生成 jar 包
  - mvn install
  - mvn dependency:tree
  - mvn dependency:list
- maven 处理依赖
  - 短路优先，现已用的先下载
  - 如果遇到版本冲突，通过 exclusion 来排除
- 多模块聚合
  - 父模块统一管理依赖包
    - dependencyManagement
  - 子模块需要在 pom 中声明父模块
    - parent
  -
  - Proj
    - Proj-model
    - Proj-dao
    - Proj-service
    - Pro-web
    - pom.xml

## 主项目搭建

- 创建主项目
  - new project > maven project
  - delete src
  - config pom.xml file
    - the scope of project level is pom
    - dependencyManagement
      - import when scope is pom
      - this will make all modules import parent's dependencies
    - repositories
      - maven will search three repos
        - local
        - maven
        - 3rd party

## 单节点 Eureka 开发
- Eureka 来自 netfilx 用来做服务注册和发现的，继续 Rest，实现中间层的负载均衡和故障转移
- new module > 创建子模块（自动继承自 parent）
  - 父 pom 里面会自动生成 modules 节点
  - 拷贝 课程 pom
    - 这里面主要安装了 eureka 作为服务的注册与发现
- 创建 EurekaApplication
- 配置 application.yml - 单节点
  - 执行 main 可以启动服务
  - http://localhost:8000/
  - 可以看出，Eureka Server 已经被 SpringCloud 封装的非常好了
- 配置多节点
  - 因为在本地一台主机进行，所以需要配置 host
    - sudo nano /etc/hosts
    - 127.0.0.1 server1
      127.0.0.1 server2
      127.0.0.1 server3
  - 添加 3 个节点的配置
    - 服务之间互相注册
- 在项目根目录打包：mvn clean package -Dmaven.test.skip=true -U
  - 因为父项目做了配置会管理子项目，所以可以直接进行打包
- 启动服务
  - java -jar ad-eureka-1.0-SNAPSHOT.jar --spring.profiles.active=server1
    - 会报错，找不到另外的两个服务
  - 再启动另外的服务
    - 可以看到各自都成功注册了各自的服务
- 关于 Eureka 的注册详情，参考 https://coding.imooc.com/learn/questiondetail/98404.html

<!-- start from here https://coding.imooc.com/lesson/310.html#mid=21645 -->
