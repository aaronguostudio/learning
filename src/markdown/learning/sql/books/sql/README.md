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

## 10 - 分组数据

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

## 11 - 子查询

```sql
select * from companies where id in (
  select company_id from users where id in (
    select creator_id from events limit 10
  )
)

select name, (select count(*) from users where users.company_id = companies.id) as users
from companies
```

## 12 and 13 - Join

```sql
-- cross join
-- where 子句非常重要，它限定了 join 的条件
-- 如果没有 where，返回的结果将是 cartesian product
select companies.name, users.name from users, companies where users.company_id = companies.id

-- inner join
select companies.id, companies.name, users.name from users inner join companies on users.company_id = companies.id

-- multiple tables
-- join 的 table 越多，性能越差
select companies.id as company_id, companies.name as company_name, users.name as user_name, orders.id as order_id
from users, companies, orders
where users.company_id = companies.id
and orders.client_company_id = companies.id
and orders.id = 16866

-- outer join
select companies.id, companies.name, users.name from users left outer join companies on users.company_id = companies.id

-- inner join with aggregation function
-- group by 出现在一个表中，另一个表的字段在 aggregation functino 中
select companies.id, companies.name, count(users.name) as users_num
from users inner join companies on users.company_id = companies.id
group by companies.id order by id

-- use alias
select c.id, c.name, count(u.id) as user_count
from companies as c
inner join users as u
on c.id = u.company_id
group by c.id
```

## 14 Union

```sql

-- union
select c.id, c.name from companies as c
where c.name in ('a', 'b')
union
select c.id, c.name from companies as c
where c.id in (1, 2)

-- where
select c.id, c.name from companies as c
where c.name in ('a', 'b')
or c.id in (1, 2)

-- union all
-- union all won't remove the duplicate rows
select c.id, c.name from companies as c
where c.name in ('a', 'b')
union all
select c.id, c.name from companies as c
where c.id in (1, 2)


-- order by
-- order by 只能在最后一条 select 中
select c.id, c.name from companies as c
where c.name in ('a', 'b')
union all
select c.id, c.name from companies as c
where c.id in (1, 2)
order by c.id
```


<!-- start from Ch15 -->

