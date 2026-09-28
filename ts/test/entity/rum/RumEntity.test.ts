

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


describe('RumEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZoneSettingsSDK.test()
    const ent = testsdk.Rum()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rum.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"errors":{"a":true,"h":"Errors","n":"errors","r":true,"t":"`$ARRAY`","key$":"errors","index$":0},"messages":{"a":true,"h":"Messages","n":"messages","r":true,"t":"`$ARRAY`","key$":"messages","index$":1},"result":{"a":true,"h":"Result","n":"result","r":false,"t":"`$OBJECT`","key$":"result","index$":2},"success":{"a":true,"h":"Success","n":"success","r":true,"sh":"Whether the API call was successful.","t":"`$BOOLEAN`","key$":"success","index$":3},"value":{"a":true,"h":"Value","n":"value","r":false,"sh":"Value can either be On or Off.","t":"`$STRING`","key$":"value","index$":4}},"name":"rum","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zones/{zone_id}/settings/rum","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/zones/{zone_id}/settings/rum","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"rum"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /zones/{zone_id}/settings/rum","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/zones/{zone_id}/settings/rum","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"rum"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"rum","name__orig":"rum","Name":"Rum","name_":"rum","name-":"rum","NAME":"RUM","index$":6}, {"active":true,"entity":"rum","key$":"BasicRumFlow","kind":"basic","name":"BasicRumFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"zone_id":"zone01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"rum_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"rum_ref01","srcdatavar":"rum_ref01_data","suffix":"_up0","textfield":"value"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rum_ref01"}}],"v":[],"index$":1}]}, 'Rum', {"GET /zones/{zone_id}/settings/rum":{"protocol":"http","parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/rum_identifier"},"index$":0}]},"PATCH /zones/{zone_id}/settings/rum":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"value":{"description":"Value can either be On or Off.","type":"string","example":"on","key$":"value"}},"x-ref":"#/components/schemas/rum_toggle-rum-request","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/rum_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let rum_ref01_data = Object.values(setup.data.existing.rum)[0] as any

    // LIST
    const rum_ref01_ent = client.Rum()
    const rum_ref01_match: any = {}
    rum_ref01_match['zone_id'] = setup.idmap['zone01']

    const rum_ref01_list = (await rum_ref01_ent.list(rum_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const rum_ref01_data_up0: any = {}

    const rum_ref01_markdef_up0 = { name: 'value', value: 'Mark01-rum_ref01_' + setup.now }
    ;(rum_ref01_data_up0 as any)[rum_ref01_markdef_up0.name] = rum_ref01_markdef_up0.value

    const rum_ref01_resdata_up0 = (await rum_ref01_ent.update(rum_ref01_data_up0)).data()
    assert(null != rum_ref01_resdata_up0)

    assert((rum_ref01_resdata_up0 as any)[rum_ref01_markdef_up0.name] === rum_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rum/RumTestData.json')

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
    ['rum01','rum02','rum03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZONE_SETTINGS_TEST_RUM_ENTID': idmap,
    'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_RUM_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_RUM_ENTID']
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
  
