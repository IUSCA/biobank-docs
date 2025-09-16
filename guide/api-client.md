# API Client

When retrieving data from the research portal from within the Trusted Research Environment, a CLI utility is available to make interactions with the API easier

Ensure that you have an access key configured within the TRE to make calls easier. If one doesn't exist already, create a `.env` file in your home directory with the following values:

```
export HOST=https://api.axin.sca.iu.edu
export BASIC_AUTH=[key]
```

Keys can be generated via the Research Portal:

![User Profile Page Screenshot](../public/images/screenshots/tre-access-key-via-profile.png)

![Access Key Creation Form](../public/images/screenshots/tre-access-key-via-profile-form.png)

General command


```bash
[Biobank API] $ biobank-client -h

Biobank API command line client (API version 1.0.0)

Usage

  biobank-client [-h|--help] [-V|--version] [--about] [<curl-options>]
           [-ac|--accept <mime-type>] [-ct,--content-type <mime-type>]
           [--host <url>] [--dry-run] [-nc|--no-colors] <operation> [-h|--help]
           [<headers>] [<parameters>] [<body-parameters>]

  - <url> - endpoint of the REST service without basepath
           Can also be specified in HOST environment variable.
  - <curl-options> - any valid cURL options can be passed before <operation>
  - <mime-type> - either full mime-type or one of supported abbreviations:
                   (text, html, md, csv, css, rtf, json, xml, yaml, js, bin,
                    rdf, jpg, png, gif, bmp, tiff)
  - <headers> - HTTP headers can be passed in the form HEADER:VALUE
  - <parameters> - REST operation parameters can be passed in the following
                   forms:
                   * KEY=VALUE - path or query parameters
  - <body-parameters> - simple JSON body content (first level only) can be build
                        using the following arguments:
                        * KEY==VALUE - body parameters which will be added to body
                                      JSON as '{ ..., "KEY": "VALUE", ... }'
                        * KEY:=VALUE - body parameters which will be added to body
                                      JSON as '{ ..., "KEY": VALUE, ... }'

Authentication methods

  - Basic AUTH - add '-u <username>:<password>' before <operation>
                 or export BASIC_AUTH='<username>:<password>'

Operations (grouped by tags)

[cohorts]
  downloadCohortFile       Download a cohort file (AUTH)
  getCohortById            Get a cohort by id (AUTH)
  getCohortFiles           List data files for a cohort (AUTH)
  getCohortFilesSummary    Get a summary of files in a cohort (AUTH)
  getCohortParticipantIds  Get participant IB ids of a cohort (AUTH)
  searchCohorts            Search cohorts (AUTH)

[general]
  health   (AUTH)

Options
  -h,--help				Print this help
  -V,--version				Print API version
  --about				Print the information about service
  --host <url>				Specify the host URL
              				(e.g. 'https://localhost')
  --force				Force command invocation in spite of missing
         				required parameters or wrong content type
  --dry-run				Print out the cURL command without
           				executing it
  -nc,--no-colors			Enforce print without colors, otherwise autodetected
  -ac,--accept <mime-type>		Set the 'Accept' header in the request
  -ct,--content-type <mime-type>	Set the 'Content-type' header in
                                	the request

[Biobank API] $
```

Get a list of files available for an authorized cohort:

```bash
[Biobank API] $ biobank-client getCohortFiles -h

getCohortFiles - List data files for a cohort(AUTH -
    BASIC)

Requires read:cohorts scope

Parameters
  * id [string] (required) (default:
    null) - The cohort id Specify as: id=value
  * sort_by [string] (default: id) - Sort by a
    field Specify as: sort_by=value
  * sort_order [string] (default: asc) - Sort
    order Specify as: sort_order=value
  * limit [integer] (default: null) - Limit
    the number of results Specify as: limit=value
  * offset [integer] (default: null) - Offset
    the results Specify as: offset=value

Responses
  200  The cohort files
  400  Missing request parameters or invalid values
  401  Authentication required
  403  Access denied because of insufficient role or scope
  500  An unexpected error occurred
[Biobank API] $
```

Download data to the TRE

```bash
[Biobank API] $ biobank-client downloadCohortFile -h

downloadCohortFile - Download a cohort file(AUTH -
    BASIC)

Requires read:cohorts scope.  <br/><br/>  To download the file and save it with
the original name, use the following command:  <pre>curl -J -O -u
{key}:{secret} -X GET "{base_url}/cohorts/files/download/{file_id}"</pre>

Parameters
  * file_id [string] (required) (default:
    null) - The cohort file id Specify as: file_id=value

Responses
  200  Download file
       Response headers
       Content-Disposition - Indicates that the response should be
        treated as a file download
  202  File is being staged
  400  Missing request parameters or invalid values
  401  Authentication required
  403  Access denied because of insufficient role or scope
  500  An unexpected error occurred
[Biobank API] $
```

## Direct API Calls

Alternatively, you can access the API directly from within the TRE if that works better for your workflows. Documentation on the underlying calls is available here:

[{{WEBSITE_URL}}api/doc/]({{WEBSITE_URL}}api/doc/)