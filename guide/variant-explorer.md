# Variant Xplorer

Variant Xplorer searches genetic variants across the participants and counts the participants who carry them. You can save those participants as a genotype-based cohort.

Open it with **Variant Xplorer** in the sidebar, or at [{{WEBSITE_URL}}variantXplorer]({{WEBSITE_URL}}variantXplorer). A genotype-based cohort in the [Cohort Builder](/guide/cohort-builder.md) links here with **Open in Variant Xplorer**.

## Choose a genotype release

Pick a **Genotype Release** first. Each genotype release is one set of sequenced participants with its own annotations. The page shows its **Genome Build**. The button **Annotation versions this release pins** lists the annotation sources the release carries and their versions.

## Search

Type in the search box, which reads "Search by gene, variant, dbSNP ID or genomic region". Each search can be:

- a gene, such as `BRCA2`;
- a variant, as chromosome-position-reference-alternate, such as `13-32355250-T-C`;
- a genomic region, as a chromosome and a range, such as `chr13:32355000-32375000`;
- a dbSNP ID, such as `rs1329223248`.

A single position such as `chr13:32355250` is not accepted. Write it as a range or as a variant. You can enter several values separated by commas, and add more searches with **Add**. **Clear All** starts again.

The examples panel offers ready-made searches. **Search genomic regions by uploading a BED file** searches every region in a BED file, up to the limit the panel shows.

## Filter the variants

Use **Add Filter** under **Variant Filters** to narrow the variants. **Add Group** nests filters, and **Matching** sets whether a group needs **All**, **Any**, or **Excluding all** of its filters.

Each genotype release offers its own annotation sources, so the filter menu can differ between releases. Sources can include allele statistics, dbSNP, ClinVar, Gencode, gnomAD, RefSeq, VEP, CADD, and REVEL. For example:

- **Predicted impact** from VEP: high, moderate, low, or modifier.
- **Clinical significance** from ClinVar: reported assertions such as pathogenic or benign.
- **Population frequency** from gnomAD or allele statistics: rare or common variants.
- **Pathogenicity scores** from CADD or REVEL: likely damaging variants.

::: tip Use "contains" for text annotations
Some annotations hold several values in one field. VEP impact can list one value per transcript, such as `LOW,MODIFIER,MODERATE`. ClinVar can report `Benign/Likely_benign`. The **is** operator needs an exact, case-sensitive match, so it misses these. Use **contains**, which also ignores case.
:::

## Count participants

**Zygosities:** decides which genotypes count. Choose at least one of Ref/Ref, Ref/Alt, Alt/Alt, and Missing. Ref/Alt and Alt/Alt are chosen at first. The page then counts the participants who carry at least one of the filtered variants with a chosen genotype.

Watch the participant count as well as the variant count. A gene search alone can match most participants, because most people carry some common variant in any gene. Filters on clinical significance or on specific variants narrow the participants more.

A search that matches very many variants can make the participant count slow. Add filters to reduce the variant count.

## Results

The results table lists the matching variants and their annotations. **Manage Columns** chooses and orders its columns.

## Save as a cohort

Press **Save As Cohort** to save the counted participants as a genotype-based cohort. It then appears in the [Cohort Builder](/guide/cohort-builder.md), where you can combine it with other cohorts or request access to its data.
