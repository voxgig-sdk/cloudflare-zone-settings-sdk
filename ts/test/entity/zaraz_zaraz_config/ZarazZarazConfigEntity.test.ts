

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


describe('ZarazZarazConfigEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudflareZoneSettingsSDK.test()
    const ent = testsdk.ZarazZarazConfig()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zaraz_zaraz_config.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"zaraz_zaraz_config","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /zones/{zone_id}/settings/zaraz/config","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/settings/zaraz/config","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"zaraz"},{"lit":"config"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /zones/{zone_id}/settings/zaraz/history","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"023e105f4ecef8ad9ca31a8372d0c353","k":"param","n":"zone_id","or":"zone_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/zones/{zone_id}/settings/zaraz/history","q":{"exist":["zone_id"]},"r":{},"s":[{"lit":"zones"},{"var":"zone_id"},{"lit":"settings"},{"lit":"zaraz"},{"lit":"history"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"zaraz_zaraz_config","name__orig":"zaraz_zaraz_config","Name":"ZarazZarazConfig","name_":"zaraz_zaraz_config","name-":"zaraz-zaraz-config","NAME":"ZARAZ_ZARAZ_CONFIG","index$":8}, {"active":true,"entity":"zaraz_zaraz_config","key$":"BasicZarazZarazConfigFlow","kind":"basic","name":"BasicZarazZarazConfigFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"zaraz_zaraz_config_ref01","srcdatavar":"zaraz_zaraz_config_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-zaraz_zaraz_config_ref01"}}],"v":[],"index$":0}]}, 'ZarazZarazConfig', {"PUT /zones/{zone_id}/settings/zaraz/config":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"allOf":[{"description":"Zaraz configuration.","type":"object","properties":{"analytics":{"description":"Cloudflare Monitoring settings.","properties":{"defaultPurpose":{},"enabled":{},"sessionExpTime":{}},"type":"object"},"consent":{"description":"Consent management configuration.","properties":{"buttonTextTranslations":{},"companyEmail":{},"companyName":{},"companyStreetAddress":{},"consentModalIntroHTML":{},"consentModalIntroHTMLWithTranslations":{},"cookieName":{},"customCSS":{},"customIntroDisclaimerDismissed":{},"defaultLanguage":{},"enabled":{},"hideModal":{},"purposes":{},"purposesWithTranslations":{},"tcfCompliant":{}},"required":["enabled"],"type":"object"},"dataLayer":{"description":"Data layer compatibility mode enabled.","type":"boolean","x-auditable":true},"debugKey":{"description":"The key for Zaraz debug mode.","type":"string","x-auditable":true},"historyChange":{"description":"Single Page Application support enabled.","type":"boolean","x-auditable":true},"settings":{"description":"General Zaraz settings.","properties":{"autoInjectScript":{},"contextEnricher":{},"cookieDomain":{},"ecommerce":{},"eventsApiPath":{},"hideExternalReferer":{},"hideIPAddress":{},"hideQueryParams":{},"hideUserAgent":{},"initPath":{},"injectIframes":{},"mcRootPath":{},"scriptPath":{},"trackPath":{}},"required":["autoInjectScript"],"type":"object"},"triggers":{"additionalProperties":{"properties":{},"required":[],"type":"object"},"description":"Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration.","type":"object"},"variables":{"additionalProperties":{"anyOf":[],"discriminator":{}},"description":"Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration. Values of variables of type secret are not included.","type":"object"},"zarazVersion":{"description":"Zaraz internal version of the config.","type":"integer","x-auditable":true}},"example":{"consent":{"cookieName":"zaraz-consent","customIntroDisclaimerDismissed":true,"enabled":false},"dataLayer":true,"debugKey":"my-debug-key","settings":{"autoInjectScript":true,"ecommerce":true,"initPath":"/i"},"tools":{"aJvt":{"actions":{},"component":"facebook-pixel","defaultFields":{},"enabled":true,"name":"Facebook Pixel","permissions":[],"settings":{},"type":"component"}},"triggers":{"ktBn":{"Pageview":{}}},"variables":{"Autd":{"name":"ip","type":"string","value":"{{ system.device.ip }}"}},"zarazVersion":43},"required":["tools","triggers","variables","settings","dataLayer","debugKey","zarazVersion"],"x-ref":"#/components/schemas/zaraz_zaraz-config-base"},{"properties":{"tools":{"description":"Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object.","type":"object","additionalProperties":{"anyOf":[]}}},"type":"object"}],"x-ref":"#/components/schemas/zaraz_zaraz-config-body","index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/zaraz_identifier"},"index$":0}]},"PUT /zones/{zone_id}/settings/zaraz/history":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"description":"ID of the Zaraz configuration to restore.","type":"integer","example":12345,"minimum":1,"index$":1}}}},"parameters":[{"name":"zone_id","in":"path","required":true,"schema":{"description":"Identifier.","type":"string","example":"023e105f4ecef8ad9ca31a8372d0c353","maxLength":32,"x-auditable":true,"x-ref":"#/components/schemas/zaraz_identifier"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zaraz_zaraz_config_ref01_data = Object.values(setup.data.existing.zaraz_zaraz_config)[0] as any

    // UPDATE
    const zaraz_zaraz_config_ref01_ent = client.ZarazZarazConfig()
    const zaraz_zaraz_config_ref01_data_up0: any = {}

    const zaraz_zaraz_config_ref01_resdata_up0 = (await zaraz_zaraz_config_ref01_ent.update(zaraz_zaraz_config_ref01_data_up0)).data()
    assert(null != zaraz_zaraz_config_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zaraz_zaraz_config/ZarazZarazConfigTestData.json')

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
    ['zaraz_zaraz_config01','zaraz_zaraz_config02','zaraz_zaraz_config03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_ENTID': idmap,
    'CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_TEST_EXPLAIN': 'FALSE',
    'CLOUDFLARE_ZONE_SETTINGS_APIKEY': '',
  })

  idmap = env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_ENTID']

  const live = 'TRUE' === env.CLOUDFLARE_ZONE_SETTINGS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDFLARE_ZONE_SETTINGS_TEST_ZARAZ_ZARAZ_CONFIG_ENTID']
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
  
