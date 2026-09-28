-- CloudflareZoneSettings SDK error

local CloudflareZoneSettingsError = {}
CloudflareZoneSettingsError.__index = CloudflareZoneSettingsError


function CloudflareZoneSettingsError.new(code, msg, ctx)
  local self = setmetatable({}, CloudflareZoneSettingsError)
  self.is_sdk_error = true
  self.sdk = "CloudflareZoneSettings"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CloudflareZoneSettingsError:error()
  return self.msg
end


function CloudflareZoneSettingsError:__tostring()
  return self.msg
end


return CloudflareZoneSettingsError
