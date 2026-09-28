

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


describe('ZarazEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZoneSettingsSDK.test()
    const ent = testsdk.Zaraz()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zaraz.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"zaraz","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /zones/{zone_id}/settings/zaraz/publish","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/zones/{zone_id}/settings/zaraz/publish","q":{"$action":"publish","exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"zaraz"},{"lit":"publish"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"zaraz","name__orig":"zaraz","Name":"Zaraz","name_":"zaraz","name-":"zaraz","NAME":"ZARAZ","index$":7}, {"active":true,"entity":"zaraz","key$":"BasicZarazFlow","kind":"basic","name":"BasicZarazFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zaraz_ref01"},"m":{"zone_id":"zone01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Zaraz', {"POST /zones/{zone_id}/settings/zaraz/publish":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"description":"Zaraz configuration description.","type":"string","example":"Config with enabled ecommerce tracking"}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/zaraz_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const zaraz_ref01_ent = client.Zaraz()
    let zaraz_ref01_data = setup.data.new.zaraz['zaraz_ref01']
    zaraz_ref01_data['zone_id'] = setup.idmap['zone01']

    zaraz_ref01_data = (await zaraz_ref01_ent.create(zaraz_ref01_data)).data()
    assert(null != zaraz_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zaraz/ZarazTestData.json')

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
    ['zaraz01','zaraz02','zaraz03','zone01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ENTID': idmap,
    'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ENTID']
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
  
