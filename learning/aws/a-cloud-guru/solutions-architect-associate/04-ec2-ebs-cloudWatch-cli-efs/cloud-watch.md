# CloudWatch can monitor

- Can monitor
  - Compute
    - EC2
    - Autoscaling Groups
    - Elastic Load Balancers
    - Route53 Health Checks
    - Lambda
  - Storage & Content Delivery
    - EBS Volumes
    - Storage Gateway
    - CloudFront

- Host level metrics consist of
  - CPU
  - Network
  - Disk
  - Status Check

- What is CloudWatch
  - monitoring performance, all about performance
  - can monitor most of AWS services and apps run on AWS
  - CloudWatch with EC2 will monitor events every 5 minutes by default (standard monitoring)
  - can have 1 minute intervals by turning on details monitoring (detailed monitoring)
  - can create CloudWatch alarms which trigger notifications
- What is CloudTrail
  - AWS CloudTrail increases visibility into your user and resource activity by recording AWS console actions and API calls
    - Can identify which user do what
  - CloudTrail is all about auditing

## Add CloudWatch

- create alarms
- select metrics
- create the topic and add subscriber
- run this in the ec2 terminal to below up the CPU: while true; do echo; done
