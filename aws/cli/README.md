# Install
- pip3 install awscli
- pip3 install awscli --upgrade
- pip list -o
  - check outdated package

# RDS
- aws rds describe-db-instances --db-instance-identifier dbname

## Query postgres connection limitation
- Create and update DB
```bash
# create
aws rds create-db-instance --db-instance-identifier database-id --allocated-storage 20 --db-instance-class db.t3.medium --engine postgres --master-username username --master-user-password password --db-name dbname

# update
aws rds modify-db-instance --db-instance-identifier serverless-users-medium --publicly-accessible

# delete
aws rds delete-db-instance \
--db-instance-identifier serverless-users \
--skip-final-snapshot

```
- DB connections
  - MySQL
    - [DB connection limitation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html)
  - Postgres
    - Get max connections (this depends on rds instance type)
      - select * from pg_settings where name='max_connections';
      - show max_connections;
    - [DB connection limitation](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Managing.html#AuroraPostgreSQL.Managing.MaxConnections)
    - db.t2.small type has 198
    - db.t2.medium type has 413

- Check pg active connection
  - select *
    from pg_stat_activity
    where datname = 'serverless-users';
