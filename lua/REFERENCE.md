# CloudflareZoneSettings Lua SDK Reference

Complete API reference for the CloudflareZoneSettings Lua SDK.


## CloudflareZoneSettingsSDK

### Constructor

```lua
local sdk = require("cloudflare-zone-settings_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `CacheSettingsOriginH2MaxStreamsResponseValue(data)`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValue` entity instance. Pass `nil` for no initial data.

#### `Config(data)`

Create a new `Config` entity instance. Pass `nil` for no initial data.

#### `CsamConfigServiceCsamScannerSingle(data)`

Create a new `CsamConfigServiceCsamScannerSingle` entity instance. Pass `nil` for no initial data.

#### `Default(data)`

Create a new `Default` entity instance. Pass `nil` for no initial data.

#### `GoogleTagGateway(data)`

Create a new `GoogleTagGateway` entity instance. Pass `nil` for no initial data.

#### `Nel(data)`

Create a new `Nel` entity instance. Pass `nil` for no initial data.

#### `Rum(data)`

Create a new `Rum` entity instance. Pass `nil` for no initial data.

#### `Zaraz(data)`

Create a new `Zaraz` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfig(data)`

Create a new `ZarazZarazConfig` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfigHistory(data)`

Create a new `ZarazZarazConfigHistory` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfigReturn(data)`

Create a new `ZarazZarazConfigReturn` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazHistory(data)`

Create a new `ZarazZarazHistory` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazWorkflow(data)`

Create a new `ZarazZarazWorkflow` entity instance. Pass `nil` for no initial data.

#### `ZoneSetting(data)`

Create a new `ZoneSetting` entity instance. Pass `nil` for no initial data.

#### `ZonesZoneSettingsResponseCollection(data)`

Create a new `ZonesZoneSettingsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CacheSettingsOriginH2MaxStreamsResponseValueEntity

```lua
local cache_settings_origin_h2_max_streams_response_value = client:CacheSettingsOriginH2MaxStreamsResponseValue(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `number` | Yes | Value of the Origin H2 Max Streams Setting. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CacheSettingsOriginH2MaxStreamsResponseValue():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CacheSettingsOriginH2MaxStreamsResponseValue():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConfigEntity

```lua
local config = client:Config(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Config():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CsamConfigServiceCsamScannerSingleEntity

```lua
local csam_config_service_csam_scanner_single = client:CsamConfigServiceCsamScannerSingle(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No | The feature identifier. |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | CSAM Scanner configuration for a zone. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `table` | No | Writable CSAM Scanner feature configuration values. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CsamConfigServiceCsamScannerSingle():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CsamConfigServiceCsamScannerSingle():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DefaultEntity

```lua
local default = client:Default(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Default():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DefaultEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GoogleTagGatewayEntity

```lua
local google_tag_gateway = client:GoogleTagGateway(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GoogleTagGateway():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:GoogleTagGateway():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GoogleTagGatewayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NelEntity

```lua
local nel = client:Nel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | Yes | A zone-scoped NEL configuration setting. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `table` | Yes | The NEL configuration value. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Nel():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Nel():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RumEntity

```lua
local rum = client:Rum(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `string` | No | Value can either be On or Off. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Rum():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Rum():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RumEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZarazEntity

```lua
local zaraz = client:Zaraz(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Zaraz():create({
  zone_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZarazZarazConfigEntity

```lua
local zaraz_zaraz_config = client:ZarazZarazConfig(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZarazZarazConfig():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZarazZarazConfigHistoryEntity

```lua
local zaraz_zaraz_config_history = client:ZarazZarazConfigHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Object where keys are numeric configuration IDs. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZarazZarazConfigHistory():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazConfigHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZarazZarazConfigReturnEntity

```lua
local zaraz_zaraz_config_return = client:ZarazZarazConfigReturn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analytics` | `table` | No | Cloudflare Monitoring settings. |
| `consent` | `table` | Yes | Consent management configuration. |
| `dataLayer` | `boolean` | Yes | Data layer compatibility mode enabled. |
| `debugKey` | `string` | Yes | The key for Zaraz debug mode. |
| `historyChange` | `boolean` | No | Single Page Application support enabled. |
| `settings` | `table` | Yes | General Zaraz settings. |
| `tools` | `table` | No | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `table` | Yes | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `table` | Yes | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `number` | Yes | Zaraz internal version of the config. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZarazZarazConfigReturn():load({ zone_id = "zone_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazConfigReturnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZarazZarazHistoryEntity

```lua
local zaraz_zaraz_history = client:ZarazZarazHistory(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZarazZarazHistory():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazHistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZarazZarazWorkflowEntity

```lua
local zaraz_zaraz_workflow = client:ZarazZarazWorkflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `string` | No | Zaraz workflow. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZarazZarazWorkflow():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZarazZarazWorkflow():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazWorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZoneSettingEntity

```lua
local zone_setting = client:ZoneSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `boolean` | Yes | Whether the API call was successful |
| `value` | `table` | Yes | Value of the zone setting. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZoneSetting():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ZoneSetting():load({ id = "zone_setting_id", zone_id = "zone_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZoneSetting():update({
  id = "zone_setting_id",
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZonesZoneSettingsResponseCollectionEntity

```lua
local zones_zone_settings_response_collection = client:ZonesZoneSettingsResponseCollection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `table` | Yes |  |
| `messages` | `table` | Yes |  |
| `result` | `table` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZonesZoneSettingsResponseCollection():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ZonesZoneSettingsResponseCollection():update({
  zone_id = "zone_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
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

