# Spring Projects
Spring usually consist of Spring projects and Spring Framework

- Spring LDAP
- Spring Web Services
- Sprign Session
- Spring Integration
- Spring Data
- Spring Batch
- Spring Security
- Spring Social
- Spring Kafka
- Spring Boot (auto configuration)

# Spring Boot
- Auto-configuration
- Standalone
- Opinionated

## Auto-configuration
```java
@EnableAutoConfiguration
public class DemoApplication {
  ...
}
```

## Standalone
```bash
# Pacage
# Run
java -jar application.jar
```

# Spring Framework
- Core
- Web
- AOP
- Data Access
- Integration
- Testing

## Core
- i18n
- Validation
- Data binding
- Type conversion

## Dependency Injection
Two choices of dependencies
- Fullfill our own
  - Seems easy
  - Tightly coupled objects
- Declare our dependencies (DI)
  - More flexible

# Spring Web
Handling web requests

## Spring Web MVC
Previously, we use Servlet API, it's low-level API
- Not as easy to use
- Less productive

## Spring Web Webflux
- Reactive Programming
... a declarative programming paradigm concerned with data streams and the propagation of change


# Spring AOP
A Programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns

```java

@PreAuthorize("hasRole('admin')")
public void sentitiveOperation() {
  // do sensitive operation
}

```


# Spring Data Access
```java
// Old way using JDBC
try {
  Statement stmnt = conn.createStatement();
  try {
    ResultSet rs = stmnt.executeQuery(
      "Select COUNT(*) FROM foo"
    );
    try {
      rs.next();
      int cnt = rs.getInt(1);
    } finally {
      rs.close();
    }
  } finally {
    stmnt.close();
  }
} catch (SQLException e) {
  // 
} finally {
  try {
    conn.close();
  } catch (SQLException e) {
    // 
  }
}

// Using Spring Data
int cnt = new JdbcTemplate(ds).queryForInt("SELECT COUNT(*) FROM foo");

// Old way using JDBC to do the transaction
try {
  conn.setAutoCommit(false);
  // 1 or more queries or updates
  conn.commit();
} catch (Exception e) {
  conn.rollback();
} finally {
  conn.close();
}

// Spring Transaction
@Transactional
public void operation () {
  // 1 or more queries or updates
}
```

# Spring Integration
Ways of Expose Operations
- RMI (Remote Method Invocation)
- Messaging Systems
- Web Services

```java
@RestController
public class AccountController {
  @GetMapping("/account/{id}")
  public Account find(@PathVariable int id) {
    // ...
  }
}

// RestTemplate
restTemplate.getForObject("http://foo.com/account/123", Account.class);

```

# Spring Test












