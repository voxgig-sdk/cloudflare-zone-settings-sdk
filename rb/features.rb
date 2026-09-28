# CloudflareZoneSettings SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CloudflareZoneSettingsFeatures
  def self.make_feature(name)
    case name
    when "base"
      CloudflareZoneSettingsBaseFeature.new
    when "test"
      CloudflareZoneSettingsTestFeature.new
    else
      CloudflareZoneSettingsBaseFeature.new
    end
  end
end
