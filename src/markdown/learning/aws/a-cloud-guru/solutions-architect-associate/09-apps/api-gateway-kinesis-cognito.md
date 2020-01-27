# API Gateway

## Kinesis

- Streaming data is data that is generated continuously by thousands of dta sources in small sized (order of kilobytes)
- types
  - Kinesis streams
    - producers -> streaming to -> shard -> EC2 -> DynamoDB / S3 / EMR / Redshift
    - persist 24 hours - 7 days
    - consis of shards
      - 5 transactions per seconds for reads, up to a maximum total data read rate of 2MB per second and up to 1,000 records per second for writes, up to a maximum total data write data of 1MB per second (including partition keys)
  - Kinesis Firehose - S3
    - producers -> firehose -> S3 / Redshift
    - no data persist, need to store somewhere
  - Kinesis Analytics
    - Analysis the data and store somewhere

## Cognito

- Identity Pool
  - user pool -> login to facebook or google -> JWT -> Identity Pool -> AWS Credentials
  - has slient notifications if the user identity information has been changed
