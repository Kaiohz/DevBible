# Terraform Fundamentals Cheat Sheet

Terraform is an open-source Infrastructure as Code (IaC) tool used for building, changing, and versioning infrastructure efficiently.

---

## 1. **Key Concepts**

### Infrastructure as Code (IaC):
- Define infrastructure using declarative configuration files.

### Providers:
- Plugins that interact with APIs of cloud providers (e.g., AWS, Azure, GCP).
  ```hcl
  provider "aws" {
    region = "us-east-1"
  }
  ```

### Resources:
- Core building blocks of infrastructure.
  ```hcl
  resource "aws_instance" "example" {
    ami           = "ami-12345678"
    instance_type = "t2.micro"
  }
  ```

### State:
- Maintains the mapping between configurations and actual infrastructure.
- Stored in `terraform.tfstate`.

---

## 2. **Installation**
- Download Terraform from [Terraform Downloads](https://www.terraform.io/downloads.html).
- Install and verify:
  ```bash
  terraform --version
  ```

---

## 3. **Basic Commands**

### Initialize:
- Prepares directory and downloads provider plugins.
  ```bash
  terraform init
  ```

### Plan:
- Preview the changes that will be applied.
  ```bash
  terraform plan
  ```

### Apply:
- Applies the changes to the infrastructure.
  ```bash
  terraform apply
  ```

### Destroy:
- Deletes all infrastructure defined in the configuration.
  ```bash
  terraform destroy
  ```

---

## 4. **Configuration Files**

### Providers:
- Define which cloud or service providers to use.
  ```hcl
  provider "aws" {
    region = "us-east-1"
  }
  ```

### Resources:
- Define individual components.
  ```hcl
  resource "aws_s3_bucket" "my_bucket" {
    bucket = "my-unique-bucket-name"
    acl    = "private"
  }
  ```

### Variables:
- Use for dynamic input values.
  ```hcl
  variable "region" {
    default = "us-east-1"
  }

  provider "aws" {
    region = var.region
  }
  ```

### Outputs:
- Provide information after apply.
  ```hcl
  output "bucket_name" {
    value = aws_s3_bucket.my_bucket.bucket
  }
  ```

---

## 5. **State Management**

### State File:
- Tracks infrastructure resources.
- By default, stored locally as `terraform.tfstate`.

### Remote State:
- Store state files in remote backends for collaboration.
  ```hcl
  backend "s3" {
    bucket = "my-tf-state"
    key    = "state/terraform.tfstate"
    region = "us-east-1"
  }
  ```

### Commands:
- **Inspect State:**
  ```bash
  terraform show
  ```

- **Remove Resource from State:**
  ```bash
  terraform state rm resource_name
  ```

---

## 6. **Modules**
- Reusable components for managing infrastructure.

### Example Module:
```hcl
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "~> 3.0"

  name = "my-vpc"
  cidr = "10.0.0.0/16"
}
```

---

## 7. **Terraform Best Practices**

### Version Control:
- Store configuration files in a version control system like Git.

### Separate Environments:
- Use workspaces or separate directories for `dev`, `staging`, and `prod` environments.
  ```bash
  terraform workspace new dev
  terraform workspace select dev
  ```

### Use Variables and Outputs:
- Parameterize configurations and provide outputs for other modules.

### Remote State Locking:
- Enable state locking when using remote backends to prevent conflicts.

---

## 8. **Common Terraform Commands**
- **Format Code:**
  ```bash
  terraform fmt
  ```

- **Validate Configuration:**
  ```bash
  terraform validate
  ```

- **Refresh State:**
  ```bash
  terraform refresh
  ```

---

## Resources
- [Terraform Documentation](https://www.terraform.io/docs)
- [HashiCorp Learn](https://learn.hashicorp.com/terraform)
- [Terraform Registry](https://registry.terraform.io/)

---
