# CloudflareZoneSettings SDK exists test

require "minitest/autorun"
require_relative "../CloudflareZoneSettings_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CloudflareZoneSettingsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
