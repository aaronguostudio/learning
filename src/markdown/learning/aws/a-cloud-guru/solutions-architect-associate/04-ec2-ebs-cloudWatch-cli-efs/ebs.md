# EBS

- Types
  - General Purpose (SSD)
    - most work loads
    - api: gp2
    - 1GB - 16TB
    - IOPS 16000
  - Provisioned IOPS (SSD)
    - databases, very fast
    - api: io1
    - 4GB - 16TB
    - IOPS 64000
  - Throughout Optimised Hard Disk Drive (HDD)
    - Big data and data warehouses
    - 500GB - 16TB
    - IOPS 500
  - Cold Hard Disk Drive
    - File Servers
    - 500GB - 16TB
    - IOPS 250, 500 default
  - Magnetic
    - Workloads where data is infrequently accessed
    - 8GB - 1TB, 8 default
- AMI
  - In this scenario, the EC2 instances you are currently using depends on a pre-built AMI. This AMI is not accessible to another region hence,  you have to copy it to the us-west-2 region to properly establish your disaster recovery instance.

## Exam tips

- EBS should be in the same region as EC2
- move to another zone
  - take snapshot
  - in the snap page
  - create an image
  - choose HVM virtualization
    - paravitual (PV)
    - HVM supports more EC2 types (recommanded)
  - click AMIs
  - Copy AMIs
    - can copy one image to another region
- default additional volumnes will not be removed
  - it seems that this is configurable
- snapshots are on S3
- snapshots are point to time copies of volumes
- snapshots are incremental

## Encrypted Root Volume

- before, it's not possible encrypt root volumne on creation, now it could
- if not encrypt when create, can encrypt it after creation
  - create a snapshot for the volume
  - create a copy of the new snapshot and encrpte it
  - create an image of the new copied snapshot
  - then launch another ec2 using the new encrypted image
- Can share snapshots only there are unencrypted
- snapshots can be public or share to other accounts
