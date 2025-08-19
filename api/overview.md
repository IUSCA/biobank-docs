# API Overview

The {{PLATFORM_FULL_NAME}} API is a RESTful API that allows you to programmatically interact with the platform. This overview provides information about the API's general concepts, conventions, and usage.

## Base URL

All API requests should be made to the base URL of the {{PLATFORM_FULL_NAME}}:

```
{{WEBSITE_URL}}/api/v1
```

## API Versioning

The API is versioned to ensure backward compatibility. The current version is `v1`. The version is included in the URL path.

## Request Format

The API accepts requests with the following formats:

### Headers

All requests should include the following headers:

- `Content-Type: application/json` for requests with a body
- `Authorization: Bearer YOUR_API_TOKEN` for authenticated requests

### HTTP Methods

The API uses standard HTTP methods:

- `GET`: Retrieve resources
- `POST`: Create resources
- `PUT`: Update resources (full update)
- `PATCH`: Update resources (partial update)
- `DELETE`: Delete resources

### Request Body

For `POST`, `PUT`, and `PATCH` requests, the request body should be in JSON format.

Example:

```json
{
  "name": "My Research Cohort",
  "description": "Patients with specific genetic variants",
  "filters": {
    "age_min": 18,
    "age_max": 65,
    "diagnosis_codes": ["C50", "C50.9"],
    "variants": ["rs113488022"]
  }
}
```

## Response Format

All API responses are in JSON format. The general structure of a response is:

```json
{
  "data": {
    // Resource data
  },
  "meta": {
    // Metadata about the response
  }
}
```

For collection endpoints, the `data` field contains an array of resources:

```json
{
  "data": [
    {
      // Resource 1
    },
    {
      // Resource 2
    }
  ],
  "meta": {
    "total": 100,
    "page": 1,
    "per_page": 10
  }
}
```

## Pagination

Collection endpoints support pagination through the following query parameters:

- `page`: The page number (default: 1)
- `per_page`: The number of items per page (default: 10, max: 100)

Example:

```
GET /api/v1/cohorts?page=2&per_page=20
```

## Filtering

Many endpoints support filtering through query parameters. The specific filters available depend on the endpoint.

Example:

```
GET /api/v1/variants?gene=BRAF&impact=HIGH
```

## Sorting

Collection endpoints support sorting through the `sort` query parameter. The value should be the field name to sort by, with an optional `-` prefix for descending order.

Example:

```
GET /api/v1/cohorts?sort=-created_at
```

## Error Handling

When an error occurs, the API returns an appropriate HTTP status code and a JSON response with error details:

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The request was invalid",
    "details": [
      "The 'name' field is required"
    ]
  }
}
```

Common HTTP status codes:

- `200 OK`: The request was successful
- `201 Created`: The resource was created successfully
- `400 Bad Request`: The request was invalid
- `401 Unauthorized`: Authentication is required
- `403 Forbidden`: The authenticated user doesn't have permission
- `404 Not Found`: The resource was not found
- `422 Unprocessable Entity`: The request was well-formed but contained semantic errors
- `500 Internal Server Error`: An error occurred on the server

## Rate Limiting

The API implements rate limiting to prevent abuse. The current limits are:

- 100 requests per minute per API token
- 5,000 requests per day per API token

The following headers are included in API responses to help you manage rate limiting:

- `X-RateLimit-Limit`: The maximum number of requests allowed per minute
- `X-RateLimit-Remaining`: The number of requests remaining in the current minute
- `X-RateLimit-Reset`: The time at which the rate limit will reset (Unix timestamp)

If you exceed the rate limit, you'll receive a `429 Too Many Requests` response.

## Secure Enclave API Access

Some API endpoints are only accessible within the secure enclave environment. These endpoints provide access to sensitive participant-level data and require additional authentication. When working within the secure enclave, your API requests will automatically include the necessary authentication credentials.

For more information on secure enclave access, refer to the [Secure Enclave Access](/guide/secure-enclave-access) documentation.
