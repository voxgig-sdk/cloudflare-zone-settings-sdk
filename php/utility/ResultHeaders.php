<?php
declare(strict_types=1);

// CloudflareZoneSettings SDK utility: result_headers

class CloudflareZoneSettingsResultHeaders
{
    public static function call(CloudflareZoneSettingsContext $ctx): ?CloudflareZoneSettingsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
