# Trusted Research Environment Access

## What is a Trusted Research Environment?

A trusted research environment is a controlled computing environment that enforces strict data access, auditing, and computational restrictions. They are similar to a secure enclave. It ensures compliance with regulatory and ethical standards while minimizing the risk of unauthorized data exposure or misuse.

## Why is it Necessary?

Using a trusted research environment is necessary when working with deidentified {{ORGANIZATION}} participant data to prevent unauthorized data exfiltration and re-identification of participants. 


## Request Process

1. [Create a cohort](cohort-builder.md#building-a-cohort)
2. [Submit a formal request to access participant-level clinical, phenotype, and genomic data for your locked cohort](cohort-builder.md#requesting-data-access)
3. Your request will be reviewed by the data governance committee
4. Upon approval, you will receive credentials and instructions for accessing the trusted research environment
5. You can then conduct analyses within the enclave environment in compliance with data governance and privacy protections

## Accessing the Trusted Research Environment

### System Overview

The trusted research environment is a virtual machine deployed in AWS with limited networking access for security purposes. Access is provided through a ThinLinc remote desktop client that runs in your web browser.

### Receiving Your Credentials

Once your data request has been approved, you will receive:

- A unique username specific to the trusted research environment system
- A secure password (different from your other institutional accounts)

**Important:** Your credentials will be provided through a secure sharing mechanism (such as [IU Secure Share](https://secureshare.iu.edu/)). Do not share these credentials with anyone. Please keep track of them in a secure way.

### Access Instructions

#### Connecting

1. From the research portal, choose your approved project (similar to requesting access)
2. Navigate to the trusted research environment access URL provided in your approval notification in the portal.

![Link for accessing Trusted Research Environment](/public/images/screenshots/tre-access-link.png)

3. You will see the ThinLinc web client login page

![Thin Linc Example](/public/images/screenshots/tre-thin-linc.png)

#### Authentication

1. Enter your unique username in the "Username" field
2. Enter your secure password in the "Password" field
3. Click "Connect" to establish the connection


For details on how to use the Trusted Research Environment, please refer to the [Trusted Research Environment Usage](/guide/trusted-research-environment-usage.md) document.


## Data Export Policies

While raw data cannot be exported from the trusted research environment, researchers can export:

- Analysis results
- Statistical summaries
- Visualizations
- Code and analysis workflows

All exports are subject to review to ensure they do not contain identifiable information. Once you've completed your analysis, contact the data stewards by emailing  {{SUPPORT_EMAIL}} for inquiries about extracting results data from the secure enclave.
