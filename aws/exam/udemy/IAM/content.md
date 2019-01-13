# IAM
- IAM (Identity and Access Management)
- Types
  - User, physical person
  - Groups, a group of users
  - Roles, internal usage within AWS resources, machine to machine
- Root account should never be used and shared
- Policies are written in JSON

- One IAM User per Physical person
- One IAM Role per Application
- least privilege principles
- Never use the ROOT account except for initial setup


# IAM Federation
- Big enterprices usually integrate their own repository of users with IAM
- This way, one can login into AWS using their company credentials
- Identity Federation uses the SAML stand ( Active Directory )