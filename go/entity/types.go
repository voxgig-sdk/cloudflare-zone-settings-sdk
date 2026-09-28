// Typed models for the CloudflareZoneSettings SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/core"
)

// CacheSettingsOriginH2MaxStreamsResponseValue is the typed data model for the cache_settings_origin_h2_max_streams_response_value entity.
type CacheSettingsOriginH2MaxStreamsResponseValue struct {
}

// CacheSettingsOriginH2MaxStreamsResponseValueListMatch is the typed request payload for CacheSettingsOriginH2MaxStreamsResponseValue.ListTyped.
type CacheSettingsOriginH2MaxStreamsResponseValueListMatch struct {
	ZoneId string `json:"zone_id"`
}

// CacheSettingsOriginH2MaxStreamsResponseValueUpdateData is the typed request payload for CacheSettingsOriginH2MaxStreamsResponseValue.UpdateTyped.
type CacheSettingsOriginH2MaxStreamsResponseValueUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *int `json:"value,omitempty"`
}

// Config is the typed data model for the config entity.
type Config struct {
}

// ConfigListMatch is the typed request payload for Config.ListTyped.
type ConfigListMatch struct {
	ZoneId string `json:"zone_id"`
}

// CsamConfigServiceCsamScannerSingle is the typed data model for the csam_config_service_csam_scanner_single entity.
type CsamConfigServiceCsamScannerSingle struct {
}

// CsamConfigServiceCsamScannerSingleListMatch is the typed request payload for CsamConfigServiceCsamScannerSingle.ListTyped.
type CsamConfigServiceCsamScannerSingleListMatch struct {
	ZoneId string `json:"zone_id"`
}

// CsamConfigServiceCsamScannerSingleUpdateData is the typed request payload for CsamConfigServiceCsamScannerSingle.UpdateTyped.
type CsamConfigServiceCsamScannerSingleUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Id *string `json:"id,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *map[string]any `json:"value,omitempty"`
}

// Default is the typed data model for the default entity.
type Default struct {
}

// DefaultListMatch is the typed request payload for Default.ListTyped.
type DefaultListMatch struct {
	ZoneId string `json:"zone_id"`
}

// GoogleTagGateway is the typed data model for the google_tag_gateway entity.
type GoogleTagGateway struct {
}

// GoogleTagGatewayListMatch is the typed request payload for GoogleTagGateway.ListTyped.
type GoogleTagGatewayListMatch struct {
	ZoneId string `json:"zone_id"`
}

// GoogleTagGatewayUpdateData is the typed request payload for GoogleTagGateway.UpdateTyped.
type GoogleTagGatewayUpdateData struct {
	ZoneId string `json:"zone_id"`
}

// Nel is the typed data model for the nel entity.
type Nel struct {
}

// NelListMatch is the typed request payload for Nel.ListTyped.
type NelListMatch struct {
	ZoneId string `json:"zone_id"`
}

// NelUpdateData is the typed request payload for Nel.UpdateTyped.
type NelUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *map[string]any `json:"value,omitempty"`
}

// Rum is the typed data model for the rum entity.
type Rum struct {
}

// RumListMatch is the typed request payload for Rum.ListTyped.
type RumListMatch struct {
	ZoneId string `json:"zone_id"`
}

// RumUpdateData is the typed request payload for Rum.UpdateTyped.
type RumUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Zaraz is the typed data model for the zaraz entity.
type Zaraz struct {
}

// ZarazCreateData is the typed request payload for Zaraz.CreateTyped.
type ZarazCreateData struct {
	ZoneId string `json:"zone_id"`
}

// ZarazZarazConfig is the typed data model for the zaraz_zaraz_config entity.
type ZarazZarazConfig struct {
}

// ZarazZarazConfigUpdateData is the typed request payload for ZarazZarazConfig.UpdateTyped.
type ZarazZarazConfigUpdateData struct {
	ZoneId string `json:"zone_id"`
}

// ZarazZarazConfigHistory is the typed data model for the zaraz_zaraz_config_history entity.
type ZarazZarazConfigHistory struct {
}

// ZarazZarazConfigHistoryListMatch is the typed request payload for ZarazZarazConfigHistory.ListTyped.
type ZarazZarazConfigHistoryListMatch struct {
	ZoneId string `json:"zone_id"`
	Ids []any `json:"ids"`
}

// ZarazZarazConfigReturn is the typed data model for the zaraz_zaraz_config_return entity.
type ZarazZarazConfigReturn struct {
}

// ZarazZarazConfigReturnLoadMatch is the typed request payload for ZarazZarazConfigReturn.LoadTyped.
type ZarazZarazConfigReturnLoadMatch struct {
	ZoneId string `json:"zone_id"`
}

// ZarazZarazHistory is the typed data model for the zaraz_zaraz_history entity.
type ZarazZarazHistory struct {
}

// ZarazZarazHistoryListMatch is the typed request payload for ZarazZarazHistory.ListTyped.
type ZarazZarazHistoryListMatch struct {
	ZoneId string `json:"zone_id"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
	SortField *string `json:"sort_field,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
}

// ZarazZarazWorkflow is the typed data model for the zaraz_zaraz_workflow entity.
type ZarazZarazWorkflow struct {
}

// ZarazZarazWorkflowListMatch is the typed request payload for ZarazZarazWorkflow.ListTyped.
type ZarazZarazWorkflowListMatch struct {
	ZoneId string `json:"zone_id"`
}

// ZarazZarazWorkflowUpdateData is the typed request payload for ZarazZarazWorkflow.UpdateTyped.
type ZarazZarazWorkflowUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *string `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// ZoneSetting is the typed data model for the zone_setting entity.
type ZoneSetting struct {
}

// ZoneSettingLoadMatch is the typed request payload for ZoneSetting.LoadTyped.
type ZoneSettingLoadMatch struct {
	Id *string `json:"id,omitempty"`
	ZoneId string `json:"zone_id"`
}

// ZoneSettingListMatch is the typed request payload for ZoneSetting.ListTyped.
type ZoneSettingListMatch struct {
	ZoneId string `json:"zone_id"`
}

// ZoneSettingUpdateData is the typed request payload for ZoneSetting.UpdateTyped.
type ZoneSettingUpdateData struct {
	Id *string `json:"id,omitempty"`
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *map[string]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
	Value *map[string]any `json:"value,omitempty"`
}

// ZonesZoneSettingsResponseCollection is the typed data model for the zones_zone_settings_response_collection entity.
type ZonesZoneSettingsResponseCollection struct {
}

// ZonesZoneSettingsResponseCollectionListMatch is the typed request payload for ZonesZoneSettingsResponseCollection.ListTyped.
type ZonesZoneSettingsResponseCollectionListMatch struct {
	ZoneId string `json:"zone_id"`
}

// ZonesZoneSettingsResponseCollectionUpdateData is the typed request payload for ZonesZoneSettingsResponseCollection.UpdateTyped.
type ZonesZoneSettingsResponseCollectionUpdateData struct {
	ZoneId string `json:"zone_id"`
	Errors *[]any `json:"errors,omitempty"`
	Messages *[]any `json:"messages,omitempty"`
	Result *[]any `json:"result,omitempty"`
	Success *bool `json:"success,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
