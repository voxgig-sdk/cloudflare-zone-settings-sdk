# CloudflareZoneSettings Ruby SDK Reference

Complete API reference for the CloudflareZoneSettings Ruby SDK.


## CloudflareZoneSettingsSDK

### Constructor

```ruby
require_relative 'CloudflareZoneSettings_sdk'

client = CloudflareZoneSettingsSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZoneSettingsSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudflareZoneSettingsSDK.test
```


### Instance Methods

#### `CacheSettingsOriginH2MaxStreamsResponseValue(data = nil)`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValue` entity instance. Pass `nil` for no initial data.

#### `Config(data = nil)`

Create a new `Config` entity instance. Pass `nil` for no initial data.

#### `CsamConfigServiceCsamScannerSingle(data = nil)`

Create a new `CsamConfigServiceCsamScannerSingle` entity instance. Pass `nil` for no initial data.

#### `Default(data = nil)`

Create a new `Default` entity instance. Pass `nil` for no initial data.

#### `GoogleTagGateway(data = nil)`

Create a new `GoogleTagGateway` entity instance. Pass `nil` for no initial data.

#### `Nel(data = nil)`

Create a new `Nel` entity instance. Pass `nil` for no initial data.

#### `Rum(data = nil)`

Create a new `Rum` entity instance. Pass `nil` for no initial data.

#### `Zaraz(data = nil)`

Create a new `Zaraz` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfig(data = nil)`

Create a new `ZarazZarazConfig` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfigHistory(data = nil)`

Create a new `ZarazZarazConfigHistory` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfigReturn(data = nil)`

Create a new `ZarazZarazConfigReturn` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazHistory(data = nil)`

Create a new `ZarazZarazHistory` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazWorkflow(data = nil)`

Create a new `ZarazZarazWorkflow` entity instance. Pass `nil` for no initial data.

#### `ZoneSetting(data = nil)`

Create a new `ZoneSetting` entity instance. Pass `nil` for no initial data.

#### `ZonesZoneSettingsResponseCollection(data = nil)`

Create a new `ZonesZoneSettingsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CacheSettingsOriginH2MaxStreamsResponseValueEntity

```ruby
cache_settings_origin_h2_max_streams_response_value = client.CacheSettingsOriginH2MaxStreamsResponseValue
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `value` | `Integer` | Yes | Value of the Origin H2 Max Streams Setting. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CacheSettingsOriginH2MaxStreamsResponseValue.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CacheSettingsOriginH2MaxStreamsResponseValue.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConfigEntity

```ruby
config = client.Config
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Config.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CsamConfigServiceCsamScannerSingleEntity

```ruby
csam_config_service_csam_scanner_single = client.CsamConfigServiceCsamScannerSingle
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No | The feature identifier. |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No | CSAM Scanner configuration for a zone. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `value` | `Hash` | No | Writable CSAM Scanner feature configuration values. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.CsamConfigServiceCsamScannerSingle.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.CsamConfigServiceCsamScannerSingle.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DefaultEntity

```ruby
default = client.Default
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Object` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Default.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DefaultEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GoogleTagGatewayEntity

```ruby
google_tag_gateway = client.GoogleTagGateway
```

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.GoogleTagGateway.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.GoogleTagGateway.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GoogleTagGatewayEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NelEntity

```ruby
nel = client.Nel
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | Yes | A zone-scoped NEL configuration setting. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `value` | `Hash` | Yes | The NEL configuration value. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Nel.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Nel.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NelEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RumEntity

```ruby
rum = client.Rum
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |
| `value` | `String` | No | Value can either be On or Off. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Rum.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Rum.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RumEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZarazEntity

```ruby
zaraz = client.Zaraz
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Zaraz.create({
  "zone_id" => "example_zone_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZarazEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZarazZarazConfigEntity

```ruby
zaraz_zaraz_config = client.ZarazZarazConfig
```

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZarazZarazConfig.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZarazZarazConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZarazZarazConfigHistoryEntity

```ruby
zaraz_zaraz_config_history = client.ZarazZarazConfigHistory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No | Object where keys are numeric configuration IDs. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZarazZarazConfigHistory.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZarazZarazConfigHistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZarazZarazConfigReturnEntity

```ruby
zaraz_zaraz_config_return = client.ZarazZarazConfigReturn
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analytics` | `Hash` | No | Cloudflare Monitoring settings. |
| `consent` | `Hash` | Yes | Consent management configuration. |
| `dataLayer` | `Boolean` | Yes | Data layer compatibility mode enabled. |
| `debugKey` | `String` | Yes | The key for Zaraz debug mode. |
| `historyChange` | `Boolean` | No | Single Page Application support enabled. |
| `settings` | `Hash` | Yes | General Zaraz settings. |
| `tools` | `Hash` | No | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `Hash` | Yes | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `Hash` | Yes | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `Integer` | Yes | Zaraz internal version of the config. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZarazZarazConfigReturn.load({ "zone_id" => "zone_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZarazZarazConfigReturnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZarazZarazHistoryEntity

```ruby
zaraz_zaraz_history = client.ZarazZarazHistory
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZarazZarazHistory.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZarazZarazHistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZarazZarazWorkflowEntity

```ruby
zaraz_zaraz_workflow = client.ZarazZarazWorkflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `String` | No | Zaraz workflow. |
| `success` | `Boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZarazZarazWorkflow.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZarazZarazWorkflow.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZarazZarazWorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZoneSettingEntity

```ruby
zone_setting = client.ZoneSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `id` | `String` | No |  |
| `messages` | `Array` | Yes |  |
| `result` | `Hash` | No | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `Boolean` | Yes | Whether the API call was successful |
| `value` | `Hash` | Yes | Value of the zone setting. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZoneSetting.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ZoneSetting.load({ "id" => "zone_setting_id", "zone_id" => "zone_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZoneSetting.update({
  "id" => "zone_setting_id",
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZoneSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZonesZoneSettingsResponseCollectionEntity

```ruby
zones_zone_settings_response_collection = client.ZonesZoneSettingsResponseCollection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `Array` | Yes |  |
| `messages` | `Array` | Yes |  |
| `result` | `Array` | No |  |
| `success` | `Boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZonesZoneSettingsResponseCollection.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ZonesZoneSettingsResponseCollection.update({
  "zone_id" => "zone_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ruby
client = CloudflareZoneSettingsSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
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

