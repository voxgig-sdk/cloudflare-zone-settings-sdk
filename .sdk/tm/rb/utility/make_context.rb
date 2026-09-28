# CloudflareZoneSettings SDK utility: make_context
require_relative '../core/context'
module CloudflareZoneSettingsUtilities
  MakeContext = ->(ctxmap, basectx) {
    CloudflareZoneSettingsContext.new(ctxmap, basectx)
  }
end
