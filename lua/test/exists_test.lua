-- CloudflareZoneSettings SDK exists test

local sdk = require("cloudflare-zone-settings_sdk")

describe("CloudflareZoneSettingsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
