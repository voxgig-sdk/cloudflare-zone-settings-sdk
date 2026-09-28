# frozen_string_literal: true

# Typed models for the CloudflareZoneSettings SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# CacheSettingsOriginH2MaxStreamsResponseValue entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [Integer]
CacheSettingsOriginH2MaxStreamsResponseValue = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for CacheSettingsOriginH2MaxStreamsResponseValue#list.
#
# @!attribute [rw] zone_id
#   @return [String]
CacheSettingsOriginH2MaxStreamsResponseValueListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for CacheSettingsOriginH2MaxStreamsResponseValue#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [Integer, nil]
CacheSettingsOriginH2MaxStreamsResponseValueUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Config entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Config = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Config#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ConfigListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# CsamConfigServiceCsamScannerSingle entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [Hash, nil]
CsamConfigServiceCsamScannerSingle = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for CsamConfigServiceCsamScannerSingle#list.
#
# @!attribute [rw] zone_id
#   @return [String]
CsamConfigServiceCsamScannerSingleListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for CsamConfigServiceCsamScannerSingle#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [Hash, nil]
CsamConfigServiceCsamScannerSingleUpdateData = Struct.new(
  :zone_id,
  :errors,
  :id,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Default entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Object, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
Default = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for Default#list.
#
# @!attribute [rw] zone_id
#   @return [String]
DefaultListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# GoogleTagGateway entity data model.
class GoogleTagGateway
end

# Request payload for GoogleTagGateway#list.
#
# @!attribute [rw] zone_id
#   @return [String]
GoogleTagGatewayListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for GoogleTagGateway#update.
#
# @!attribute [rw] zone_id
#   @return [String]
GoogleTagGatewayUpdateData = Struct.new(
  :zone_id,
  keyword_init: true
)

# Nel entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [Hash]
Nel = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for Nel#list.
#
# @!attribute [rw] zone_id
#   @return [String]
NelListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for Nel#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [Hash, nil]
NelUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Rum entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [String, nil]
Rum = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for Rum#list.
#
# @!attribute [rw] zone_id
#   @return [String]
RumListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for Rum#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
RumUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Zaraz entity data model.
class Zaraz
end

# Request payload for Zaraz#create.
#
# @!attribute [rw] zone_id
#   @return [String]
ZarazCreateData = Struct.new(
  :zone_id,
  keyword_init: true
)

# ZarazZarazConfig entity data model.
class ZarazZarazConfig
end

# Request payload for ZarazZarazConfig#update.
#
# @!attribute [rw] zone_id
#   @return [String]
ZarazZarazConfigUpdateData = Struct.new(
  :zone_id,
  keyword_init: true
)

# ZarazZarazConfigHistory entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ZarazZarazConfigHistory = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ZarazZarazConfigHistory#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] ids
#   @return [Array]
ZarazZarazConfigHistoryListMatch = Struct.new(
  :zone_id,
  :ids,
  keyword_init: true
)

# ZarazZarazConfigReturn entity data model.
#
# @!attribute [rw] analytics
#   @return [Hash, nil]
#
# @!attribute [rw] consent
#   @return [Hash]
#
# @!attribute [rw] dataLayer
#   @return [Boolean]
#
# @!attribute [rw] debugKey
#   @return [String]
#
# @!attribute [rw] historyChange
#   @return [Boolean, nil]
#
# @!attribute [rw] settings
#   @return [Hash]
#
# @!attribute [rw] tools
#   @return [Hash, nil]
#
# @!attribute [rw] triggers
#   @return [Hash]
#
# @!attribute [rw] variables
#   @return [Hash]
#
# @!attribute [rw] zarazVersion
#   @return [Integer]
ZarazZarazConfigReturn = Struct.new(
  :analytics,
  :consent,
  :dataLayer,
  :debugKey,
  :historyChange,
  :settings,
  :tools,
  :triggers,
  :variables,
  :zarazVersion,
  keyword_init: true
)

# Request payload for ZarazZarazConfigReturn#load.
#
# @!attribute [rw] zone_id
#   @return [String]
ZarazZarazConfigReturnLoadMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# ZarazZarazHistory entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ZarazZarazHistory = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ZarazZarazHistory#list.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] sort_field
#   @return [String, nil]
#
# @!attribute [rw] sort_order
#   @return [String, nil]
ZarazZarazHistoryListMatch = Struct.new(
  :zone_id,
  :limit,
  :offset,
  :sort_field,
  :sort_order,
  keyword_init: true
)

# ZarazZarazWorkflow entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ZarazZarazWorkflow = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ZarazZarazWorkflow#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ZarazZarazWorkflowListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for ZarazZarazWorkflow#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [String, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ZarazZarazWorkflowUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# ZoneSetting entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
#
# @!attribute [rw] value
#   @return [Hash]
ZoneSetting = Struct.new(
  :errors,
  :id,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# Request payload for ZoneSetting#load.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
ZoneSettingLoadMatch = Struct.new(
  :id,
  :zone_id,
  keyword_init: true
)

# Request payload for ZoneSetting#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ZoneSettingListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for ZoneSetting#update.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Hash, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
#
# @!attribute [rw] value
#   @return [Hash, nil]
ZoneSettingUpdateData = Struct.new(
  :id,
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  :value,
  keyword_init: true
)

# ZonesZoneSettingsResponseCollection entity data model.
#
# @!attribute [rw] errors
#   @return [Array]
#
# @!attribute [rw] messages
#   @return [Array]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean]
ZonesZoneSettingsResponseCollection = Struct.new(
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

# Request payload for ZonesZoneSettingsResponseCollection#list.
#
# @!attribute [rw] zone_id
#   @return [String]
ZonesZoneSettingsResponseCollectionListMatch = Struct.new(
  :zone_id,
  keyword_init: true
)

# Request payload for ZonesZoneSettingsResponseCollection#update.
#
# @!attribute [rw] zone_id
#   @return [String]
#
# @!attribute [rw] errors
#   @return [Array, nil]
#
# @!attribute [rw] messages
#   @return [Array, nil]
#
# @!attribute [rw] result
#   @return [Array, nil]
#
# @!attribute [rw] success
#   @return [Boolean, nil]
ZonesZoneSettingsResponseCollectionUpdateData = Struct.new(
  :zone_id,
  :errors,
  :messages,
  :result,
  :success,
  keyword_init: true
)

