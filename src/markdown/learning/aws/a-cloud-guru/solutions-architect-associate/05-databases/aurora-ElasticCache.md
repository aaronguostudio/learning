# Aurora

- start with 10GB to 64TB
- up to 32vCPUs and 244GB of Memory
- 2 copies of data in each AZ, with minimum of 3 AZs. 6 copies of the data
- up to 15 replicas (vs MySQL is 5)
- can share Aurora Snapshots with other AWS accounts
- automated failover

## Lab

- create an Aurora read replica (from a MySQL db)
- this will create a reader replica and writer replica
- if promote the writer replica, it will replace the MySQL to be the master

## ElasticCache

- increase database and web app performance (or create replica)
- Redis is Multi-AZ
- can do backups and retores of Redius
