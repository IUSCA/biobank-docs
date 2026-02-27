# Cohort Builder

The Cohort Builder lets you define groups of participants using clinical and genomic criteria, then request access to their data for analysis in the Trusted Research Environment.

[{{WEBSITE_URL}}cohorts]({{WEBSITE_URL}}cohorts)

## Cohort Types

**Phenotype Cohorts** are built from clinical data: diagnoses, medications, lab results, demographics, and hospitalizations.

**Genotype Cohorts** are built from genetic variant data: specific variants, gene regions, or variant annotations.

**Combination Cohorts** are built by combining two or more existing cohorts using set operations — useful when you want to intersect clinical and genomic criteria, or compare populations.

## Building a Phenotype Cohort

1. Open the Cohort Builder and choose **New Phenotype Cohort**
2. Add filters — for example, an age range, a diagnosis code, or a lab value
3. Set the matching logic for your filters:
   - **All** (AND) — participant must match every filter
   - **Any** (OR) — participant must match at least one filter
   - **Excluding All** (NOT) — participant must match none of the filters

   ![Boolean logic screenshot](/public/images/screenshots/cohort-builder-or.jpg)

4. Review the participant count as you refine your criteria
5. When satisfied, save and name your cohort

## Building a Genotype Cohort

1. Open the Cohort Builder and choose **New Genotype Cohort**
2. Use the embedded Variant Xplorer to search for variants by gene, genomic coordinates, or rsID
3. Apply filters (allele frequency, predicted impact, variant type, etc.) to narrow results
4. Save and name your cohort

## Combining Cohorts

Use a Combination Cohort to apply set operations across two or more existing cohorts:

- **Intersection (AND)** — participants in both cohort A and cohort B
- **Union (OR)** — participants in cohort A or cohort B (or both)
- **Exclusion (NOT)** — participants in cohort A but not cohort B

![Boolean logic screenshot](/public/images/screenshots/cohort-builder-or-alt.jpg)

![Boolean logic screenshot](/public/images/screenshots/cohort-builder-or-alt-modal.jpg)

## Cohort Visibility and Sharing

When you save a cohort, you can control who can see and use it:

- **Private** (default) — only you can access it
- **Public** — visible to all users on the platform; others can submit an access request to use it

You can also share a cohort directly with specific users, giving them access without requiring a formal request.

## Writing a Good Description

When saving a cohort, a description is required. This is used as part of the governance review process, so it should be written in plain language that researchers from different disciplines can understand — not just in terms of the filters you selected.

The system may generate a description automatically, but auto-generated descriptions can be inaccurate or incomplete. Review it carefully and edit as needed to accurately describe the population your cohort represents and why this combination of criteria defines your target group.

## Requesting Data Access

Once you've finalized a cohort, you can request access to participant-level clinical and genomic data for analysis in the Trusted Research Environment.

1. **Lock the cohort** — locking preserves its exact composition and prevents further changes. If you need to make changes later, duplicate the cohort first.
2. **Submit a data access request** from the locked cohort

   ![Request access step 1](/public/images/screenshots/cohort-builder-request-access-1.png)
   ![Request access step 2](/public/images/screenshots/cohort-builder-request-access-2.png)

3. Your request will be reviewed by the data governance committee
4. Upon approval, you will receive credentials and instructions for accessing the Trusted Research Environment

### Tracking Your Request

After submitting, you can monitor your request's status from within the portal:

![tracking access requests](/public/images/screenshots/access-requests-tracking.png)

Status values you may see: Submitted, Under Review, Approved, Denied. You'll also receive email notifications when the status changes.

## Trusted Research Environment

Once your access request is approved, you'll work with your cohort's data inside a Trusted Research Environment. See [Trusted Research Environment Setup](/guide/trusted-research-environment-setup.md) for how to connect.
