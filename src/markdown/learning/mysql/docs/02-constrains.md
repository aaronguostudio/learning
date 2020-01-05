# 外键约束的操作
实际项目中，很少使用这样的约束，一般通过系统的逻辑来实现，因为只有 InnoDB 支持

- cascade
  - 父表操作影响子表
- set null
- restrict
  - 拒绝父表的更新和删除
- no action
  - 同 restrict

```sql
-- Foreign key will create index automatically
create table if not exists table_name (
    id bignit unsigned auto_increment primary key,
    uid bignit unsigned,
    foreign key (uid) references other_table_name (id) on delete cascade
  );
)

```