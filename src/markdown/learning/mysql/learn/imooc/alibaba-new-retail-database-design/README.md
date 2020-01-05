---
path: "/learn/mysql/imooc/alibaba-new-retail-database-design/"
---

## Alibaba New Retail Database Design

This course is the learning notes from imooc [阿里新零售数据库设计与实践](https://coding.imooc.com/learn/list/353.html). This course focuses on how to design a database for new retail system. The new retail is a buzz word in China means that combine online and offline business. Alibaba, Suning, JD, etc. many giant companies have been started their new retail strategy.

### Contents

- [04 - New Retail Data Structures Design](04-new-retail-data-structures-design/)

### Environmnet Configuration

Note: the following configuration is only for development, not for production.

- Virtual Machine
  - CentOS 7
  - Network needs change to Bridge mode
- [Install MySQL](https://coding.imooc.com/lesson/353.html#mid=26319)
- MySQL Config
  - update user password
    - alter user user() identified by "new password"
  - allow remote access
    - update user set host = '%' where user = 'root'; flush privileges
    - add following contents to /etc/my.cnf

      ```config
      character_set_server = utf8
      bind-address = 0.0.0.0          // remote connect to mysql from the ip
      ```

  - restart
    - service mysqld restart
- Firewall config
  - firewall-cmd --zone=public --add-port=3306/tcp --permanent
  - firewall-cmd --reload
- MySQL client
  - If using navcat, must use new version because mysql 8.0 is using new password encode rule
  - Alternative: TablePlus

### About ER Diagram (Entity Relationship Diagram)

- A basic ER diagram example, [Link](https://www.lucidchart.com/invitations/accept/5435fd7d-26a8-443e-93da-627e93becbc7)

### About MySQL engine

- MyISAM
  - Read is fast
  - Write is slow
  - no transaction
- InnoDB
  - Support row-level transaction
  - 如果单表数据超过 2 千万，性能会明显下降
- TokuDB
  - The performance of transaction and compress are really good

### Advance CRUD operation

- Retrive the demo.sql file from [here](https://git.imooc.com/coding-353/document)

```sql

-- Insert ----------------------------------------------------------------

-- ignore will skip failed item and insert others
-- instead of rollback every insertion.
insert into t_dept(deptno, dname, loc) values
  (40, 'Sales', 'beijing'),
  (50, 'Marketing', 'shanghai'),
  (60, 'Development', 'shenzhen'),
  (70, 'Sales', 'beijing');

-- insert if exist or update
-- in the table, emno is constrained by 1
-- this will run an update for duplicate item
insert into t_emp_ip(id, empno, ip) values
  (5, 8004, '192.168.99.44'),
  (6, 8005, '192.168.99.45'),
  (7, 8006, '192.168.99.46'),
  (8, 8001, '192.168.99.47')
on duplicate key update ip=values(ip);


-- Query ----------------------------------------------------------------

-- About sub query, check the query below
-- Because mysql default won't enable
-- cache, the sub query will run on each query
-- Notice
-- Framework like MyBatis default open cache, so it's
-- OK to use sub query in the framework, will need to config
-- the relationship (1-1, 1-N)
-- In mysql console, cache is not opened
select empno, ename
from t_emp
where sal > (

  -- sub query
  select sal
  from t_emp
  where empno = 7499
)
and empno != 7499;

-- but if we write it in this way, it will be good
-- it's move the query into from sentence which won't
-- run in each query
select e.empno, e.ename
from t_emp e
join (select sal from t_emp where empno = 7499) t
on e.sal > t.sal and e.empno != 7499;

-- inner join query conditions
-- these two queries are identical
select e.ename, d.dname
from t_emp e
join t_dept d on e.deptno = d.deptno and d.deptno = 10;

select e.ename. d.dname
from t_emp e
join t_dept d on e.deptno = d.deptno
where d.deptno = 10;

-- outer join is different
-- the first one will keep all records in left table
-- where will generate many invalid records
select e.ename. d.dname
from t_emp e
left join t_dept d on e.deptno = e.deptno and d.deptno = 10;

-- the second is the correct query
select e.ename. d.dname
from t_emp e
left join t_dept d on e.deptno = d.deptno
where d.deptno = 10;


-- Update ----------------------------------------------------------------

-- Using table joins for update
-- by this way, I can modify two tables data in one statement
update t_emp e join t_dept d on e.deptno = d.deptno and d.dname = 'SALES'
set e.sal = 10000, d.dname = 'SALES-NEW';


-- Delete ----------------------------------------------------------------

-- Using table joins for deletion
-- delete all rows in e and d after the sub query
delete e, d from t_emp e join t_dept d on e.deptno = d.deptno
and d.name = 'SALES'

```

### Transaction

- ACID transaction
  - Atomicity
  - Consistency
  - Isolation
  - Durability
- MySQL has 5 types of logs, redo and undo logs are related to transaction
- Distributed transaction resource, [link](https://juejin.im/post/5b5a0bf9f265da0f6523913b)


### DB cluster

- Don't use auto increment id for database clusters, it will cause inconsistency id.
