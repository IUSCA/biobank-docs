# API Client Container

The `biobank-api-client` container image packages the [API client](api-client.md) for scripted and pipeline workflows. It gives a self-contained, repeatable environment with `biobank-client` already installed.

::: tip Interactive use
Inside a workspace, `tre-biobank` already runs the client for you. See the [API Client guide](api-client.md).
:::

## Where it works

The image calls the same API as the client, with the same rules.

- Searching cohorts and reading a cohort's details work from anywhere, with an access key that has `read:cohorts`.
- Listing and downloading a cohort's data files work only from inside a workspace, with a key that has `read:cohort_data`.

Docker is not installed on the workspace desktop. To run a container inside the trusted research environment, email {{SUPPORT_EMAIL}} first.

## What you need

- Docker, where you run the container.
- An access key and its secret. Make one on your **Profile** page; see [Access keys](/guide/getting-started.md#access-keys).
- The ID of the cohort you want.

## Get the image

```bash
docker pull harbor.sca.iu.edu/biobank/biobank-api-client:latest
```

## Configure it

The container reads these environment variables:

| Variable | Needed | What it holds |
|---|---|---|
| `API_BASE_URL` | Always | The portal's API, `{{API_URL}}` |
| `API_CREDENTIALS` | Always | The access key and secret, as key:secret |
| `COHORT_ID` | For the file listing | The cohort whose files to list |

Keep them in a `.env` file outside version control:

```
API_BASE_URL={{API_URL}}
API_CREDENTIALS=<key>:<secret>
COHORT_ID=<cohort-id>
```

## List a cohort's files

By default the container lists every data file of the cohort in `COHORT_ID`, page by page. It writes the list as JSON to `/data/out/available_files.txt`. Mount a folder there to keep the result:

```bash
docker run --rm \
  --env-file .env \
  -v /path/to/output:/data/out \
  harbor.sca.iu.edu/biobank/biobank-api-client:latest
```

The console shows each page it fetched, the total number of files, and where it wrote them.

## Run your own commands

Start a shell in the container in place of the file listing:

```bash
docker run -it --rm \
  --env-file .env \
  --entrypoint zsh \
  harbor.sca.iu.edu/biobank/biobank-api-client:latest
```

`biobank-client` is on the path, and `API_BASE_URL` and `API_CREDENTIALS` are set. See the [API Client guide](api-client.md) for its operations.

## Source code

The Dockerfile, the entrypoint script, and the client are at [github.com/IUSCA/biobank-client](https://github.com/IUSCA/biobank-client).
