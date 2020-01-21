# Exam 2

## 10

-
  - One of your EC2 instances is reporting an unhealthy system status check. The operations team is looking for an easier way to monitor and repair these instances instead of fixing them manually. How will you automate the monitoring and repair of the system status check failure in an AWS environment?
- Explaination
  - Using Amazon CloudWatch alarm actions, you can create alarms that automatically stop, terminate, reboot, or recover your EC2 instances. You can use the stop or terminate actions to help you save money when you no longer need an instance to be running. You can use the reboot and recover actions to automatically reboot those instances or recover them onto new hardware if a system impairment occurs.
  - When creating an alarm, there is a section of taking the action for recover/stop/terminate/reboot the instance

## 21

-
  - You are working as a Solutions Architect for a start-up company that has a not-for-profit crowdfunding platform hosted in AWS. Their platform allows people around the globe to raise money for social enterprise projects including challenging circumstances like accidents and illnesses. Since the system handles financial transactions, you have to ensure that your cloud architecture is secure.Which of the following AWS services encrypts data at rest by default? (Choose 2)
- Correct answers
  - AWS Storage Gateway
  - AWS Glacier
- Explaination
  - All data transferred between any type of gateway appliance and AWS storage is encrypted using SSL. By default, all data stored by AWS Storage Gateway in S3 is encrypted server-side with Amazon S3-Managed Encryption Keys (SSE-S3). Also, when using the file gateway, you can optionally configure each file share to have your objects encrypted with AWS KMS-Managed Keys using SSE-KMS. This is the reason why Option 1 is correct.
  - Data stored in Amazon Glacier is protected by default; only vault owners have access to the Amazon Glacier resources they create. Amazon Glacier encrypts your data at rest by default and supports secure data transit with SSL. This is the reason why Option 4 is correct.
- Incorrect answers
  - AWS RDS
  - AWS Lambda
  - AWS ECS

## 23

-
  - In Elastic Load Balancing, there are various security features that you can use such as Server Order Preference, Predefined Security Policy, Perfect Forward Secrecy and many others. Perfect Forward Secrecy is a feature that provides additional safeguards against the eavesdropping of encrypted data through the use of a unique random session key. This prevents the decoding of captured data, even if the secret long-term key is compromised. Perfect Forward Secrecy is used to offer SSL/TLS cipher suites for which two AWS services?
- Answer
  - CloudFront and Elastic Load Balancing

## 24

-
  - One member of your DevOps team consulted you about a problem in connecting to one of the EC2 instances of your VPC over the Internet. Your environment is set up with four EC2 instances that all belong to a public non-default subnet. The EC2 instances also belong to the same security group. Everything works well as expected except for one of the EC2 instances which is not able to send nor receive traffic over the Internet. What could be the possible reason for this issue?
- Answer
  - The EC2 instance does not have a public IP address associated with it
- Explaination
  - Since the other three instances are working fine, we can assume that the security group and the route table are correctly configured.

## 25

-
  - You have a data analytics application that updates a real-time, foreign exchange dashboard and another separate application that archives data to Amazon Redshift. Both applications are configured to consume data from the same stream concurrently and independently by using Amazon Kinesis Data Streams. However, you noticed that there are a lot of occurrences where a shard iterator expires unexpectedly. Upon checking, you found out that the DynamoDB table used by Kinesis does not have enough capacity to store the lease data. Which of the following is the most suitable solution to rectify this issue?
- Answer
  - Increase the write capacity assigned to the shard table

## 26

-
  - You have two On-Demand EC2 instances inside your Virtual Private Cloud in the same Availability Zone but are deployed to different subnets. One EC2 instance is running a database and the other EC2 instance a web application that connects with the database. You want to ensure that these two instances can communicate with each other for your system to work properly. What are the things you have to check so that these EC2 instances can communicate inside the VPC? (Choose 2)

- Answer
  - Check the Network ACL if it allows communication between the two subnets
  - Check if all security groups are set to allow the application host to commnicate to the database on the right port and protocol
- Incrroect Answer
  - NAT instance or API Gateway, these two are associated to the internet

## 30

-
  - A corporate and investment bank has recently decided to adopt a hybrid cloud architecture for their Trade Finance web application which uses an Oracle database with Oracle Real Application Clusters (RAC) configuration. Since Oracle RAC is not supported in RDS, they decided to launch their database in a large On-Demand EC2 instance instead, with multiple EBS Volumes attached. As a Solutions Architect, you are responsible to ensure the security, availability, scalability, and disaster recovery of the whole architecture. In this scenario, which of the following will enable you to take backups of your EBS volumes that are being used by the Oracle database?

- Answer
  - Create snapshots of the EBS volumes

## 34

-
  - A web application, which is used by your clients around the world, is hosted in an Auto Scaling group of EC2 instances behind a Classic Load Balancer. You need to secure your application by allowing multiple domains to serve SSL traffic over the same IP address. Which of the following should you do to meet the above requirement?
- Answer
  - Generate an SSL certificate with AWS Certificate Manager and create a CloudFront web distribution. Associate the certificate with your web distribution and enable the support for Server Name Indication (SNI).

## 35

-
  - You have a static corporate website hosted in a standard S3 bucket and a new web domain name which was registered using Route 53. You are instructed by your manager to integrate these two services in order to successfully launch their corporate website. What are the prerequisites when routing traffic using Amazon Route 53 to a website that is hosted in an Amazon S3 Bucket? (Choose 2)
- Answers
  - The S3 bucket name must be the same as the domain name
  - A registered domain name

## 36

-
  - You are an AWS Network Engineer working for a utilities provider where you are managing a monolithic application with EC2 instance using a Windows AMI. You want to implement a cost-effective and highly available architecture for your application where you have an exact replica of the Windows server that is in a running state. If the primary instance terminates, you can attach the ENI to the standby secondary instance which allows the traffic flow to resume within a few seconds. When it comes to the ENI attachment to an EC2 instance, what does 'warm attach' refer to?
- Answer
  - Attaching an ENI to an instance when it is stoppd
- Explanation
  - An elastic network interface (ENI) is a logical networking component in a VPC that represents a virtual network card. You can attach a network interface to an EC2 instance in the following ways:
    When it's running (hot attach)
    When it's stopped (warm attach)
    When the instance is being launched (cold attach).

## 42

-
  - You are working for a large telecommunications company. They have a requirement to move 83 TB data warehouse to the cloud. It would take 2 months to transfer the data given their current bandwidth allocation. Which is the most cost-effective service that would allow you to quickly upload their data into AWS?
- Answer
  - Amazon Snowball Edge
- Incorect
  - Amazon Snowball
- Expalnation
  - Although an AWS Snowball device costs less than AWS Snowball Edge, it cannot store 80 TB of data in one device. Take note that the storage capacity is different from the usable capacity for Snowball and Snowball Edge. Remember that an 80 TB Snowball appliance and 100 TB Snowball Edge appliance only have 72 TB and 83 TB of usable capacity respectively. Hence, it would be costly if you use two Snowball devices compared to using just one AWS Snowball Edge device.

  The AWS Snowball Edge is a type of Snowball device with on-board storage and compute power for select AWS capabilities. Snowball Edge can undertake local processing and edge-computing workloads in addition to transferring data between your local environment and the AWS Cloud.

  Each Snowball Edge device can transport data at speeds faster than the internet. This transport is done by shipping the data in the appliances through a regional carrier. The appliances are rugged shipping containers, complete with E Ink shipping labels. The AWS Snowball Edge device differs from the standard Snowball because it can bring the power of the AWS Cloud to your on-premises location, with local storage and compute functionality.

  Snowball Edge devices have three options for device configurations – storage optimized, compute optimized, and with GPU. When this guide refers to Snowball Edge devices, it's referring to all options of the device. Whenever specific information applies only to one or more optional configurations of devices, like how the Snowball Edge with GPU has an on-board GPU, it will be called out.

## 43

- AWS STS (AWS Security Token Service)
  - AWS Security Token Service (AWS STS) is the service that you can use to create and provide trusted users with temporary security credentials that can control access to your AWS resources.

## 44

- It would be better to use Amazon Data Lifecycle Manager (Amazon DLM) instead as this provides you the fastest solution which enables you to automate the creation, retention, and deletion of the EBS snapshots without having to write custom shell scripts or creating scheduled jobs.
  - default value is 300 seconds

## 45

Using the EC2 API, you requested 40 m5.large On-Demand EC2 instances in a single Availability Zone. Twenty instances were successfully created but the other 20 requests failed. What is the solution for this issue and what is the root cause?

  - Amazon EC2 has a soft limit of 20 instances per region, which can be easily resolved by completing the Amazon EC2 instance request form where your use case and your instance increase will be considered. Limit increases are tied to the region they were requested for.

## 49

- all EBS are stored in the same AZ
