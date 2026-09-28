# CloudflareZoneSettings SDK exists test

import pytest
from cloudflarezonesettings_sdk import CloudflareZoneSettingsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareZoneSettingsSDK.test(None, None)
        assert testsdk is not None
