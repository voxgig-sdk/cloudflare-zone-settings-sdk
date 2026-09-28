# CloudflareZoneSettings TypeScript SDK



The TypeScript SDK for the CloudflareZoneSettings API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.CacheSettingsOriginH2MaxStreamsResponseValue()` — each with a small set of operations (`list`, `load`, `create`, `update`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudflare-zone-settings-sdk/releases](https://github.com/voxgig-sdk/cloudflare-zone-settings-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { CloudflareZoneSettingsSDK } from '@voxgig-sdk/cloudflare-zone-settings-sdk'

const client = new CloudflareZoneSettingsSDK({
  apikey: process.env.CLOUDFLARE_ZONE_SETTINGS_APIKEY,
})
```

### 2. List cachesettingsoriginh2maxstreamsresponsevalue records

`list()` resolves to an array of CacheSettingsOriginH2MaxStreamsResponseValue ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const cachesettingsoriginh2maxstreamsresponsevalues = await client.CacheSettingsOriginH2MaxStreamsResponseValue().list({ zone_id: "example" })

for (const cachesettingsoriginh2maxstreamsresponsevalue of cachesettingsoriginh2maxstreamsresponsevalues) {
  console.log(cachesettingsoriginh2maxstreamsresponsevalue)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.CacheSettingsOriginH2MaxStreamsResponseValue().update({
  zone_id: 'example_zone_id',
  errors: [],
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const zarazzarazhistorys = await client.ZarazZarazHistory().list()
  console.log(zarazzarazhistorys)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = CloudflareZoneSettingsSDK.test()

const zarazzarazhistory = await client.ZarazZarazHistory().list()
// zarazzarazhistory is the entity, populated with mock response data
// — call zarazzarazhistory.data() for the record itself
console.log(zarazzarazhistory)
```

You can also use the instance method:

```ts
const client = new CloudflareZoneSettingsSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.ZarazZarazHistory()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new CloudflareZoneSettingsSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### CloudflareZoneSettingsSDK

#### Constructor

```ts
new CloudflareZoneSettingsSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `CacheSettingsOriginH2MaxStreamsResponseValue(data?)` | `CacheSettingsOriginH2MaxStreamsResponseValueEntity` | Create a CacheSettingsOriginH2MaxStreamsResponseValue entity instance. |
| `Config(data?)` | `ConfigEntity` | Create a Config entity instance. |
| `CsamConfigServiceCsamScannerSingle(data?)` | `CsamConfigServiceCsamScannerSingleEntity` | Create a CsamConfigServiceCsamScannerSingle entity instance. |
| `Default(data?)` | `DefaultEntity` | Create a Default entity instance. |
| `GoogleTagGateway(data?)` | `GoogleTagGatewayEntity` | Create a GoogleTagGateway entity instance. |
| `Nel(data?)` | `NelEntity` | Create a Nel entity instance. |
| `Rum(data?)` | `RumEntity` | Create a Rum entity instance. |
| `Zaraz(data?)` | `ZarazEntity` | Create a Zaraz entity instance. |
| `ZarazZarazConfig(data?)` | `ZarazZarazConfigEntity` | Create a ZarazZarazConfig entity instance. |
| `ZarazZarazConfigHistory(data?)` | `ZarazZarazConfigHistoryEntity` | Create a ZarazZarazConfigHistory entity instance. |
| `ZarazZarazConfigReturn(data?)` | `ZarazZarazConfigReturnEntity` | Create a ZarazZarazConfigReturn entity instance. |
| `ZarazZarazHistory(data?)` | `ZarazZarazHistoryEntity` | Create a ZarazZarazHistory entity instance. |
| `ZarazZarazWorkflow(data?)` | `ZarazZarazWorkflowEntity` | Create a ZarazZarazWorkflow entity instance. |
| `ZoneSetting(data?)` | `ZoneSettingEntity` | Create a ZoneSetting entity instance. |
| `ZonesZoneSettingsResponseCollection(data?)` | `ZonesZoneSettingsResponseCollectionEntity` | Create a ZonesZoneSettingsResponseCollection entity instance. |
| `tester(testopts?, sdkopts?)` | `CloudflareZoneSettingsSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `CloudflareZoneSettingsSDK.test(testopts?, sdkopts?)` | `CloudflareZoneSettingsSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): CloudflareZoneSettingsSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### CacheSettingsOriginH2MaxStreamsResponseValue

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | Whether the API call was successful. |
| `value` | Value of the Origin H2 Max Streams Setting. |

Operations: list, update.

API path: `/zones/{zone_id}/settings/origin_h2_max_streams`

#### Config

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

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

Operations: list, update.

API path: `/zones/{zone_id}/settings/csam_scanner_third_party`

#### Default

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/zones/{zone_id}/settings/zaraz/default`

#### GoogleTagGateway

| Field | Description |
| --- | --- |

Operations: list, update.

API path: `/zones/{zone_id}/settings/google-tag-gateway/config`

#### Nel

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | A zone-scoped NEL configuration setting. |
| `success` | Whether the API call was successful. |
| `value` | The NEL configuration value. |

Operations: list, update.

API path: `/zones/{zone_id}/settings/nel`

#### Rum

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |
| `value` | Value can either be On or Off. |

Operations: list, update.

API path: `/zones/{zone_id}/settings/rum`

#### Zaraz

| Field | Description |
| --- | --- |

Operations: create.

API path: `/zones/{zone_id}/settings/zaraz/publish`

#### ZarazZarazConfig

| Field | Description |
| --- | --- |

Operations: update.

API path: `/zones/{zone_id}/settings/zaraz/config`

#### ZarazZarazConfigHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Object where keys are numeric configuration IDs. |
| `success` | Whether the API call was successful. |

Operations: list.

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

Operations: load.

API path: `/zones/{zone_id}/settings/zaraz/export`

#### ZarazZarazHistory

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful. |

Operations: list.

API path: `/zones/{zone_id}/settings/zaraz/history`

#### ZarazZarazWorkflow

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` | Zaraz workflow. |
| `success` | Whether the API call was successful. |

Operations: list, update.

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

Operations: list, load, update.

API path: `/zones/{zone_id}/settings/automatic_platform_optimization`

#### ZonesZoneSettingsResponseCollection

| Field | Description |
| --- | --- |
| `errors` |  |
| `messages` |  |
| `result` |  |
| `success` | Whether the API call was successful |

Operations: list, update.

API path: `/zones/{zone_id}/settings`



## Entities


### CacheSettingsOriginH2MaxStreamsResponseValue

Create an instance: `const cache_settings_origin_h2_max_streams_response_value = client.CacheSettingsOriginH2MaxStreamsResponseValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `number` | Value of the Origin H2 Max Streams Setting. |

#### Example: List

```ts
const cache_settings_origin_h2_max_streams_response_values = await client.CacheSettingsOriginH2MaxStreamsResponseValue().list({ zone_id: "example" })
```


### Config

Create an instance: `const config = client.Config()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const configs = await client.Config().list({ zone_id: "example" })
```


### CsamConfigServiceCsamScannerSingle

Create an instance: `const csam_config_service_csam_scanner_single = client.CsamConfigServiceCsamScannerSingle()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` | The feature identifier. |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | CSAM Scanner configuration for a zone. |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `Record<string, any>` | Writable CSAM Scanner feature configuration values. |

#### Example: List

```ts
const csam_config_service_csam_scanner_singles = await client.CsamConfigServiceCsamScannerSingle().list({ zone_id: "example" })
```


### Default

Create an instance: `const default_ = client.Default()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const default_s = await client.Default().list({ zone_id: "example" })
```


### GoogleTagGateway

Create an instance: `const google_tag_gateway = client.GoogleTagGateway()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Example: List

```ts
const google_tag_gateways = await client.GoogleTagGateway().list({ zone_id: "example" })
```


### Nel

Create an instance: `const nel = client.Nel()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | A zone-scoped NEL configuration setting. |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `Record<string, any>` | The NEL configuration value. |

#### Example: List

```ts
const nels = await client.Nel().list({ zone_id: "example" })
```


### Rum

Create an instance: `const rum = client.Rum()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `string` | Value can either be On or Off. |

#### Example: List

```ts
const rums = await client.Rum().list({ zone_id: "example" })
```


### Zaraz

Create an instance: `const zaraz = client.Zaraz()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const zaraz = await client.Zaraz().create({
  zone_id: 'example_zone_id',
})
```


### ZarazZarazConfig

Create an instance: `const zaraz_zaraz_config = client.ZarazZarazConfig()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ZarazZarazConfigHistory

Create an instance: `const zaraz_zaraz_config_history = client.ZarazZarazConfigHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Object where keys are numeric configuration IDs. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const zaraz_zaraz_config_historys = await client.ZarazZarazConfigHistory().list({ zone_id: "example", ids: [] })
```


### ZarazZarazConfigReturn

Create an instance: `const zaraz_zaraz_config_return = client.ZarazZarazConfigReturn()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analytics` | `Record<string, any>` | Cloudflare Monitoring settings. |
| `consent` | `Record<string, any>` | Consent management configuration. |
| `dataLayer` | `boolean` | Data layer compatibility mode enabled. |
| `debugKey` | `string` | The key for Zaraz debug mode. |
| `historyChange` | `boolean` | Single Page Application support enabled. |
| `settings` | `Record<string, any>` | General Zaraz settings. |
| `tools` | `Record<string, any>` | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `Record<string, any>` | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `Record<string, any>` | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `number` | Zaraz internal version of the config. |

#### Example: Load

```ts
const zaraz_zaraz_config_return = await client.ZarazZarazConfigReturn().load({ zone_id: 'zone_id' })
```


### ZarazZarazHistory

Create an instance: `const zaraz_zaraz_history = client.ZarazZarazHistory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const zaraz_zaraz_historys = await client.ZarazZarazHistory().list({ zone_id: "example" })
```


### ZarazZarazWorkflow

Create an instance: `const zaraz_zaraz_workflow = client.ZarazZarazWorkflow()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `string` | Zaraz workflow. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```ts
const zaraz_zaraz_workflows = await client.ZarazZarazWorkflow().list({ zone_id: "example" })
```


### ZoneSetting

Create an instance: `const zone_setting = client.ZoneSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `id` | `string` |  |
| `messages` | `any[]` |  |
| `result` | `Record<string, any>` | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `boolean` | Whether the API call was successful |
| `value` | `Record<string, any>` | Value of the zone setting. |

#### Example: Load

```ts
const zone_setting = await client.ZoneSetting().load({ id: 'zone_setting_id', zone_id: 'zone_id' })
```

#### Example: List

```ts
const zone_settings = await client.ZoneSetting().list({ zone_id: "example" })
```


### ZonesZoneSettingsResponseCollection

Create an instance: `const zones_zone_settings_response_collection = client.ZonesZoneSettingsResponseCollection()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `any[]` |  |
| `messages` | `any[]` |  |
| `result` | `any[]` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```ts
const zones_zone_settings_response_collections = await client.ZonesZoneSettingsResponseCollection().list({ zone_id: "example" })
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
cloudflare-zone-settings/
├── src/
│   ├── CloudflareZoneSettingsSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { CloudflareZoneSettingsSDK } from '@voxgig-sdk/cloudflare-zone-settings-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const zarazzarazhistory = client.ZarazZarazHistory()
await zarazzarazhistory.list()

// zarazzarazhistory.data() now returns the zarazzarazhistory data from the last `list`
// zarazzarazhistory.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
