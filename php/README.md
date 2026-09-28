# CloudflareZoneSettings PHP SDK



The PHP SDK for the CloudflareZoneSettings API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->CacheSettingsOriginH2MaxStreamsResponseValue()` — with named operations (`list`/`load`/`create`/`update`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-zone-settings-sdk/releases](https://github.com/voxgig-sdk/cloudflare-zone-settings-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudflarezonesettings_sdk.php';

$client = new CloudflareZoneSettingsSDK([
    "apikey" => getenv("CLOUDFLARE_ZONE_SETTINGS_APIKEY"),
]);
```

### 2. List cachesettingsoriginh2maxstreamsresponsevalue records

```php
try {
    // list() returns entity instances; data_get() reads each record.
    $cachesettingsoriginh2maxstreamsresponsevalues = $client->CacheSettingsOriginH2MaxStreamsResponseValue()->list();
    foreach ($cachesettingsoriginh2maxstreamsresponsevalues as $record) {
        $item = $record->data_get();
        echo $item["errors"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// Update
$client->CacheSettingsOriginH2MaxStreamsResponseValue()->update(["zone_id" => "example_zone_id", "errors" => []]);

```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $zarazzarazhistorys = $client->ZarazZarazHistory()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudflareZoneSettingsSDK::test([
    "entity" => ["zonesetting" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$zonesetting = $client->ZoneSetting()->list();
print_r(array_map(fn($item) => $item->data_get(), $zonesetting));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudflareZoneSettingsSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE
CLOUDFLARE_ZONE_SETTINGS_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudflareZoneSettingsSDK

```php
require_once 'cloudflarezonesettings_sdk.php';
$client = new CloudflareZoneSettingsSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudflareZoneSettingsSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudflareZoneSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `CacheSettingsOriginH2MaxStreamsResponseValue` | `($data): CacheSettingsOriginH2MaxStreamsResponseValueEntity` | Create a CacheSettingsOriginH2MaxStreamsResponseValue entity instance. |
| `Config` | `($data): ConfigEntity` | Create a Config entity instance. |
| `CsamConfigServiceCsamScannerSingle` | `($data): CsamConfigServiceCsamScannerSingleEntity` | Create a CsamConfigServiceCsamScannerSingle entity instance. |
| `Default` | `($data): DefaultEntity` | Create a Default entity instance. |
| `GoogleTagGateway` | `($data): GoogleTagGatewayEntity` | Create a GoogleTagGateway entity instance. |
| `Nel` | `($data): NelEntity` | Create a Nel entity instance. |
| `Rum` | `($data): RumEntity` | Create a Rum entity instance. |
| `Zaraz` | `($data): ZarazEntity` | Create a Zaraz entity instance. |
| `ZarazZarazConfig` | `($data): ZarazZarazConfigEntity` | Create a ZarazZarazConfig entity instance. |
| `ZarazZarazConfigHistory` | `($data): ZarazZarazConfigHistoryEntity` | Create a ZarazZarazConfigHistory entity instance. |
| `ZarazZarazConfigReturn` | `($data): ZarazZarazConfigReturnEntity` | Create a ZarazZarazConfigReturn entity instance. |
| `ZarazZarazHistory` | `($data): ZarazZarazHistoryEntity` | Create a ZarazZarazHistory entity instance. |
| `ZarazZarazWorkflow` | `($data): ZarazZarazWorkflowEntity` | Create a ZarazZarazWorkflow entity instance. |
| `ZoneSetting` | `($data): ZoneSettingEntity` | Create a ZoneSetting entity instance. |
| `ZonesZoneSettingsResponseCollection` | `($data): ZonesZoneSettingsResponseCollectionEntity` | Create a ZonesZoneSettingsResponseCollection entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$cache_settings_origin_h2_max_streams_response_value = $client->CacheSettingsOriginH2MaxStreamsResponseValue();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `int` | Value of the Origin H2 Max Streams Setting. |

#### Example: List

```php
// list() returns an array of CacheSettingsOriginH2MaxStreamsResponseValue records (throws on error).
$cache_settings_origin_h2_max_streams_response_values = $client->CacheSettingsOriginH2MaxStreamsResponseValue()->list();
```


### Config

Create an instance: `$config = $client->Config();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of Config records (throws on error).
$configs = $client->Config()->list();
```


### CsamConfigServiceCsamScannerSingle

Create an instance: `$csam_config_service_csam_scanner_single = $client->CsamConfigServiceCsamScannerSingle();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `id` | `string` | The feature identifier. |
| `messages` | `array` |  |
| `result` | `array` | CSAM Scanner configuration for a zone. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `array` | Writable CSAM Scanner feature configuration values. |

#### Example: List

```php
// list() returns an array of CsamConfigServiceCsamScannerSingle records (throws on error).
$csam_config_service_csam_scanner_singles = $client->CsamConfigServiceCsamScannerSingle()->list();
```


### Default

Create an instance: `$default = $client->Default();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `mixed` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of Default records (throws on error).
$defaults = $client->Default()->list();
```


### GoogleTagGateway

Create an instance: `$google_tag_gateway = $client->GoogleTagGateway();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Example: List

```php
// list() returns an array of GoogleTagGateway records (throws on error).
$google_tag_gateways = $client->GoogleTagGateway()->list();
```


### Nel

Create an instance: `$nel = $client->Nel();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` | A zone-scoped NEL configuration setting. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `array` | The NEL configuration value. |

#### Example: List

```php
// list() returns an array of Nel records (throws on error).
$nels = $client->Nel()->list();
```


### Rum

Create an instance: `$rum = $client->Rum();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `string` | Value can either be On or Off. |

#### Example: List

```php
// list() returns an array of Rum records (throws on error).
$rums = $client->Rum()->list();
```


### Zaraz

Create an instance: `$zaraz = $client->Zaraz();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$zaraz = $client->Zaraz()->create([
    "zone_id" => null, // string
]);
```


### ZarazZarazConfig

Create an instance: `$zaraz_zaraz_config = $client->ZarazZarazConfig();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ZarazZarazConfigHistory

Create an instance: `$zaraz_zaraz_config_history = $client->ZarazZarazConfigHistory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` | Object where keys are numeric configuration IDs. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of ZarazZarazConfigHistory records (throws on error).
$zaraz_zaraz_config_historys = $client->ZarazZarazConfigHistory()->list();
```


### ZarazZarazConfigReturn

Create an instance: `$zaraz_zaraz_config_return = $client->ZarazZarazConfigReturn();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analytics` | `array` | Cloudflare Monitoring settings. |
| `consent` | `array` | Consent management configuration. |
| `dataLayer` | `bool` | Data layer compatibility mode enabled. |
| `debugKey` | `string` | The key for Zaraz debug mode. |
| `historyChange` | `bool` | Single Page Application support enabled. |
| `settings` | `array` | General Zaraz settings. |
| `tools` | `array` | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `array` | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `array` | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `int` | Zaraz internal version of the config. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZarazZarazConfigReturn record (throws on error).
$zaraz_zaraz_config_return = $client->ZarazZarazConfigReturn()->load(["zone_id" => "zone_id"]);
```


### ZarazZarazHistory

Create an instance: `$zaraz_zaraz_history = $client->ZarazZarazHistory();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of ZarazZarazHistory records (throws on error).
$zaraz_zaraz_historys = $client->ZarazZarazHistory()->list();
```


### ZarazZarazWorkflow

Create an instance: `$zaraz_zaraz_workflow = $client->ZarazZarazWorkflow();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `string` | Zaraz workflow. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```php
// list() returns an array of ZarazZarazWorkflow records (throws on error).
$zaraz_zaraz_workflows = $client->ZarazZarazWorkflow()->list();
```


### ZoneSetting

Create an instance: `$zone_setting = $client->ZoneSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `id` | `string` |  |
| `messages` | `array` |  |
| `result` | `array` | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `bool` | Whether the API call was successful |
| `value` | `array` | Value of the zone setting. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ZoneSetting record (throws on error).
$zone_setting = $client->ZoneSetting()->load(["id" => "zone_setting_id", "zone_id" => "zone_id"]);
```

#### Example: List

```php
// list() returns an array of ZoneSetting records (throws on error).
$zone_settings = $client->ZoneSetting()->list();
```


### ZonesZoneSettingsResponseCollection

Create an instance: `$zones_zone_settings_response_collection = $client->ZonesZoneSettingsResponseCollection();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `array` |  |
| `messages` | `array` |  |
| `result` | `array` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```php
// list() returns an array of ZonesZoneSettingsResponseCollection records (throws on error).
$zones_zone_settings_response_collections = $client->ZonesZoneSettingsResponseCollection()->list();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudflarezonesettings_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudflarezonesettings_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$zarazzarazhistory = $client->ZarazZarazHistory();
$zarazzarazhistory->list();

// $zarazzarazhistory->data_get() now returns the zarazzarazhistory data from the last list
// $zarazzarazhistory->match_get() returns the last match criteria
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
