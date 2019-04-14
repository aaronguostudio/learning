# 数据库性能指标
- QPS requests per second  每秒请求数
- TPS transactions per second  每秒事务数

# command
```sql
-- show variables
show variables like '%iso%'

-- update isolation
set session tx_isolation='read-committed';
```