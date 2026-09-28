package voxgigcloudflarezonesettingssdk

import (
	"github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/core"
	"github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/entity"
	"github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudflareZoneSettingsSDK = core.CloudflareZoneSettingsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudflareZoneSettingsEntity = core.CloudflareZoneSettingsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudflareZoneSettingsError = core.CloudflareZoneSettingsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCacheSettingsOriginH2MaxStreamsResponseValueEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewCacheSettingsOriginH2MaxStreamsResponseValueEntity(client, entopts)
	}
	core.NewConfigEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewConfigEntity(client, entopts)
	}
	core.NewCsamConfigServiceCsamScannerSingleEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewCsamConfigServiceCsamScannerSingleEntity(client, entopts)
	}
	core.NewDefaultEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewDefaultEntity(client, entopts)
	}
	core.NewGoogleTagGatewayEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewGoogleTagGatewayEntity(client, entopts)
	}
	core.NewNelEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewNelEntity(client, entopts)
	}
	core.NewRumEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewRumEntity(client, entopts)
	}
	core.NewZarazEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZarazEntity(client, entopts)
	}
	core.NewZarazZarazConfigEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZarazZarazConfigEntity(client, entopts)
	}
	core.NewZarazZarazConfigHistoryEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZarazZarazConfigHistoryEntity(client, entopts)
	}
	core.NewZarazZarazConfigReturnEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZarazZarazConfigReturnEntity(client, entopts)
	}
	core.NewZarazZarazHistoryEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZarazZarazHistoryEntity(client, entopts)
	}
	core.NewZarazZarazWorkflowEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZarazZarazWorkflowEntity(client, entopts)
	}
	core.NewZoneSettingEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZoneSettingEntity(client, entopts)
	}
	core.NewZonesZoneSettingsResponseCollectionEntityFunc = func(client *core.CloudflareZoneSettingsSDK, entopts map[string]any) core.CloudflareZoneSettingsEntity {
		return entity.NewZonesZoneSettingsResponseCollectionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudflareZoneSettingsSDK = core.NewCloudflareZoneSettingsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudflareZoneSettingsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudflareZoneSettingsSDK  { return NewCloudflareZoneSettingsSDK(nil) }
func Test() *CloudflareZoneSettingsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
