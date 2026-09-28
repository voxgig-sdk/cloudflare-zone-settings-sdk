# CloudflareZoneSettings Golang SDK



The Golang SDK for the CloudflareZoneSettings API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.CacheSettingsOriginH2MaxStreamsResponseValue(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/cloudflare-zone-settings-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go=../cloudflare-zone-settings-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go"
)

func main() {
    client := sdk.NewCloudflareZoneSettingsSDK(map[string]any{
        "apikey": os.Getenv("CLOUDFLARE_ZONE_SETTINGS_APIKEY"),
    })

    // List cacheSettingsOriginH2MaxStreamsResponseValue records — the value is the array of records itself.
    cacheSettingsOriginH2MaxStreamsResponseValues, err := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range cacheSettingsOriginH2MaxStreamsResponseValues.([]any) {
        fmt.Println(item)
    }

    // Update a cacheSettingsOriginH2MaxStreamsResponseValue.
    updated, err := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).Update(map[string]any{"zone_id": "example_zone_id", "errors": []any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
zarazzarazhistorys, err := client.ZarazZarazHistory(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = zarazzarazhistorys
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

zarazZarazHistory, err := client.ZarazZarazHistory(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(zarazZarazHistory) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCloudflareZoneSettingsSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewCloudflareZoneSettingsSDK

```go
func NewCloudflareZoneSettingsSDK(options map[string]any) *CloudflareZoneSettingsSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareZoneSettingsSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudflareZoneSettingsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `CacheSettingsOriginH2MaxStreamsResponseValue` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a CacheSettingsOriginH2MaxStreamsResponseValue entity instance. |
| `Config` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a Config entity instance. |
| `CsamConfigServiceCsamScannerSingle` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a CsamConfigServiceCsamScannerSingle entity instance. |
| `Default` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a Default entity instance. |
| `GoogleTagGateway` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a GoogleTagGateway entity instance. |
| `Nel` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a Nel entity instance. |
| `Rum` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a Rum entity instance. |
| `Zaraz` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a Zaraz entity instance. |
| `ZarazZarazConfig` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a ZarazZarazConfig entity instance. |
| `ZarazZarazConfigHistory` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a ZarazZarazConfigHistory entity instance. |
| `ZarazZarazConfigReturn` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a ZarazZarazConfigReturn entity instance. |
| `ZarazZarazHistory` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a ZarazZarazHistory entity instance. |
| `ZarazZarazWorkflow` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a ZarazZarazWorkflow entity instance. |
| `ZoneSetting` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a ZoneSetting entity instance. |
| `ZonesZoneSettingsResponseCollection` | `(data map[string]any) CloudflareZoneSettingsEntity` | Create a ZonesZoneSettingsResponseCollection entity instance. |

### Entity interface (CloudflareZoneSettingsEntity)

All entities implement the `CloudflareZoneSettingsEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    cacheSettingsOriginH2MaxStreamsResponseValue, err := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // cacheSettingsOriginH2MaxStreamsResponseValue is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### CacheSettingsOriginH2MaxStreamsResponseValue

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `"success"` | Whether the API call was successful. |
| `"value"` | Value of the Origin H2 Max Streams Setting. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/origin_h2_max_streams`

#### Config

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/settings/zaraz/config`

#### CsamConfigServiceCsamScannerSingle

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` | The feature identifier. |
| `"messages"` |  |
| `"result"` | CSAM Scanner configuration for a zone. |
| `"success"` | Whether the API call was successful. |
| `"value"` | Writable CSAM Scanner feature configuration values. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/csam_scanner_third_party`

#### Default

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

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
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | A zone-scoped NEL configuration setting. |
| `"success"` | Whether the API call was successful. |
| `"value"` | The NEL configuration value. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/nel`

#### Rum

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |
| `"value"` | Value can either be On or Off. |

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
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Object where keys are numeric configuration IDs. |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/settings/zaraz/history/configs`

#### ZarazZarazConfigReturn

| Field | Description |
| --- | --- |
| `"analytics"` | Cloudflare Monitoring settings. |
| `"consent"` | Consent management configuration. |
| `"dataLayer"` | Data layer compatibility mode enabled. |
| `"debugKey"` | The key for Zaraz debug mode. |
| `"historyChange"` | Single Page Application support enabled. |
| `"settings"` | General Zaraz settings. |
| `"tools"` | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `"triggers"` | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `"variables"` | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `"zarazVersion"` | Zaraz internal version of the config. |

Operations: Load.

API path: `/zones/{zone_id}/settings/zaraz/export`

#### ZarazZarazHistory

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful. |

Operations: List.

API path: `/zones/{zone_id}/settings/zaraz/history`

#### ZarazZarazWorkflow

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` | Zaraz workflow. |
| `"success"` | Whether the API call was successful. |

Operations: List, Update.

API path: `/zones/{zone_id}/settings/zaraz/workflow`

#### ZoneSetting

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"id"` |  |
| `"messages"` |  |
| `"result"` | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `"success"` | Whether the API call was successful |
| `"value"` | Value of the zone setting. |

Operations: List, Load, Update.

API path: `/zones/{zone_id}/settings/automatic_platform_optimization`

#### ZonesZoneSettingsResponseCollection

| Field | Description |
| --- | --- |
| `"errors"` |  |
| `"messages"` |  |
| `"result"` |  |
| `"success"` | Whether the API call was successful |

Operations: List, Update.

API path: `/zones/{zone_id}/settings`



## Entities


### CacheSettingsOriginH2MaxStreamsResponseValue

Create an instance: `cacheSettingsOriginH2MaxStreamsResponseValue := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `int` | Value of the Origin H2 Max Streams Setting. |

#### Example: List

```go
cacheSettingsOriginH2MaxStreamsResponseValues, err := client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cacheSettingsOriginH2MaxStreamsResponseValues) // the array of records
```


### Config

Create an instance: `config := client.Config(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
configs, err := client.Config(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(configs) // the array of records
```


### CsamConfigServiceCsamScannerSingle

Create an instance: `csamConfigServiceCsamScannerSingle := client.CsamConfigServiceCsamScannerSingle(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` | The feature identifier. |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | CSAM Scanner configuration for a zone. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `map[string]any` | Writable CSAM Scanner feature configuration values. |

#### Example: List

```go
csamConfigServiceCsamScannerSingles, err := client.CsamConfigServiceCsamScannerSingle(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(csamConfigServiceCsamScannerSingles) // the array of records
```


### Default

Create an instance: `default_ := client.Default(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
default_s, err := client.Default(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(default_s) // the array of records
```


### GoogleTagGateway

Create an instance: `googleTagGateway := client.GoogleTagGateway(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Example: List

```go
googleTagGateways, err := client.GoogleTagGateway(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(googleTagGateways) // the array of records
```


### Nel

Create an instance: `nel := client.Nel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | A zone-scoped NEL configuration setting. |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `map[string]any` | The NEL configuration value. |

#### Example: List

```go
nels, err := client.Nel(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(nels) // the array of records
```


### Rum

Create an instance: `rum := client.Rum(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` |  |
| `success` | `bool` | Whether the API call was successful. |
| `value` | `string` | Value can either be On or Off. |

#### Example: List

```go
rums, err := client.Rum(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rums) // the array of records
```


### Zaraz

Create an instance: `zaraz := client.Zaraz(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Zaraz(nil).Create(map[string]any{
    "zone_id": "example_zone_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ZarazZarazConfig

Create an instance: `zarazZarazConfig := client.ZarazZarazConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### ZarazZarazConfigHistory

Create an instance: `zarazZarazConfigHistory := client.ZarazZarazConfigHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Object where keys are numeric configuration IDs. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
zarazZarazConfigHistorys, err := client.ZarazZarazConfigHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zarazZarazConfigHistorys) // the array of records
```


### ZarazZarazConfigReturn

Create an instance: `zarazZarazConfigReturn := client.ZarazZarazConfigReturn(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `analytics` | `map[string]any` | Cloudflare Monitoring settings. |
| `consent` | `map[string]any` | Consent management configuration. |
| `dataLayer` | `bool` | Data layer compatibility mode enabled. |
| `debugKey` | `string` | The key for Zaraz debug mode. |
| `historyChange` | `bool` | Single Page Application support enabled. |
| `settings` | `map[string]any` | General Zaraz settings. |
| `tools` | `map[string]any` | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `map[string]any` | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `map[string]any` | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `int` | Zaraz internal version of the config. |

#### Example: Load

```go
zarazZarazConfigReturn, err := client.ZarazZarazConfigReturn(nil).Load(map[string]any{"zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zarazZarazConfigReturn) // the loaded record
```


### ZarazZarazHistory

Create an instance: `zarazZarazHistory := client.ZarazZarazHistory(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
zarazZarazHistorys, err := client.ZarazZarazHistory(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zarazZarazHistorys) // the array of records
```


### ZarazZarazWorkflow

Create an instance: `zarazZarazWorkflow := client.ZarazZarazWorkflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `string` | Zaraz workflow. |
| `success` | `bool` | Whether the API call was successful. |

#### Example: List

```go
zarazZarazWorkflows, err := client.ZarazZarazWorkflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zarazZarazWorkflows) // the array of records
```


### ZoneSetting

Create an instance: `zoneSetting := client.ZoneSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `id` | `string` |  |
| `messages` | `[]any` |  |
| `result` | `map[string]any` | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `bool` | Whether the API call was successful |
| `value` | `map[string]any` | Value of the zone setting. |

#### Example: Load

```go
zoneSetting, err := client.ZoneSetting(nil).Load(map[string]any{"id": "zone_setting_id", "zone_id": "zone_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneSetting) // the loaded record
```

#### Example: List

```go
zoneSettings, err := client.ZoneSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zoneSettings) // the array of records
```


### ZonesZoneSettingsResponseCollection

Create an instance: `zonesZoneSettingsResponseCollection := client.ZonesZoneSettingsResponseCollection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `errors` | `[]any` |  |
| `messages` | `[]any` |  |
| `result` | `[]any` |  |
| `success` | `bool` | Whether the API call was successful |

#### Example: List

```go
zonesZoneSettingsResponseCollections, err := client.ZonesZoneSettingsResponseCollection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(zonesZoneSettingsResponseCollections) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/
├── cloudflare-zone-settings.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
zarazzarazhistory := client.ZarazZarazHistory(nil)
zarazzarazhistory.List(nil, nil)

// zarazzarazhistory.Data() now returns the zarazzarazhistory data from the last list
// zarazzarazhistory.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
