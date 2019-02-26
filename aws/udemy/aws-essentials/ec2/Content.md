# Some tips
- Launching new EC2 instance, I can restrict the IP from security group

# ssh to ec2
- ssh ec2-user@thepublicip -i thekey

# Exam points
- On an EBS-backed instance, the default action is for the root EBS volume to be deleted when the instance is terminated.
- EBS Root Volumes of your DEFAULT AMI's cannot be encrypted. You can als ouse a third party tool (such as bit locker etc) to encrypt the root volumne, or this can be done when creating AMI's in the AWS console or using the API

- Start from Section 5 - 30 Security Groups Basics