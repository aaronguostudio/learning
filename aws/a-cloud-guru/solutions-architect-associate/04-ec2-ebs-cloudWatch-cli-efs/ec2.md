# EC2 Pricing Models

- On demand
- Reserved
  - Standard Reserved intances
    - up to 75% off
    - can't change type
  - Convertible Reserved instances
    - up to 45% off
    - can't change type
  - Schedule Reserved
    - schedule based on timing
- Spot
- Dedicated Hosts

## Connect to EC2

- chmod 400 thekey.pem
- ssh ec2-user@ip -i thekey.pem
- A chrome extension Secure Shell App is handy for ssh to server from browser
- ssh-keygen -y -f thekey.pem > thekey.pub
  - remove extension .pem
- yum install -y
- yum install httpd -y
- service httpd start
- chkconfig on

## Get metadata

```bash
curl http://169.254.169.254/latest/user-data
curl http://169.254.169.254/latest/meta-data
```

## Exam for EC2

- When first launch, can't encrypt the root, can setup it later. Additional volume are OK to encrypt when the first time launch
  - can use a third party tool (such as bit locker etc) to encrypt the root volume, or do this when creating AMI's in the AWS console or using the API
- Default all inbound traffic is blocked
- All outbound traffic is allowed
- Termination Protection is turned off by default
- mulitiple security groups are OK
- Changing security group will take effect immediately
- security groups are stateful
  - inbound will auto add a outbound
  - can't block an individual port
- in PVC, network access controll lists is stateless, create a inbound will also need an outbound rule
  - can block an individual port / no deny rules

## EC2 Placement Groups

- clustered placement group
  - in a single AZ
  - low network latency, high network throughput or both
  - only certain instances can be launched in to a Clustered Placement Group
- spread placement group
  - distinct AZ in the same region
  - protecion failure
  - A spread placement group is a group of instances that are each placed on distinct underlying hardware
- partitioned
  - distinct AZ in the same region
  - isolate hardware failure
- Can't merge placement groups or move
  - Can create a AMI and create a new instance into that placement group
- the name of placement group must be unique in your AWS account
- AWS recommand homogenous instances within clustered placement groups

## Exam reviews

- Individual instances are provisioned in AZs
- Can I delete a snapshot of an EBS Volume that is used as the root device of a registered AMI?
  - No
- Which of the following provide the lowest cost EBS options? (Choose 2) // both of them are HDD based
  - Throughput Optimized (st1)
  - Cold (sc1)
- You can add multiple volumes to an EC2 instance and then create your own RAID 5/RAID 10/RAID 0 configurations using those volumes.
  - True
- create an ec2 snapshot
  - aws ec2 create-snapshot
- Standard Reserved Instances can be moved between regions
  - false
- What is the underlying Hypervisor for EC2 ? (Choose 2) (https://aws.amazon.com/ec2/faqs/)
  - Xen
  - Nitro
- To help you manage your Amazon EC2 instances, you can assign your own metadata in the form of ________.
  - Tags
- If an Amazon EBS volume is an additional partition (not the root volume), can I detach it without stopping the instance?
  - Yes, but it will take time
- Which of the following features only relate to Spread Placement Groups?
  - The placement group can only have 7 running instances per Availability Zone
- Will an Amazon EBS root volume persist independently from the life of the terminated EC2 instance to which it was previously attached? In other words, if I terminated an EC2 instance, would that EBS root volume persist?
  - Only if I specify (using either the AWS Console or the CLI) that it should do so.
- In addition to choosing the correct EBS volume type for your specific task, what else can be done to increase the performance of your volume? (Choose 3)
  - Stripe volumes together in a RAID 0 configuration
  - Schedule snapshots of HDD based volumes for periods of low use
  - Ensure that your EC2 instances are types that can be optimized for use with EBS
- Amazon's EBS volumes are ________.
  - block based storage (not object)
- Stop and start a EC2 may cause IP chanage
- Each EC2 instance has both a public and private IP address
