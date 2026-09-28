"use strict";
// CloudflareZoneSettings Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudflareZoneSettingsSDK = exports.CloudflareZoneSettingsEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const CacheSettingsOriginH2MaxStreamsResponseValueEntity_1 = require("./entity/CacheSettingsOriginH2MaxStreamsResponseValueEntity");
const ConfigEntity_1 = require("./entity/ConfigEntity");
const CsamConfigServiceCsamScannerSingleEntity_1 = require("./entity/CsamConfigServiceCsamScannerSingleEntity");
const DefaultEntity_1 = require("./entity/DefaultEntity");
const GoogleTagGatewayEntity_1 = require("./entity/GoogleTagGatewayEntity");
const NelEntity_1 = require("./entity/NelEntity");
const RumEntity_1 = require("./entity/RumEntity");
const ZarazEntity_1 = require("./entity/ZarazEntity");
const ZarazZarazConfigEntity_1 = require("./entity/ZarazZarazConfigEntity");
const ZarazZarazConfigHistoryEntity_1 = require("./entity/ZarazZarazConfigHistoryEntity");
const ZarazZarazConfigReturnEntity_1 = require("./entity/ZarazZarazConfigReturnEntity");
const ZarazZarazHistoryEntity_1 = require("./entity/ZarazZarazHistoryEntity");
const ZarazZarazWorkflowEntity_1 = require("./entity/ZarazZarazWorkflowEntity");
const ZoneSettingEntity_1 = require("./entity/ZoneSettingEntity");
const ZonesZoneSettingsResponseCollectionEntity_1 = require("./entity/ZonesZoneSettingsResponseCollectionEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudflareZoneSettingsEntityBase_1 = require("./CloudflareZoneSettingsEntityBase");
Object.defineProperty(exports, "CloudflareZoneSettingsEntityBase", { enumerable: true, get: function () { return CloudflareZoneSettingsEntityBase_1.CloudflareZoneSettingsEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudflareZoneSettingsSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CloudflareZoneSettingsSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudflareZoneSettingsSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudflareZoneSettingsSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.CacheSettingsOriginH2MaxStreamsResponseValue().list()` / `client.CacheSettingsOriginH2MaxStreamsResponseValue().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CacheSettingsOriginH2MaxStreamsResponseValue(entopts) {
        const self = this;
        return new CacheSettingsOriginH2MaxStreamsResponseValueEntity_1.CacheSettingsOriginH2MaxStreamsResponseValueEntity(self, entopts);
    }
    // Entity access: `client.Config().list()` / `client.Config().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Config(entopts) {
        const self = this;
        return new ConfigEntity_1.ConfigEntity(self, entopts);
    }
    // Entity access: `client.CsamConfigServiceCsamScannerSingle().list()` / `client.CsamConfigServiceCsamScannerSingle().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CsamConfigServiceCsamScannerSingle(entopts) {
        const self = this;
        return new CsamConfigServiceCsamScannerSingleEntity_1.CsamConfigServiceCsamScannerSingleEntity(self, entopts);
    }
    // Entity access: `client.Default().list()` / `client.Default().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Default(entopts) {
        const self = this;
        return new DefaultEntity_1.DefaultEntity(self, entopts);
    }
    // Entity access: `client.GoogleTagGateway().list()` / `client.GoogleTagGateway().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GoogleTagGateway(entopts) {
        const self = this;
        return new GoogleTagGatewayEntity_1.GoogleTagGatewayEntity(self, entopts);
    }
    // Entity access: `client.Nel().list()` / `client.Nel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Nel(entopts) {
        const self = this;
        return new NelEntity_1.NelEntity(self, entopts);
    }
    // Entity access: `client.Rum().list()` / `client.Rum().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rum(entopts) {
        const self = this;
        return new RumEntity_1.RumEntity(self, entopts);
    }
    // Entity access: `client.Zaraz().list()` / `client.Zaraz().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Zaraz(entopts) {
        const self = this;
        return new ZarazEntity_1.ZarazEntity(self, entopts);
    }
    // Entity access: `client.ZarazZarazConfig().list()` / `client.ZarazZarazConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZarazZarazConfig(entopts) {
        const self = this;
        return new ZarazZarazConfigEntity_1.ZarazZarazConfigEntity(self, entopts);
    }
    // Entity access: `client.ZarazZarazConfigHistory().list()` / `client.ZarazZarazConfigHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZarazZarazConfigHistory(entopts) {
        const self = this;
        return new ZarazZarazConfigHistoryEntity_1.ZarazZarazConfigHistoryEntity(self, entopts);
    }
    // Entity access: `client.ZarazZarazConfigReturn().list()` / `client.ZarazZarazConfigReturn().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZarazZarazConfigReturn(entopts) {
        const self = this;
        return new ZarazZarazConfigReturnEntity_1.ZarazZarazConfigReturnEntity(self, entopts);
    }
    // Entity access: `client.ZarazZarazHistory().list()` / `client.ZarazZarazHistory().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZarazZarazHistory(entopts) {
        const self = this;
        return new ZarazZarazHistoryEntity_1.ZarazZarazHistoryEntity(self, entopts);
    }
    // Entity access: `client.ZarazZarazWorkflow().list()` / `client.ZarazZarazWorkflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZarazZarazWorkflow(entopts) {
        const self = this;
        return new ZarazZarazWorkflowEntity_1.ZarazZarazWorkflowEntity(self, entopts);
    }
    // Entity access: `client.ZoneSetting().list()` / `client.ZoneSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZoneSetting(entopts) {
        const self = this;
        return new ZoneSettingEntity_1.ZoneSettingEntity(self, entopts);
    }
    // Entity access: `client.ZonesZoneSettingsResponseCollection().list()` / `client.ZonesZoneSettingsResponseCollection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ZonesZoneSettingsResponseCollection(entopts) {
        const self = this;
        return new ZonesZoneSettingsResponseCollectionEntity_1.ZonesZoneSettingsResponseCollectionEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudflareZoneSettingsSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudflareZoneSettingsSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CloudflareZoneSettings' };
    }
    toString() {
        return 'CloudflareZoneSettings ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudflareZoneSettingsSDK = CloudflareZoneSettingsSDK;
const SDK = CloudflareZoneSettingsSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudflareZoneSettingsSDK.js.map