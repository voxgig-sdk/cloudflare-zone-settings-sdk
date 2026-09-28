-- Typed models for the CloudflareZoneSettings SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class CacheSettingsOriginH2MaxStreamsResponseValue
---@field errors table
---@field messages table
---@field result? table
---@field success boolean
---@field value number

---@class CacheSettingsOriginH2MaxStreamsResponseValueListMatch
---@field zone_id string

---@class CacheSettingsOriginH2MaxStreamsResponseValueUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? number

---@class Config
---@field errors table
---@field messages table
---@field result? any
---@field success boolean

---@class ConfigListMatch
---@field zone_id string

---@class CsamConfigServiceCsamScannerSingle
---@field errors table
---@field id? string
---@field messages table
---@field result? table
---@field success boolean
---@field value? table

---@class CsamConfigServiceCsamScannerSingleListMatch
---@field zone_id string

---@class CsamConfigServiceCsamScannerSingleUpdateData
---@field zone_id string
---@field errors? table
---@field id? string
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? table

---@class Default
---@field errors table
---@field messages table
---@field result? any
---@field success boolean

---@class DefaultListMatch
---@field zone_id string

---@class GoogleTagGateway

---@class GoogleTagGatewayListMatch
---@field zone_id string

---@class GoogleTagGatewayUpdateData
---@field zone_id string

---@class Nel
---@field errors table
---@field messages table
---@field result table
---@field success boolean
---@field value table

---@class NelListMatch
---@field zone_id string

---@class NelUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? table

---@class Rum
---@field errors table
---@field messages table
---@field result? table
---@field success boolean
---@field value? string

---@class RumListMatch
---@field zone_id string

---@class RumUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? string

---@class Zaraz

---@class ZarazCreateData
---@field zone_id string

---@class ZarazZarazConfig

---@class ZarazZarazConfigUpdateData
---@field zone_id string

---@class ZarazZarazConfigHistory
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class ZarazZarazConfigHistoryListMatch
---@field zone_id string
---@field ids table

---@class ZarazZarazConfigReturn
---@field analytics? table
---@field consent table
---@field dataLayer boolean
---@field debugKey string
---@field historyChange? boolean
---@field settings table
---@field tools? table
---@field triggers table
---@field variables table
---@field zarazVersion number

---@class ZarazZarazConfigReturnLoadMatch
---@field zone_id string

---@class ZarazZarazHistory
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class ZarazZarazHistoryListMatch
---@field zone_id string
---@field limit? number
---@field offset? number
---@field sort_field? string
---@field sort_order? string

---@class ZarazZarazWorkflow
---@field errors table
---@field messages table
---@field result? string
---@field success boolean

---@class ZarazZarazWorkflowListMatch
---@field zone_id string

---@class ZarazZarazWorkflowUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? string
---@field success? boolean

---@class ZoneSetting
---@field errors table
---@field id? string
---@field messages table
---@field result? table
---@field success boolean
---@field value table

---@class ZoneSettingLoadMatch
---@field id? string
---@field zone_id string

---@class ZoneSettingListMatch
---@field zone_id string

---@class ZoneSettingUpdateData
---@field id? string
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean
---@field value? table

---@class ZonesZoneSettingsResponseCollection
---@field errors table
---@field messages table
---@field result? table
---@field success boolean

---@class ZonesZoneSettingsResponseCollectionListMatch
---@field zone_id string

---@class ZonesZoneSettingsResponseCollectionUpdateData
---@field zone_id string
---@field errors? table
---@field messages? table
---@field result? table
---@field success? boolean

local M = {}

return M
