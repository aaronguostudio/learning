# Quizs

- Your company likes the idea of storing files on AWS. However, low-latency service of the majority of files is important to customer service. Which Storage Gateway configuration would you use to achieve both of these ends? (Choose 2)
  - Gateway-Stored
  - File Gateways
    - Gateway-Stored volumes store your primary data locally, while asynchronously backing up that data to AWS. Depending on the Cache allocated you can achieve the same with File Gateway

- You work for a toy company that has a busy online store. As you are approaching Christmas, you find that your store is getting more and more traffic. You ensure that the web tier of your store is behind an Auto Scaling group. However, you notice that the web tier is frequently scaling, sometimes multiple times in an hour, only to scale back after peak usage. You need to keep Auto Scaling from scaling up and down so rapidly. Which of the following options would help you to achieve this?
  - Modify the Auto Scaling group cool-down timers & modify the Amazon CloudWatch alarm period that triggers your Auto Scaling scale down policy.

- You work for a games development company that are re-architecting their production environment. They have decided to make all web servers stateless. Which of the following the AWS services will help them achieve this goal? (Choose 3)
  - DynamoDB
  - RDS
  - ElasticCache
    - not right
      - EMR
        - Elastic Map Reduce, not related
      - ELB
        - can help deliever stateful services, but not stateless

- You have created a Direct Connect Private VIF from your data center to the AWS network. The link is now active and routes are being advertised from the on-premise data center. However, your resources in your data center cannot access your EC2 Instances, nor vice versa. All connectivity between the EC2 instances is alright, and appropriate security groups and NACLs are correctly configured. Which of the following solutions would remedy this issue? (Choose 2)
  - Enable route propagation on your route table
  - Edit the VPC subnet route table, adding a route back to the on-premise data center.
    - not correct
      - Configure a new route from the NAT to the on-premise data center
      - Use an IPSEC VPN and add this route to the route table with the VPN being the target.
      - Enable route propagation on your Customer Gateway (CGW).
    - [details](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)

- You successfully configure VPC Peering between VPC-A and VPC-B. You then establish an IGW and a Direct-Connect connection in VPC-B. Can instances in VPC-A connect to your corporate office via the Direct-Connect service, and connect to the Internet via the IGW?
  - VPC peering does not support edge to edge routing.
    - VPC peering only routes traffic between source and destination VPCs. VPC peering does not support edge to edge routing. [Further information](http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html)

- AWS provides a number of security-related managed services. From the options below, select which AWS service is related to protecting your infrastructure from which security issue. (Choose 4)
  - Amazon Macie uses Machine Learning to protect sensitive data
  - AWS WAF blocks IP addresses based on rules
  - AWS Shield protects from Distributed Denial-of-Service attacks
  - AWS WAF protects from Cross-site Scripting attacks
    - not
      - AWS Shield protects from SQL Injection attacks
    - details
      - AWS provides various services to cope with many security related issues and because of this, there are a number of options which are correct. AWS Shield has two options listed above, but only one is correct. AWS Shield operates on layer 3 and 4 of the ISO network model and its primary purpose is to protect against DDoS attacks. It does not have any affect against SQL Injection attacks which are dealt with by AWS WAF. WAF also protects against Cross Site Scripting and can block traffic from IP addresses based on rules and therefore these options are also correct. Finally, Amazon Macie tackles a different problem related to Data Loss Prevention and protects sensitive data and so this answer is also correct. [Further information](https://aws.amazon.com/waf/faqs/https://aws.amazon.com/shield/faqs/https://aws.amazon.com/macie/faq/)

- Choose the features of Consolidated Billing. (Choose 3)
  - Account charges can be tracked individually
  - A single bill is issued containing the charges for all AWS Accounts
  - Multiple standalone accounts are combined and may reduce your overall bill
    - not
      - Charging is based per VPC

- You have been engaged as a consultant by a company that generates utility bills and publishes them online. PDF images are generated, then stored on a high-performance RDS instance. Customarily, invoices are viewed by customers once per month. Recently, the number of customers has increased threefold, and the wait-time necessary to view invoices has increased unacceptably. The CTO is unwilling to alter the codebase more than necessary this quarter, but needs to return performance to an acceptable level before the end-of-the-month print run. Which of the following solutions would you feel comfortable proposing to the CTO and GM? (Choose 2)
  - Create RDS Read-Replicas and additional Web/App instances across all the available AZs.
  - Evaluate the risks and benefits associated with an RDS instance upgrade.

- You work for a popular media outlet about to release a story that is expected to go viral. During load testing on the website, you discover that there is read contention on the database tier of your application. Your RDS instance consists of a MySQL database on an extra large instance. Which of the following approaches would be best to further scale this instance to meet the anticipated increase in traffic your viral story will generate? (Choose 3)
  - Provision a larger instance size with provisioned IOPS.
  - Use ElastiCache to cache the frequently read, static data.
  - Add an RDS Read Replica for increased read performance.
    - not
      - Add an RDS Multi-AZ for increased read performance.
    - details:
      - RDS Multi-AZ is for resilience only.

- dynamo key-value limit
  - 400kb for cobined size

- Which of the following are valid S3 data encryption options? (Choose 4)
  - A client library such as Amazon S3 Encryption Client.
  - SSE-C.
  - Server-side Encryption (SSE)-S3.
  - SSE-KMS.

- You work for a large media organization who has traditionally stored all their media on large SAN arrays. After evaluating AWS, they have decided to move their storage to the cloud. Staff will store their personal data on S3, and will have to use their Active Directory credentials in order to authenticate. These items will be stored in a single S3 bucket, and each staff member will have their own folder within that bucket named after their employee ID. Which of the following steps should you take in order to help set this up? (Choose 3)
  - Use AWS security token service to create temporary tokens.
  - Create an IAM role.
  - Create either a federation proxy or identity provider.
    - not
      - Tag each folder with the staff members' ID.
      - Create an IAM user for each member of staff and use their existing active directory password for the account.
    - details
      - You cannot tag individual folders within an S3 bucket. If you create an individual user for each staff member, there will be no way to keep their active directory credentials synched when they change their password. You should either create a federation proxy or identity provider and then use AWS security token service to create temporary tokens. You will then need to create the appropriate IAM role for which the users will assume when writing to the S3 bucket.

- How is the Public IP address managed in an instance session via the instance GUI/RDP or Terminal/SSH session?
  - The Public IP address is not managed on the instance: It is, instead, an alias applied as a network address translation of the Private IP address

- Your company has decided to set up a new AWS account for test and dev purposes. They already use AWS for production, but would like a new account dedicated for test and dev so as to not accidentally break the production environment. You launch an exact replica of your production environment using a CloudFormation template that your company uses in production. However, CloudFormation fails. You use the exact same CloudFormation template in production, so the failure is something to do with your new AWS account. The CloudFormation template is trying to launch 60 new EC2 instances in a single availability zone. After some research, you discover that the problem is ________.
  - For all new AWS accounts, there is a soft limit of 20 EC2 instances per region. You should submit the limit increase form and retry the template after your limit has been increased.

- Which of the following Amazon S3 Storage Classes offer 99.999999999% (11 x 9s) durability?
  - Standard, Standard-Infrequent Access, One Zone-Infrequent Access
    - Currently the S3 Classes are; Standard, Standard-Infrequent Access, One Zone-Infrequent Access, Reduced Redundancy Storage and for archive, Glacier & Glacier Deep Archive. Reduced Redundancy Storage is the only S3 Class that does not offer 99.999999999% durability and therefore any of the answers that contain Reduced Redundancy Storage cannot be correct.

- A client is concerned that someone other than approved administrators is trying to gain access to the Linux web app instances in their VPC. She asks what sort of network access logging can be added. Which of the following might you recommend? (Choose 2)
  - Set up a Flow Log for the group of instances and forward them to CloudWatch.
  - Make use of an OS level logging tools such as iptables and log events to CloudWatch or S3.

- When using EC2 instances with Dedicated Hosting, which of the following modes are you able to transition between by stopping the instance and starting it again?
  - Dedicated & Host

- You are a systems administrator and you need to monitor the health of your production environment. You decide to do this using CloudWatch. However, you notice that you cannot see the health of every important metric in the default dashboard. When monitoring the health of your EC2 instances, for which of the following metrics do you need to design a custom CloudWatch metric?
  - Memory usage
    - not
      - Network in
      - CPU Usage
      - Disk read operations

- You have been monitoring a sensitive autoscaling group, and you expect it to scale-in as you enter a period of holiday downtime. The auto scaling group is distributed over three AZs ( AZ - A & -B have two instances each, and AZ -C has three instances). All instances have different CPU and Memory utilization, and all instances have been running for a different number of days. All instances come from different versions of a root AMI, and all instances have different numbers of sessions connected. Which instance will be the 1st to shut down?
  - The instance in AZ -C that has the oldest launch configuration will terminate first.

- If you don't use one of the AWS SDKs, you can perform DynamoDB operations over HTTP using the POST request method. The POST method requires you to specify the operation in the header of the request and provide the data for the operation in JSON format in the body of the request. Which of the following are valid DynamoDB Headers attributes? (Choose 4)
  - content-type
  - x-amz-target
  - x-amz-date
  - host
    - not
      - x-amz-meta-
      - MD5-Hash

- Your server logs are full of what appear to be application-layer attacks, so you deploy AWS Web Application Firewall. Which of the following conditions may you set when configuring AWS WAF? (Choose 3)
  - String Match Conditions
  - Size Constraint Conditions
  - IP Match Conditions

- You're building out a single-region application in us-west-2. However, disaster recovery is a strong consideration, and you need to build the application so that if us-west-2 becomes unavailable, you can fail-over to us-west-1. Your application relies exclusively on pre-built AMI's. In order to share those AMI's with the region you're using as a backup, which process would you follow?
  - Copy the AMI from us-west-2, manually apply launch permissions, user-defined tags, and Amazon S3 bucket permissions of the default AMI to the new instance, and launch the instance.
    - not
      - Nothing: AMIs are specific to an account, and they can be used anywhere.

- When editing permissions (policies and ACLs), to whom does the concept of the "Owner" refer?
  - The "Owner" refers to the identity and email address used to create the AWS account.

- With SAML-enabled single sign-on, ________. (Choose 2)
  - After the client browser posts the SAML assertion, AWS sends the sign-in URL as a redirect, and the client browser is redirected to the Console.
  - The portal first verifies the user's identity in your organization, then generates a SAML authentication response.

- What is the maximum VisibilityTimeout of an SQS message in a FIFO queue?
  - 12 hours

- ​Your company has a policy of encrypting all data at rest. You host your production environment on EC2 in a bespoke VPC. Attached to your EC2 instances are multiple EBS volumes, and you must ensure this data is encrypted. Which of the following options will allow you to do this? (Choose 3)
  - Use third party volume encryption tools.
  - Encrypt your data inside your application, before storing it on EBS.
  - Encrypt the data using native encryption tools available in the operating system (such as Windows BitLocker).
