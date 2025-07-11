# Cohort Builder

The Cohort Builder is a powerful tool that allows you to create and manage patient cohorts using a variety of filters and clinical/genomic criteria.

## Building a Cohort

### Step-by-Step Guide

1. Open the Cohort Builder
2. Select Filters (e.g., age range, diagnosis codes, genotype presence)
3. For boolean logic (AND/OR/NOT):
   - Use the "Matching" drop-down to use "All" (equal to AND), "Any" (equal to OR), or "Excluding All" (equal to NOT)
4. Preview results
5. Save and name your cohort

### Combining Cohorts

Use combinational logic to intersect, union, or exclude cohort groups:

- **Intersection (AND)**: Find participants who are in both cohort A AND cohort B
- **Union (OR)**: Find participants who are in either cohort A OR cohort B
- **Exclusion (NOT)**: Find participants who are in cohort A but NOT in cohort B

## Secure Enclave Access

Using a secure enclave is necessary when working with deidentified Indiana Biobank participant clinical data alongside raw genomic sequencing information. A secure enclave provides a controlled environment that enforces strict data access, auditing, and computational restrictions, ensuring compliance with regulatory and ethical standards while minimizing the risk of unauthorized data exposure or misuse.

### How It Works

After creating a cohort in the Indiana Biobank Research Portal, researchers have the option to save and lock the cohort. Locking a cohort preserves its exact composition at a specific point in time and ensures that no further modifications—such as adding or removing participants—can be made. If changes are needed later, the locked cohort must first be duplicated to create a new, editable version.

Once a cohort is locked, researchers may submit a formal request to access participant-level clinical, phenotype, and genomic data for that cohort. Once approved, access to these sensitive data will be granted within a secure enclave, where analyses can be conducted in compliance with data governance and privacy protections.
