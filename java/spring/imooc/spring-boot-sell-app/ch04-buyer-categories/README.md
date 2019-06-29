# 准备工作
## 删去多余文件
  - mvnw and mvnw.cmd 在 windows 的时候构建才使用

## install mysql dependency
```xml
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

- update application.properties to application.yml
```yml
spring:
  datasource:
    driver-class-name: com.mysql.jdbc.Driver
    username: root
    password: 123456
    url: jdbc:mysql://192.168.1.110/sell?characterEncoding=utf-8&useSSL=false
  jpa:
    show-sql: true
```


## 创建 dao/respsitory
- 创建好之后选择 class name 右键可以创建 Test
- 注意，我这里按照课程操作会出错，原因可能是版本问题：
```java
// 需要增加这一句表示 use the underlying db's auto increment
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer categoryId;

// 我的这里 findOne 提示不对，可能是版本问题
repository.findById(1)


// 动态更新时间
@Entity
@DynamicUpdate
public class ProductCategory {

```

## 安装插件
- Lombok 里面的一个功能是自动生成和维护 get set 方法
- Plugins: Lombok Plugin
- 这样代码中就可以省略 get set 和 toString 的方法
```java
@Entity
@DynamicUpdate
@Data
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryId;
    private String categoryName;
    private Integer categoryType;
    private Date createTime;
    private Date updateTime;
}
```


## 添加自定义查询方法
```java
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Integer> {
    List<ProductCategory> findByCategoryTypeIn(List<Integer> categoryTypeList);
}
```


## 开始于 ch05 买家商品 dao