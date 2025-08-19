# Cohort Builder

The Cohort Builder is a tool that allows you to create and manage groups of participants using a variety of filters and clinical/genomic criteria.

[{{WEBSITE_URL}}cohorts]({{WEBSITE_URL}}cohorts)

## Building a Cohort

### Step-by-Step Guide

- Open the Cohort Builder
- Choose "New Phenotype Cohort"
- Select Filters (e.g., age range, diagnosis codes, genotype presence)
- For boolean logic (AND/OR/NOT):
   - Use the "Matching" drop-down to use "All" (equal to AND), "Any" (equal to OR), or "Excluding All" (equal to NOT)
   ![Boolean logic screenshot](/public/images/screenshots/cohort-builder-or.jpg)
- Preview results
- Save and name your cohort

### Combining Cohorts

Use combinational logic to intersect, union, or exclude cohort groups:

- **Intersection (AND)**: Find participants who are in both cohort A AND cohort B
- **Union (OR)**: Find participants who are in either cohort A OR cohort B
- **Exclusion (NOT)**: Find participants who are in cohort A but NOT in cohort B

![Boolean logic screenshot](/public/images/screenshots/cohort-builder-or-alt.jpg)

![Boolean logic screenshot](/public/images/screenshots/cohort-builder-or-alt-modal.jpg)


## Description Requirement

When saving a cohort, you must provide a description. This is a required field that explains your cohort in plain, non-technical language that can be understood by researchers from different disciplines and stakeholders who may not be familiar with the specific clinical or technical terminology used in your filters. This description will be used as part of the governance process.

While the system may auto-generate a description based on your selected criteria, these auto-generated descriptions can sometimes be inaccurate or incomplete. We strongly encourage you to:

- Review the auto-generated description carefully
- Edit and refine the description to ensure it accurately reflects your cohort
- Use clear, accessible language that explains what population your cohort represents
- Include relevant context about why this particular combination of criteria defines your target population

A well-written description helps other researchers understand and review your request.

## Requesting Data Access

After creating a cohort in the {{PLATFORM_FULL_NAME}}, researchers have the option to save and lock the cohort. Locking a cohort preserves its exact composition at a specific point in time and ensures that no further modifications—such as adding or removing participants—can be made. If changes are needed later, the locked cohort must first be duplicated to create a new, editable version.

Once a cohort is locked, researchers may submit a formal request to access participant-level clinical, phenotype, and genomic data for that cohort. Once approved, access to these sensitive data will be granted within a secure enclave, where analyses can be conducted in compliance with data governance and privacy protections.

![Request access step 1](/public/images/screenshots/cohort-builder-request-access-1.png)
![Request access step 2](/public/images/screenshots/cohort-builder-request-access-2.png)

### Tracking Request Progress

After submitting a data access request, you can monitor its status directly within the {{PLATFORM_FULL_NAME}}. The request tracker provides real-time updates on your application's progress through the review and approval process.

The tracker displays:
- Current status of your request (e.g., Submitted, Under Review, Approved, Denied)
- Review timeline and estimated completion dates
- Any required actions or additional documentation needed
- Communication history with the review committee

![tracking access requests](/public/images/screenshots/access-requests-tracking.png)

#### Email Notifications

You will receive email notifications throughout the progress of your request, keeping you informed of status changes and important updates without needing to constantly check the portal. These automated notifications ensure you're promptly aware of any developments in your application.

#### Data Access Agreement Process

As part of the approval process, a representative from IHIE (Indiana Health Information Exchange) will reach out to you directly via email to execute a Data Access Agreement. This agreement establishes the legal framework and compliance requirements for accessing and using the requested biobank data. The IHIE representative will guide you through the agreement process and answer any questions about data use terms and conditions.

This transparency allows researchers to stay informed about their request status and plan their research activities accordingly.

## Secure Enclave Access

Using a [secure enclave](./secure-enclave-access.md) is necessary when working with deidentified {{PLATFORM_FULL_NAME}} participant clinical data or raw genomic sequencing information. A secure enclave provides a controlled environment that enforces strict data access, auditing, and computational restrictions, ensuring compliance with regulatory and ethical standards while minimizing the risk of unauthorized data exposure or misuse.

