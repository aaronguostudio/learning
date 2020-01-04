# Concepts

- Users
- Groups
- Policies
- Roles

## Identity Access Management

- IAM is universal. It does not apply to regions
- Power User
  - Provides full access to AWS services and resources, but does not allow management of Users and groups
- IAM integrates with existing active directory account allowing single sign-on
- No biometric authentication

## S3 Intro

- Object-based
- Files can be from 0 Bytes to 5TB
- By default, you can create up to 100 buckets in each of your AWS accounts
- How does data consistency work for S3 ?
  - Read after Write consistency for PUTS of new objects
  - Eventual Consistency for overwrite PUTS and DELETES
- Guarantees
  - 99.99 availability for the S3 platform
  - 99.999999999% durability for S3 information
- Summary features
  - Tiered Storage Available
  - Lifecycle Management
  - Versioning
  - Encryption
  - MFA Delete *
  - Secure your data using Access Control Lists and Bucket Policies
- For data larger than 5GB
  - Design your application to use the Multipart Upload API for all objects.

## S3 Bucket Types

- S3 Standard
- S3 Intelligent Tiering
- S3 Standard-IA
- S3 One Zone-IA+ (called RRS before)
  - 99.50%
- S3 Glacier
  - several hours
- S3 Glacier Deep Archive
  - within 48 hours

## S3 charge

- Storage
- Requests
- Storage Management Pricing
- Data Transfer pricing
- Transfer Acceleration
- Cross Region Replication Pricing
- Best Practices Design Patterns: Optimizing Amazon S3 Performance
  - Your applications can easily achieve thousands of transactions per second in request performance when uploading and retrieving storage from Amazon S3. Amazon S3 automatically scales to high request rates. For example, your application can achieve at least 3,500 PUT/COPY/POST/DELETE and 5,500 GET/HEAD requests per second per prefix in a bucket. There are no limits to the number of prefixes in a bucket. You can increase your read or write performance by parallelizing reads. For example, if you create 10 prefixes in an Amazon S3 bucket to parallelize reads, you could scale your read performance to 55,000 read requests per second.
  - Until 2018 there was a hard limit on S3 puts of 100 PUTs per second. To achieve this care needed to be taken with the structure of the name Key to ensure parallel processing. As of July 2018 the limit was raised to 3500 and the need for the Key design was basically eliminated. Disk IOPS is not the issue with the problem. The account limit is not the issue with the problem. Further information:
  - Refter to [this](https://docs.aws.amazon.com/AmazonS3/latest/dev/optimizing-performance.html)

## Encryption

- Encryption In Transit is achieved by SSL/TLS
- Encryption At Rest (Server Side) is achieved by ( 服务端存储 )
  - S3 Managed Keys - SSE - S3
  - AWS Key Management Service, Managed Keys - SSL - KMS
  - Server Side Encryption with customer provided keys - SSE - C
- Client Side Encryption

## Versioning

- Once enabled, Versioning connot be disabled
- Integrated with Lifecycle rules
- Versioning's MFA Delete capability
- Versioning
  - If upload a new version, the object will not be public
  - Stores all write and delete
  - Great backup tool
  - Versioning can't be disabled, only suspended
  - Integrates with Lifecycle rules

## Lifecycle

- Automates moving objects between storage tiers
- Can be used in conjunction with versioning
- Can be applied to current and previous versions
- delete will not delete the replica bucket
- Versioning must be enabled on both the source and destination buckets
- Regions must be unique
- Fiels in an existing bucket are not reqlicated automaticlly (history data)

## CloudFront

- Edge Location
  - the location to cache the content and are separated to AWS region/AZ
  - Edge locations are not just READ only, can wirte/put an object on them
  - Objects are chached for TTL (Time to Live)
  - clear cached will be charged
- Signed URLs or Cookies or origin access identity
  - could restrict viewer access (Use signed URLs or signed Cookies)
  - signed Cookies
  - CloudFront Origin Access Identity
- Origin - This can be either an S3 Bucket, an EC2 Instance, and Elastic Load Balancer or Route53

## Snowball

- Snowball can import to S3 and export from S3

## Storage Gateway

- It is a physical or virtual appliance that can be used to cache S3 locally at a customer's site.
- Three different types of Storage
  - File Gateway (NFS & SMB)
    - Enables to store and retrieve objects in S3 using file protocol
  - Volume Gateway (iSCSI)
    - Stored Volumes
      - store data locally, asynchronously backing up the data to AWS
      - Data will backup in the form of Amazon Elastic Block Store (Amazon EBS)
      - 1GB - 16TB in size for Stored Volumes
    - Cached Volumes
      - only retain frequently accessed data locally
      - 1GB - 32TB in size for Cached Volumes
  - Tape Gateway

## Exam reviews

- Using SAML (Security Assertion Markup Language 2.0), you can give your federated users single sign-on (SSO) access to the AWS Management Console.
  - True
- You run a popular photo-sharing website that depends on S3 to store content. Paid advertising is your primary source of revenue. However, you have discovered that other websites are linking directly to the images in your buckets, not to the HTML pages that serve the content. This means that people are not seeing the paid advertising, and you are paying AWS unnecessarily to serve content directly from S3. How might you resolve this issue?
  - Remove the ability for images to be served publicly to the site and then use signed URLs with expiry dates.
- You are consulting to a mid-sized company with a predominantly Mac & Linux desktop environment. In passing they comment that they have over 30TB of unstructured Word and spreadsheet documents of which 85% of these documents don't get accessed again after about 35 days. They wish that they could find a quick and easy solution to have tiered storage to store these documents in a more cost-effective manner without impacting staff access. What options can you offer them? (Choose 2)
  - Migrate documents to File Gateway presented as NFS and make use of life-cycle using Infrequent Access storage.
  - Migrate documents to EFS storage and make use of life-cycle using Infrequent Access storage.
- Trying to use S3 without File Gateway in front would be a major impact to the user environment. Using File Gateway is the recommended way to use S3 with shared document pools. Life-cycle management and Infrequent Access storage is available for both S3 and EFS. A restriction however is that 'Using Amazon EFS with Microsoft Windows is not supported'. File Gateway does not support iSCSI in the client side
