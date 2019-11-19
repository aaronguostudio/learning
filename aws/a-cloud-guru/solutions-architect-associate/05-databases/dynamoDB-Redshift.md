# DynamoDB and Redshift

## Redis实战

- stored on SSD
- across 3 geographically distinct data centres
- consistency
  - Eventual consistent reads (default) (usually 1s)
    - better performance
  - Stronly consistent reads

## Redshift

- config
  - single node (160GB)
  - Multi-Node
    - leader node (manage client connections and receives queries)
    - compute node (store data and perform queries and computations), up to 128 compute nodes
- MMP (Massively Parallel Processing)
- backup
  - enabled by default with a 1 day retention period
  - maximum retention period is 35 days
  - always attempts to maintain at least 3 copies of data (original, replica and a backup in S3)
  - can also asynchronously replicate snapshots to S3 in another region for disaster recovery
- Pricing
  - 1 unit per node per hour
  - only change conpute nodes, not the master node
  - charge data transfor(only in a VPC)
  - Using SSL
  - AES-256 encryption
- Availability
  - only available in 1 AZ
  - can restore snapshots to new AZs in the event of an outage
