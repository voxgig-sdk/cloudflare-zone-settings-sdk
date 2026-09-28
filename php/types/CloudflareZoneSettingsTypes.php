<?php
declare(strict_types=1);

// Typed models for the CloudflareZoneSettings SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** CacheSettingsOriginH2MaxStreamsResponseValue entity data model. */
class CacheSettingsOriginH2MaxStreamsResponseValue
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
    public int $value;
}

/** Request payload for CacheSettingsOriginH2MaxStreamsResponseValue#list. */
class CacheSettingsOriginH2MaxStreamsResponseValueListMatch
{
    public string $zone_id;
}

/** Request payload for CacheSettingsOriginH2MaxStreamsResponseValue#update. */
class CacheSettingsOriginH2MaxStreamsResponseValueUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?int $value = null;
}

/** Config entity data model. */
class Config
{
    public array $errors;
    public array $messages;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for Config#list. */
class ConfigListMatch
{
    public string $zone_id;
}

/** CsamConfigServiceCsamScannerSingle entity data model. */
class CsamConfigServiceCsamScannerSingle
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public ?array $result = null;
    public bool $success;
    public ?array $value = null;
}

/** Request payload for CsamConfigServiceCsamScannerSingle#list. */
class CsamConfigServiceCsamScannerSingleListMatch
{
    public string $zone_id;
}

/** Request payload for CsamConfigServiceCsamScannerSingle#update. */
class CsamConfigServiceCsamScannerSingleUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?string $id = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?array $value = null;
}

/** Default entity data model. */
class DefaultType
{
    public array $errors;
    public array $messages;
    public mixed $result = null;
    public bool $success;
}

/** Request payload for Default#list. */
class DefaultListMatch
{
    public string $zone_id;
}

/** GoogleTagGateway entity data model. */
class GoogleTagGateway
{
}

/** Request payload for GoogleTagGateway#list. */
class GoogleTagGatewayListMatch
{
    public string $zone_id;
}

/** Request payload for GoogleTagGateway#update. */
class GoogleTagGatewayUpdateData
{
    public string $zone_id;
}

/** Nel entity data model. */
class Nel
{
    public array $errors;
    public array $messages;
    public array $result;
    public bool $success;
    public array $value;
}

/** Request payload for Nel#list. */
class NelListMatch
{
    public string $zone_id;
}

/** Request payload for Nel#update. */
class NelUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?array $value = null;
}

/** Rum entity data model. */
class Rum
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
    public ?string $value = null;
}

/** Request payload for Rum#list. */
class RumListMatch
{
    public string $zone_id;
}

/** Request payload for Rum#update. */
class RumUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?string $value = null;
}

/** Zaraz entity data model. */
class Zaraz
{
}

/** Request payload for Zaraz#create. */
class ZarazCreateData
{
    public string $zone_id;
}

/** ZarazZarazConfig entity data model. */
class ZarazZarazConfig
{
}

/** Request payload for ZarazZarazConfig#update. */
class ZarazZarazConfigUpdateData
{
    public string $zone_id;
}

/** ZarazZarazConfigHistory entity data model. */
class ZarazZarazConfigHistory
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for ZarazZarazConfigHistory#list. */
class ZarazZarazConfigHistoryListMatch
{
    public string $zone_id;
    public array $ids;
}

/** ZarazZarazConfigReturn entity data model. */
class ZarazZarazConfigReturn
{
    public ?array $analytics = null;
    public array $consent;
    public bool $dataLayer;
    public string $debugKey;
    public ?bool $historyChange = null;
    public array $settings;
    public ?array $tools = null;
    public array $triggers;
    public array $variables;
    public int $zarazVersion;
}

/** Request payload for ZarazZarazConfigReturn#load. */
class ZarazZarazConfigReturnLoadMatch
{
    public string $zone_id;
}

/** ZarazZarazHistory entity data model. */
class ZarazZarazHistory
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for ZarazZarazHistory#list. */
class ZarazZarazHistoryListMatch
{
    public string $zone_id;
    public ?int $limit = null;
    public ?int $offset = null;
    public ?string $sort_field = null;
    public ?string $sort_order = null;
}

/** ZarazZarazWorkflow entity data model. */
class ZarazZarazWorkflow
{
    public array $errors;
    public array $messages;
    public ?string $result = null;
    public bool $success;
}

/** Request payload for ZarazZarazWorkflow#list. */
class ZarazZarazWorkflowListMatch
{
    public string $zone_id;
}

/** Request payload for ZarazZarazWorkflow#update. */
class ZarazZarazWorkflowUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?string $result = null;
    public ?bool $success = null;
}

/** ZoneSetting entity data model. */
class ZoneSetting
{
    public array $errors;
    public ?string $id = null;
    public array $messages;
    public ?array $result = null;
    public bool $success;
    public array $value;
}

/** Request payload for ZoneSetting#load. */
class ZoneSettingLoadMatch
{
    public ?string $id = null;
    public string $zone_id;
}

/** Request payload for ZoneSetting#list. */
class ZoneSettingListMatch
{
    public string $zone_id;
}

/** Request payload for ZoneSetting#update. */
class ZoneSettingUpdateData
{
    public ?string $id = null;
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
    public ?array $value = null;
}

/** ZonesZoneSettingsResponseCollection entity data model. */
class ZonesZoneSettingsResponseCollection
{
    public array $errors;
    public array $messages;
    public ?array $result = null;
    public bool $success;
}

/** Request payload for ZonesZoneSettingsResponseCollection#list. */
class ZonesZoneSettingsResponseCollectionListMatch
{
    public string $zone_id;
}

/** Request payload for ZonesZoneSettingsResponseCollection#update. */
class ZonesZoneSettingsResponseCollectionUpdateData
{
    public string $zone_id;
    public ?array $errors = null;
    public ?array $messages = null;
    public ?array $result = null;
    public ?bool $success = null;
}

