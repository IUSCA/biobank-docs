# Workspaces

A workspace is your own computer in the trusted research environment. The trusted research environment is a controlled computing environment where you work with participant-level data. It limits network access, audits what happens, and reviews everything that leaves it. This protects participants from re-identification and prevents data from being copied out.

## How you get a workspace

1. Build a cohort in the [Cohort Builder](/guide/cohort-builder.md).
2. Request access to its data. See [Request access to a cohort's data](/guide/cohort-builder.md#request-access-to-a-cohort-s-data).
3. The request is reviewed. Track it under **Access Requests** in the sidebar.
4. When the request is approved, its workspace appears under **Workspaces** in the sidebar.

## The Workspaces page

**Workspaces**, in the sidebar, lists a workspace for each approved access request. If you have none, the page says so. Open a workspace to see its cohort, its participant count, the date it was approved, and its collaborators.

The workspace page may show one of these notices first:

- **Workspace Being Provisioned**: the workspace is still being set up. Check back shortly.
- **Agreement Required**: you must accept the Data Transfer & Use Agreement on the page before you can use the workspace. Read it and press **Accept Agreement**.
- **Workspace Archived**: the workspace is no longer active and cannot be used.

## Start, open, and stop a workspace

- Press **Start** to turn the workspace on. It shows **Starting…** while it starts.
- When it is running, press **Open Workspace**. A desktop opens in your browser. Sign in on the workspace sign-in page if asked.
- Press **Stop** when you finish, to save resources.

Right after starting, the page may say the workspace is initializing and **Open Workspace** will be available shortly. **Cost Summary** shows what the workspace has cost so far.

For what is inside a workspace, see [Using a Workspace](/guide/trusted-research-environment-usage.md).

## Bring files into a workspace

Use **Load data into workspace** on the workspace page.

1. Under **New Upload**, choose one archive file: .zip, .tar, .tar.gz, or .tgz.
2. Say what the data is for under **What is this data for?**.
3. Press **Submit for safety review**.

Files are scanned, and a person reviews them. The page says this typically takes 1 to 2 business days. Approved files appear in `/data/input` in your workspace. **Upload history** shows each upload's status.

## Export results from a workspace

Raw participant-level data cannot leave the trusted research environment. You can export results such as aggregated tables, figures, summaries, and code. Use **Export results from workspace** on the workspace page.

1. Under **New export request**, choose the files to export. Only files in `/data/work` can be exported.
2. Say why under **Why are you exporting this?**.
3. Tick both statements. They confirm that the files hold no identifiable information and that you will use them only as the terms allow.
4. Press **Send for export review**.

A snapshot of the files is taken when you submit, so later edits do not change the request. A reviewer checks it before anything leaves. **Export history** shows each request's status. An approved export is available as a download link for 7 days.

## Help

For problems with a workspace, email {{SUPPORT_EMAIL}}.
