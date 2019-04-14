# 数据库性能指标
- QPS requests per second  每秒请求数
- TPS transactions per second  每秒事务数

# Config MySQL
```sql

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
)

-- Foreign key will create index automatically
create table if not exists table_name (
    id bignit unsigned auto_increment primary key,
    uid bignit unsigned,
    foreign key (uid) references other_table_name (id)
  );
)

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
```

<!-- Start from here -->
https://www.imooc.com/video/2252