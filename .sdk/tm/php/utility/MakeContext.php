<?php
declare(strict_types=1);

// CloudflareZoneSettings SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudflareZoneSettingsMakeContext
{
    public static function call(array $ctxmap, ?CloudflareZoneSettingsContext $basectx): CloudflareZoneSettingsContext
    {
        return new CloudflareZoneSettingsContext($ctxmap, $basectx);
    }
}
