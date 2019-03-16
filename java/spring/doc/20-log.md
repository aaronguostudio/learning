# 日志

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