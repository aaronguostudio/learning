# Databases

## RDS

- types
  - Aurora
  - MySQL
  - MariaDB
  - PostgreSQL
  - SQL Server
  - Oracle
- encription
  - is done by the AWS KMS service
  - supported for MySQL, Oracle, SQL Server, PostgreSQL, MariaDB and Aurora
- Multi-AZ
  - Multi-AZ only supports: SQL Server, MySQL, Oracle, Postgres and MariaDB
  - get copies, automatic point to another zone and automatically done (update the DNS)
  - this is more for security instead of performance, for performance, it's related to replica
- Read replica
  - only supports: Aurora, MySQL, Oracle, Postgres and MariaDB
  - can be multi-AZ
  - can be in another region
  - good for performance
  - used for scaling, not for DR
  - must have automatic backups turned on in order to deploy a read replica
  - can have up to 5 read replica copies of database
  - can have read replica of read replica (but will have latercy)
  - each read replica will have its own DNS end point
  - can have read replicas of Multi-AZ source databases
  - can be promoted to be their own databases, this will breaks the replication
  - can have a read replica in a second region
- concepts
  - runs on VM
  - can't login VM
  - it's not serverless
  - Auroa serverless is serverless

## RDS has two key features

- Multi-AZ - for disaster recovery
- Read Replicas - for performance
  - scale out to the replicas

## OLTP vs OLAP

- OLTP - online transaction processing
  - e.g. find an order, pull up a row of data
- OLAP - online analytics processing
  - a bunch of related rows

## AWS redshift warehouse (OLAP)

- can asynchronously relicate snaphots to S3 in another reigon for disaster recovery

## ElasticCache

- in-memory cache
- engines
  - Memcached
  - Redis

## Backups

- automatic and snapshots
  - automatic
    - backup include all logs
    - time point backup
    - backup is in S3 and will get free S3 size as the same as the DB
  - snaphot
    - manually
    - persist after RDS deleted
- restore
  - whenerver restore either automatic backup or manual snapshot, restored version will be a new RDS instance with a new DNS endpoint

## Create a DB and wordpress

- create a MySQL server
  - config user password and db...
- create a EC2 for wordpress
  - add script

```bash
#!/bin/bash
yum install httpd php php-mysql -y
cd /var/www/html
wget https://wordpress.org/wordpress-5.0.tar.gz
tar -xzf wordpress-5.0.tar.gz
cp -r wordpress/* /var/www/html/
rm -rf wordpress
rm -rf latest.tar.gz
chmod -R 755 wp-content
chown -R apache:apache wp-content
chkconfig httpd on
service httpd start
```

- config security group
- add ec2 security group to rds security group

## AZ and Read Replica

- turn on multi-AZ deployment
  - after this change, if do a rebott, there will have a checkbox for reboot with failover (will switch the availability zone)
- If trun on read replica, will need to turn on backup
  - turn on backup will experience some down time
  - then can create read replica

## Exam tips

- automated backups and snapshot

## Exam reviews

- Under what circumstances would I choose provisioned IOPS over standard storage when creating an RDS instance?
  - If you use online transaction processing in your production environment.
- When you add a rule to an RDS DB security group, you must specify a port number or protocol.
  - False
    - Technically a destination port number is needed, however with a DB security group the RDS instance port number is automatically applied to the RDS DB Security Group. Further information:
- What data transfer charge is incurred when replicating data from your primary RDS instance to your secondary RDS instance?
  - There is no charge associated with this action.
- Which of the following data formats does Amazon Athena support? (Choose 3) (no XML)
  - Apache parquet
  - JSON
  - Apache ORC
- Which of the following DynamoDB features are chargeable, when using a single region? (Choose 2)
  - Read and Write Capacity
  - Storage of Data
- With new RDS DB instances, automated backups are enabled by default?
  - Yes
- If I wanted to run a database on an EC2 instance, which of the following storage options would Amazon recommend?
  - EBS
- RDS Reserved instances are available for multi-AZ deployments.
  - True
- If you are using Amazon RDS Provisioned IOPS storage with a Microsoft SQL Server database engine, what is the maximum size RDS volume you can have by default?
  - 16TB
