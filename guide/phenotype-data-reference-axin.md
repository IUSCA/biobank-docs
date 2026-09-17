# Phenotype Data Reference for AnalytiXIN

This page summarizes the phenotype data domains currently represented in the **AnalytiXIN** portal.

For vocabulary reference:

- **Labs are LOINC-based**
- **Diagnoses use SNOMED-based vocabulary mapping**

## At a Glance

The platform currently supports these actively used phenotype domains:

- Demographics and biometrics
- Laboratory results
- Diagnoses
- Medications
- Hospitalizations

## Phenotype Domains and Fields

### Demographics and Biometrics

Core participant attributes and enrollment-linked measurements.

**Researcher-facing fields**
- Gender
- Age (current)
- Age at enrollment
- Race
- Ethnicity
- Max encounter date
- Enrollment date
- BMI (latest measurement)
- Weight (latest measurement)
- Height (latest measurement)

**Notes**
- Current age and age at enrollment are derived values.
- Weight, height, and BMI are exposed through the `demographic_extended` view.
- BMI is calculated from height and weight measurements rather than loaded as a raw source field.

### Laboratory Results

Laboratory tests indexed by LOINC and stored with numeric and coded result forms.

**Researcher-facing fields**
- Lab lookup filter by test name or LOINC code

**Stored data elements**
- LOINC code
- LOINC name
- Lab name
- Lab date
- Result type
- Numeric result
- Coded result
- Unit

**Notes**
- User-facing lab name is normalized from `loinc_name`.
- Lab extraction and lab search are built around **LOINC** codes, not SNOMED.
- The cohort builder uses a lab-specific query flow rather than exposing every lab column directly as a flat set of filters.

### Diagnoses

Encounter-linked diagnoses coded across clinical vocabularies.

**Researcher-facing fields**
- Name / code
- Date

**Stored data elements**
- Diagnosis name
- Diagnosis code
- Code system
- Diagnosis date

**Notes**
- The platform configuration uses **SNOMED-based** diagnosis vocabulary mapping.
- The diagnosis workflow supports coded diagnosis lookup.

### Medications

Medication exposure and prescription detail fields.

**Researcher-facing fields**
- Name
- Category
- Start date
- Dispense quantity
- Dispense quantity unit
- Number of refills
- Strength dose
- Strength dose unit

**Stored data elements**
- Drug name
- Drug category
- Prescription start date
- Dispense quantity
- Dispense quantity unit
- Number of refills
- Strength dose
- Strength dose unit

### Hospitalizations

Inpatient encounter records and admission diagnosis information.

**Researcher-facing fields**
- Admit date
- Discharge date
- Diagnosis

**Stored data elements**
- Encounter ID
- Admit date
- Discharge date
- Diagnosis code
- Diagnosis code system



