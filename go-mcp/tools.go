package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"cache_settings_origin_h2_max_streams_response_value | config | csam_config_service_csam_scanner_single | default | google_tag_gateway | nel | rum | zaraz | zaraz_zaraz_config | zaraz_zaraz_config_history | zaraz_zaraz_config_return | zaraz_zaraz_history | zaraz_zaraz_workflow | zone_setting | zones_zone_settings_response_collection"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareZoneSettingsSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-zone-settings_list",
		Description: "List records from CloudflareZoneSettings. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-zone-settings_load",
		Description: "Load a single record from CloudflareZoneSettings. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareZoneSettingsSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareZoneSettingsSDK, name string) (sdk.CloudflareZoneSettingsEntity, error) {
	switch strings.ToLower(name) {
	case "cache_settings_origin_h2_max_streams_response_value":
		return client.CacheSettingsOriginH2MaxStreamsResponseValue(nil), nil
	case "config":
		return client.Config(nil), nil
	case "csam_config_service_csam_scanner_single":
		return client.CsamConfigServiceCsamScannerSingle(nil), nil
	case "default":
		return client.Default(nil), nil
	case "google_tag_gateway":
		return client.GoogleTagGateway(nil), nil
	case "nel":
		return client.Nel(nil), nil
	case "rum":
		return client.Rum(nil), nil
	case "zaraz":
		return client.Zaraz(nil), nil
	case "zaraz_zaraz_config":
		return client.ZarazZarazConfig(nil), nil
	case "zaraz_zaraz_config_history":
		return client.ZarazZarazConfigHistory(nil), nil
	case "zaraz_zaraz_config_return":
		return client.ZarazZarazConfigReturn(nil), nil
	case "zaraz_zaraz_history":
		return client.ZarazZarazHistory(nil), nil
	case "zaraz_zaraz_workflow":
		return client.ZarazZarazWorkflow(nil), nil
	case "zone_setting":
		return client.ZoneSetting(nil), nil
	case "zones_zone_settings_response_collection":
		return client.ZonesZoneSettingsResponseCollection(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
