# CloudflareZoneSettings PHP SDK Reference

Complete API reference for the CloudflareZoneSettings PHP SDK.


## CloudflareZoneSettingsSDK

### Constructor

```php
require_once __DIR__ . '/cloudflarezonesettings_sdk.php';

$client = new CloudflareZoneSettingsSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZoneSettingsSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudflareZoneSettingsSDK::test();
```


### Instance Methods

#### `CacheSettingsOriginH2MaxStreamsResponseValue($data = null)`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance. Pass `null` for no initial data.

#### `Config($data = null)`

Create a new `ConfigEntity` instance. Pass `null` for no initial data.

#### `CsamConfigServiceCsamScannerSingle($data = null)`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance. Pass `null` for no initial data.

#### `Default($data = null)`

Create a new `DefaultEntity` instance. Pass `null` for no initial data.

#### `GoogleTagGateway($data = null)`

Create a new `GoogleTagGatewayEntity` instance. Pass `null` for no initial data.

#### `Nel($data = null)`

Create a new `NelEntity` instance. Pass `null` for no initial data.

#### `Rum($data = null)`

Create a new `RumEntity` instance. Pass `null` for no initial data.

#### `Zaraz($data = null)`

Create a new `ZarazEntity` instance. Pass `null` for no initial data.

#### `ZarazZarazConfig($data = null)`

Create a new `ZarazZarazConfigEntity` instance. Pass `null` for no initial data.

#### `ZarazZarazConfigHistory($data = null)`

Create a new `ZarazZarazConfigHistoryEntity` instance. Pass `null` for no initial data.

#### `ZarazZarazConfigReturn($data = null)`

Create a new `ZarazZarazConfigReturnEntity` instance. Pass `null` for no initial data.

#### `ZarazZarazHistory($data = null)`

Create a new `ZarazZarazHistoryEntity` instance. Pass `null` for no initial data.

#### `ZarazZarazWorkflow($data = null)`

Create a new `ZarazZarazWorkflowEntity` instance. Pass `null` for no initial data.

#### `ZoneSetting($data = null)`

Create a new `ZoneSettingEntity` instance. Pass `null` for no initial data.

#### `ZonesZoneSettingsResponseCollection($data = null)`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudflareZoneSettingsUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CacheSettingsOriginH2MaxStreamsResponseValueEntity

```php
$cache_settings_origin_h2_max_streams_response_value = $client->CacheSettingsOriginH2MaxStreamsResponseValue();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `int` | Yes | Value of the Origin H2 Max Streams Setting. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CacheSettingsOriginH2MaxStreamsResponseValue()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CacheSettingsOriginH2MaxStreamsResponseValue()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CacheSettingsOriginH2MaxStreamsResponseValueEntity`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConfigEntity

```php
$config = $client->Config();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Config()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConfigEntity`

Create a new `ConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CsamConfigServiceCsamScannerSingleEntity

```php
$csam_config_service_csam_scanner_single = $client->CsamConfigServiceCsamScannerSingle();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No | The feature identifier. |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | CSAM Scanner configuration for a zone. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `array` | No | Writable CSAM Scanner feature configuration values. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CsamConfigServiceCsamScannerSingle()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CsamConfigServiceCsamScannerSingle()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CsamConfigServiceCsamScannerSingleEntity`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DefaultEntity

```php
$default = $client->Default();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `mixed` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Default()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DefaultEntity`

Create a new `DefaultEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GoogleTagGatewayEntity

```php
$google_tag_gateway = $client->GoogleTagGateway();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GoogleTagGateway()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->GoogleTagGateway()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GoogleTagGatewayEntity`

Create a new `GoogleTagGatewayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NelEntity

```php
$nel = $client->Nel();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | Yes | A zone-scoped NEL configuration setting. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `array` | Yes | The NEL configuration value. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Nel()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Nel()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NelEntity`

Create a new `NelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RumEntity

```php
$rum = $client->Rum();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `string` | No | Value can either be On or Off. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Rum()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Rum()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RumEntity`

Create a new `RumEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZarazEntity

```php
$zaraz = $client->Zaraz();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Zaraz()->create([
  "zone_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZarazEntity`

Create a new `ZarazEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZarazZarazConfigEntity

```php
$zaraz_zaraz_config = $client->ZarazZarazConfig();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZarazZarazConfig()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZarazZarazConfigEntity`

Create a new `ZarazZarazConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZarazZarazConfigHistoryEntity

```php
$zaraz_zaraz_config_history = $client->ZarazZarazConfigHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Object where keys are numeric configuration IDs. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZarazZarazConfigHistory()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZarazZarazConfigHistoryEntity`

Create a new `ZarazZarazConfigHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZarazZarazConfigReturnEntity

```php
$zaraz_zaraz_config_return = $client->ZarazZarazConfigReturn();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analytics` | `array` | No | Cloudflare Monitoring settings. |
| `consent` | `array` | Yes | Consent management configuration. |
| `dataLayer` | `bool` | Yes | Data layer compatibility mode enabled. |
| `debugKey` | `string` | Yes | The key for Zaraz debug mode. |
| `historyChange` | `bool` | No | Single Page Application support enabled. |
| `settings` | `array` | Yes | General Zaraz settings. |
| `tools` | `array` | No | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `array` | Yes | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `array` | Yes | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `int` | Yes | Zaraz internal version of the config. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZarazZarazConfigReturn()->load(["zone_id" => "zone_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZarazZarazConfigReturnEntity`

Create a new `ZarazZarazConfigReturnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZarazZarazHistoryEntity

```php
$zaraz_zaraz_history = $client->ZarazZarazHistory();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZarazZarazHistory()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZarazZarazHistoryEntity`

Create a new `ZarazZarazHistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZarazZarazWorkflowEntity

```php
$zaraz_zaraz_workflow = $client->ZarazZarazWorkflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `string` | No | Zaraz workflow. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZarazZarazWorkflow()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZarazZarazWorkflow()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZarazZarazWorkflowEntity`

Create a new `ZarazZarazWorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZoneSettingEntity

```php
$zone_setting = $client->ZoneSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `bool` | Yes | Whether the API call was successful |
| `value` | `array` | Yes | Value of the zone setting. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZoneSetting()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ZoneSetting()->load(["id" => "zone_setting_id", "zone_id" => "zone_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZoneSetting()->update([
  "id" => "zone_setting_id",
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZoneSettingEntity`

Create a new `ZoneSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZonesZoneSettingsResponseCollectionEntity

```php
$zones_zone_settings_response_collection = $client->ZonesZoneSettingsResponseCollection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `array` | Yes |  |
| `messages` | `array` | Yes |  |
| `result` | `array` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZonesZoneSettingsResponseCollection()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ZonesZoneSettingsResponseCollection()->update([
  "zone_id" => "zone_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZonesZoneSettingsResponseCollectionEntity`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```php
$client = new CloudflareZoneSettingsSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

