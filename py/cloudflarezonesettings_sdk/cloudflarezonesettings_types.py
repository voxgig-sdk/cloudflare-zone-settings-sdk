# Typed models for the CloudflareZoneSettings SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CacheSettingsOriginH2MaxStreamsResponseValueRequired(TypedDict):
    errors: list
    messages: list
    success: bool
    value: int


class CacheSettingsOriginH2MaxStreamsResponseValue(CacheSettingsOriginH2MaxStreamsResponseValueRequired, total=False):
    result: dict


class CacheSettingsOriginH2MaxStreamsResponseValueListMatch(TypedDict):
    zone_id: str


class CacheSettingsOriginH2MaxStreamsResponseValueUpdateDataRequired(TypedDict):
    zone_id: str


class CacheSettingsOriginH2MaxStreamsResponseValueUpdateData(CacheSettingsOriginH2MaxStreamsResponseValueUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool
    value: int


class ConfigRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class Config(ConfigRequired, total=False):
    result: Any


class ConfigListMatch(TypedDict):
    zone_id: str


class CsamConfigServiceCsamScannerSingleRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class CsamConfigServiceCsamScannerSingle(CsamConfigServiceCsamScannerSingleRequired, total=False):
    id: str
    result: dict
    value: dict


class CsamConfigServiceCsamScannerSingleListMatch(TypedDict):
    zone_id: str


class CsamConfigServiceCsamScannerSingleUpdateDataRequired(TypedDict):
    zone_id: str


class CsamConfigServiceCsamScannerSingleUpdateData(CsamConfigServiceCsamScannerSingleUpdateDataRequired, total=False):
    errors: list
    id: str
    messages: list
    result: dict
    success: bool
    value: dict


class DefaultRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class Default(DefaultRequired, total=False):
    result: Any


class DefaultListMatch(TypedDict):
    zone_id: str


class GoogleTagGateway(TypedDict):
    pass


class GoogleTagGatewayListMatch(TypedDict):
    zone_id: str


class GoogleTagGatewayUpdateData(TypedDict):
    zone_id: str


class Nel(TypedDict):
    errors: list
    messages: list
    result: dict
    success: bool
    value: dict


class NelListMatch(TypedDict):
    zone_id: str


class NelUpdateDataRequired(TypedDict):
    zone_id: str


class NelUpdateData(NelUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool
    value: dict


class RumRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class Rum(RumRequired, total=False):
    result: dict
    value: str


class RumListMatch(TypedDict):
    zone_id: str


class RumUpdateDataRequired(TypedDict):
    zone_id: str


class RumUpdateData(RumUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: dict
    success: bool
    value: str


class Zaraz(TypedDict):
    pass


class ZarazCreateData(TypedDict):
    zone_id: str


class ZarazZarazConfig(TypedDict):
    pass


class ZarazZarazConfigUpdateData(TypedDict):
    zone_id: str


class ZarazZarazConfigHistoryRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class ZarazZarazConfigHistory(ZarazZarazConfigHistoryRequired, total=False):
    result: dict


class ZarazZarazConfigHistoryListMatch(TypedDict):
    zone_id: str
    ids: list


class ZarazZarazConfigReturnRequired(TypedDict):
    consent: dict
    dataLayer: bool
    debugKey: str
    settings: dict
    triggers: dict
    variables: dict
    zarazVersion: int


class ZarazZarazConfigReturn(ZarazZarazConfigReturnRequired, total=False):
    analytics: dict
    historyChange: bool
    tools: dict


class ZarazZarazConfigReturnLoadMatch(TypedDict):
    zone_id: str


class ZarazZarazHistoryRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class ZarazZarazHistory(ZarazZarazHistoryRequired, total=False):
    result: list


class ZarazZarazHistoryListMatchRequired(TypedDict):
    zone_id: str


class ZarazZarazHistoryListMatch(ZarazZarazHistoryListMatchRequired, total=False):
    limit: int
    offset: int
    sort_field: str
    sort_order: str


class ZarazZarazWorkflowRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class ZarazZarazWorkflow(ZarazZarazWorkflowRequired, total=False):
    result: str


class ZarazZarazWorkflowListMatch(TypedDict):
    zone_id: str


class ZarazZarazWorkflowUpdateDataRequired(TypedDict):
    zone_id: str


class ZarazZarazWorkflowUpdateData(ZarazZarazWorkflowUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: str
    success: bool


class ZoneSettingRequired(TypedDict):
    errors: list
    messages: list
    success: bool
    value: dict


class ZoneSetting(ZoneSettingRequired, total=False):
    id: str
    result: dict


class ZoneSettingLoadMatchRequired(TypedDict):
    zone_id: str


class ZoneSettingLoadMatch(ZoneSettingLoadMatchRequired, total=False):
    id: str


class ZoneSettingListMatch(TypedDict):
    zone_id: str


class ZoneSettingUpdateDataRequired(TypedDict):
    zone_id: str


class ZoneSettingUpdateData(ZoneSettingUpdateDataRequired, total=False):
    id: str
    errors: list
    messages: list
    result: dict
    success: bool
    value: dict


class ZonesZoneSettingsResponseCollectionRequired(TypedDict):
    errors: list
    messages: list
    success: bool


class ZonesZoneSettingsResponseCollection(ZonesZoneSettingsResponseCollectionRequired, total=False):
    result: list


class ZonesZoneSettingsResponseCollectionListMatch(TypedDict):
    zone_id: str


class ZonesZoneSettingsResponseCollectionUpdateDataRequired(TypedDict):
    zone_id: str


class ZonesZoneSettingsResponseCollectionUpdateData(ZonesZoneSettingsResponseCollectionUpdateDataRequired, total=False):
    errors: list
    messages: list
    result: list
    success: bool
