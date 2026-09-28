

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudflareZoneSettingsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ZoneSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZoneSettingsSDK.test()
    const ent = testsdk.ZoneSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zone_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":2},"result":{"a":true,"h":"Result","n":"result","r":false,"sh":"Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services.","t":"`$OBJECT`","union":{"branches":66,"count":1,"depth":0},"key$":"result","index$":3},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful","t":"`$BOOLEAN`","key$":"success","index$":4},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"Value of the zone setting.","t":"`$OBJECT`","key$":"value","index$":5}},"id":{"field":"id","name":"id"},"name":"zone_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/automatic_platform_optimization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/automatic_platform_optimization","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"automatic_platform_optimization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/binary_ast","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/binary_ast","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"binary_ast"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/fonts","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/fonts","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"fonts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/h2_prioritization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/h2_prioritization","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"h2_prioritization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/image_resizing","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/image_resizing","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"image_resizing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/speed_brain","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/speed_brain","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"speed_brain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/transformations_allowed_origins","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/transformations_allowed_origins","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"transformations_allowed_origins"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/transformations_c2pa","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/transformations_c2pa","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"transformations_c2pa"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/transformations_config","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/transformations_config","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"transformations_config"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/{setting_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"always_online","k":"param","n":"id","or":"setting_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/{setting_id}","q":{"exist":["id","zone_id"]},"r":{"param":{"setting_id":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/aegis","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/aegis","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"aegis"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/origin_max_http_version","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/origin_max_http_version","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"origin_max_http_version"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/{setting_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"always_online","k":"param","n":"id","or":"setting_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/{setting_id}","q":{"exist":["id","zone_id"]},"r":{"param":{"setting_id":"id"}},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/aegis","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/aegis","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"aegis"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/automatic_platform_optimization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/automatic_platform_optimization","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"automatic_platform_optimization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/binary_ast","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/binary_ast","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"binary_ast"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/fonts","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/fonts","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"fonts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/h2_prioritization","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/h2_prioritization","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"h2_prioritization"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/image_resizing","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/image_resizing","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"image_resizing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/origin_max_http_version","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/origin_max_http_version","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"origin_max_http_version"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/speed_brain","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/speed_brain","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"speed_brain"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/transformations_allowed_origins","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/transformations_allowed_origins","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"transformations_allowed_origins"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":9},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/transformations_c2pa","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/transformations_c2pa","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"transformations_c2pa"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":10},{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/transformations_config","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/transformations_config","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"transformations_config"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":11}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zone_setting","name__orig":"zone_setting","Name":"ZoneSetting","name_":"zone_setting","name-":"zone-setting","NAME":"ZONE_SETTING","index$":13}, {"active":true,"entity":"zone_setting","key$":"BasicZoneSettingFlow","kind":"basic","name":"BasicZoneSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"zone_setting_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"zone_setting_ref01","srcdatavar":"zone_setting_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zone_setting_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"zone_setting_ref01","srcdatavar":"zone_setting_ref01_data","suffix":"_dt0"},"m":{"id":"zone_setting01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zone_setting_ref01"}}],"index$":2}]}, 'ZoneSetting', {"GET /zones/{zone_id}/settings/automatic_platform_optimization":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/binary_ast":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/fonts":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/h2_prioritization":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/image_resizing":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/speed_brain":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/transformations_allowed_origins":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/transformations_c2pa":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/transformations_config":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/{setting_id}":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/zones_identifier"},"index$":0},{"name":"setting_id","in":"path","required":true,"schema":{"description":"Setting name","type":"string","example":"always_online","x-ref":"#/components/schemas/zones_setting_name"},"index$":1}]},"GET /zones/{zone_id}/settings/aegis":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"GET /zones/{zone_id}/settings/origin_max_http_version":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/{setting_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"properties":{"enabled":{"description":"ssl-recommender enrollment setting.","type":"boolean","default":false,"x-ref":"#/components/schemas/zones_ssl_recommender_enabled"}},"type":"object"},{"properties":{"value":{"oneOf":[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],"x-ref":"#/components/schemas/zones_setting_value"}},"type":"object"}],"x-ref":"#/components/schemas/zones_zone_settings_single_request","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-ref":"#/components/schemas/zones_identifier"},"index$":0},{"name":"setting_id","in":"path","required":true,"schema":{"description":"Setting name","type":"string","example":"always_online","x-ref":"#/components/schemas/zones_setting_name"},"index$":1}]},"PATCH /zones/{zone_id}/settings/aegis":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Value of the zone setting.","type":"object","properties":{"enabled":{"description":"Whether the feature is enabled or not.","type":"boolean","x-auditable":true},"pool_id":{"description":"Egress pool id which refers to a grouping of dedicated egress IPs through which Cloudflare will connect to origin.","example":"pool-id","type":"string","x-auditable":true}},"x-ref":"#/components/schemas/cache-settings_aegis_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/automatic_platform_optimization":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Configuration for Automatic Platform Optimization (APO) for WordPress.\nSet to \"off\" to disable, or provide an object to configure APO settings.\n","oneOf":[{"description":"Disable Automatic Platform Optimization.","enum":["off"],"type":"string"},{"properties":{"cache_by_device_type":{},"cf":{},"enabled":{},"hostnames":{},"recheck":{},"wordpress":{},"wp_plugin":{}},"required":["cf","enabled","wordpress","wp_plugin"],"type":"object"}],"title":"Automatic Platform Optimization value","x-ref":"#/components/schemas/speed_automatic_platform_optimization_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/binary_ast":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Controls Binary AST behavior:\n- \"off\": Feature disabled.\n- \"on\": Binary AST enabled.\n- \"latest\": Binary AST enabled using the latest version.\n","type":"string","enum":["off","on","latest"],"x-auditable":true,"x-ref":"#/components/schemas/speed_binary_ast_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/fonts":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Whether the feature is enabled or disabled.","type":"string","default":"off","enum":["on","off"],"x-auditable":true,"x-ref":"#/components/schemas/speed_cloudflare_fonts_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/h2_prioritization":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Controls HTTP/2 Prioritization behavior:\n- \"off\": Use browser default prioritization.\n- \"on\": Use Cloudflare's optimized prioritization.\n- \"custom\": Use custom prioritization rules.\n","type":"string","enum":["off","on","custom"],"x-auditable":true,"x-ref":"#/components/schemas/speed_h2_prioritization_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/image_resizing":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Controls Image Resizing behavior:\n- \"off\": Feature disabled.\n- \"on\": Resizing is enabled for same-zone images only.\n- \"open\": Resizing is enabled for images from any origin.\n- \"latest\": Resizing is enabled for same-zone images using the latest version.\n","type":"string","enum":["off","on","open","latest"],"x-auditable":true,"x-ref":"#/components/schemas/speed_image_resizing_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/origin_max_http_version":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Value of the Origin Max HTTP Version Setting.","type":"string","enum":["2","1"],"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_origin_max_http_version_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/speed_brain":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Whether the feature is enabled or disabled.","type":"string","enum":["on","off"],"key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/transformations_allowed_origins":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Comma-separated list of allowed origin domains for image and video transformations.\nUse \"*\" to allow all origins (default).\n","type":"string","example":"example.com,cdn.example.com","x-auditable":true,"x-ref":"#/components/schemas/speed_transformations_allowed_origins_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/transformations_c2pa":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Whether C2PA signing is enabled for image transformations.","type":"string","enum":["off","on"],"x-auditable":true,"x-ref":"#/components/schemas/speed_transformations_c2pa_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/transformations_config":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Combined configuration value for Transformations. All fields are optional on PATCH;\nomitted fields are left unchanged.\n","type":"object","properties":{"allowed_origins":{"description":"Comma-separated list of allowed origin domains for image and video transformations.\nUse \"*\" to allow all origins (default).\n","example":"example.com,cdn.example.com","type":"string","x-auditable":true},"c2pa":{"description":"Whether C2PA signing is enabled for image transformations.","enum":["off","on"],"type":"string","x-auditable":true},"transformations":{"description":"Controls Image Transformations behavior:\n- \"off\": Feature disabled.\n- \"on\": Transformations enabled for same-zone images only.\n- \"open\": Transformations enabled for images from any origin.\n- \"latest\": Transformations enabled using the latest version.\n","enum":["off","on","open","latest"],"type":"string","x-auditable":true}},"x-ref":"#/components/schemas/speed_transformations_config_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/speed_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zone_setting_ref01_data = Object.values(setup.data.existing.zone_setting)[0] as any

    // LIST
    const zone_setting_ref01_ent = client.ZoneSetting()
    const zone_setting_ref01_match: any = {}
    zone_setting_ref01_match['zone_id'] = setup.idmap['zone01']

    const zone_setting_ref01_list = (await zone_setting_ref01_ent.list(zone_setting_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const zone_setting_ref01_data_up0: any = {}
    zone_setting_ref01_data_up0.id = zone_setting_ref01_data.id

    const zone_setting_ref01_resdata_up0 = (await zone_setting_ref01_ent.update(zone_setting_ref01_data_up0)).data()
    assert(zone_setting_ref01_resdata_up0.id === zone_setting_ref01_data_up0.id)


    // LOAD
    const zone_setting_ref01_match_dt0: any = {}
    zone_setting_ref01_match_dt0.id = zone_setting_ref01_data.id
    const zone_setting_ref01_data_dt0 = (await zone_setting_ref01_ent.load(zone_setting_ref01_match_dt0)).data()
    assert(zone_setting_ref01_data_dt0.id === zone_setting_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zone_setting/ZoneSettingTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudflareZoneSettingsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['zone_setting01','zone_setting02','zone_setting03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZONE_SETTINGS_TEST_ZONE_SETTING_ENTID': idmap,
    'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZONE_SETTING_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZONE_SETTING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudflareZoneSettingsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
