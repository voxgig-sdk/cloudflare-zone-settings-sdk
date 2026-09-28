
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CloudflareZoneSettingsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CloudflareZoneSettingsSDK.test()
    equal(testsdk instanceof CloudflareZoneSettingsSDK, true,
      'CloudflareZoneSettingsSDK.test() must return a client synchronously')
  })

})
