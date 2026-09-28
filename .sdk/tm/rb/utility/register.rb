# CloudflareZoneSettings SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudflareZoneSettingsUtility.registrar = ->(u) {
  u.clean = CloudflareZoneSettingsUtilities::Clean
  u.done = CloudflareZoneSettingsUtilities::Done
  u.make_error = CloudflareZoneSettingsUtilities::MakeError
  u.feature_add = CloudflareZoneSettingsUtilities::FeatureAdd
  u.feature_hook = CloudflareZoneSettingsUtilities::FeatureHook
  u.feature_init = CloudflareZoneSettingsUtilities::FeatureInit
  u.fetcher = CloudflareZoneSettingsUtilities::Fetcher
  u.make_fetch_def = CloudflareZoneSettingsUtilities::MakeFetchDef
  u.make_context = CloudflareZoneSettingsUtilities::MakeContext
  u.make_options = CloudflareZoneSettingsUtilities::MakeOptions
  u.make_request = CloudflareZoneSettingsUtilities::MakeRequest
  u.make_response = CloudflareZoneSettingsUtilities::MakeResponse
  u.make_result = CloudflareZoneSettingsUtilities::MakeResult
  u.make_point = CloudflareZoneSettingsUtilities::MakePoint
  u.make_spec = CloudflareZoneSettingsUtilities::MakeSpec
  u.make_url = CloudflareZoneSettingsUtilities::MakeUrl
  u.param = CloudflareZoneSettingsUtilities::Param
  u.prepare_auth = CloudflareZoneSettingsUtilities::PrepareAuth
  u.prepare_body = CloudflareZoneSettingsUtilities::PrepareBody
  u.prepare_headers = CloudflareZoneSettingsUtilities::PrepareHeaders
  u.prepare_method = CloudflareZoneSettingsUtilities::PrepareMethod
  u.prepare_params = CloudflareZoneSettingsUtilities::PrepareParams
  u.prepare_path = CloudflareZoneSettingsUtilities::PreparePath
  u.prepare_query = CloudflareZoneSettingsUtilities::PrepareQuery
  u.graphql_body = CloudflareZoneSettingsUtilities::GraphqlBody
  u.graphql_errors = CloudflareZoneSettingsUtilities::GraphqlErrors
  u.result_basic = CloudflareZoneSettingsUtilities::ResultBasic
  u.result_body = CloudflareZoneSettingsUtilities::ResultBody
  u.result_headers = CloudflareZoneSettingsUtilities::ResultHeaders
  u.transform_request = CloudflareZoneSettingsUtilities::TransformRequest
  u.transform_response = CloudflareZoneSettingsUtilities::TransformResponse
}
