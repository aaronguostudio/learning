# 数据库性能指标
- QPS requests per second  每秒请求数
- TPS transactions per second  每秒事务数

# Config MySQL
```sql

select version()


-- show variables isolation
show variables like '%iso%'
-- update isolation
set session tx_isolation='read-committed';

-- In my.ini defines the storage engine
-- default-storage-engine=INNODB

-- show the scirpt of created the table
show create table provinces;
show indexes from table_name;
show indexes from table_name\G;  -- show as a column view

```


# Common commands

```sql
-- Common
select database();
show tables from mysql;
show columns from table_name;

-- Table
create table if not exists table_name(
  id bigint unsigned auto_increment primary key,
  sin varchar(20) not null unique key,
  username varchar(20) not null,
  age tinyint unsigned,
  salary float(8,2) unsigned,
  role varchar(20) default 'staff'
);

-- Foreign key will create index automatically
create table if not exists table_name (
    id bignit unsigned auto_increment primary key,
    uid bignit unsigned,
    foreign key (uid) references other_table_name (id)
  );
);

-- Alter table
alter table table_name add age tinyint unsigned not null default 10 after column;
alter table table_name drop age;
alter table table_name add constraint PK_user_id primary key (id);
alter table table_name add unique (username);
alter table table_name add foreign key (pid) preference (id);
alter table table_name alter age set default new_value;
alter table table_name alter age drop default;
alter table table_name drop primary key;
alter table table_name drop index username;
alter table table_name drop foreign key key_name;
alter table table_name modify id smallint unsigned null not first;
alter table table_name change id new_id_name bigint unsigned null not;
alter table table_name rename new_table_name;
rename table table_name to new_table_name;


-- CRUD
insert table_name values (null, 'name', 12);  -- null will auto generate
insert table_name values (default, 'name', 12);  -- null will auto generate
insert table_name values (default, 'name', md5('123'));

insert table_name set col_name='aaron', col_name='1212';
update table_name set col_name='newvalue' , col_name='newvalue' [where...];
delete from table_name where id = 1;

-- select
select count(*) from table_table;
select table_name.column_name from table_name;
select table_name.column_name as alias_name from table_name;
select column_name from table_name group by column_name; --group for result
select column_name from table_name group by column_name having column_name > 3;
select column_name from table_name group by column_name having column_name > 3 order by column_name asc/desc;
select column_name from table_name limit 2,2;
select column_name from table_name limit 2 offset 2;

-- subquery
insert table_name (column_name) select column_name from users where age > 16;
```

<!-- Start from here -->
<!-- https://www.imooc.com/video/2398 -->




# Other resources
- https://www.imooc.com/learn/194
- https://www.imooc.com/learn/398
- https://www.imooc.com/learn/427
- https://www.imooc.com/learn/449