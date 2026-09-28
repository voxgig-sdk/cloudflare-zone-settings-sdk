<?php
declare(strict_types=1);

// CloudflareZoneSettings SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CloudflareZoneSettingsSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CloudflareZoneSettingsUtility();
        $this->_utility = $utility;

        $config = CloudflareZoneSettingsConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CloudflareZoneSettingsHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CloudflareZoneSettingsHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CloudflareZoneSettingsFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CloudflareZoneSettingsFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CloudflareZoneSettingsUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CloudflareZoneSettingsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CloudflareZoneSettingsHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CloudflareZoneSettingsHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CloudflareZoneSettingsSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CloudflareZoneSettingsError($op . "_allow",
                "CloudflareZoneSettingsSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CloudflareZoneSettingsHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CloudflareZoneSettingsHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CloudflareZoneSettingsError("graphql_error",
                "CloudflareZoneSettingsSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_cache_settings_origin_h2_max_streams_response_value = null;

    // Canonical facade: $client->CacheSettingsOriginH2MaxStreamsResponseValue()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->cache_settings_origin_h2_max_streams_response_value()
    // resolves here too.
    public function CacheSettingsOriginH2MaxStreamsResponseValue($data = null)
    {
        require_once __DIR__ . '/entity/cache_settings_origin_h2_max_streams_response_value_entity.php';
        if ($data === null) {
            if ($this->_cache_settings_origin_h2_max_streams_response_value === null) {
                $this->_cache_settings_origin_h2_max_streams_response_value = new CacheSettingsOriginH2MaxStreamsResponseValueEntity($this, null);
            }
            return $this->_cache_settings_origin_h2_max_streams_response_value;
        }
        return new CacheSettingsOriginH2MaxStreamsResponseValueEntity($this, $data);
    }


    private $_config = null;

    // Canonical facade: $client->Config()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->config()
    // resolves here too.
    public function Config($data = null)
    {
        require_once __DIR__ . '/entity/config_entity.php';
        if ($data === null) {
            if ($this->_config === null) {
                $this->_config = new ConfigEntity($this, null);
            }
            return $this->_config;
        }
        return new ConfigEntity($this, $data);
    }


    private $_csam_config_service_csam_scanner_single = null;

    // Canonical facade: $client->CsamConfigServiceCsamScannerSingle()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->csam_config_service_csam_scanner_single()
    // resolves here too.
    public function CsamConfigServiceCsamScannerSingle($data = null)
    {
        require_once __DIR__ . '/entity/csam_config_service_csam_scanner_single_entity.php';
        if ($data === null) {
            if ($this->_csam_config_service_csam_scanner_single === null) {
                $this->_csam_config_service_csam_scanner_single = new CsamConfigServiceCsamScannerSingleEntity($this, null);
            }
            return $this->_csam_config_service_csam_scanner_single;
        }
        return new CsamConfigServiceCsamScannerSingleEntity($this, $data);
    }


    private $_default = null;

    // Canonical facade: $client->Default()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->default()
    // resolves here too.
    public function Default($data = null)
    {
        require_once __DIR__ . '/entity/default_entity.php';
        if ($data === null) {
            if ($this->_default === null) {
                $this->_default = new DefaultEntity($this, null);
            }
            return $this->_default;
        }
        return new DefaultEntity($this, $data);
    }


    private $_google_tag_gateway = null;

    // Canonical facade: $client->GoogleTagGateway()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->google_tag_gateway()
    // resolves here too.
    public function GoogleTagGateway($data = null)
    {
        require_once __DIR__ . '/entity/google_tag_gateway_entity.php';
        if ($data === null) {
            if ($this->_google_tag_gateway === null) {
                $this->_google_tag_gateway = new GoogleTagGatewayEntity($this, null);
            }
            return $this->_google_tag_gateway;
        }
        return new GoogleTagGatewayEntity($this, $data);
    }


    private $_nel = null;

    // Canonical facade: $client->Nel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->nel()
    // resolves here too.
    public function Nel($data = null)
    {
        require_once __DIR__ . '/entity/nel_entity.php';
        if ($data === null) {
            if ($this->_nel === null) {
                $this->_nel = new NelEntity($this, null);
            }
            return $this->_nel;
        }
        return new NelEntity($this, $data);
    }


    private $_rum = null;

    // Canonical facade: $client->Rum()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rum()
    // resolves here too.
    public function Rum($data = null)
    {
        require_once __DIR__ . '/entity/rum_entity.php';
        if ($data === null) {
            if ($this->_rum === null) {
                $this->_rum = new RumEntity($this, null);
            }
            return $this->_rum;
        }
        return new RumEntity($this, $data);
    }


    private $_zaraz = null;

    // Canonical facade: $client->Zaraz()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zaraz()
    // resolves here too.
    public function Zaraz($data = null)
    {
        require_once __DIR__ . '/entity/zaraz_entity.php';
        if ($data === null) {
            if ($this->_zaraz === null) {
                $this->_zaraz = new ZarazEntity($this, null);
            }
            return $this->_zaraz;
        }
        return new ZarazEntity($this, $data);
    }


    private $_zaraz_zaraz_config = null;

    // Canonical facade: $client->ZarazZarazConfig()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zaraz_zaraz_config()
    // resolves here too.
    public function ZarazZarazConfig($data = null)
    {
        require_once __DIR__ . '/entity/zaraz_zaraz_config_entity.php';
        if ($data === null) {
            if ($this->_zaraz_zaraz_config === null) {
                $this->_zaraz_zaraz_config = new ZarazZarazConfigEntity($this, null);
            }
            return $this->_zaraz_zaraz_config;
        }
        return new ZarazZarazConfigEntity($this, $data);
    }


    private $_zaraz_zaraz_config_history = null;

    // Canonical facade: $client->ZarazZarazConfigHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zaraz_zaraz_config_history()
    // resolves here too.
    public function ZarazZarazConfigHistory($data = null)
    {
        require_once __DIR__ . '/entity/zaraz_zaraz_config_history_entity.php';
        if ($data === null) {
            if ($this->_zaraz_zaraz_config_history === null) {
                $this->_zaraz_zaraz_config_history = new ZarazZarazConfigHistoryEntity($this, null);
            }
            return $this->_zaraz_zaraz_config_history;
        }
        return new ZarazZarazConfigHistoryEntity($this, $data);
    }


    private $_zaraz_zaraz_config_return = null;

    // Canonical facade: $client->ZarazZarazConfigReturn()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zaraz_zaraz_config_return()
    // resolves here too.
    public function ZarazZarazConfigReturn($data = null)
    {
        require_once __DIR__ . '/entity/zaraz_zaraz_config_return_entity.php';
        if ($data === null) {
            if ($this->_zaraz_zaraz_config_return === null) {
                $this->_zaraz_zaraz_config_return = new ZarazZarazConfigReturnEntity($this, null);
            }
            return $this->_zaraz_zaraz_config_return;
        }
        return new ZarazZarazConfigReturnEntity($this, $data);
    }


    private $_zaraz_zaraz_history = null;

    // Canonical facade: $client->ZarazZarazHistory()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zaraz_zaraz_history()
    // resolves here too.
    public function ZarazZarazHistory($data = null)
    {
        require_once __DIR__ . '/entity/zaraz_zaraz_history_entity.php';
        if ($data === null) {
            if ($this->_zaraz_zaraz_history === null) {
                $this->_zaraz_zaraz_history = new ZarazZarazHistoryEntity($this, null);
            }
            return $this->_zaraz_zaraz_history;
        }
        return new ZarazZarazHistoryEntity($this, $data);
    }


    private $_zaraz_zaraz_workflow = null;

    // Canonical facade: $client->ZarazZarazWorkflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zaraz_zaraz_workflow()
    // resolves here too.
    public function ZarazZarazWorkflow($data = null)
    {
        require_once __DIR__ . '/entity/zaraz_zaraz_workflow_entity.php';
        if ($data === null) {
            if ($this->_zaraz_zaraz_workflow === null) {
                $this->_zaraz_zaraz_workflow = new ZarazZarazWorkflowEntity($this, null);
            }
            return $this->_zaraz_zaraz_workflow;
        }
        return new ZarazZarazWorkflowEntity($this, $data);
    }


    private $_zone_setting = null;

    // Canonical facade: $client->ZoneSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zone_setting()
    // resolves here too.
    public function ZoneSetting($data = null)
    {
        require_once __DIR__ . '/entity/zone_setting_entity.php';
        if ($data === null) {
            if ($this->_zone_setting === null) {
                $this->_zone_setting = new ZoneSettingEntity($this, null);
            }
            return $this->_zone_setting;
        }
        return new ZoneSettingEntity($this, $data);
    }


    private $_zones_zone_settings_response_collection = null;

    // Canonical facade: $client->ZonesZoneSettingsResponseCollection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->zones_zone_settings_response_collection()
    // resolves here too.
    public function ZonesZoneSettingsResponseCollection($data = null)
    {
        require_once __DIR__ . '/entity/zones_zone_settings_response_collection_entity.php';
        if ($data === null) {
            if ($this->_zones_zone_settings_response_collection === null) {
                $this->_zones_zone_settings_response_collection = new ZonesZoneSettingsResponseCollectionEntity($this, null);
            }
            return $this->_zones_zone_settings_response_collection;
        }
        return new ZonesZoneSettingsResponseCollectionEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CloudflareZoneSettingsSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
