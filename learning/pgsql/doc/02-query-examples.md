- Query json in postgresql

```sql
select id, column_name from table_name where column_name @> '[{"field_1": "value", "field_2": value}]'
```
