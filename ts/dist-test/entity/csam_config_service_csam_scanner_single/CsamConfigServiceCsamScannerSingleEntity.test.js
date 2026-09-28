"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CsamConfigServiceCsamScannerSingleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZoneSettingsSDK.test();
        const ent = testsdk.CsamConfigServiceCsamScannerSingle();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'csam_config_service_csam_scanner_single.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The feature identifier.", "t": "`$STRING`", "key$": "id", "index$": 1 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 2 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "sh": "CSAM Scanner configuration for a zone.", "t": "`$OBJECT`", "key$": "result", "index$": 3 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 4 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "sh": "Writable CSAM Scanner feature configuration values.", "t": "`$OBJECT`", "key$": "value", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "csam_config_service_csam_scanner_single", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/settings/csam_scanner_third_party", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/settings/csam_scanner_third_party", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "csam_scanner_third_party" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /zones/{zone_id}/settings/csam_scanner_third_party", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/zones/{zone_id}/settings/csam_scanner_third_party", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "csam_scanner_third_party" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "csam_config_service_csam_scanner_single", "name__orig": "csam_config_service_csam_scanner_single", "Name": "CsamConfigServiceCsamScannerSingle", "name_": "csam_config_service_csam_scanner_single", "name-": "csam-config-service-csam-scanner-single", "NAME": "CSAM_CONFIG_SERVICE_CSAM_SCANNER_SINGLE", "index$": 2 }, { "active": true, "entity": "csam_config_service_csam_scanner_single", "key$": "BasicCsamConfigServiceCsamScannerSingleFlow", "kind": "basic", "name": "BasicCsamConfigServiceCsamScannerSingleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "zone_id": "zone01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "csam_config_service_csam_scanner_single_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "csam_config_service_csam_scanner_single_ref01", "srcdatavar": "csam_config_service_csam_scanner_single_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-csam_config_service_csam_scanner_single_ref01" } }], "v": [], "index$": 1 }] }, 'CsamConfigServiceCsamScannerSingle', { "GET /zones/{zone_id}/settings/csam_scanner_third_party": { "protocol": "http", "parameters": [{ "description": "Identifier for the zone.", "in": "path", "name": "zone_id", "required": true, "schema": { "description": "Identifier for the zone.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 1, "x-ref": "#/components/schemas/csam-config-service_zone_identifier" }, "x-ref": "#/components/parameters/csam-config-service_zone_id", "index$": 0 }] }, "PATCH /zones/{zone_id}/settings/csam_scanner_third_party": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Request body for updating CSAM Scanner configuration.\n", "type": "object", "properties": { "id": { "description": "The feature identifier.", "type": "string", "example": "csam_scanner", "enum": ["csam_scanner"], "key$": "id" }, "value": { "description": "Writable CSAM Scanner feature configuration values.\n", "type": "object", "properties": { "email": { "description": "Notification email address for CSAM scan results. When changed,\nemail verification is triggered automatically.\n", "type": "string", "example": "user@example.com", "maxLength": 254 }, "enabled": { "description": "Whether CSAM scanning is enabled for this zone.", "type": "boolean", "example": true }, "resend_email": { "description": "Set to true to trigger re-sending the email verification.\nWrite-only; never appears in responses (omitted when false).\n", "type": "boolean", "example": true }, "sources": { "description": "Map of scanning sources and their enabled state.", "type": "object", "example": { "source1": true }, "additionalProperties": { "type": "boolean" } } }, "x-ref": "#/components/schemas/csam-config-service_csam_scanner_third_party_update_value", "key$": "value" } }, "x-ref": "#/components/schemas/csam-config-service_csam_scanner_third_party_update_request", "index$": 1 } } } }, "parameters": [{ "description": "Identifier for the zone.", "in": "path", "name": "zone_id", "required": true, "schema": { "description": "Identifier for the zone.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "minLength": 1, "x-ref": "#/components/schemas/csam-config-service_zone_identifier" }, "x-ref": "#/components/parameters/csam-config-service_zone_id", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let csam_config_service_csam_scanner_single_ref01_data = Object.values(setup.data.existing.csam_config_service_csam_scanner_single)[0];
        // LIST
        const csam_config_service_csam_scanner_single_ref01_ent = client.CsamConfigServiceCsamScannerSingle();
        const csam_config_service_csam_scanner_single_ref01_match = {};
        csam_config_service_csam_scanner_single_ref01_match['zone_id'] = setup.idmap['zone01'];
        const csam_config_service_csam_scanner_single_ref01_list = (await csam_config_service_csam_scanner_single_ref01_ent.list(csam_config_service_csam_scanner_single_ref01_match)).map((e) => e.data());
        // UPDATE
        const csam_config_service_csam_scanner_single_ref01_data_up0 = {};
        csam_config_service_csam_scanner_single_ref01_data_up0.id = csam_config_service_csam_scanner_single_ref01_data.id;
        const csam_config_service_csam_scanner_single_ref01_resdata_up0 = (await csam_config_service_csam_scanner_single_ref01_ent.update(csam_config_service_csam_scanner_single_ref01_data_up0)).data();
        (0, node_assert_1.default)(csam_config_service_csam_scanner_single_ref01_resdata_up0.id === csam_config_service_csam_scanner_single_ref01_data_up0.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/csam_config_service_csam_scanner_single/CsamConfigServiceCsamScannerSingleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZoneSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['csam_config_service_csam_scanner_single01', 'csam_config_service_csam_scanner_single02', 'csam_config_service_csam_scanner_single03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZONE_SETTINGS_TEST_CSAM_CONFIG_SERVICE_CSAM_SCANNER_SINGLE_ENTID': idmap,
        'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_CSAM_CONFIG_SERVICE_CSAM_SCANNER_SINGLE_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_CSAM_CONFIG_SERVICE_CSAM_SCANNER_SINGLE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudflareZoneSettingsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDFLARE_ZONE_SETTINGS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CsamConfigServiceCsamScannerSingleEntity.test.js.map