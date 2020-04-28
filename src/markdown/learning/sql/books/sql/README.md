# SQL Essential

- Code
  - http://forta.com/books/0672336073

## Basic

### Queries

```sql
select distinct vend_id from products
select * from companies fetch first 5 rows only (similar to limit)

 -- order by firsname and then lastname
select * from users order by firstname, lastname

 -- includes start and end value
select * from products where price between 5 and 10

-- and has higher priority
select name, price from products where (vend_id = 'a' or vend_id = 'b') and prod_price >= 10

-- like and wildcard
select name from products where name like 'F%y'
-- can be any 1 character
select name from products where name like '_ inch'
-- can be any characters
select name from products where name like '% inch'
-- J... or M...
select contact from customers where contact like '[JM]%'
-- except starts with J or M
select contact from customers where contact like '[^JM]%'

-- concatenate
-- PostgreSQL
select name || '(' || email || ')' as clients  from companies
-- MySQL / MariaDB / PostgreSQL
select Concat(name, '(', email, ')') as clients from companies

-- compute
select id, quantity, price, quantity*price as total from order_items
```

### Features

- 区分大小写和排序
  - A and a ? 取决于数据库的设置方式
- 有多少 0, 3.49, 3.490, 3.4900 等
  - 往往是因为 DBMS 指定了所使用的数据类型以及默认行为
- Wildcard
  - more time to process, try to avoid when has alternative ways
- Computing
  - 数据库服务端实现会比客户端实现快很多
  - forms
    - concatenate strings
    - calculation
- Function
  - soundex()
    - select cust_name from customers where soundex(cust_contact) = soundex('Michael Green)
    - 搜索发音相似的
  - datepart()
    -
    - can also use
    ```sql
      -- this will use index
      select * from events where created_at >= '2020-01-01' and created_at <= '2020-02-01'
    ```
- Aggregation function
  - avg()
  ```sql
    -- if need avg on distinct values, add distint
    -- avg(distinct total)
    select round(avg(total), 2) as avg_total
    from orders
    where user_id = 1
    and created_at >= '2019-01-01'
    and created_at <= '2019-03-01'
  ```

  - count()
  - max()
  - min()
  - sum()

## 分组数据

``` sql
-- Tips
-- 1. 大多数 SQL 不允许 groupy by for 长度可变的数据类型
-- 2. null 会被作为一个分组被返回
-- 3. where is for filter row
-- 4. having is for filter group
-- 5. where and having are very similar when no group by
select count(id) as count_users, company_id from users group by company_id
select count(*) as count_users, company_id from users group by company_id having count(*) >= 100

-- combination for where and count
select count(*) as count_users, company_id from users where created_at > '20180101' group by company_id having count(*) >= 100

```


<!-- start from Ch11 子查询 -->
