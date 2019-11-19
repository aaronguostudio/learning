# Elastic File System

- create two ec2 and add scripts

```bash
yum update -y
yum install httpd -y
service httpd start
chkconfig httpd on
yum install -y amazon-efs-utils
```

- add NFS role and the security group
- ssh into the two instances
  - cd /var/www
  - mount -t efs -o tls fs-c45db045:/ /var/www/html (this information can get from the console popup)
- now they are using the save efs

## Exam Tips

- support NFS v4 protocol
- only pay the storage you use (no pre-provisioning required)
- can scale up to the petabytes
- can support thousands of concurrent NFS connections
- data is stored across multiple AZ's within a region
- read after write consistency
