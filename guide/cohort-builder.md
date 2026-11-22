# Cohort Builder

The Cohort Builder lets you define a group of participants from clinical or genetic criteria. You can then request access to that group's data for analysis in a workspace.

Open it with **Cohort Builder** in the sidebar, or at [{{WEBSITE_URL}}cohorts]({{WEBSITE_URL}}cohorts).

## What you see

The Cohort Builder shows counts and summaries, never individual records. A cohort's size reads as a number of participants out of the total in the analysis release. An analysis release is a fixed package of data released for analysis. A cohort keeps the analysis release it was built against.

Small counts are hidden to protect privacy. A cohort below the minimum size shows its size with a "<" sign, and its data panel says "Not enough participants to show data."

## Create a cohort

On the cohort list, press **Create New Cohort** and choose a kind.

- **Phenotype-based** cohorts use clinical and demographic data, such as diagnoses, lab results, medications, procedures, and hospitalizations.
- **Genotype-based** cohorts use genetic variants.

Inside the builder, the round plus button offers **New Phenotype-based Cohort**, **New Genotype-based Cohort**, and **Search Cohorts**. You can hold up to five cohorts in the builder at once.

### Build a phenotype-based cohort

1. Press **Add Filter** and pick a category and a field. The search box finds filters by name.
2. Set the value you want, such as a diagnosis, a lab result range, or an age.
3. Choose how filters combine under **Matching**: **All**, **Any**, or **Excluding all**.
4. Watch the participant count change as you refine the filters.
5. Press **Save**.

**Undo**, **Redo**, and **Clear All Filters** sit above the filters. The [{{PHENOTYPE_REFERENCE_TITLE}}]({{PHENOTYPE_REFERENCE_PATH}}) lists every category and field.

### Build a genotype-based cohort

1. Choose a **Genotype Release**.
2. Choose the **Zygosities** to include: Ref/Ref, Ref/Alt, Alt/Alt, or Missing.
3. Add **Variant Filters** to narrow the variants.
4. Press **Save**.

**Open in Variant Xplorer** opens the same search in [Variant Xplorer](/guide/variant-explorer.md), which has more search tools.

### Combine cohorts

When the builder holds two or more cohorts, a **Combined Cohort** panel appears. Choose how each pair combines in **Combine Cohorts**:

- **Union**: everyone in either cohort.
- **Intersection**: only people in both cohorts.
- **Difference**: people in the first cohort but not the second.
- **Unique (Symmetric Difference)**: people in one cohort or the other, but not both.

Press **Save** on the panel to keep the combination as its own cohort.

## Save a cohort

**Save** asks for a **Name** and a **Description**. The description must be at least 10 characters. Reviewers read it when you request access, so describe the population in plain words, not as a list of filters.

The portal may suggest a name and description as you build. A suggestion can be wrong or incomplete, so check and edit it before you save.

## Find and manage your cohorts

The cohort list has a search box for a cohort's name, ID, or description. **Filters** narrows the list by **Created by me** or **Shared with me**, visibility, and type. **Show Archived** and **Show Favorited** change what the list includes.

Each cohort's **Actions** menu holds:

- **Access Data**, to request access to its data;
- **Request Letter of Support**, for a grant proposal;
- **Duplicate**, to make an editable copy;
- **Share**, to give named people access;
- **Change Visibility**;
- **Archive** or **Restore from archive**, and **Delete** when allowed.

A cohort locked from an investigation segment also appears in your list. It cannot be edited in the Cohort Builder.

## Visibility and locking

A cohort is **Private**, **Unlisted**, or **Public**.

- **Private** is where every cohort starts. Only you can open and edit it.
- **Unlisted** means anyone with the link can open it, but it does not appear in search. Making a cohort Unlisted locks it, and it can no longer be edited.
- **Public** cohorts appear in search for every user. Only an administrator can make a cohort Public.

You can move an Unlisted cohort back to Private only when no other cohort uses it. To change a locked cohort, use **Duplicate** and edit the copy.

**Share** adds named people under **People with access**. Sharing a private cohort first asks you to make it Unlisted.

## Request access to a cohort's data

1. In the cohort's **Actions** menu, choose **Access Data**.
2. If the cohort is private, the portal asks you to make it Unlisted first. Confirm the statements and press **Change Visibility & Continue**.
3. Press **Request Access**. A request form opens in a new tab. Fill it in and submit it.
4. Track the request under **Access Requests** in the sidebar.

If you close the form before submitting, open the request and press **Continue Access Request**. Collaborators named in the form must have portal accounts that use the same email address.

### Request status

The **Access Requests** page lists your requests with their status. Open a request to see its **Review Progress**.

- **INITIATED**: the request exists, but the form is not yet submitted.
- **PENDING**: the form is submitted and under review.
- **APPROVED** or **APPROVED_WITH_REVISIONS**: the request was approved, and its workspace appears under **Workspaces**.
- **REJECTED**: the request was turned down. You can submit a new one.
- **CANCELED**: the request was withdrawn. You can submit a new one.
- **EXPIRED**: the approval has ended. You can submit a new one.

The portal does not email you when the status changes. Check the **Access Requests** page.

Once a request is approved, open its workspace from **Workspaces** in the sidebar. See [Workspaces](/guide/trusted-research-environment-setup.md).

## Request a letter of support

**Request Letter of Support** asks for a letter that supports a grant proposal using a cohort. It is in the cohort's **Actions** menu and on the builder's toolbar. The form asks for the **Cohort**, the **Grant title**, and the **Supporting mechanism**, such as NIH R01. The request goes to the portal's team, who reply to you.
