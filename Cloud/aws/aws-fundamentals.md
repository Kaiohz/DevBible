# AWS Fundamentals Cheat Sheet

Amazon Web Services (AWS) is a comprehensive cloud platform offering a wide range of services for compute, storage, networking, and more.

---

## 1. **Core Concepts**

### Regions and Availability Zones:
- AWS resources are hosted in regions, subdivided into multiple availability zones (AZs).
- Example:
  - **Region:** `us-east-1`
  - **AZs:** `us-east-1a`, `us-east-1b`

### Shared Responsibility Model:
- AWS manages the cloud infrastructure.
- You manage the security **in** the cloud.

### Elasticity:
- Dynamically scale resources up or down as needed.

---

## 2. **Compute Services**

### Amazon EC2 (Elastic Compute Cloud):
- Virtual servers to run applications.
  ```bash
  aws ec2 run-instances --image-id ami-12345678 --count 1 --instance-type t2.micro
  ```

### AWS Lambda:
- Serverless compute service to run code without managing servers.
  ```python
  def handler(event, context):
      return {"message": "Hello, World!"}
  ```

### Elastic Beanstalk:
- Platform as a Service (PaaS) for deploying and scaling web apps.

---

## 3. **Storage Services**

### Amazon S3 (Simple Storage Service):
- Object storage service for files, backups, and media.
  ```bash
  aws s3 cp file.txt s3://my-bucket/
  ```

### Amazon EBS (Elastic Block Store):
- Persistent storage for EC2 instances.

### Amazon EFS (Elastic File System):
- Scalable file storage for shared access.

---

## 4. **Networking**

### Amazon VPC (Virtual Private Cloud):
- Isolated virtual network for AWS resources.

### Elastic Load Balancer (ELB):
- Distribute traffic across multiple resources.

### Route 53:
- Scalable Domain Name System (DNS) for routing internet traffic.

---

## 5. **Database Services**

### Amazon RDS (Relational Database Service):
- Managed relational databases (e.g., MySQL, PostgreSQL).

### Amazon DynamoDB:
- Fully managed NoSQL database for high-scale applications.

### Amazon Redshift:
- Data warehousing service for big data analytics.

---

## 6. **Identity and Access Management (IAM)**

### IAM Users and Groups:
- Define users and group permissions.

### IAM Roles:
- Assign permissions to AWS services or applications.

### Policies:
- JSON-based rules to grant or deny access.
  ```json
  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Effect": "Allow",
              "Action": "s3:*",
              "Resource": "*"
          }
      ]
  }
  ```

---

## 7. **Monitoring and Management**

### Amazon CloudWatch:
- Monitor and manage logs and metrics.

### AWS CloudTrail:
- Track user activity and API usage for auditing.

### AWS Config:
- Monitor and manage resource configurations.

---

## 8. **Developer Tools**

### AWS CLI:
- Command-line tool to interact with AWS services.
  ```bash
  aws s3 ls
  ```

### AWS SDK:
- Software Development Kits for integrating AWS services into applications (e.g., `boto3` for Python).

### AWS CodePipeline:
- Automate CI/CD pipelines.

---

## 9. **Security and Compliance**

### AWS WAF:
- Protect web applications from common exploits.

### AWS Shield:
- DDoS protection for AWS resources.

### AWS KMS (Key Management Service):
- Manage encryption keys for securing data.

---

## 10. **Cost Management**

### AWS Pricing Models:
- **On-Demand:** Pay for what you use.
- **Reserved Instances:** Commit to usage for a discount.
- **Spot Instances:** Use spare capacity at reduced costs.

### AWS Cost Explorer:
- Analyze and visualize your AWS spending.

### AWS Budgets:
- Set custom budgets and receive alerts.

---

## Resources
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Training and Certification](https://aws.amazon.com/training/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

---
