# Cloudflare Zone Settings

Cloudflare zone settings: performance, transformations, Zaraz, image resizing, fonts, protocol behavior, and general setting values.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 15 entities and 46 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [CacheSettingsOriginH2MaxStreamsResponseValue](docs/api/cache_settings_origin_h2_max_streams_response_value.html)

Results: Get Origin H2 Max Streams setting response.; Change Origin H2 Max Streams setting response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `result`: Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it. Note that if your origin does not support H2 multiplexing, 5xx errors may be observed, particularly 520s. Also note that the default value is `100` for all plan types except Enterprise where it is `1`. `1` means that H2 multiplexing is disabled.
- `success`: Whether the API call was successful.
- `value`: Value of the Origin H2 Max Streams Setting.

### [Config](docs/api/config.html)

Results: Get Zaraz configuration response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [CsamConfigServiceCsamScannerSingle](docs/api/csam_config_service_csam_scanner_single.html)

Results: CSAM Scanner setting response; CSAM Scanner setting updated.

SDK operations: `list`, `update`.

Key fields to recognise:

- `id`: The feature identifier.
- `result`: CSAM Scanner configuration for a zone.
- `success`: Whether the API call was successful.
- `value`: The CSAM Scanner feature configuration values. Contains the notification email and scanning enablement settings.

### [Default](docs/api/default.html)

Results: Get Zaraz default configuration response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [GoogleTagGateway](docs/api/google_tag_gateway.html)

Results: Get Google Tag Gateway configuration response.; Update Google Tag Gateway configuration response.

SDK operations: `list`, `update`.

### [Nel](docs/api/nel.html)

Results: NEL setting response; Updated NEL setting response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `result`: A zone-scoped NEL configuration setting.
- `success`: Whether the API call was successful.
- `value`: The NEL configuration value.

### [Rum](docs/api/rum.html)

Results: Rum Status.; Rum toggled on/off for an existing zone.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful.
- `value`: Current state of RUM. Returns On, Off, or Manual.

### [Zaraz](docs/api/zaraz.html)

Results: Update Zaraz workflow response.

SDK operations: `create`.

### [ZarazZarazConfig](docs/api/zaraz_zaraz_config.html)

Results: Update Zaraz configuration response.; Restore Zaraz historical configuration by ID response.

SDK operations: `update`.

### [ZarazZarazConfigHistory](docs/api/zaraz_zaraz_config_history.html)

Results: Get Zaraz historical configurations by ID(s) response.

SDK operations: `list`.

Key fields to recognise:

- `result`: Object where keys are numeric configuration IDs.
- `success`: Whether the API call was successful.

### [ZarazZarazConfigReturn](docs/api/zaraz_zaraz_config_return.html)

Results: Get Zaraz configuration response.

SDK operations: `load`.

Key fields to recognise:

- `analytics`: Cloudflare Monitoring settings.
- `consent`: Consent management configuration.
- `dataLayer`: Data layer compatibility mode enabled.
- `debugKey`: The key for Zaraz debug mode.
- `historyChange`: Single Page Application support enabled.

### [ZarazZarazHistory](docs/api/zaraz_zaraz_history.html)

Results: List Zaraz historical configuration records response.

SDK operations: `list`.

Key fields to recognise:

- `success`: Whether the API call was successful.

### [ZarazZarazWorkflow](docs/api/zaraz_zaraz_workflow.html)

Results: Get Zaraz workflow response.; Update Zaraz workflow response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `result`: Zaraz workflow.
- `success`: Whether the API call was successful.

### [ZoneSetting](docs/api/zone_setting.html)

Results: Get Automatic Platform Optimization setting response.; Get Binary AST setting response.; Get Cloudflare Fonts setting response.; Get HTTP/2 Prioritization setting response.; Get Image Resizing setting response.; Get Cloudflare Speed Brain setting response.; Get Image Transformations Allowed Origins setting response.; Get Image Transformations C2PA setting response.; Get Transformations configuration response.; Get zone setting response; Get aegis setting response.; Get Origin Max HTTP Version setting response.; Edit zone setting response; Change aegis setting response.; Change Automatic Platform Optimization setting response.; Change Binary AST setting response.; Change Cloudflare Fonts setting response.; Change HTTP/2 Prioritization setting response.; Change Image Resizing setting response.; Change Origin Max HTTP Version setting response.; Cloudflare Speed Brain setting response.; Change Image Transformations Allowed Origins setting response.; Change Image Transformations C2PA setting response.; Change Transformations configuration response.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `id`: Identifier of the zone setting.
- `result`: Controls Automatic Platform Optimization (APO) for WordPress.
- `success`: Whether the API call was successful.
- `value`: Current value of the zone setting.

### [ZonesZoneSettingsResponseCollection](docs/api/zones_zone_settings_response_collection.html)

Results: Get all Zone settings response; Edit zone settings info response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `success`: Whether the API call was successful

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [CacheSettingsOriginH2MaxStreamsResponseValue](docs/api/cache_settings_origin_h2_max_streams_response_value.html) | `list` | `GET /zones/{zone_id}/settings/origin_h2_max_streams` | Required |
| [CacheSettingsOriginH2MaxStreamsResponseValue](docs/api/cache_settings_origin_h2_max_streams_response_value.html) | `update` | `PATCH /zones/{zone_id}/settings/origin_h2_max_streams` | Required |
| [Config](docs/api/config.html) | `list` | `GET /zones/{zone_id}/settings/zaraz/config` | Required |
| [CsamConfigServiceCsamScannerSingle](docs/api/csam_config_service_csam_scanner_single.html) | `list` | `GET /zones/{zone_id}/settings/csam_scanner_third_party` | Required |
| [CsamConfigServiceCsamScannerSingle](docs/api/csam_config_service_csam_scanner_single.html) | `update` | `PATCH /zones/{zone_id}/settings/csam_scanner_third_party` | Required |
| [Default](docs/api/default.html) | `list` | `GET /zones/{zone_id}/settings/zaraz/default` | Required |
| [GoogleTagGateway](docs/api/google_tag_gateway.html) | `list` | `GET /zones/{zone_id}/settings/google-tag-gateway/config` | Required |
| [GoogleTagGateway](docs/api/google_tag_gateway.html) | `update` | `PUT /zones/{zone_id}/settings/google-tag-gateway/config` | Required |
| [Nel](docs/api/nel.html) | `list` | `GET /zones/{zone_id}/settings/nel` | Required |
| [Nel](docs/api/nel.html) | `update` | `PATCH /zones/{zone_id}/settings/nel` | Required |
| [Rum](docs/api/rum.html) | `list` | `GET /zones/{zone_id}/settings/rum` | Required |
| [Rum](docs/api/rum.html) | `update` | `PATCH /zones/{zone_id}/settings/rum` | Required |
| [Zaraz](docs/api/zaraz.html) | `create` | `POST /zones/{zone_id}/settings/zaraz/publish` | Required |
| [ZarazZarazConfig](docs/api/zaraz_zaraz_config.html) | `update` | `PUT /zones/{zone_id}/settings/zaraz/config` | Required |
| [ZarazZarazConfig](docs/api/zaraz_zaraz_config.html) | `update` | `PUT /zones/{zone_id}/settings/zaraz/history` | Required |
| [ZarazZarazConfigHistory](docs/api/zaraz_zaraz_config_history.html) | `list` | `GET /zones/{zone_id}/settings/zaraz/history/configs` | Required |
| [ZarazZarazConfigReturn](docs/api/zaraz_zaraz_config_return.html) | `load` | `GET /zones/{zone_id}/settings/zaraz/export` | Required |
| [ZarazZarazHistory](docs/api/zaraz_zaraz_history.html) | `list` | `GET /zones/{zone_id}/settings/zaraz/history` | Required |
| [ZarazZarazWorkflow](docs/api/zaraz_zaraz_workflow.html) | `list` | `GET /zones/{zone_id}/settings/zaraz/workflow` | Required |
| [ZarazZarazWorkflow](docs/api/zaraz_zaraz_workflow.html) | `update` | `PUT /zones/{zone_id}/settings/zaraz/workflow` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/automatic_platform_optimization` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/binary_ast` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/fonts` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/h2_prioritization` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/image_resizing` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/speed_brain` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/transformations_allowed_origins` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/transformations_c2pa` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `list` | `GET /zones/{zone_id}/settings/transformations_config` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `load` | `GET /zones/{zone_id}/settings/{setting_id}` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `load` | `GET /zones/{zone_id}/settings/aegis` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `load` | `GET /zones/{zone_id}/settings/origin_max_http_version` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/{setting_id}` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/aegis` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/automatic_platform_optimization` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/binary_ast` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/fonts` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/h2_prioritization` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/image_resizing` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/origin_max_http_version` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/speed_brain` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/transformations_allowed_origins` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/transformations_c2pa` | Required |
| [ZoneSetting](docs/api/zone_setting.html) | `update` | `PATCH /zones/{zone_id}/settings/transformations_config` | Required |
| [ZonesZoneSettingsResponseCollection](docs/api/zones_zone_settings_response_collection.html) | `list` | `GET /zones/{zone_id}/settings` | Required |
| [ZonesZoneSettingsResponseCollection](docs/api/zones_zone_settings_response_collection.html) | `update` | `PATCH /zones/{zone_id}/settings` | Required |

## Connect to the API

- Client API: `https://api.cloudflare.com/client/v4`

The default credential is sent in the `X-Auth-Email` header.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `cloudflare-zone-settings_list`: List records for an entity. Supported entities: `cache_settings_origin_h2_max_streams_response_value`, `config`, `csam_config_service_csam_scanner_single`, `default`, `google_tag_gateway`, `nel`, `rum`, `zaraz_zaraz_config_history`, `zaraz_zaraz_history`, `zaraz_zaraz_workflow`, `zone_setting`, `zones_zone_settings_response_collection`.
- `cloudflare-zone-settings_load`: Load one record for an entity. Supported entities: `zaraz_zaraz_config_return`, `zone_setting`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

