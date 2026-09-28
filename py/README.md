# CloudflareZoneSettings Python SDK



The Python SDK for the CloudflareZoneSettings API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.CacheSettingsOriginH2MaxStreamsResponseValue()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-zone-settings-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from cloudflarezonesettings_sdk import CloudflareZoneSettingsSDK

client = CloudflareZoneSettingsSDK({
    "apikey": os.environ.get("CLOUDFLARE_ZONE_SETTINGS_APIKEY"),
})
```

### 2. List cachesettingsoriginh2maxstreamsresponsevalue records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    cachesettingsoriginh2maxstreamsresponsevalues = client.CacheSettingsOriginH2MaxStreamsResponseValue().list({"zone_id": "example"})
    for cachesettingsoriginh2maxstreamsresponsevalue in cachesettingsoriginh2maxstreamsresponsevalues:
        print(cachesettingsoriginh2maxstreamsresponsevalue)
except Exception as err:
    print(f"list failed: {err}")
```

### 4. Create, update, and remove

```python
# Update
client.CacheSettingsOriginH2MaxStreamsResponseValue().update({"zone_id": "example_zone_id", "errors": []})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    zarazzarazhistorys = client.ZarazZarazHistory().list()
    print(zarazzarazhistorys)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = CloudflareZoneSettingsSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
zarazzarazhistory = client.ZarazZarazHistory().list()
# zarazzarazhistory contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = CloudflareZoneSettingsSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE
CLOUDFLARE_ZONE_SETTINGS_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### CloudflareZoneSettingsSDK

```python
from cloudflarezonesettings_sdk import CloudflareZoneSettingsSDK

client = CloudflareZoneSettingsSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = CloudflareZoneSettingsSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### CloudflareZoneSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `CacheSettingsOriginH2MaxStreamsResponseValue` | `(data) -> CacheSettingsOriginH2MaxStreamsResponseValueEntity` | Create a CacheSettingsOriginH2MaxStreamsResponseValue entity instance. |
| `Config` | `(data) -> ConfigEntity` | Create a Config entity instance. |
| `CsamConfigServiceCsamScannerSingle` | `(data) -> CsamConfigServiceCsamScannerSingleEntity` | Create a CsamConfigServiceCsamScannerSingle entity instance. |
| `Default` | `(data) -> DefaultEntity` | Create a Default entity instance. |
| `GoogleTagGateway` | `(data) -> GoogleTagGatewayEntity` | Create a GoogleTagGateway entity instance. |
| `Nel` | `(data) -> NelEntity` | Create a Nel entity instance. |
| `Rum` | `(data) -> RumEntity` | Create a Rum entity instance. |
| `Zaraz` | `(data) -> ZarazEntity` | Create a Zaraz entity instance. |
| `ZarazZarazConfig` | `(data) -> ZarazZarazConfigEntity` | Create a ZarazZarazConfig entity instance. |
| `ZarazZarazConfigHistory` | `(data) -> ZarazZarazConfigHistoryEntity` | Create a ZarazZarazConfigHistory entity instance. |
| `ZarazZarazConfigReturn` | `(data) -> ZarazZarazConfigReturnEntity` | Create a ZarazZarazConfigReturn entity instance. |
| `ZarazZarazHistory` | `(data) -> ZarazZarazHistoryEntity` | Create a ZarazZarazHistory entity instance. |
| `ZarazZarazWorkflow` | `(data) -> ZarazZarazWorkflowEntity` | Create a ZarazZarazWorkflow entity instance. |
| `ZoneSetting` | `(data) -> ZoneSettingEntity` | Create a ZoneSetting entity instance. |
| `ZonesZoneSettingsResponseCollection` | `(data) -> ZonesZoneSettingsResponseCollectionEntity` | Create a ZonesZoneSettingsResponseCollection entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### CacheSettingsOriginH2MaxStreamsResponseValue

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | Whether the API call was successful. |
| `value` | Value of the Origin H2 Max Streams Setting. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/origin_h2_max_streams`

#### Config

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/settings/zaraz/config`

#### CsamConfigServiceCsamScannerSingle

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` | The feature identifier. |
| `messages` |  |
| `result` | CSAM Scanner configuration for a zone. |
| `success` | Whether the API call was successful. |
| `value` | Writable CSAM Scanner feature configuration values. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/csam_scanner_third_party`

#### Default

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/settings/zaraz/default`

#### GoogleTagGateway

| Field | Description |
| --- | --- |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/google-tag-gateway/config`

#### Nel

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | A zone-scoped NEL configuration setting. |
| `success` | Whether the API call was successful. |
| `value` | The NEL configuration value. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/nel`

#### Rum

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |
| `value` | Value can either be On or Off. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/rum`

#### Zaraz

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/zones/{zone_id}/settings/zaraz/publish`

#### ZarazZarazConfig

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/zones/{zone_id}/settings/zaraz/config`

#### ZarazZarazConfigHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Object where keys are numeric configuration IDs. |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/settings/zaraz/history/configs`

#### ZarazZarazConfigReturn

| Field | Description |
| --- | --- |
| `analytics` | Cloudflare Monitoring settings. |
| `consent` | Consent management configuration. |
| `dataLayer` | Data layer compatibility mode enabled. |
| `debugKey` | The key for Zaraz debug mode. |
| `historyChange` | Single Page Application support enabled. |
| `settings` | General Zaraz settings. |
| `tools` | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | Zaraz internal version of the config. |

Operations: Load.

API path: `/zones/{zone_id}/settings/zaraz/export`

#### ZarazZarazHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/settings/zaraz/history`

#### ZarazZarazWorkflow

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Zaraz workflow. |
| `success` | Whether the API call was successful. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/zaraz/workflow`

#### ZoneSetting

| Field | Description |
| --- | --- |
| `errors` |  |
| `id` |  |
| `messages` |  |
| `result` | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | Whether the API call was successful |
| `value` | Value of the zone setting. |

Operations: List, Load, Update.

API path: `/zones/{zone_id}/settings/automatic_platform_optimization`

#### ZonesZoneSettingsResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: List, Update.

API path: `/zones/{zone_id}/settings`



## Entities


### CacheSettingsOriginH2MaxStreamsResponseValue

Create an instance: `cache_settings_origin_h2_max_streams_response_value = client.CacheSettingsOriginH2MaxStreamsResponseValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `int` | Value of the Origin H2 Max Streams Setting. |

#### Example: List

```python
cache_settings_origin_h2_max_streams_response_values = client.CacheSettingsOriginH2MaxStreamsResponseValue().list({"zone_id": "example"})
```


### Config

Create an instance: `config = client.Config()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
configs = client.Config().list({"zone_id": "example"})
```


### CsamConfigServiceCsamScannerSingle

Create an instance: `csam_config_service_csam_scanner_single = client.CsamConfigServiceCsamScannerSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` | The feature identifier. |
| `messages` | `list` |  |
| `result` | `dict` | CSAM Scanner configuration for a zone. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `dict` | Writable CSAM Scanner feature configuration values. |

#### Example: List

```python
csam_config_service_csam_scanner_singles = client.CsamConfigServiceCsamScannerSingle().list({"zone_id": "example"})
```


### Default

Create an instance: `default = client.Default()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `Any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
defaults = client.Default().list({"zone_id": "example"})
```


### GoogleTagGateway

Create an instance: `google_tag_gateway = client.GoogleTagGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Example: List

```python
google_tag_gateways = client.GoogleTagGateway().list({"zone_id": "example"})
```


### Nel

Create an instance: `nel = client.Nel()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` | A zone-scoped NEL configuration setting. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `dict` | The NEL configuration value. |

#### Example: List

```python
nels = client.Nel().list({"zone_id": "example"})
```


### Rum

Create an instance: `rum = client.Rum()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` |  |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `str` | Value can either be On or Off. |

#### Example: List

```python
rums = client.Rum().list({"zone_id": "example"})
```


### Zaraz

Create an instance: `zaraz = client.Zaraz()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
zaraz = client.Zaraz().create({
    "zone_id": "example_zone_id",  # str
})
```


### ZarazZarazConfig

Create an instance: `zaraz_zaraz_config = client.ZarazZarazConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ZarazZarazConfigHistory

Create an instance: `zaraz_zaraz_config_history = client.ZarazZarazConfigHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `dict` | Object where keys are numeric configuration IDs. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
zaraz_zaraz_config_historys = client.ZarazZarazConfigHistory().list({"zone_id": "example", "ids": []})
```


### ZarazZarazConfigReturn

Create an instance: `zaraz_zaraz_config_return = client.ZarazZarazConfigReturn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analytics` | `dict` | Cloudflare Monitoring settings. |
| `consent` | `dict` | Consent management configuration. |
| `dataLayer` | `bool` | Data layer compatibility mode enabled. |
| `debugKey` | `str` | The key for Zaraz debug mode. |
| `historyChange` | `bool` | Single Page Application support enabled. |
| `settings` | `dict` | General Zaraz settings. |
| `tools` | `dict` | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `dict` | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `dict` | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `int` | Zaraz internal version of the config. |

#### Example: Load

```python
zaraz_zaraz_config_return = client.ZarazZarazConfigReturn().load({"zone_id": "zone_id"})
```


### ZarazZarazHistory

Create an instance: `zaraz_zaraz_history = client.ZarazZarazHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
zaraz_zaraz_historys = client.ZarazZarazHistory().list({"zone_id": "example"})
```


### ZarazZarazWorkflow

Create an instance: `zaraz_zaraz_workflow = client.ZarazZarazWorkflow()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `str` | Zaraz workflow. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```python
zaraz_zaraz_workflows = client.ZarazZarazWorkflow().list({"zone_id": "example"})
```


### ZoneSetting

Create an instance: `zone_setting = client.ZoneSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `id` | `str` |  |
| `messages` | `list` |  |
| `result` | `dict` | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `bool` | Whether the API call was successful |
| `value` | `dict` | Value of the zone setting. |

#### Example: Load

```python
zone_setting = client.ZoneSetting().load({"id": "zone_setting_id", "zone_id": "zone_id"})
```

#### Example: List

```python
zone_settings = client.ZoneSetting().list({"zone_id": "example"})
```


### ZonesZoneSettingsResponseCollection

Create an instance: `zones_zone_settings_response_collection = client.ZonesZoneSettingsResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `list` |  |
| `messages` | `list` |  |
| `result` | `list` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```python
zones_zone_settings_response_collections = client.ZonesZoneSettingsResponseCollection().list({"zone_id": "example"})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

6 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `zone_setting` | `result` | 66 | 0 levels |
| `zones_zone_settings_response_collection` | `result` | 65 | 1 level |
| `config` | `result` | 7 | 14 levels |
| `default` | `result` | 7 | 14 levels |
| `zaraz_zaraz_config_history` | `result` | 7 | 19 levels |
| `zaraz_zaraz_config_return` | `triggers` | 7 | 4 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── cloudflarezonesettings_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`cloudflarezonesettings_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
zarazzarazhistory = client.ZarazZarazHistory()
zarazzarazhistory.list()

# zarazzarazhistory.data_get() now returns the zarazzarazhistory data from the last list
# zarazzarazhistory.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
