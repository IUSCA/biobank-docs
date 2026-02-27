# Data Browser

The Data Browser lets you explore what clinical and genomic data is available before building a cohort. Use it to discover relevant diagnosis codes, lab tests, medications, or variants, then carry those terms into the Cohort Builder.

[{{WEBSITE_URL}}data_browser]({{WEBSITE_URL}}data_browser)

## Browsing Available Data

The Data Browser is organized into categories:

![Data Browser - Overview](/public/images/screenshots/data-browser-overview.png)

**Clinical data categories:**
- **Diagnoses** — ICD-coded conditions
- **Labs** — laboratory test results
- **Medications** — prescribed drugs
- **Hospitalizations** — inpatient stay records

**Genomic data:**
- **Variants** — genetic variants called across the participant population, with annotation databases (e.g., gnomAD, ClinVar)

Each category shows the number of distinct terms and the number of participants with data in that category.

Click any category to browse its contents.

## Searching Within a Category

Once you've selected a category, use the keyword search to find specific terms:

![Data Browser - Search Diagnosis](/public/images/screenshots/data-browser-dx-search.png)

Results update as you type. This is useful for finding the exact code or terminology used in the dataset before you build a filter in the Cohort Builder.

## Moving to the Cohort Builder

When you find terms you want to use as filters, take note of them and open the [Cohort Builder](/guide/cohort-builder.md). Use the same terms when adding filters — the Cohort Builder uses the same underlying terminology as the Data Browser.
