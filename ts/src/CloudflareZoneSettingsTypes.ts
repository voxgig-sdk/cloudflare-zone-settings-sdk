// Typed models for the CloudflareZoneSettings SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface CacheSettingsOriginH2MaxStreamsResponseValue {
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
  value: number
}

export interface CacheSettingsOriginH2MaxStreamsResponseValueListMatch {
  zone_id: string
}

export interface CacheSettingsOriginH2MaxStreamsResponseValueUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: number
}

export interface Config {
  errors: any[]
  messages: any[]
  result?: any
  success: boolean
}

export interface ConfigListMatch {
  zone_id: string
}

export interface CsamConfigServiceCsamScannerSingle {
  errors: any[]
  id?: string
  messages: any[]
  result?: Record<string, any>
  success: boolean
  value?: Record<string, any>
}

export interface CsamConfigServiceCsamScannerSingleListMatch {
  zone_id: string
}

export interface CsamConfigServiceCsamScannerSingleUpdateData {
  zone_id: string
  errors?: any[]
  id?: string
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: Record<string, any>
}

export interface Default {
  errors: any[]
  messages: any[]
  result?: any
  success: boolean
}

export interface DefaultListMatch {
  zone_id: string
}

export interface GoogleTagGateway {
}

export interface GoogleTagGatewayListMatch {
  zone_id: string

  // Selects a custom action instead of the plain list:
  //   'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface GoogleTagGatewayUpdateData {
  zone_id: string

  // Selects a custom action instead of the plain update:
  //   'config'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Nel {
  errors: any[]
  messages: any[]
  result: Record<string, any>
  success: boolean
  value: Record<string, any>
}

export interface NelListMatch {
  zone_id: string
}

export interface NelUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: Record<string, any>
}

export interface Rum {
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
  value?: string
}

export interface RumListMatch {
  zone_id: string
}

export interface RumUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: string
}

export interface Zaraz {
}

export interface ZarazCreateData {
  zone_id: string

  // Selects a custom action instead of the plain create:
  //   'publish'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ZarazZarazConfig {
}

export interface ZarazZarazConfigUpdateData {
  zone_id: string
}

export interface ZarazZarazConfigHistory {
  errors: any[]
  messages: any[]
  result?: Record<string, any>
  success: boolean
}

export interface ZarazZarazConfigHistoryListMatch {
  zone_id: string
  ids: any[]
}

export interface ZarazZarazConfigReturn {
  analytics?: Record<string, any>
  consent: Record<string, any>
  dataLayer: boolean
  debugKey: string
  historyChange?: boolean
  settings: Record<string, any>
  tools?: Record<string, any>
  triggers: Record<string, any>
  variables: Record<string, any>
  zarazVersion: number
}

export interface ZarazZarazConfigReturnLoadMatch {
  zone_id: string
}

export interface ZarazZarazHistory {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface ZarazZarazHistoryListMatch {
  zone_id: string
  limit?: number
  offset?: number
  sort_field?: string
  sort_order?: string
}

export interface ZarazZarazWorkflow {
  errors: any[]
  messages: any[]
  result?: string
  success: boolean
}

export interface ZarazZarazWorkflowListMatch {
  zone_id: string
}

export interface ZarazZarazWorkflowUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: string
  success?: boolean
}

export interface ZoneSetting {
  errors: any[]
  id?: string
  messages: any[]
  result?: Record<string, any>
  success: boolean
  value: Record<string, any>
}

export interface ZoneSettingLoadMatch {
  id?: string
  zone_id: string
}

export interface ZoneSettingListMatch {
  zone_id: string
}

export interface ZoneSettingUpdateData {
  id?: string
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: Record<string, any>
  success?: boolean
  value?: Record<string, any>
}

export interface ZonesZoneSettingsResponseCollection {
  errors: any[]
  messages: any[]
  result?: any[]
  success: boolean
}

export interface ZonesZoneSettingsResponseCollectionListMatch {
  zone_id: string
}

export interface ZonesZoneSettingsResponseCollectionUpdateData {
  zone_id: string
  errors?: any[]
  messages?: any[]
  result?: any[]
  success?: boolean
}

