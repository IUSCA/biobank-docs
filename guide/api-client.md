# API Client

`biobank-client` is a command-line tool for the portal's API. It searches your cohorts, lists the data files of an approved cohort, and downloads them.

::: tip Scripted or pipeline use?
To run the client in a container, see the [API Client Container guide](api-client-container.md).
:::

{{TRE_PORTAL_ACCESS_NOTE}}

## What you need

- An access key with the right scopes. Make one on your **Profile** page; see [Access keys](/guide/getting-started.md#access-keys).
- An approved access request for the cohort whose files you want.

A key's scopes decide what it can do:

- `read:cohorts` lets it search cohorts and read a cohort's details.
- `read:cohort_data` lets it list and download a cohort's data files.

## Use it inside a workspace

Inside a workspace, run the client through `tre-biobank`. It reads the API key that the portal's team places in `/data/input/api-key.json`, and it routes the request through the workspace's proxy. Pass it the same operations as `biobank-client`.

```bash
tre-biobank getCohortFiles id=<cohort-id>
```

Listing and downloading a cohort's data files works only from inside a workspace. Raw genetic data never leaves the trusted research environment this way.

## Set it up yourself

The client reads two environment variables:

```bash
export API_BASE_URL={{API_URL}}
export API_CREDENTIALS=<key>:<secret>
```

`API_CREDENTIALS` is the access key's **Key:** and **Secret:**, joined by a colon. Keep them out of shared files and version control.

## Common operations

List the data files of an approved cohort. The list comes in pages, so use `limit` and `offset` for a long one.

```bash
biobank-client getCohortFiles id=<cohort-id> limit=50 offset=0
```

Download one file by its ID:

```bash
biobank-client downloadCohortFile file_id=<file-id>
```

Raw sequencing data is staged when you ask for it. If a download answers with status 202, the file is being prepared. Wait a while and try again.

## All operations

| Operation | What it does |
| --- | --- |
| `searchCohorts` | Search cohorts you can see |
| `getCohortById` | Get one cohort's details |
| `getCohortFilesSummary` | Summarize a cohort's data files |
| `getCohortFiles` | List a cohort's data files |
| `downloadCohortFile` | Download one data file |
| `health` | Check that the API answers |

The client also lists `getCohortParticipantIds`. The portal refuses it for researchers' access keys.

Run `biobank-client -h` for the full usage, and `biobank-client <operation> -h` for one operation's parameters.

## The API reference

The full API reference is at [{{WEBSITE_URL}}api/doc/]({{WEBSITE_URL}}api/doc/). **API Documentation**, on your **Profile** page, opens it too.
