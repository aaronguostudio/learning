# Resources
- https://www.youtube.com/watch?v=D6qB7MEFOe0

# S3 + CloudFront + HTTPS
- CloudFront
  - Alternate Domain Names (CHAMEs): domain
  - Custom SSL Certificate: select from dropdown
  - Redirect HTTP to HTTPS
  - Error Page: Create a 404 error response by index.html ( not sure if it's necessay )
- AWS Certificate Manager
  - Request a certificate
- Route53
    - A: forward to S3 static address
    - C: put the generated id from AWS Certificate Manager
    - // If using 3rd party domain server, put the values into name servers
- S3
  - Create S3 bucket to host the website