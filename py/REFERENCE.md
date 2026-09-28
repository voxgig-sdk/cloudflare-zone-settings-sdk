# CloudflareZoneSettings Python SDK Reference

Complete API reference for the CloudflareZoneSettings Python SDK.


## CloudflareZoneSettingsSDK

### Constructor

```python
from cloudflarezonesettings_sdk import CloudflareZoneSettingsSDK

client = CloudflareZoneSettingsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudflareZoneSettingsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CloudflareZoneSettingsSDK.test()
```


### Instance Methods

#### `CacheSettingsOriginH2MaxStreamsResponseValue(data=None)`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance. Pass `None` for no initial data.

#### `Config(data=None)`

Create a new `ConfigEntity` instance. Pass `None` for no initial data.

#### `CsamConfigServiceCsamScannerSingle(data=None)`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance. Pass `None` for no initial data.

#### `Default(data=None)`

Create a new `DefaultEntity` instance. Pass `None` for no initial data.

#### `GoogleTagGateway(data=None)`

Create a new `GoogleTagGatewayEntity` instance. Pass `None` for no initial data.

#### `Nel(data=None)`

Create a new `NelEntity` instance. Pass `None` for no initial data.

#### `Rum(data=None)`

Create a new `RumEntity` instance. Pass `None` for no initial data.

#### `Zaraz(data=None)`

Create a new `ZarazEntity` instance. Pass `None` for no initial data.

#### `ZarazZarazConfig(data=None)`

Create a new `ZarazZarazConfigEntity` instance. Pass `None` for no initial data.

#### `ZarazZarazConfigHistory(data=None)`

Create a new `ZarazZarazConfigHistoryEntity` instance. Pass `None` for no initial data.

#### `ZarazZarazConfigReturn(data=None)`

Create a new `ZarazZarazConfigReturnEntity` instance. Pass `None` for no initial data.

#### `ZarazZarazHistory(data=None)`

Create a new `ZarazZarazHistoryEntity` instance. Pass `None` for no initial data.

#### `ZarazZarazWorkflow(data=None)`

Create a new `ZarazZarazWorkflowEntity` instance. Pass `None` for no initial data.

#### `ZoneSetting(data=None)`

Create a new `ZoneSettingEntity` instance. Pass `None` for no initial data.

#### `ZonesZoneSettingsResponseCollection(data=None)`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CacheSettingsOriginH2MaxStreamsResponseValueEntity

```python
cache_settings_origin_h2_max_streams_response_value = client.CacheSettingsOriginH2MaxStreamsResponseValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No | Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `int` | Yes | Value of the Origin H2 Max Streams Setting. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CacheSettingsOriginH2MaxStreamsResponseValue().list({"zone_id": "example"})
for cache_settings_origin_h2_max_streams_response_value in results:
    print(cache_settings_origin_h2_max_streams_response_value)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CacheSettingsOriginH2MaxStreamsResponseValue().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CacheSettingsOriginH2MaxStreamsResponseValueEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ConfigEntity

```python
config = client.Config()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `Any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Config().list({"zone_id": "example"})
for config in results:
    print(config)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CsamConfigServiceCsamScannerSingleEntity

```python
csam_config_service_csam_scanner_single = client.CsamConfigServiceCsamScannerSingle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No | The feature identifier. |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No | CSAM Scanner configuration for a zone. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `dict` | No | Writable CSAM Scanner feature configuration values. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CsamConfigServiceCsamScannerSingle().list({"zone_id": "example"})
for csam_config_service_csam_scanner_single in results:
    print(csam_config_service_csam_scanner_single)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CsamConfigServiceCsamScannerSingle().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CsamConfigServiceCsamScannerSingleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DefaultEntity

```python
default = client.Default()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `Any` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Default().list({"zone_id": "example"})
for default in results:
    print(default)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DefaultEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GoogleTagGatewayEntity

```python
google_tag_gateway = client.GoogleTagGateway()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GoogleTagGateway().list({"zone_id": "example"})
for google_tag_gateway in results:
    print(google_tag_gateway)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.GoogleTagGateway().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GoogleTagGatewayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NelEntity

```python
nel = client.Nel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | Yes | A zone-scoped NEL configuration setting. |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `dict` | Yes | The NEL configuration value. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Nel().list({"zone_id": "example"})
for nel in results:
    print(nel)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Nel().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RumEntity

```python
rum = client.Rum()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |
| `value` | `str` | No | Value can either be On or Off. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Rum().list({"zone_id": "example"})
for rum in results:
    print(rum)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Rum().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RumEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZarazEntity

```python
zaraz = client.Zaraz()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Zaraz().create({
    "zone_id": "example_zone_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZarazZarazConfigEntity

```python
zaraz_zaraz_config = client.ZarazZarazConfig()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZarazZarazConfig().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZarazZarazConfigHistoryEntity

```python
zaraz_zaraz_config_history = client.ZarazZarazConfigHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No | Object where keys are numeric configuration IDs. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZarazZarazConfigHistory().list({"zone_id": "example", "ids": []})
for zaraz_zaraz_config_history in results:
    print(zaraz_zaraz_config_history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazConfigHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZarazZarazConfigReturnEntity

```python
zaraz_zaraz_config_return = client.ZarazZarazConfigReturn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `analytics` | `dict` | No | Cloudflare Monitoring settings. |
| `consent` | `dict` | Yes | Consent management configuration. |
| `dataLayer` | `bool` | Yes | Data layer compatibility mode enabled. |
| `debugKey` | `str` | Yes | The key for Zaraz debug mode. |
| `historyChange` | `bool` | No | Single Page Application support enabled. |
| `settings` | `dict` | Yes | General Zaraz settings. |
| `tools` | `dict` | No | Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object. |
| `triggers` | `dict` | Yes | Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration. |
| `variables` | `dict` | Yes | Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. |
| `zarazVersion` | `int` | Yes | Zaraz internal version of the config. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZarazZarazConfigReturn().load({"zone_id": "zone_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazConfigReturnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZarazZarazHistoryEntity

```python
zaraz_zaraz_history = client.ZarazZarazHistory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZarazZarazHistory().list({"zone_id": "example"})
for zaraz_zaraz_history in results:
    print(zaraz_zaraz_history)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazHistoryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZarazZarazWorkflowEntity

```python
zaraz_zaraz_workflow = client.ZarazZarazWorkflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `str` | No | Zaraz workflow. |
| `success` | `bool` | Yes | Whether the API call was successful. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZarazZarazWorkflow().list({"zone_id": "example"})
for zaraz_zaraz_workflow in results:
    print(zaraz_zaraz_workflow)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZarazZarazWorkflow().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZarazZarazWorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZoneSettingEntity

```python
zone_setting = client.ZoneSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `id` | `str` | No |  |
| `messages` | `list` | Yes |  |
| `result` | `dict` | No | Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services. |
| `success` | `bool` | Yes | Whether the API call was successful |
| `value` | `dict` | Yes | Value of the zone setting. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZoneSetting().list({"zone_id": "example"})
for zone_setting in results:
    print(zone_setting)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ZoneSetting().load({"id": "zone_setting_id", "zone_id": "zone_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZoneSetting().update({
    "id": "zone_setting_id",
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZoneSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZonesZoneSettingsResponseCollectionEntity

```python
zones_zone_settings_response_collection = client.ZonesZoneSettingsResponseCollection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errors` | `list` | Yes |  |
| `messages` | `list` | Yes |  |
| `result` | `list` | No |  |
| `success` | `bool` | Yes | Whether the API call was successful |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZonesZoneSettingsResponseCollection().list({"zone_id": "example"})
for zones_zone_settings_response_collection in results:
    print(zones_zone_settings_response_collection)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ZonesZoneSettingsResponseCollection().update({
    "zone_id": "zone_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZonesZoneSettingsResponseCollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = CloudflareZoneSettingsSDK({
    "feature": {
        "test": {"active": True},
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

