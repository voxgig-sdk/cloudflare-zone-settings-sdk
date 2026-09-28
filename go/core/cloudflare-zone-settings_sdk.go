package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/utility/struct"
)

type CloudflareZoneSettingsSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudflareZoneSettingsSDK(options map[string]any) *CloudflareZoneSettingsSDK {
	sdk := &CloudflareZoneSettingsSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudflareZoneSettingsSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudflareZoneSettingsSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudflareZoneSettingsSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudflareZoneSettingsSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *CloudflareZoneSettingsSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *CloudflareZoneSettingsSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *CloudflareZoneSettingsSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("CloudflareZoneSettingsSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *CloudflareZoneSettingsSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

func (sdk *CloudflareZoneSettingsSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("CloudflareZoneSettingsSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// CacheSettingsOriginH2MaxStreamsResponseValue returns a CacheSettingsOriginH2MaxStreamsResponseValue entity bound to this client.
// Idiomatic usage: client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).List(nil, nil) or
// client.CacheSettingsOriginH2MaxStreamsResponseValue(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) CacheSettingsOriginH2MaxStreamsResponseValue(data map[string]any) CloudflareZoneSettingsEntity {
	return NewCacheSettingsOriginH2MaxStreamsResponseValueEntityFunc(sdk, data)
}


// Config returns a Config entity bound to this client.
// Idiomatic usage: client.Config(nil).List(nil, nil) or
// client.Config(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) Config(data map[string]any) CloudflareZoneSettingsEntity {
	return NewConfigEntityFunc(sdk, data)
}


// CsamConfigServiceCsamScannerSingle returns a CsamConfigServiceCsamScannerSingle entity bound to this client.
// Idiomatic usage: client.CsamConfigServiceCsamScannerSingle(nil).List(nil, nil) or
// client.CsamConfigServiceCsamScannerSingle(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) CsamConfigServiceCsamScannerSingle(data map[string]any) CloudflareZoneSettingsEntity {
	return NewCsamConfigServiceCsamScannerSingleEntityFunc(sdk, data)
}


// Default returns a Default entity bound to this client.
// Idiomatic usage: client.Default(nil).List(nil, nil) or
// client.Default(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) Default(data map[string]any) CloudflareZoneSettingsEntity {
	return NewDefaultEntityFunc(sdk, data)
}


// GoogleTagGateway returns a GoogleTagGateway entity bound to this client.
// Idiomatic usage: client.GoogleTagGateway(nil).List(nil, nil) or
// client.GoogleTagGateway(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) GoogleTagGateway(data map[string]any) CloudflareZoneSettingsEntity {
	return NewGoogleTagGatewayEntityFunc(sdk, data)
}


// Nel returns a Nel entity bound to this client.
// Idiomatic usage: client.Nel(nil).List(nil, nil) or
// client.Nel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) Nel(data map[string]any) CloudflareZoneSettingsEntity {
	return NewNelEntityFunc(sdk, data)
}


// Rum returns a Rum entity bound to this client.
// Idiomatic usage: client.Rum(nil).List(nil, nil) or
// client.Rum(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) Rum(data map[string]any) CloudflareZoneSettingsEntity {
	return NewRumEntityFunc(sdk, data)
}


// Zaraz returns a Zaraz entity bound to this client.
// Idiomatic usage: client.Zaraz(nil).List(nil, nil) or
// client.Zaraz(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) Zaraz(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZarazEntityFunc(sdk, data)
}


// ZarazZarazConfig returns a ZarazZarazConfig entity bound to this client.
// Idiomatic usage: client.ZarazZarazConfig(nil).List(nil, nil) or
// client.ZarazZarazConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) ZarazZarazConfig(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZarazZarazConfigEntityFunc(sdk, data)
}


// ZarazZarazConfigHistory returns a ZarazZarazConfigHistory entity bound to this client.
// Idiomatic usage: client.ZarazZarazConfigHistory(nil).List(nil, nil) or
// client.ZarazZarazConfigHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) ZarazZarazConfigHistory(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZarazZarazConfigHistoryEntityFunc(sdk, data)
}


// ZarazZarazConfigReturn returns a ZarazZarazConfigReturn entity bound to this client.
// Idiomatic usage: client.ZarazZarazConfigReturn(nil).List(nil, nil) or
// client.ZarazZarazConfigReturn(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) ZarazZarazConfigReturn(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZarazZarazConfigReturnEntityFunc(sdk, data)
}


// ZarazZarazHistory returns a ZarazZarazHistory entity bound to this client.
// Idiomatic usage: client.ZarazZarazHistory(nil).List(nil, nil) or
// client.ZarazZarazHistory(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) ZarazZarazHistory(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZarazZarazHistoryEntityFunc(sdk, data)
}


// ZarazZarazWorkflow returns a ZarazZarazWorkflow entity bound to this client.
// Idiomatic usage: client.ZarazZarazWorkflow(nil).List(nil, nil) or
// client.ZarazZarazWorkflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) ZarazZarazWorkflow(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZarazZarazWorkflowEntityFunc(sdk, data)
}


// ZoneSetting returns a ZoneSetting entity bound to this client.
// Idiomatic usage: client.ZoneSetting(nil).List(nil, nil) or
// client.ZoneSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) ZoneSetting(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZoneSettingEntityFunc(sdk, data)
}


// ZonesZoneSettingsResponseCollection returns a ZonesZoneSettingsResponseCollection entity bound to this client.
// Idiomatic usage: client.ZonesZoneSettingsResponseCollection(nil).List(nil, nil) or
// client.ZonesZoneSettingsResponseCollection(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudflareZoneSettingsSDK) ZonesZoneSettingsResponseCollection(data map[string]any) CloudflareZoneSettingsEntity {
	return NewZonesZoneSettingsResponseCollectionEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudflareZoneSettingsSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudflareZoneSettingsSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
