# CloudflareZoneSettings Lua SDK



The Lua SDK for the CloudflareZoneSettings API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:CacheSettingsOriginH2MaxStreamsResponseValue()` — each with the same small set of operations (`list`, `load`, `create`, `update`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudflare-zone-settings-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudflare-zone-settings_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDFLARE_ZONE_SETTINGS_APIKEY"),
})
```

### 2. List cachesettingsoriginh2maxstreamsresponsevalue records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local cachesettingsoriginh2maxstreamsresponsevalues, err = client:CacheSettingsOriginH2MaxStreamsResponseValue():list()
if err then error(err) end

for _, item in ipairs(cachesettingsoriginh2maxstreamsresponsevalues) do
  print(item)
end
```

### 4. Create, update, and remove

```lua
-- Update
client:CacheSettingsOriginH2MaxStreamsResponseValue():update({ zone_id = "example_zone_id", errors = {} })

```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local zarazzarazhistorys, err = client:ZarazZarazHistory():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:ZarazZarazHistory():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### CloudflareZoneSettingsSDK

```lua
local sdk = require("cloudflare-zone-settings_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareZoneSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local zaraz_zaraz_config_return, err = client:ZarazZarazConfigReturn():load()
    if err then error(err) end
    -- zaraz_zaraz_config_return is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local cache_settings_origin_h2_max_streams_response_value = client:CacheSettingsOriginH2MaxStreamsResponseValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `number` | Value of the Origin H2 Max Streams Setting. |

#### Example: List

```lua
local cache_settings_origin_h2_max_streams_response_values, err = client:CacheSettingsOriginH2MaxStreamsResponseValue():list()
```


### Config

Create an instance: `local config = client:Config(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local configs, err = client:Config():list()
```


### CsamConfigServiceCsamScannerSingle

Create an instance: `local csam_config_service_csam_scanner_single = client:CsamConfigServiceCsamScannerSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` | The feature identifier. |
| `messages` | `table` |  |
| `result` | `table` | CSAM Scanner configuration for a zone. |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `table` | Writable CSAM Scanner feature configuration values. |

#### Example: List

```lua
local csam_config_service_csam_scanner_singles, err = client:CsamConfigServiceCsamScannerSingle():list()
```


### Default

Create an instance: `local default = client:Default(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `any` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local defaults, err = client:Default():list()
```


### GoogleTagGateway

Create an instance: `local google_tag_gateway = client:GoogleTagGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Example: List

```lua
local google_tag_gateways, err = client:GoogleTagGateway():list()
```


### Nel

Create an instance: `local nel = client:Nel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | A zone-scoped NEL configuration setting. |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `table` | The NEL configuration value. |

#### Example: List

```lua
local nels, err = client:Nel():list()
```


### Rum

Create an instance: `local rum = client:Rum(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |
| `value` | `string` | Value can either be On or Off. |

#### Example: List

```lua
local rums, err = client:Rum():list()
```


### Zaraz

Create an instance: `local zaraz = client:Zaraz(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local zaraz, err = client:Zaraz():create({
  zone_id = "example_zone_id", -- string
})
```


### ZarazZarazConfig

Create an instance: `local zaraz_zaraz_config = client:ZarazZarazConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ZarazZarazConfigHistory

Create an instance: `local zaraz_zaraz_config_history = client:ZarazZarazConfigHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` | Object where keys are numeric configuration IDs. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local zaraz_zaraz_config_historys, err = client:ZarazZarazConfigHistory():list()
```


### ZarazZarazConfigReturn

Create an instance: `local zaraz_zaraz_config_return = client:ZarazZarazConfigReturn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analytics` | `table` | Cloudflare Monitoring settings. |
| `consent` | `table` | Consent management configuration. |
| `dataLayer` | `boolean` | Data layer compatibility mode enabled. |
| `debugKey` | `string` | The key for Zaraz debug mode. |
| `historyChange` | `boolean` | Single Page Application support enabled. |
| `settings` | `table` | General Zaraz settings. |
| `tools` | `table` | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `table` | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `table` | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `number` | Zaraz internal version of the config. |

#### Example: Load

```lua
local zaraz_zaraz_config_return, err = client:ZarazZarazConfigReturn():load({ zone_id = "zone_id" })
```


### ZarazZarazHistory

Create an instance: `local zaraz_zaraz_history = client:ZarazZarazHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local zaraz_zaraz_historys, err = client:ZarazZarazHistory():list()
```


### ZarazZarazWorkflow

Create an instance: `local zaraz_zaraz_workflow = client:ZarazZarazWorkflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `string` | Zaraz workflow. |
| `success` | `boolean` | Whether the API call was successful. |

#### Example: List

```lua
local zaraz_zaraz_workflows, err = client:ZarazZarazWorkflow():list()
```


### ZoneSetting

Create an instance: `local zone_setting = client:ZoneSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `id` | `string` |  |
| `messages` | `table` |  |
| `result` | `table` | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `boolean` | Whether the API call was successful |
| `value` | `table` | Value of the zone setting. |

#### Example: Load

```lua
local zone_setting, err = client:ZoneSetting():load({ id = "zone_setting_id", zone_id = "zone_id" })
```

#### Example: List

```lua
local zone_settings, err = client:ZoneSetting():list()
```


### ZonesZoneSettingsResponseCollection

Create an instance: `local zones_zone_settings_response_collection = client:ZonesZoneSettingsResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `table` |  |
| `messages` | `table` |  |
| `result` | `table` |  |
| `success` | `boolean` | Whether the API call was successful |

#### Example: List

```lua
local zones_zone_settings_response_collections, err = client:ZonesZoneSettingsResponseCollection():list()
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudflare-zone-settings_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── schema.lua               -- Generated option + entity specs
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudflare-zone-settings_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local zarazzarazhistory = client:ZarazZarazHistory()
zarazzarazhistory:list()

-- zarazzarazhistory:data_get() now returns the zarazzarazhistory data from the last list
-- zarazzarazhistory:match_get() returns the last match criteria
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
