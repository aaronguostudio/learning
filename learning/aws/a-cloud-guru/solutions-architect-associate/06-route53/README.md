# Route53 and Lab

## Route53

- 53 because the port 53 is for DNS
- Routing Policies
  - Simple Routing
    - return random if multiple IPs
  - Weighted Routing
  - Latency-based Routing
  - Failover Routing
  - Geolocation Routing
  - Geoproximity Routing (Traffic Flow Only)
    - very complex, must use route53 traffic flow
  - Multivalue Answer Routing
    - can have multiple simple record with heath check for each
- Health Checks
  - set for each record
  - if failed, will be removed from route53 until the health check pass again
  - can set SNS notification to alert if a health check is failed

## Lab

- register a domain
- create 3 ec2 in different regions with scripts

```bash
#!/bin/bash
yum update -y
yum install httpd -y
chkconfig httpd on
service httpd start
cd /var/www/html
echo "Hello World" > index.html
```

- IPs
  - Virginia: 54.162.111.113
  - Singapore: 54.255.138.107
  - London: 3.8.166.112

## Exam Tips

- It can take up to 3 days to register a domain
- ELBs don't have pre-defined IPv4 addresses; you resolve them using a DNS name
- Alias Recod vs CNAME
  - alway choose an Alias Record over a CNAME
- Common DNS Types
  - SOA Records
  - NS Records
  - A Records
  - CNames
  - MX Records
  - PTR Records
