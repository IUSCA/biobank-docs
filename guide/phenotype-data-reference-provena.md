# Phenotype Data Reference

This page lists the clinical data you can search in the {{PLATFORM_NAME}} Cohort Builder. It also explains what the portal shows you about the participants who match.

The data is de-identified electronic health record data in the OMOP common data model. It reaches the portal in analysis releases. An analysis release is a fixed package of data released for analysis, and it never changes once published. The Cohort Builder reads the analysis release the portal currently offers. A saved cohort keeps the analysis release it was built against.

## What you see when you search

The Cohort Builder shows counts and summaries, never individual records.

- **Participant counts.** A count from 1 to 9 is shown as "fewer than 10". This applies to cohort sizes, to the bars and bins of charts, and to the counts beside search results. A chart of a cohort smaller than 10 is not drawn.
- **Distributions.** Each filter shows how its values are spread across the analysis release, as a histogram, a bar chart, a timeline, or a table of the most common values.
- **Cohort summaries.** A saved cohort shows its demographic breakdown and a county map of where its participants live. The map uses estimated counts, and a county below 10 is shown as "fewer than 10 estimated".

Participant-level data is available only in the Trusted Research Environment, after an approved data access request. See [Trusted Research Environment Access](trusted-research-environment-setup.md).

## How de-identification affects the data

Two de-identification steps change what some values mean.

- **Dates are shifted.** Every date in the analysis release is moved away from the real calendar date. Filter on the time between a participant's records, or on age, rather than on calendar dates.
- **Old ages are capped.** Ages above 89 are reported as 89 or older.

## Demographics

Core participant characteristics. The builder groups them as follows.

**Identity**
- Gender
- Age (current)
- Birth year
- Race
- Ethnicity

**Encounters and follow-up**
- Enrollment date
- Most recent encounter date
- Age at enrollment
- Age at last encounter
- Care span, in years
- Observation window, in years
- Active years
- Encounter count
- Encounters per year
- Outpatient visits
- Emergency department visits
- Inpatient visits
- Emergency department visits as a percentage of all visits

**Vital status**
- Deceased
- Death date
- Age at death

**Health behavior**
- Smoking status

**Biometrics**
- BMI, latest measurement
- Weight, latest measurement
- Height, latest measurement

Dates and counts describe this analysis release only. "Deceased: No" means no death is recorded in it, not that the person is known to be alive. Smoking status is the most recent status on record, not an ever-or-never flag.

## Diagnoses

Diagnoses recorded during care, coded in ICD-9-CM, ICD-10-CM, and SNOMED CT. You can search two ways.

- **Condition.** This finds the condition the record was classified as, however it was coded. It spans both the ICD-9 and the ICD-10 eras.
- **Diagnosis code.** This finds the code written on the record. A code belongs to one coding era.

You can choose a single code or a whole branch of the code hierarchy. Within a diagnosis filter you can also ask when the diagnosis was recorded and how often.

## Laboratory Results

Laboratory tests, identified by LOINC code. You choose a test, then which of its values to ask about:

- any single result
- the most recent result
- the highest result
- the lowest result
- the mean result

For a single result you can also require that it was flagged abnormal, drawn during an inpatient stay, or taken within an age or date range. You can require a minimum number of results.

## Medications

Drugs a participant took, identified by RxNorm. Search by active ingredient, by brand name, or by drug class. Choosing a class takes every ingredient in it.

Time on a drug is counted in the days it was recorded. Quantity, strength, and refills describe a prescription rather than a person, so they are not offered.

## Procedures

Procedures done during care, such as surgery, imaging, endoscopy, and screening. CPT, ICD-10-PCS, HCPCS, ICD-9 procedure codes, and SNOMED CT are searched together. Choose a single procedure, or a group to take everything under it.

Care setting means the procedure happened during an inpatient stay. It does not tie the procedure to one particular admission.

## Clinical Observations

Facts noted during care that are not a diagnosis, a lab, a drug, or a procedure. Examples are tobacco use, long-term medication use, a device or graft in place, a functional assessment, and a screening score. Some observations are a number, some are an answer to a question, and some are just a fact about the participant.

Each filter covers one observation. To use two, add a filter for each and combine them. Search for what was recorded rather than for the answer, because an answer such as "Yes" belongs to many different questions.

## Hospitalizations

Inpatient stays. A hospitalization is one admission, even when the record holds several rows for it.

**The stay**
- Admit date
- Discharge date
- Diagnosis, meaning any condition recorded during the stay

**History**
- Number of hospitalizations
- Total inpatient days
- Longest stay, in days
- Days to readmission
- Died in hospital

A diagnosis recorded during a stay is not necessarily the reason for admission.

## Only what is in the analysis release

Search lists only codes that at least one participant in the analysis release has. A code that returns nothing may simply be one nobody in it has.

COVID-19 tests, COVID-19 vaccinations, other vaccinations, and drug screenings are not yet searchable in this portal.
