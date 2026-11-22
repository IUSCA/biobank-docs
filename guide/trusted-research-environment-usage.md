# Using a Workspace

This page describes what is inside a workspace. To get a workspace and open it, see [Workspaces](/guide/trusted-research-environment-setup.md).

{{TRE_PORTAL_ACCESS_NOTE}}

## The desktop

**Open Workspace** opens a Linux desktop in your browser. The desktop has launchers for **JupyterLab** and **RStudio**. A terminal opens from the applications menu.

An idle workspace stops itself after about two hours. A warning appears on the desktop before it stops. Your files in `/data/work` are kept when the workspace stops.

## Where your data is

- `/data/input` holds the approved data for your project, and files approved through **Load data into workspace**. It is read-only.
- `/data/work` is your working folder. It keeps its contents when the workspace stops or is rebuilt. Terminals, JupyterLab, and RStudio start there.

Save your work in `/data/work`. Files saved anywhere else, such as your home folder, can be lost when the workspace is rebuilt. Only files in `/data/work` can be sent for export.

Genotype data delivered through the portal is aligned to GRCh38. Reference files built on GRCh37 or hg19 need a liftover step before you compare them.

## No internet access

Workspaces have no general internet access. This is a data governance requirement, not a setting.

- A workflow step that reaches an outside service will fail. Examples are an online imputation server, a package installer that downloads from the internet, and a reference database download.
- Use local tools and reference data in the workspace instead.
- If your analysis depends on an outside service or on software that is not installed, email {{SUPPORT_EMAIL}} before you start. New tools are added to the workspace image on request.

## Installed tools

These tools are part of the workspace image definition.

**General**

- R with RStudio Desktop, including Bioconductor.
- Python through a system-wide Miniconda, with JupyterLab and an R kernel.
- Python libraries: numpy, pandas, scipy, scikit-learn, statsmodels, matplotlib, seaborn, biopython, pysam, and cyvcf2.
- Firefox, LibreOffice Calc and Writer, and a PDF viewer.

**Genetics and genomics**

- PLINK 1.9 and PLINK 2.0, for association analysis.
- REGENIE, for whole-genome regression in large GWAS.
- GCTA, for genetic relationship matrices, heritability, and conditional analysis.
- PRSice-2, for polygenic risk scores.
- Nextflow with the pgsc_calc pipeline, cached for offline use.
- SHAPEIT4 and IMPUTE2, for local phasing and imputation.
- EIGENSOFT, including smartpca and convertf, for principal components.
- GATK, for variant discovery.
- IGV, started from a terminal with `igv`.
- samtools, bcftools, tabix, vcftools, and bedtools.

**R packages**

- Data and plots: data.table, dplyr, tidyverse, ggplot2, ggrepel, and DT.
- Statistics: survival, survminer, lme4, lmerTest, glmnet, logistf, lmtest, tableone, gtsummary, and meta.
- Genomics: DESeq2, biomaRt, SNPRelate, GWASTools, SKAT, and HIBAG.
- Offline annotation and plots: TxDb.Hsapiens.UCSC.hg38.knownGene, org.Hs.eg.db, Gviz, and karyoploteR.
- PheWAS and qqman.

ANNOVAR needs individual registration, so it is not installed. Email {{SUPPORT_EMAIL}} if you need it staged for your workspace.

## Getting data from the portal's API

`tre-biobank` runs the portal's [API client](/guide/api-client.md) inside a workspace. It reads the API key that the portal's team places in `/data/input/api-key.json`. Without that file it stops and says so.
