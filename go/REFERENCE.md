# CloudflareZoneSettings Golang SDK Reference

Complete API reference for the CloudflareZoneSettings Golang SDK.


## CloudflareZoneSettingsSDK

### Constructor

```go
func NewCloudflareZoneSettingsSDK(options map[string]any) *CloudflareZoneSettingsSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CloudflareZoneSettingsSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CloudflareZoneSettingsSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `CacheSettingsOriginH2MaxStreamsResponseValue(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValue` entity instance. Pass `nil` for no initial data.

#### `Config(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `Config` entity instance. Pass `nil` for no initial data.

#### `CsamConfigServiceCsamScannerSingle(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `CsamConfigServiceCsamScannerSingle` entity instance. Pass `nil` for no initial data.

#### `Default(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `Default` entity instance. Pass `nil` for no initial data.

#### `GoogleTagGateway(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `GoogleTagGateway` entity instance. Pass `nil` for no initial data.

#### `Nel(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `Nel` entity instance. Pass `nil` for no initial data.

#### `Rum(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `Rum` entity instance. Pass `nil` for no initial data.

#### `Zaraz(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `Zaraz` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfig(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `ZarazZarazConfig` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfigHistory(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `ZarazZarazConfigHistory` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazConfigReturn(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `ZarazZarazConfigReturn` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazHistory(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `ZarazZarazHistory` entity instance. Pass `nil` for no initial data.

#### `ZarazZarazWorkflow(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `ZarazZarazWorkflow` entity instance. Pass `nil` for no initial data.

#### `ZoneSetting(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `ZoneSetting` entity instance. Pass `nil` for no initial data.

#### `ZonesZoneSettingsResponseCollection(data map[string]any) CloudflareZoneSettingsEntity`

Create a new `ZonesZoneSettingsResponseCollection` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CacheSettingsOriginH2MaxStreamsResponseValueEntity

```go
cacheSettingsOriginH2MaxStreamsResponseValue := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil)
fmt.Println(cacheSettingsOriginH2MaxStreamsResponseValue.GetName()) // "cache_settings_origin_h2_max_streams_response_value"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `int` | Yes | Value of the Origin H2 Max Streams Setting. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ConfigEntity

```go
config := client.Config(nil)
fmt.Println(config.GetName()) // "config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Config(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CsamConfigServiceCsamScannerSingleEntity

```go
csamConfigServiceCsamScannerSingle := client.CsamConfigServiceCsamScannerSingle(nil)
fmt.Println(csamConfigServiceCsamScannerSingle.GetName()) // "csam_config_service_csam_scanner_single"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No | The feature identifier. |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No | CSAM Scanner configuration for a zone. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `map[string]any` | No | Writable CSAM Scanner feature configuration values. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CsamConfigServiceCsamScannerSingle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CsamConfigServiceCsamScannerSingle(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DefaultEntity

```go
default_ := client.Default(nil)
fmt.Println(default_.GetName()) // "default"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Default(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DefaultEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GoogleTagGatewayEntity

```go
googleTagGateway := client.GoogleTagGateway(nil)
fmt.Println(googleTagGateway.GetName()) // "google_tag_gateway"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GoogleTagGateway(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.GoogleTagGateway(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GoogleTagGatewayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NelEntity

```go
nel := client.Nel(nil)
fmt.Println(nel.GetName()) // "nel"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | Yes | A zone-scoped NEL configuration setting. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `map[string]any` | Yes | The NEL configuration value. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Nel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Nel(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RumEntity

```go
rum := client.Rum(nil)
fmt.Println(rum.GetName()) // "rum"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `string` | No | Value can either be On or Off. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Rum(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Rum(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RumEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZarazEntity

```go
zaraz := client.Zaraz(nil)
fmt.Println(zaraz.GetName()) // "zaraz"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Zaraz(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZarazEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZarazZarazConfigEntity

```go
zarazZarazConfig := client.ZarazZarazConfig(nil)
fmt.Println(zarazZarazConfig.GetName()) // "zaraz_zaraz_config"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZarazZarazConfig(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZarazZarazConfigEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZarazZarazConfigHistoryEntity

```go
zarazZarazConfigHistory := client.ZarazZarazConfigHistory(nil)
fmt.Println(zarazZarazConfigHistory.GetName()) // "zaraz_zaraz_config_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No | Object where keys are numeric configuration IDs. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZarazZarazConfigHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZarazZarazConfigHistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZarazZarazConfigReturnEntity

```go
zarazZarazConfigReturn := client.ZarazZarazConfigReturn(nil)
fmt.Println(zarazZarazConfigReturn.GetName()) // "zaraz_zaraz_config_return"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analytics` | `map[string]any` | No | Cloudflare Monitoring settings. |
| `consent` | `map[string]any` | Yes | Consent management configuration. |
| `dataLayer` | `bool` | Yes | Data layer compatibility mode enabled. |
| `debugKey` | `string` | Yes | The key for Zaraz debug mode. |
| `historyChange` | `bool` | No | Single Page Application support enabled. |
| `settings` | `map[string]any` | Yes | General Zaraz settings. |
| `tools` | `map[string]any` | No | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `map[string]any` | Yes | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `map[string]any` | Yes | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `int` | Yes | Zaraz internal version of the config. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZarazZarazConfigReturn(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZarazZarazConfigReturnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZarazZarazHistoryEntity

```go
zarazZarazHistory := client.ZarazZarazHistory(nil)
fmt.Println(zarazZarazHistory.GetName()) // "zaraz_zaraz_history"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZarazZarazHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZarazZarazHistoryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZarazZarazWorkflowEntity

```go
zarazZarazWorkflow := client.ZarazZarazWorkflow(nil)
fmt.Println(zarazZarazWorkflow.GetName()) // "zaraz_zaraz_workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `string` | No | Zaraz workflow. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZarazZarazWorkflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZarazZarazWorkflow(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZarazZarazWorkflowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZoneSettingEntity

```go
zoneSetting := client.ZoneSetting(nil)
fmt.Println(zoneSetting.GetName()) // "zone_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `[]any` | Yes |  |
| `result` | `map[string]any` | No | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `bool` | Yes | Whether the API call was successful |
| `value` | `map[string]any` | Yes | Value of the zone setting. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZoneSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ZoneSetting(nil).Load(map[string]any{"id": "zone_setting_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZoneSetting(nil).Update(map[string]any{
    "id": "zone_setting_id",
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZoneSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZonesZoneSettingsResponseCollectionEntity

```go
zonesZoneSettingsResponseCollection := client.ZonesZoneSettingsResponseCollection(nil)
fmt.Println(zonesZoneSettingsResponseCollection.GetName()) // "zones_zone_settings_response_collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `[]any` | Yes |  |
| `messages` | `[]any` | Yes |  |
| `result` | `[]any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZonesZoneSettingsResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ZonesZoneSettingsResponseCollection(nil).Update(map[string]any{
    "zone_id": "zone_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```go
client := sdk.NewCloudflareZoneSettingsSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
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

