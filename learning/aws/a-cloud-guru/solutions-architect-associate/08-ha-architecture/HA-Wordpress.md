# HA Wordpress

## Single node

- Create 2 S3
  - learn-acloud-guru-wordpress
  - learn-acloud-guru-wordpress-media
- Create 1 CloudFront for learn-acloud-guru-wordpress-media
- Create 2 Security Groups
  - one for HTTP
  - one for MySQL/Aurora
    - this should have two rules
      - one is for 3306 to the IP
      - one is for 3306 for the security group id of the first one
- Create MySQL database
  - acloudguru as username and password
  - create a standby instance
  - no public access
  - acloudguru as database name
- Create a new role for EC2 to S3
- Create a EC2 instance
  - use the new role
  - bootstrap script
  - Select the HTTP security group

```bash
#!/bin/bash
yum update -y
yum install httpd php php-mysql -y
cd /var/www/html
echo "healthy" > healthy.html
wget https://wordpress.org/wordpress-5.1.1.tar.gz
tar -xzf wordpress-5.1.1.tar.gz
cp -r wordpress/* /var/www/html/
rm -rf wordpress
rm -rf wordpress-5.1.1.tar.gz
chmod -R 755 wp-content
chown -R apache:apache wp-content
wget https://s3.amazonaws.com/bucketforwordpresslab-donotdelete/htaccess.txt
mv htaccess.txt .htaccess
chkconfig httpd on
service httpd start
```

- Setting Up EC2
  - Finish the installation for Wordpress
    - post a post and upload images
  - copy images and websites to two s3
    - aws s3 cp --recursive fromDir toDir
- Edit .htaccess
  - nano .htaccess
  - rewrite url, redirect all images to the cloudfront

```sh
Options +FollowSymlinks
RewriteEngine on
rewriterule ^wp-content/uploads/(.*)$ http://d2jmrva8tfzxcq.cloudfront.net/$1 [r=301,nc]

# BEGIN WordPress

# END WordPress
```

- Sync S3
  - aws s3 sync from to
- Update httpd rewrite
  - AllowOverride Al
- My image rewrite is not working
- Create a load balancer
- Point router53 domain to the load balancer
  - using alias
- Add the EC2 to the load balancer
  - this action needs to select register in the dialog first

## Multi-node

- we will build a read node and a write node
  - read is facing to the users
  - write is using by the internal stuff
    - write will sync to s3
    - s3 will sync to the read node
- cd /etc
- nano crontab

```bash
*/1 * *	* * root aws s3	sync --delete s3://learn-acloud-guru-wordpress /var/www/html
```

- service crond restart (restart the cronjob)
  - this cron job will sync s3 to the local
- create an image
  - create an image will reboot ec2 instance
- update the crontab
  - sync website to s3
  - sync website images to s3 media bucket
- create auto scaling groups
  - new lauch configuration
    - select AMI image
    - IAM role to write S3
    - add script
    - enable Receive traffic from one or more load balancers
      - select the target group

```bash
#!/bin/bash
yum update -y
aws s3 sync --delete s3://YOUR_S3_BUCKET_NAME /var/www/html
```

- go to target group and take the writer node off
- now if I terminate an instance, I should be able to see the auto scaling works
- Reboot RDS to see the failover of the RDS
  - the failover usually will take 90s

## CloudFormation

- could find templates from this [AWS Quick Starts](https://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&quickstart-all.sort-order=desc)
- CloudFormation is a way of completely scripting your cloud environment
- Quick Start is a bunch of CloudFormation templates

## Elastic Beanstalk

- Elastic Beanstalk is in AWS Compute group
- automatically handles the details of capacity provisioning, load balancing, scaling and application health monitoring

## Summary

- 3 differet types of load balancers
  - application
  - network
  - classic
- 504 means the gateway timeout
  - means the app is not responding
- X-Forwarded-For for end user's IP
- sticky sessions
  - stick the user to one server
  - if this make load balancer not working, one solution is disable sticky sessions
- cross zone load balancing enables you to load balance across multiple availability zones
- path pattern for routers

## Exam reviews

- In discussions about Cloud services the words 'Availability', 'Durability', 'Reliability' and 'Resiliency' are often used. Which term is used to refer to the likelihood that a resource will work as designed?
  - Reliability
- A product manager walks into your office and advises that the simple single node MySQL RDS instance that has been used for a pilot needs to be upgraded for production. She also advises that they may need to alter the size of the instance once they see how many people use the system during peak periods. The key concern is that there can not be any outages of more than a few seconds during the go-live period. Which of the following might you recommend, (Choose 2)
  - Convert the RDS instance to a multi-AZ implementation.
  - Consider replacing it with Aurora before go live.
    - Multi-AZ implementations will increase availability because in the event of a instance outage one of the instances in another AZs will pick up the load with minimal delay. Aurora provided the same capability with potentially higher availability and faster response.
    - Read-replicas can help you with high read loads, but are not intended to be a solution to system outages.
- In S3 the durability of my files is ________.
  - 99.999999999 percent
- Placement Groups can either be of the type 'Cluster', 'Spread', or 'Partition'. Choose options from below which are only specific to Spread Placement Groups.
  - A spread placement group is a group of instances that are each placed on distinct underlying hardware
  - can only have 7 running instancers per AZ
- You work for a major news network in Europe. They have just released a new mobile app that allows users to post their photos of newsworthy events in real-time. Your organization expects this app to grow very quickly, essentially doubling its user base each month. The app uses S3 to store the images, and you are expecting sudden and sizable increases in traffic to S3 when a major news event takes place (as users will be uploading large amounts of content.) You need to keep your storage costs to a minimum, and you are happy to temporally lose access to up to 0.1% of uploads per year. With these factors in mind, which storage media should you use to keep costs as low as possible?
  - S3 Standard-IA
    - not S3 - OneZone-Infrequent Access
      - The key drivers here are availability and cost, so an awareness of cost is necessary to answer this. Full S3 is quite expensive at around $0.023 per GB for the lowest band. S3 standard IA is $0.0125 per GB, S3 OneZone-IA is $0.01 per GB, and Legacy S3-RRS is around $0.024 per GB for the lowest band. Of the offered solutions S3 One Zone-IA is the cheapest suitable option. Glacier cannot be considered as it is not intended for direct access, however it comes in at around $0.004 per GB. S3 has an availability of 99.99%, S3-IA has an availability of 99.9% while S3-1Zone-IA only has 99.5%
- Can I "force" a failover for any RDS instance that has Multi-AZ configured?
  - Yes
- When you have deployed an RDS database into multiple availability zones, can you use the secondary database as an independent read node?
  - No
- Following an unplanned outage, you have been called into a planning meeting. You are asked what can be done to reduce the risk of a single bad deployment taking the whole site down. (The selected options do not necessarily need to work together) (Choose 4)
  - Use Route 53 with health checks to distribute load across multiple ELBs.
  - Use multiple autoscaling groups and boundaries for a staged or 'canary' deployment process.
  - Use several Target groups or auto scaling groups under each Load Balancers.
  - Use a Classic Load Balancer to spread the load over several availability zones.
