# CLI

- ssh to the server
- aws config
- aws s3 mb s3://bucketname

## Using role

- create a new role for ec2
- attach the role to the ec2

## Exam tips

- roles are more secure
- roles are universal

## Boot Strap Scripts

- add script for boostrap

```bash
#!/bin/bash
yum update -y
yum install httpd -y
service httpd start
chkconfig httpd on
cd /var/www/html
echo "Hello World" > index.html
aws s3 mb s3://jlkoihwen338snbnvo932
aws s3 cp index.html s3://jlkoihwen338snbnvo932
```

- curl http://169.254.169.254/latest/user-data    // get bootstrap script
- curl http://169.254.169.254/latest/meta-data/   // meta data
