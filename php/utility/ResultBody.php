<?php
declare(strict_types=1);

// CloudflareZoneSettings SDK utility: result_body

class CloudflareZoneSettingsResultBody
{
    public static function call(CloudflareZoneSettingsContext $ctx): ?CloudflareZoneSettingsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
