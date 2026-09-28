# CloudflareZoneSettings TypeScript SDK Reference

Complete API reference for the CloudflareZoneSettings TypeScript SDK.


## CloudflareZoneSettingsSDK

### Constructor

```ts
new CloudflareZoneSettingsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZoneSettingsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CloudflareZoneSettingsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CloudflareZoneSettingsSDK` instance in test mode.


### Instance Methods

#### `CacheSettingsOriginH2MaxStreamsResponseValue(data?: object)`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance.

#### `Config(data?: object)`

Create a new `Config` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ConfigEntity` instance.

#### `CsamConfigServiceCsamScannerSingle(data?: object)`

Create a new `CsamConfigServiceCsamScannerSingle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CsamConfigServiceCsamScannerSingleEntity` instance.

#### `Default(data?: object)`

Create a new `Default` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DefaultEntity` instance.

#### `GoogleTagGateway(data?: object)`

Create a new `GoogleTagGateway` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GoogleTagGatewayEntity` instance.

#### `Nel(data?: object)`

Create a new `Nel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NelEntity` instance.

#### `Rum(data?: object)`

Create a new `Rum` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RumEntity` instance.

#### `Zaraz(data?: object)`

Create a new `Zaraz` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZarazEntity` instance.

#### `ZarazZarazConfig(data?: object)`

Create a new `ZarazZarazConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZarazZarazConfigEntity` instance.

#### `ZarazZarazConfigHistory(data?: object)`

Create a new `ZarazZarazConfigHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZarazZarazConfigHistoryEntity` instance.

#### `ZarazZarazConfigReturn(data?: object)`

Create a new `ZarazZarazConfigReturn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZarazZarazConfigReturnEntity` instance.

#### `ZarazZarazHistory(data?: object)`

Create a new `ZarazZarazHistory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZarazZarazHistoryEntity` instance.

#### `ZarazZarazWorkflow(data?: object)`

Create a new `ZarazZarazWorkflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZarazZarazWorkflowEntity` instance.

#### `ZoneSetting(data?: object)`

Create a new `ZoneSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZoneSettingEntity` instance.

#### `ZonesZoneSettingsResponseCollection(data?: object)`

Create a new `ZonesZoneSettingsResponseCollection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZonesZoneSettingsResponseCollectionEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CloudflareZoneSettingsSDK.test()`.

**Returns:** `CloudflareZoneSettingsSDK` instance in test mode.


---

## CacheSettingsOriginH2MaxStreamsResponseValueEntity

```ts
const cache_settings_origin_h2_max_streams_response_value = client.CacheSettingsOriginH2MaxStreamsResponseValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `number` | Yes | Value of the Origin H2 Max Streams Setting. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CacheSettingsOriginH2MaxStreamsResponseValue().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CacheSettingsOriginH2MaxStreamsResponseValue().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ConfigEntity

```ts
const config = client.Config()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Config().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CsamConfigServiceCsamScannerSingleEntity

```ts
const csam_config_service_csam_scanner_single = client.CsamConfigServiceCsamScannerSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No | The feature identifier. |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No | CSAM Scanner configuration for a zone. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `Record<string, any>` | No | Writable CSAM Scanner feature configuration values. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CsamConfigServiceCsamScannerSingle().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CsamConfigServiceCsamScannerSingle().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DefaultEntity

```ts
const default_ = client.Default()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Default().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DefaultEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GoogleTagGatewayEntity

```ts
const google_tag_gateway = client.GoogleTagGateway()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `config` | `/zones/{zone_id}/settings/google-tag-gateway/config` | `client.GoogleTagGateway().list({ $action: 'config', ... })` |
| `config` | `/zones/{zone_id}/settings/google-tag-gateway/config` | `client.GoogleTagGateway().update({ $action: 'config', ... })` |

An action returns that action's OWN response, which is not necessarily a
GoogleTagGateway record — check the API definition for its shape.

```ts
const result = await client.GoogleTagGateway().list({
  $action: 'config',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GoogleTagGateway().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.GoogleTagGateway().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GoogleTagGatewayEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NelEntity

```ts
const nel = client.Nel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | Yes | A zone-scoped NEL configuration setting. |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `Record<string, any>` | Yes | The NEL configuration value. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Nel().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Nel().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NelEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RumEntity

```ts
const rum = client.Rum()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |
| `value` | `string` | No | Value can either be On or Off. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Rum().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Rum().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RumEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZarazEntity

```ts
const zaraz = client.Zaraz()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `publish` | `/zones/{zone_id}/settings/zaraz/publish` | `client.Zaraz().create({ $action: 'publish', ... })` |

An action returns that action's OWN response, which is not necessarily a
Zaraz record — check the API definition for its shape.

```ts
const result = await client.Zaraz().create({
  $action: 'publish',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Zaraz().create({
  zone_id: 'example_zone_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZarazEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZarazZarazConfigEntity

```ts
const zaraz_zaraz_config = client.ZarazZarazConfig()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZarazZarazConfig().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZarazZarazConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZarazZarazConfigHistoryEntity

```ts
const zaraz_zaraz_config_history = client.ZarazZarazConfigHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No | Object where keys are numeric configuration IDs. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZarazZarazConfigHistory().list({ zone_id: "example", ids: [] })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZarazZarazConfigHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZarazZarazConfigReturnEntity

```ts
const zaraz_zaraz_config_return = client.ZarazZarazConfigReturn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analytics` | `Record<string, any>` | No | Cloudflare Monitoring settings. |
| `consent` | `Record<string, any>` | Yes | Consent management configuration. |
| `dataLayer` | `boolean` | Yes | Data layer compatibility mode enabled. |
| `debugKey` | `string` | Yes | The key for Zaraz debug mode. |
| `historyChange` | `boolean` | No | Single Page Application support enabled. |
| `settings` | `Record<string, any>` | Yes | General Zaraz settings. |
| `tools` | `Record<string, any>` | No | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `Record<string, any>` | Yes | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `Record<string, any>` | Yes | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `number` | Yes | Zaraz internal version of the config. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZarazZarazConfigReturn().load({ zone_id: 'zone_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZarazZarazConfigReturnEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZarazZarazHistoryEntity

```ts
const zaraz_zaraz_history = client.ZarazZarazHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZarazZarazHistory().list({ zone_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZarazZarazHistoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZarazZarazWorkflowEntity

```ts
const zaraz_zaraz_workflow = client.ZarazZarazWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `string` | No | Zaraz workflow. |
| `success` | `boolean` | Yes | Whether the API call was successful. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZarazZarazWorkflow().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZarazZarazWorkflow().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZarazZarazWorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZoneSettingEntity

```ts
const zone_setting = client.ZoneSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `id` | `string` | No |  |
| `messages` | `any[]` | Yes |  |
| `result` | `Record<string, any>` | No | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `boolean` | Yes | Whether the API call was successful |
| `value` | `Record<string, any>` | Yes | Value of the zone setting. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZoneSetting().list({ zone_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ZoneSetting().load({ id: 'zone_setting_id', zone_id: 'zone_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZoneSetting().update({
  id: 'zone_setting_id',
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZoneSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZonesZoneSettingsResponseCollectionEntity

```ts
const zones_zone_settings_response_collection = client.ZonesZoneSettingsResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `any[]` | Yes |  |
| `messages` | `any[]` | Yes |  |
| `result` | `any[]` | No |  |
| `success` | `boolean` | Yes | Whether the API call was successful |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZonesZoneSettingsResponseCollection().list({ zone_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ZonesZoneSettingsResponseCollection().update({
  zone_id: 'zone_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CloudflareZoneSettingsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new CloudflareZoneSettingsSDK({
  feature: {
    test: { active: true },
  }
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

