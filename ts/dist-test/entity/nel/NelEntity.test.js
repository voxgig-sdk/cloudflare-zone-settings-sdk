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
(0, node_test_1.describe)('NelEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZoneSettingsSDK.test();
        const ent = testsdk.Nel();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'nel.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": true, "sh": "A zone-scoped NEL configuration setting.", "t": "`$OBJECT`", "key$": "result", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 }, "value": { "a": true, "h": "Value", "n": "value", "r": true, "sh": "The NEL configuration value.", "t": "`$OBJECT`", "key$": "value", "index$": 4 } }, "name": "nel", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/settings/nel", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/settings/nel", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "nel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /zones/{zone_id}/settings/nel", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/zones/{zone_id}/settings/nel", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "nel" }], "t": { "req": { "value": "`reqdata.value`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "nel", "name__orig": "nel", "Name": "Nel", "name_": "nel", "name-": "nel", "NAME": "NEL", "index$": 5 }, { "active": true, "entity": "nel", "key$": "BasicNelFlow", "kind": "basic", "name": "BasicNelFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "zone_id": "zone01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "nel_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "nel_ref01", "srcdatavar": "nel_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-nel_ref01" } }], "v": [], "index$": 1 }] }, 'Nel', { "GET /zones/{zone_id}/settings/nel": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "description": "Identifier of the zone.", "required": true, "schema": { "description": "Identifier of the zone.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-ref": "#/components/schemas/nel-config_zone_identifier" }, "index$": 0 }] }, "PATCH /zones/{zone_id}/settings/nel": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "examples": { "disable_nel": { "summary": "Disable NEL", "value": { "value": { "enabled": false } } }, "enable_nel": { "summary": "Enable NEL", "value": { "value": { "enabled": true } } } }, "schema": { "description": "Request body for updating the NEL setting.", "type": "object", "properties": { "value": { "description": "The NEL configuration value.", "type": "object", "properties": { "enabled": { "description": "Whether Network Error Logging is enabled for the zone. When enabled, browsers report network errors to Cloudflare's NEL endpoint.\n", "example": true, "type": "boolean" } }, "required": ["enabled"], "x-ref": "#/components/schemas/nel-config_nel_value", "key$": "value" } }, "additionalProperties": false, "required": ["value"], "x-ref": "#/components/schemas/nel-config_nel_setting_patch", "index$": 1 } } } }, "parameters": [{ "name": "zone_id", "in": "path", "description": "Identifier of the zone.", "required": true, "schema": { "description": "Identifier of the zone.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "readOnly": true, "x-ref": "#/components/schemas/nel-config_zone_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let nel_ref01_data = Object.values(setup.data.existing.nel)[0];
        // LIST
        const nel_ref01_ent = client.Nel();
        const nel_ref01_match = {};
        nel_ref01_match['zone_id'] = setup.idmap['zone01'];
        const nel_ref01_list = (await nel_ref01_ent.list(nel_ref01_match)).map((e) => e.data());
        // UPDATE
        const nel_ref01_data_up0 = {};
        const nel_ref01_resdata_up0 = (await nel_ref01_ent.update(nel_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != nel_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/nel/NelTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZoneSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['nel01', 'nel02', 'nel03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZONE_SETTINGS_TEST_NEL_ENTID': idmap,
        'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_NEL_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_NEL_ENTID'];
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
//# sourceMappingURL=NelEntity.test.js.map