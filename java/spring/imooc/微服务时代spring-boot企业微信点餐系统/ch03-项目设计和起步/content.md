# 国内微服务的发展
- 阿里系
  - Duboo
  - Zookeeper
  - SpringMVC or SpringBoot

- Spring Cloud
  - Spring Cloud
  - Netflix Eureka
  - SpringBoot

# 数据库设计
- product_category
- product_info
- order_master
- order_details
- seller-info

# 环境搭建
- 下载课程的虚拟机并运行
- 保证虚拟机和主机网络可以互通
- mysql 新建数据库，选择编码：utf8mb4 -> 可以存表情

# 创建项目
- IntelliJ IDEA > Spring Initializer > JDK 1.8 > web 项目
- 最开始的时候无法 run, 添加 pom.xml 到 IDE 的 Maven Projects 里面

# 日志
## 日志框架的能力
- 定制输出目标：输出到数据库，输出到服务
- 定制输出格式
- 携带上下文
- 运行时选择性输出
- 灵活的配置

## 常见的日志框架

  - 日志接口
    - JCL Apache
    - SLF4j
    - jboss-logging   // 不是服务大众

  - 日志实现
    - JUL JDK 自带   //太简单
    - Log4j
    - Log4j2    // 太超前，性能好，过度设计
    - Logback   // Log4j 的升级

```xml
<!-- 需要引入 lombok 这个依赖 -->
<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
</dependency>
```