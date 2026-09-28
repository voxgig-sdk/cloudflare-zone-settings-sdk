<?php
declare(strict_types=1);

// CacheSettingsOriginH2MaxStreamsResponseValue entity test

require_once __DIR__ . '/../cloudflarezonesettings_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CacheSettingsOriginH2MaxStreamsResponseValueEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudflareZoneSettingsSDK::test(null, null);
        $ent = $testsdk->CacheSettingsOriginH2MaxStreamsResponseValue(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "cache_settings_origin_h2_max_streams_response_value" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudflareZoneSettingsSDK::test($seed, null);
        $seen = iterator_to_array($base->CacheSettingsOriginH2MaxStreamsResponseValue(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudflareZoneSettingsConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudflareZoneSettingsSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->CacheSettingsOriginH2MaxStreamsResponseValue(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = cache_settings_origin_h2_max_streams_response_value_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "cache_settings_origin_h2_max_streams_response_value." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_ZONE_SETTINGS_TEST_CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $cache_settings_origin_h2_max_streams_response_value_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.cache_settings_origin_h2_max_streams_response_value")));
        $cache_settings_origin_h2_max_streams_response_value_ref01_data = null;
        if (count($cache_settings_origin_h2_max_streams_response_value_ref01_data_raw) > 0) {
            $cache_settings_origin_h2_max_streams_response_value_ref01_data = Helpers::to_map($cache_settings_origin_h2_max_streams_response_value_ref01_data_raw[0][1]);
        }

        // LIST
        $cache_settings_origin_h2_max_streams_response_value_ref01_ent = $client->CacheSettingsOriginH2MaxStreamsResponseValue(null);
        $cache_settings_origin_h2_max_streams_response_value_ref01_match = [
            "zone_id" => $setup["idmap"]["zone01"],
        ];

        $cache_settings_origin_h2_max_streams_response_value_ref01_list_result = $cache_settings_origin_h2_max_streams_response_value_ref01_ent->list($cache_settings_origin_h2_max_streams_response_value_ref01_match, null);
        $this->assertIsArray($cache_settings_origin_h2_max_streams_response_value_ref01_list_result);

        // UPDATE
        $cache_settings_origin_h2_max_streams_response_value_ref01_data_up0_up = [
        ];

        $cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0_result = $cache_settings_origin_h2_max_streams_response_value_ref01_ent->update($cache_settings_origin_h2_max_streams_response_value_ref01_data_up0_up, null);
        $cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0 = Helpers::to_map(is_object($cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0_result) && method_exists($cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0_result, 'data_get') ? $cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0_result->data_get() : $cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0_result);
        $this->assertNotNull($cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0);

    }
}

function cache_settings_origin_h2_max_streams_response_value_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/cache_settings_origin_h2_max_streams_response_value/CacheSettingsOriginH2MaxStreamsResponseValueTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudflareZoneSettingsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["cache_settings_origin_h2_max_streams_response_value01", "cache_settings_origin_h2_max_streams_response_value02", "cache_settings_origin_h2_max_streams_response_value03", "zone01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDFLARE_ZONE_SETTINGS_TEST_CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDFLARE_ZONE_SETTINGS_TEST_CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE_ENTID" => $idmap,
        "CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE" => "FALSE",
        "CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN" => "FALSE",
        "CLOUDFLARE_ZONE_SETTINGS_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDFLARE_ZONE_SETTINGS_TEST_CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["CLOUDFLARE_ZONE_SETTINGS_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new CloudflareZoneSettingsSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
