# API Client Container

The `biobank-api-client` Docker image packages the [{{PLATFORM_NAME}} CLI](api-client.md) into a container for running automated, reproducible data-access workflows within the Trusted Research Environment.

::: tip Interactive use
For ad-hoc or interactive use inside the TRE, the `biobank-client` CLI is already installed and ready to use — see the [API Client guide](api-client.md). The container is intended for scripted or pipeline workflows where a reproducible, self-contained environment is preferred.
:::

::: warning Requires TRE access
All API calls must be made from within the Trusted Research Environment. The API server only accepts requests from within the TRE network — requests from outside will fail regardless of the operation.
:::

## When to Use the Container

The container is useful when you want to:

- Run a pipeline script that fetches cohort files as part of a larger workflow
- Verify connectivity and enumerate available files before a full analysis run
- Run the client in a reproducible, containerized environment on the TRE without installing dependencies directly on the VM

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on the host machine
- A {{PLATFORM_NAME}} API key/secret pair — generate one from your profile page in the research portal (see [API Client guide](api-client.md#authentication) for screenshots)
- The cohort ID(s) for the data you want to access

## Pulling the Image

The image is hosted in the {{PLATFORM_NAME}} Harbor registry:

```bash
docker pull harbor.sca.iu.edu/biobank/biobank-api-client:latest
```

## Configuration

The container is configured through environment variables:

| Variable | Required | Description |
|---|---|---|
| `API_BASE_URL` | Yes | Base URL of the {{PLATFORM_NAME}} API (e.g. `{{API_URL}}`) |
| `API_CREDENTIALS` | Yes | Basic auth credentials in `apiKey:apiSecret` format |

The recommended approach is to store these in a `.env` file and keep it out of version control:

```
API_BASE_URL={{API_URL}}
API_CREDENTIALS=apiKey:apiSecret
```

## Default Entrypoint: List Cohort Files

When run with a cohort ID argument, the container fetches a complete list of data files available for that cohort (paginating automatically) and writes the result to `/data/out/available_files.txt`.

This is a quick way to verify connectivity and see what files are available before running a full workflow.

Mount a local directory to `/data/out` to receive the output:

```bash
docker run --rm \
  --env-file .env \
  -v /local/path/to/output:/data/out \
  harbor.sca.iu.edu/biobank/biobank-api-client:latest \
  <cohort-id>
```

Or pass environment variables inline:

```bash
docker run --rm \
  -e API_BASE_URL={{API_URL}} \
  -e API_CREDENTIALS=apiKey:apiSecret \
  -v /local/path/to/output:/data/out \
  harbor.sca.iu.edu/biobank/biobank-api-client:latest \
  <cohort-id>
```

By default the output is formatted as ASCII tables. To write JSON instead, pass `-ac json` before the cohort ID:

```bash
docker run --rm \
  --env-file .env \
  -v /local/path/to/output:/data/out \
  harbor.sca.iu.edu/biobank/biobank-api-client:latest \
  -ac json <cohort-id>
```

Example console output:

```
=== Biobank file listing ===
Cohort ID : 42
Output    : /data/out/available_files.txt

Fetching files: offset=0, limit=100 ...
  Got 37 file(s) on this page.

Total files found: 37
Results written to /data/out/available_files.txt
```

## Interactive Shell

To explore the CLI interactively or run ad-hoc commands, start the container without the default entrypoint:

```bash
docker run -it --rm \
  --env-file .env \
  --entrypoint zsh \
  harbor.sca.iu.edu/biobank/biobank-api-client:latest
```

Once inside, `API_BASE_URL` and `API_CREDENTIALS` are available as environment variables, and `biobank-client` is on the `PATH`. For available operations and usage examples, see the [API Client guide](api-client.md).

## Source Code

The `Dockerfile`, entrypoint script, and client source are available on GitHub:

[{{GITHUB_URL}}/biobank-client]({{GITHUB_URL}}/biobank-client)

## Further Reading

- [API Client (interactive CLI)](api-client.md) — usage inside the Trusted Research Environment
- [Trusted Research Environment Setup](trusted-research-environment-setup.md) — requesting access to participant-level data
- [REST API Reference]({{WEBSITE_URL}}api/doc/) — underlying API endpoints
