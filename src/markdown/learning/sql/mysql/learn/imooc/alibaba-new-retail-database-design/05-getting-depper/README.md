## Chapter 05 Getting Deeper

### 01 Number or UUID for PK ?

- UIDD
  - What is UUID ?

    ![UUID](./what-is-uuid.png)

  - MySQL build-in UUID
    - try: select uuid();
  - Why use uuid
    - 数据库集群中，为了避免每个 MySQL 各自生成主键造成重复
  - Pro
    - Generating PK faster (in distributed system)
    - global unique
    - good when have multiple servers
  - Con
    - 16 bytes, need more space, int is 4 bytes and bigint is 8 bytes
    - query slow
    - UUID is not ordered, IO writing is more random (writing is slower than ordering data)
    - Can be really impact the performance
- Auto Increment
  - int and bigint is faster
  - indexing is faster
  - IO is faster
- How to avoid of duplicate PK ?
  - middleware
    - MyCat
      - can generate global unique PK
      - MyCat is single thread
- Not recommand using UUID for PK

### 02 Modify table structures online

- caveat
  - Backup is important
  - Stop the service and update table, do this when the traffic is really low
- the cons of alter table statement
  - lock the whole table, can not write and read
  - if rollback happens, it will take even more time
  - when data is very large, it will take long time
- tools
  - percona's tool kit : Percona Toolkit
    - percona's MySQL database has a very good performance
    - [Learn more](https://blog.csdn.net/wsk1103/article/details/80960300)
    - pt-online-schema-change can finish online modification
  - how it achieves
    - when alter table structure
      - it will create a new table
      - it will sync old table live data to the new table
      - copy data from old to new
      - then delete the old table and replace it
  - install
    - yum install -y perl-DBI
    - yum install -y perl-DBD-mysql
    - yum install -y perl-IO-Socket-SSL
    - yum install -y perl-Digest-MD5
    - yum install -y perl-TermReadKey
- // todo

### 03 Order ID or order number

- // todo

### 04 hard delete or soft delete

- 误删除代价太大
  - 数据库一旦误删除，恢复起来需要停机运行
    - 深入学习课程：MySQL 数据库集群 - PXC 方案
  - 造成主键的不连续，导致分页查询变慢
    - 比如：select ... from ... limit 1000, 20;
      - 这样的查询，随着页数的增多，会越来越慢
      - 优化：select ... from ... where id >= 1000 and id <= 1020;
        - 主键的索引是按照二叉树实现的，这样非常高效
        - 但是物理删除造成了 id 的不连续，不过也有解决方案
- 什么数据不适合物理删除
  - 核心业务数据不建议删除，只做状态变更
    - 比如：订单，账户，优惠券
    - 可以把软删除的记录转移到历史表里面。这个历史表甚至可以用 NoSQL 存储
- 对之前的数据表加入 is_deleted column

```sql
-- create history table
create table t_user_history like t_user;

-- add is_deleted boolean default 0 to t_user table

```

### 千万记录如何分页

- 测试分页查询
  - 测试例子
    - select id, name from t_test limit 100, 100;
    - select id, name from t_test limit 10000, 100;
    - select id, name from t_test limit 1000000, 100;
    - select id, name from t_test limit 5000000, 100;
  - 生成数据
    - use DataGenerator.java to generate csv and import into database
    - 可以发现，随着分页的增大，数据的查询速度会越来越慢

    ```sql
    create table t_test(
      id int unsigned primary key auto_increment,
      val varchar(255) not null
    )
    ```

  - 优化方法
    - select * from t_test where id >= 5000000 limit 100;                // id 自带索引
    - select * from t_test where id >= 5000000 and id <= 5000000 + 100;
  - 主键值不连续怎么办？
    - 索引的原理
      - 数据库会创建一个二叉树的索引表，记录主键值和记录值

      ```sql
      -- 子句将会利用 id 的 index，这种情况适用于 id 不连续的情况
      select t.id, t.val from t_test t join (select id from t_test limit 5000000, 100) tmp on t.id = tmp.id;
      ```
  - 其他的解决办法
    - 业务上限定不可以查询很早的数据

<!-- https://coding.imooc.com/lesson/353.html#mid=26132 -->
