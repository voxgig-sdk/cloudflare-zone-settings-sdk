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
(0, node_test_1.describe)('ZarazZarazWorkflowEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudflareZoneSettingsSDK.test();
        const ent = testsdk.ZarazZarazWorkflow();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
        for (const op of ['list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'zaraz_zaraz_workflow.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "errors": { "a": true, "h": "Errors", "n": "errors", "r": true, "t": "`$ARRAY`", "key$": "errors", "index$": 0 }, "messages": { "a": true, "h": "Messages", "n": "messages", "r": true, "t": "`$ARRAY`", "key$": "messages", "index$": 1 }, "result": { "a": true, "h": "Result", "n": "result", "r": false, "sh": "Zaraz workflow.", "t": "`$STRING`", "key$": "result", "index$": 2 }, "success": { "a": true, "h": "Success", "n": "success", "r": true, "sh": "Whether the API call was successful.", "t": "`$BOOLEAN`", "key$": "success", "index$": 3 } }, "name": "zaraz_zaraz_workflow", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /zones/{zone_id}/settings/zaraz/workflow", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/zones/{zone_id}/settings/zaraz/workflow", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "zaraz" }, { "lit": "workflow" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /zones/{zone_id}/settings/zaraz/workflow", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "023e105f4ecef8ad9ca31a8372d0c353", "k": "param", "n": "zone_id", "or": "zone_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/zones/{zone_id}/settings/zaraz/workflow", "q": { "exist": ["zone_id"] }, "r": {}, "s": [{ "lit": "zones" }, { "var": "zone_id" }, { "lit": "settings" }, { "lit": "zaraz" }, { "lit": "workflow" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "zaraz_zaraz_workflow", "name__orig": "zaraz_zaraz_workflow", "Name": "ZarazZarazWorkflow", "name_": "zaraz_zaraz_workflow", "name-": "zaraz-zaraz-workflow", "NAME": "ZARAZ_ZARAZ_WORKFLOW", "index$": 12 }, { "active": true, "entity": "zaraz_zaraz_workflow", "key$": "BasicZarazZarazWorkflowFlow", "kind": "basic", "name": "BasicZarazZarazWorkflowFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "zone_id": "zone01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "zaraz_zaraz_workflow_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "zaraz_zaraz_workflow_ref01", "srcdatavar": "zaraz_zaraz_workflow_ref01_data", "suffix": "_up0", "textfield": "result" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-zaraz_zaraz_workflow_ref01" } }], "v": [], "index$": 1 }] }, 'ZarazZarazWorkflow', { "GET /zones/{zone_id}/settings/zaraz/workflow": { "protocol": "http", "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/zaraz_identifier" }, "index$": 0 }] }, "PUT /zones/{zone_id}/settings/zaraz/workflow": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "description": "Zaraz workflow.", "type": "string", "enum": ["realtime", "preview"], "x-auditable": true, "x-ref": "#/components/schemas/zaraz_zaraz-workflow", "index$": 1 } } } }, "parameters": [{ "name": "zone_id", "in": "path", "required": true, "schema": { "description": "Identifier.", "type": "string", "example": "023e105f4ecef8ad9ca31a8372d0c353", "maxLength": 32, "x-auditable": true, "x-ref": "#/components/schemas/zaraz_identifier" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let zaraz_zaraz_workflow_ref01_data = Object.values(setup.data.existing.zaraz_zaraz_workflow)[0];
        // LIST
        const zaraz_zaraz_workflow_ref01_ent = client.ZarazZarazWorkflow();
        const zaraz_zaraz_workflow_ref01_match = {};
        zaraz_zaraz_workflow_ref01_match['zone_id'] = setup.idmap['zone01'];
        const zaraz_zaraz_workflow_ref01_list = (await zaraz_zaraz_workflow_ref01_ent.list(zaraz_zaraz_workflow_ref01_match)).map((e) => e.data());
        // UPDATE
        const zaraz_zaraz_workflow_ref01_data_up0 = {};
        const zaraz_zaraz_workflow_ref01_markdef_up0 = { name: 'result', value: 'Mark01-zaraz_zaraz_workflow_ref01_' + setup.now };
        zaraz_zaraz_workflow_ref01_data_up0[zaraz_zaraz_workflow_ref01_markdef_up0.name] = zaraz_zaraz_workflow_ref01_markdef_up0.value;
        const zaraz_zaraz_workflow_ref01_resdata_up0 = (await zaraz_zaraz_workflow_ref01_ent.update(zaraz_zaraz_workflow_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != zaraz_zaraz_workflow_ref01_resdata_up0);
        (0, node_assert_1.default)(zaraz_zaraz_workflow_ref01_resdata_up0[zaraz_zaraz_workflow_ref01_markdef_up0.name] === zaraz_zaraz_workflow_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/zaraz_zaraz_workflow/ZarazZarazWorkflowTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudflareZoneSettingsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['zaraz_zaraz_workflow01', 'zaraz_zaraz_workflow02', 'zaraz_zaraz_workflow03', 'zone01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_WORKFLOW_ENTID': idmap,
        'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
        'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
    });
    idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_WORKFLOW_ENTID'];
    const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_WORKFLOW_ENTID'];
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
//# sourceMappingURL=ZarazZarazWorkflowEntity.test.js.map