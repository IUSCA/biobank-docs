# Phenotype Data Reference for Indiana Biobank

This page summarizes the phenotype data domains currently available in the Indiana Biobank portal.

For vocabulary reference:

- **Labs are LOINC-based**
- **Diagnoses use ICD-based vocabulary mapping**

## At a Glance

The platform currently supports these phenotype domains:

- Demographics and biometrics
- Laboratory results
- Diagnoses
- Medications
- Hospitalizations
- COVID-19 tests
- COVID-19 vaccinations
- Drug screenings
- Non-COVID vaccinations


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
- Weight, height, and BMI are exposed through the `demographic_extended` view rather than as standalone cohort categories.
- BMI is calculated from the latest usable height and weight values.

### Laboratory Results

Laboratory tests indexed by LOINC and stored with both numeric and coded result forms.

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
- Lab extraction and lab search are built around **LOINC** codes.
- The cohort builder uses a lab-specific query flow rather than a long flat field list.
- This is the phenotype domain most tightly integrated with term search and summary visualizations.

### Diagnoses

Encounter-linked diagnoses coded across multiple vocabularies.

**Researcher-facing fields**
- Name / code
- Date

**Stored data elements**
- Diagnosis name
- Diagnosis code
- Code system
- Diagnosis date

**Notes**
- The current configuration uses **ICD-based** diagnosis vocabulary mapping.
- Diagnosis codes can come from ICD-9, ICD-10, and SNOMED-linked terminology in the portal.

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

### COVID-19 Tests

COVID testing records captured as a separate phenotype domain.

**Researcher-facing fields**
- Test date
- Result
- Name

**Stored data elements**
- Test name
- Test date
- Result

### COVID-19 Vaccinations

COVID-specific vaccination records with manufacturer and series metadata.

**Researcher-facing fields**
- Name
- Date
- Manufacturer
- Dose number
- Series doses
- Is booster

**Stored data elements**
- Vaccine name
- Vaccination date
- Manufacturer
- Dose number
- Series dose count
- Booster flag

### Drug Screenings

Drug screening tests and result status.

**Researcher-facing fields**
- Name
- Date
- Result

**Stored data elements**
- Screening name
- Screening date
- Normalized result
- Raw result text

### Non-COVID Vaccinations

Routine immunization history stored separately from COVID vaccination records.

**Researcher-facing fields**
- Name
- Date
- Dose number
- Series doses

**Stored data elements**
- Vaccine name
- Alternate vaccine name
- Vaccination date
- Dose number
- Series dose count
- Additional description fields

