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
```

### Config

- 区分大小写和排序
  - A and a ? 取决于数据库的设置方式
- 有多少 0, 3.49, 3.490, 3.4900 等
  - 往往是因为 DBMS 指定了所使用的数据类型以及默认行为
- wildcard
  - more time to process, try to avoid when has alternative ways
