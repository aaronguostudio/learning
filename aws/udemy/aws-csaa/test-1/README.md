# Summary

- EC2 connect to RDS using IAM role
  - IAM database authentication works with MySQL and PostgreSQL.
  - you can create and assign an IAM Role to your EC2 instances, you still need to configure your RDS to use IAM DB Authentication.
    - This is in the UI when create the RDS db

- S3 client side encryption
  - use S3 client-side encryption with a client-side master key
    - it encrypt before sending to AWS
    - requires
      - AWS KMS-managed customer master key
      - a client-side master key

- Using KMS and Lambda
  - Create a new KMS key and use it to enable encrption helpers that leverage on AWS Key Management Service to store and encrypt the sensitive information
    - Explain
      - AWS Lambda encrypts the ENV in the function by default, but it's using the default key which other user login to the AWS console can still see them
        - I can check enable helpers for encryption in transit
        - need to create my own AWS KMS key and choose it instead of the default key
        - then I encrypt the ENV variables
        - there is also code example that I can find in the AWS console

- A traffic monitoring and reporting application uses Kinesis to accept real-time data. In order to process and store the data, they used Amazon Kinesis Data Firehose to load the streaming data to various AWS resources. Which of the following services can you load streaming data into?
  - Amazon Elasticsearch Service
    - explain
      - Amazon Kinesis Data Firehose is the easiest way to load streaming data into data stores and analytics tools
      - It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon Elasticsearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today.
      - It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.
    - not
      - Amazon S3 Select
      - Redshift Spectrum
        - explain
          - they are functions in the S3 and Redshift services
          - S3 Select is an Amazon S3 feature that makes it easy to retrieve specific data from the contents of an object using simple SQL expressions without having to retrieve the entire object. Amazon Redshift Spectrum is a feature of Amazon Redshift that enables you to run queries against exabytes of unstructured data in Amazon S3 with no loading or ETL required.

- You are managing a suite of applications in your on-premises network which are using trusted IP addresses that your partners and customers have whitelisted in their firewalls. There is a requirement to migrate these applications to AWS without requiring your partners and customers to change their IP address whitelists. Which of the following is the most suitable solution to properly migrate your applications?
  - Create a Route Origin Authorization (ROA) then once done, provision and advertise your whitelisted IP address range to your AWS account

- Accelerate DynamoDB
  - mazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache that can reduce Amazon DynamoDB response times from milliseconds to microseconds, even at millions of requests per second.

- In a government agency that you are working for, you have been assigned to put confidential tax documents on AWS cloud. However, there is a concern from a security perspective on what can be put on AWS. What are the features in AWS that can ensure data security for your confidential documents? (Choose 2)
  - S3 Server-Side Encryption
  - S3 Client-Side Encryption
    - not
      - EBS On-Premises Data Encryption (no such service)
      - S3 On-Premises Data Ecryption (no such service)

- An application that records weather data every minute is deployed in a fleet of Spot EC2 instances and uses a MySQL RDS database instance. Currently, there is only one RDS instance running in one Availability Zone. You plan to improve the database to ensure high availability by synchronous data replication to another RDS instance. Which of the following performs synchronous data replication in RDS?
  - RDS DB instance running as a Multi-AZ deployment

- You are a newly-hired Solutions Architect in a leading utilities provider, which is in the process of migrating their applications to AWS. You created an EBS-Backed EC2 instance with ephemeral0 and ephemeral1 instance store volumes attached to host a web application that fetches and stores data from a web API service. If this instance is stopped, what will happen to the data on the ephemeral store volumes?
  - Data will be deleted

<!-- Question 25 -->
- An online cryptocurrency exchange platform is hosted in AWS which uses ECS Cluster and RDS in Multi-AZ Deployments configuration. The application is heavily using the RDS instance to process complex read and write database operations. To maintain the reliability, availability, and performance of your systems, you have to closely monitor how the different processes or threads on a DB instance use the CPU, including the percentage of the CPU bandwidth and total memory consumed by each process. Which of the following is the most suitable solution to properly monitor your database?
  - Enable Enhanced Monitoring in RDS

<!-- Question 32 -->
- You have a web application hosted in EC2 that consumes messages from an SQS queue and is integrated with SNS to send out an email to you once the process is complete. You received 5 orders but after a few hours, you saw more than 20 email notifications in your inbox. Which of the following could be the possible culprit for this issue?
  - The web application is not deleting the message in the SQS queue after it has processed them.
    - Always remember that the messages in the SQS queue will continue to exist even after the EC2 instance has processed it, until you delete that message.

<!-- Question 33 -->
- A Solutions Architect is working for a company which has multiple VPCs in various AWS regions. The Architect is assigned to set up a logging system which will track all of the changes made to their AWS resources in all regions, including the configurations made in IAM, CloudFront, AWS WAF, and Route 53. In order to pass the compliance requirements, the solution must ensure the security, integrity, and durability of the log data. It should also provide an event history of all API calls made in AWS Management Console and AWS CLI. Which of the following solutions is the best fit for this scenario?
  - Set up a new CloudTrail trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Apply Multi Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.

<!-- Question 34 -->
- You are working as a Solutions Architect for a major telecommunications company where you are assigned to improve the security of your database tier by tightly managing the data flow of your Amazon Redshift cluster. One of the requirements is to use VPC flow logs to monitor all the COPY and UNLOAD traffic of your Redshift cluster that moves in and out of your VPC. Which of the following is the most suitable solution to implement in this scenario?
  - When you use Amazon Redshift Enhanced VPC Routing, Amazon Redshift forces all COPY and UNLOAD traffic between your cluster and your data repositories through your Amazon VPC. By using Enhanced VPC Routing, you can use standard VPC features, such as VPC security groups, network access control lists (ACLs), VPC endpoints, VPC endpoint policies, internet gateways, and Domain Name System (DNS) servers. Hence, Option 2 is the correct answer. You use these features to tightly manage the flow of data between your Amazon Redshift cluster and other resources. When you use Enhanced VPC Routing to route traffic through your VPC, you can also use VPC flow logs to monitor COPY and UNLOAD traffic. If Enhanced VPC Routing is not enabled, Amazon Redshift routes traffic through the Internet, including traffic to other services within the AWS network.

<!-- Question 35 -->
- A content management system (CMS) is hosted on a fleet of auto-scaled, On-Demand EC2 instances which use Amazon Aurora as its database. Currently, the system stores the file documents that the users uploaded in one of the attached EBS Volumes. Your manager noticed that the system performance is quite slow and he has instructed you to improve the architecture of the system. In this scenario, what will you do to implement a scalable, high throughput POSIX-compliant file system?
  - Use EFS
    - explain
      - Amazon Elastic File System (Amazon EFS) provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources. When mounted on Amazon EC2 instances, an Amazon EFS file system provides a standard file system interface and file system access semantics, allowing you to seamlessly integrate Amazon EFS with your existing applications and tools. Multiple Amazon EC2 instances can access an Amazon EFS file system at the same time, allowing Amazon EFS to provide a common data source for workloads and applications running on more than one Amazon EC2 instance. This particular scenario tests your understanding of EBS, EFS, and S3. In this scenario, there is a fleet of On-Demand EC2 instances that stores file documents from the users to one of the attached EBS Volumes. The system performance is quite slow because the architecture doesn't provide the EC2 instances a parallel shared access to the file documents. Remember that an EBS Volume can be attached to one EC2 instance at a time, hence, no other EC2 instance can connect to that EBS Provisioned IOPS Volume. Take note as well that the type of storage needed here is a "file storage" which means that S3 (Option 1) is not the best service to use because it is mainly used for "object storage", and S3 does not provide the notion of "folders" too. This is why Option 2 is the correct answer.

<!-- Question 44 -->
- You have triggered the creation of a snapshot of your EBS volume and is currently on-going. At this point, what are the things that the EBS volume can or cannot do?
  - The volume can be used as normal while the snaphots is in progress

<!-- Question 52 -->
- A multi-tiered application hosted in your on-premises data center is scheduled to be migrated to AWS. The application has a message broker service which uses industry standard messaging APIs and protocols that must be migrated as well, without rewriting the messaging code in your application. Which of the following is the most suitable service that you should use to move your messaging service to AWS?
  - Amazon MQ
    - explain
      - Amazon MQ, Amazon SQS, and Amazon SNS are messaging services that are suitable for anyone from startups to enterprises. If you're using messaging with existing applications and want to move your messaging service to the cloud quickly and easily, it is recommended that you consider Amazon MQ. It supports industry-standard APIs and protocols so you can switch from any standards-based message broker to Amazon MQ without rewriting the messaging code in your applications. Hence, Option 1 is the correct answer.

<!-- Question 57 -->
- You are working for a large financial company as an IT consultant. Your role is to help their development team to build a highly available web application using stateless web servers. In this scenario, which AWS services are suitable for storing session state data? (Choose 2)
  - DynamoDB
  - ElasticCache

<!-- Question 61 -->
- You are working as a Solutions Architect for a government project in which they are building an online portal to allow people to pay their taxes and claim their tax refunds online. Due to the confidentiality of data, the security policy requires that the application hosted in EC2 encrypts the data first before writing it to the disk for storage. In this scenario, which service would you use to meet this requirement?
  - AWS KMS API
    - explain
      - AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. The master keys that you create in AWS KMS are protected by FIPS 140-2 validated cryptographic modules. AWS KMS is integrated with most other AWS services that encrypt your data with encryption keys that you manage. AWS KMS is also integrated with AWS CloudTrail to provide encryption key usage logs to help meet your auditing, regulatory and compliance needs.

<!-- Question 65 -->
- You have identified a series of DDoS attacks while monitoring your VPC. As the Solutions Architect, you are responsible in fortifying your current cloud infrastructure to protect the data of your clients. Which of the following is the most suitable solution to mitigate these kinds of attacks?
  - Use AWS Shield to detect and mitigate DDoS attacks
