

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


describe('CacheSettingsOriginH2MaxStreamsResponseValueEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZoneSettingsSDK.test()
    const ent = testsdk.CacheSettingsOriginH2MaxStreamsResponseValue()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'cache_settings_origin_h2_max_streams_response_value.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"sh":"Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it.","t":"`$OBJECT`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"Value of the Origin H2 Max Streams Setting.","t":"`$INTEGER`","key$":"value","index$":4}},"name":"cache_settings_origin_h2_max_streams_response_value","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/origin_h2_max_streams","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/origin_h2_max_streams","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"origin_h2_max_streams"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/origin_h2_max_streams","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/origin_h2_max_streams","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"origin_h2_max_streams"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"cache_settings_origin_h2_max_streams_response_value","name__orig":"cache_settings_origin_h2_max_streams_response_value","Name":"CacheSettingsOriginH2MaxStreamsResponseValue","name_":"cache_settings_origin_h2_max_streams_response_value","name-":"cache-settings-origin-h2-max-streams-response-value","NAME":"CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE","index$":0}, {"active":true,"entity":"cache_settings_origin_h2_max_streams_response_value","key$":"BasicCacheSettingsOriginH2MaxStreamsResponseValueFlow","kind":"basic","name":"BasicCacheSettingsOriginH2MaxStreamsResponseValueFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"cache_settings_origin_h2_max_streams_response_value_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"cache_settings_origin_h2_max_streams_response_value_ref01","srcdatavar":"cache_settings_origin_h2_max_streams_response_value_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-cache_settings_origin_h2_max_streams_response_value_ref01"}}],"v":[],"index$":1}]}, 'CacheSettingsOriginH2MaxStreamsResponseValue', {"GET /zones/{zone_id}/settings/origin_h2_max_streams":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/origin_h2_max_streams":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Value of the Origin H2 Max Streams Setting.","type":"integer","example":50,"maximum":1000,"minimum":1,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_origin_h2_max_streams_value","key$":"value"}},"required":["value"],"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"readOnly":true,"x-auditable":true,"x-ref":"#/components/schemas/cache-settings_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let cache_settings_origin_h2_max_streams_response_value_ref01_data = Object.values(setup.data.existing.cache_settings_origin_h2_max_streams_response_value)[0] as any

    // LIST
    const cache_settings_origin_h2_max_streams_response_value_ref01_ent = client.CacheSettingsOriginH2MaxStreamsResponseValue()
    const cache_settings_origin_h2_max_streams_response_value_ref01_match: any = {}
    cache_settings_origin_h2_max_streams_response_value_ref01_match['zone_id'] = setup.idmap['zone01']

    const cache_settings_origin_h2_max_streams_response_value_ref01_list = (await cache_settings_origin_h2_max_streams_response_value_ref01_ent.list(cache_settings_origin_h2_max_streams_response_value_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const cache_settings_origin_h2_max_streams_response_value_ref01_data_up0: any = {}

    const cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0 = (await cache_settings_origin_h2_max_streams_response_value_ref01_ent.update(cache_settings_origin_h2_max_streams_response_value_ref01_data_up0)).data()
    assert(null != cache_settings_origin_h2_max_streams_response_value_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/cache_settings_origin_h2_max_streams_response_value/CacheSettingsOriginH2MaxStreamsResponseValueTestData.json')

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
    ['cache_settings_origin_h2_max_streams_response_value01','cache_settings_origin_h2_max_streams_response_value02','cache_settings_origin_h2_max_streams_response_value03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZONE_SETTINGS_TEST_CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE_ENTID': idmap,
    'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_CACHE_SETTINGS_ORIGIN_H2_MAX_STREAMS_RESPONSE_VALUE_ENTID']
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
  
