# CloudflareZoneSettings SDK utility: make_context

from cloudflarezonesettings_sdk.core.context import CloudflareZoneSettingsContext


def make_context_util(ctxmap, basectx):
    return CloudflareZoneSettingsContext(ctxmap, basectx)
