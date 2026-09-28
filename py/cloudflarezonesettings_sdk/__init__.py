# CloudflareZoneSettings SDK

from cloudflarezonesettings_sdk.utility.voxgig_struct import voxgig_struct as vs
from cloudflarezonesettings_sdk.core.utility_type import CloudflareZoneSettingsUtility
from cloudflarezonesettings_sdk.core.spec import CloudflareZoneSettingsSpec
from cloudflarezonesettings_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from cloudflarezonesettings_sdk.utility import register

# Load features
from cloudflarezonesettings_sdk.feature.base_feature import CloudflareZoneSettingsBaseFeature
from cloudflarezonesettings_sdk.features import _has_feature, _make_feature


class CloudflareZoneSettingsSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CloudflareZoneSettingsUtility()
        self._utility = utility

        from cloudflarezonesettings_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CloudflareZoneSettingsUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CloudflareZoneSettingsSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CloudflareZoneSettingsSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CloudflareZoneSettingsSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def CacheSettingsOriginH2MaxStreamsResponseValue(self, data=None) -> "CacheSettingsOriginH2MaxStreamsResponseValueEntity":
        """Entity factory: client.CacheSettingsOriginH2MaxStreamsResponseValue().list() / client.CacheSettingsOriginH2MaxStreamsResponseValue().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.cache_settings_origin_h2_max_streams_response_value_entity import CacheSettingsOriginH2MaxStreamsResponseValueEntity
        return CacheSettingsOriginH2MaxStreamsResponseValueEntity(self, data)


    def Config(self, data=None) -> "ConfigEntity":
        """Entity factory: client.Config().list() / client.Config().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.config_entity import ConfigEntity
        return ConfigEntity(self, data)


    def CsamConfigServiceCsamScannerSingle(self, data=None) -> "CsamConfigServiceCsamScannerSingleEntity":
        """Entity factory: client.CsamConfigServiceCsamScannerSingle().list() / client.CsamConfigServiceCsamScannerSingle().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.csam_config_service_csam_scanner_single_entity import CsamConfigServiceCsamScannerSingleEntity
        return CsamConfigServiceCsamScannerSingleEntity(self, data)


    def Default(self, data=None) -> "DefaultEntity":
        """Entity factory: client.Default().list() / client.Default().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.default_entity import DefaultEntity
        return DefaultEntity(self, data)


    def GoogleTagGateway(self, data=None) -> "GoogleTagGatewayEntity":
        """Entity factory: client.GoogleTagGateway().list() / client.GoogleTagGateway().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.google_tag_gateway_entity import GoogleTagGatewayEntity
        return GoogleTagGatewayEntity(self, data)


    def Nel(self, data=None) -> "NelEntity":
        """Entity factory: client.Nel().list() / client.Nel().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.nel_entity import NelEntity
        return NelEntity(self, data)


    def Rum(self, data=None) -> "RumEntity":
        """Entity factory: client.Rum().list() / client.Rum().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.rum_entity import RumEntity
        return RumEntity(self, data)


    def Zaraz(self, data=None) -> "ZarazEntity":
        """Entity factory: client.Zaraz().list() / client.Zaraz().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zaraz_entity import ZarazEntity
        return ZarazEntity(self, data)


    def ZarazZarazConfig(self, data=None) -> "ZarazZarazConfigEntity":
        """Entity factory: client.ZarazZarazConfig().list() / client.ZarazZarazConfig().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zaraz_zaraz_config_entity import ZarazZarazConfigEntity
        return ZarazZarazConfigEntity(self, data)


    def ZarazZarazConfigHistory(self, data=None) -> "ZarazZarazConfigHistoryEntity":
        """Entity factory: client.ZarazZarazConfigHistory().list() / client.ZarazZarazConfigHistory().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zaraz_zaraz_config_history_entity import ZarazZarazConfigHistoryEntity
        return ZarazZarazConfigHistoryEntity(self, data)


    def ZarazZarazConfigReturn(self, data=None) -> "ZarazZarazConfigReturnEntity":
        """Entity factory: client.ZarazZarazConfigReturn().list() / client.ZarazZarazConfigReturn().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zaraz_zaraz_config_return_entity import ZarazZarazConfigReturnEntity
        return ZarazZarazConfigReturnEntity(self, data)


    def ZarazZarazHistory(self, data=None) -> "ZarazZarazHistoryEntity":
        """Entity factory: client.ZarazZarazHistory().list() / client.ZarazZarazHistory().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zaraz_zaraz_history_entity import ZarazZarazHistoryEntity
        return ZarazZarazHistoryEntity(self, data)


    def ZarazZarazWorkflow(self, data=None) -> "ZarazZarazWorkflowEntity":
        """Entity factory: client.ZarazZarazWorkflow().list() / client.ZarazZarazWorkflow().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zaraz_zaraz_workflow_entity import ZarazZarazWorkflowEntity
        return ZarazZarazWorkflowEntity(self, data)


    def ZoneSetting(self, data=None) -> "ZoneSettingEntity":
        """Entity factory: client.ZoneSetting().list() / client.ZoneSetting().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zone_setting_entity import ZoneSettingEntity
        return ZoneSettingEntity(self, data)


    def ZonesZoneSettingsResponseCollection(self, data=None) -> "ZonesZoneSettingsResponseCollectionEntity":
        """Entity factory: client.ZonesZoneSettingsResponseCollection().list() / client.ZonesZoneSettingsResponseCollection().load({"id": ...})."""
        from cloudflarezonesettings_sdk.entity.zones_zone_settings_response_collection_entity import ZonesZoneSettingsResponseCollectionEntity
        return ZonesZoneSettingsResponseCollectionEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CloudflareZoneSettingsSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from cloudflarezonesettings_sdk.entity.cache_settings_origin_h2_max_streams_response_value_entity import CacheSettingsOriginH2MaxStreamsResponseValueEntity
    from cloudflarezonesettings_sdk.entity.config_entity import ConfigEntity
    from cloudflarezonesettings_sdk.entity.csam_config_service_csam_scanner_single_entity import CsamConfigServiceCsamScannerSingleEntity
    from cloudflarezonesettings_sdk.entity.default_entity import DefaultEntity
    from cloudflarezonesettings_sdk.entity.google_tag_gateway_entity import GoogleTagGatewayEntity
    from cloudflarezonesettings_sdk.entity.nel_entity import NelEntity
    from cloudflarezonesettings_sdk.entity.rum_entity import RumEntity
    from cloudflarezonesettings_sdk.entity.zaraz_entity import ZarazEntity
    from cloudflarezonesettings_sdk.entity.zaraz_zaraz_config_entity import ZarazZarazConfigEntity
    from cloudflarezonesettings_sdk.entity.zaraz_zaraz_config_history_entity import ZarazZarazConfigHistoryEntity
    from cloudflarezonesettings_sdk.entity.zaraz_zaraz_config_return_entity import ZarazZarazConfigReturnEntity
    from cloudflarezonesettings_sdk.entity.zaraz_zaraz_history_entity import ZarazZarazHistoryEntity
    from cloudflarezonesettings_sdk.entity.zaraz_zaraz_workflow_entity import ZarazZarazWorkflowEntity
    from cloudflarezonesettings_sdk.entity.zone_setting_entity import ZoneSettingEntity
    from cloudflarezonesettings_sdk.entity.zones_zone_settings_response_collection_entity import ZonesZoneSettingsResponseCollectionEntity
