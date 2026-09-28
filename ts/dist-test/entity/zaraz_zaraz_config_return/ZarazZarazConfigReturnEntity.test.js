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
(0, node_test_1.describe)('ZarazZarazConfigReturnEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZoneSettingsSDK.test();
        const ent = testsdk.ZarazZarazConfigReturn();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zaraz_zaraz_config_return.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "analytics": { "a": true, "h": "Analytics", "n": "analytics", "r": false, "sh": "Cloudflare Monitoring settings.", "t": "`$OBJECT`", "key$": "analytics", "index$": 0 }, "consent": { "a": true, "h": "Consent", "n": "consent", "r": true, "sh": "Consent management configuration.", "t": "`$OBJECT`", "key$": "consent", "index$": 1 }, "dataLayer": { "a": true, "h": "Data Layer", "n": "dataLayer", "r": true, "sh": "Data layer compatibility mode enabled.", "t": "`$BOOLEAN`", "key$": "dataLayer", "index$": 2 }, "debugKey": { "a": true, "h": "Debug Key", "n": "debugKey", "r": true, "sh": "The key for Zaraz debug mode.", "t": "`$STRING`", "key$": "debugKey", "index$": 3 }, "historyChange": { "a": true, "h": "History Change", "n": "historyChange", "r": false, "sh": "Single Page Application support enabled.", "t": "`$BOOLEAN`", "key$": "historyChange", "index$": 4 }, "settings": { "a": true, "h": "Settings", "n": "settings", "r": true, "sh": "General Zaraz settings.", "t": "`$OBJECT`", "key$": "settings", "index$": 5 }, "tools": { "a": true, "h": "Tools", "n": "tools", "r": false, "sh": "Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object.", "t": "`$OBJECT`", "union": { "branches": 2, "count": 5, "depth": 10 }, "key$": "tools", "index$": 6 }, "triggers": { "a": true, "h": "Triggers", "n": "triggers", "r": true, "sh": "Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration.", "t": "`$OBJECT`", "union": { "branches": 7, "count": 2, "depth": 4 }, "key$": "triggers", "index$": 7 }, "variables": { "a": true, "h": "Variables", "n": "variables", "r": true, "sh": "Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration.", "t": "`$OBJECT`", "key$": "variables", "index$": 8 }, "zarazVersion": { "a": true, "h": "Zaraz Version", "n": "zarazVersion", "r": true, "sh": "Zaraz internal version of the config.", "t": "`$INTEGER`", "key$": "zarazVersion", "index$": 9 } }, "name": "zaraz_zaraz_config_return", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/settings/zaraz/export", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/settings/zaraz/export", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "zaraz" }, { "lit": "export" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "zaraz_zaraz_config_return", "name__orig": "zaraz_zaraz_config_return", "Name": "ZarazZarazConfigReturn", "name_": "zaraz_zaraz_config_return", "name-": "zaraz-zaraz-config-return", "NAME": "ZARAZ_ZARAZ_CONFIG_RETURN", "index$": 10 }, { "active": true, "entity": "zaraz_zaraz_config_return", "key$": "BasicZarazZarazConfigReturnFlow", "kind": "basic", "name": "BasicZarazZarazConfigReturnFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "zaraz_zaraz_config_return_ref01", "srcdatavar": "zaraz_zaraz_config_return_ref01_data", "suffix": "_dt0" }, "m": { "id": "zaraz_zaraz_config_return01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zaraz_zaraz_config_return_ref01" } }], "index$": 0 }] }, 'ZarazZarazConfigReturn', { "GET /zones/{zone_id}/settings/zaraz/export": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/zaraz_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let zaraz_zaraz_config_return_ref01_data = Object.values(setup.data.existing.zaraz_zaraz_config_return)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const zaraz_zaraz_config_return_ref01_ent = client.ZarazZarazConfigReturn();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zaraz_zaraz_config_return/ZarazZarazConfigReturnTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZoneSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zaraz_zaraz_config_return01', 'zaraz_zaraz_config_return02', 'zaraz_zaraz_config_return03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_RETURN_ENTID': idmap,
        'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_RETURN_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_RETURN_ENTID'];
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
//# sourceMappingURL=ZarazZarazConfigReturnEntity.test.js.map