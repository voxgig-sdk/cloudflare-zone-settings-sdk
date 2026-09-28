package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go"
	"github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-zone-settings-sdk/go/utility/struct"
)

func TestZarazZarazConfigEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ZarazZarazConfig(nil)
		if ent == nil {
			t.Fatal("expected non-nil ZarazZarazConfigEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := zaraz_zaraz_configBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "zaraz_zaraz_config." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		zarazZarazConfigRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.zaraz_zaraz_config")))
		var zarazZarazConfigRef01Data map[string]any
		if len(zarazZarazConfigRef01DataRaw) > 0 {
			zarazZarazConfigRef01Data = core.ToMapAny(zarazZarazConfigRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = zarazZarazConfigRef01Data

		// UPDATE
		zarazZarazConfigRef01Ent := client.ZarazZarazConfig(nil)
		zarazZarazConfigRef01DataUp0Up := map[string]any{
		}

		zarazZarazConfigRef01ResdataUp0Result, err := zarazZarazConfigRef01Ent.Update(zarazZarazConfigRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		zarazZarazConfigRef01ResdataUp0 := core.ToMapAny(entityData(zarazZarazConfigRef01ResdataUp0Result))
		if zarazZarazConfigRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

	})
}

func zaraz_zaraz_configBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "zaraz_zaraz_config", "ZarazZarazConfigTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read zaraz_zaraz_config test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse zaraz_zaraz_config test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"zaraz_zaraz_config01", "zaraz_zaraz_config02", "zaraz_zaraz_config03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_ENTID": idmap,
		"CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_ZONE_SETTINGS_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_ZONE_SETTINGS_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareZoneSettingsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
