<?php
declare(strict_types=1);

// CloudflareZoneSettings SDK configuration

class CloudflareZoneSettingsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CloudflareZoneSettings",
                "slug" => "cloudflare-zone-settings",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.cloudflare.com/client/v4",
                "auth" => [
                    "prefix" => "",
                    "name" => "X-Auth-Email",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "cache_settings_origin_h2_max_streams_response_value" => [],
                    "config" => [],
                    "csam_config_service_csam_scanner_single" => [],
                    "default" => [],
                    "google_tag_gateway" => [],
                    "nel" => [],
                    "rum" => [],
                    "zaraz" => [],
                    "zaraz_zaraz_config" => [],
                    "zaraz_zaraz_config_history" => [],
                    "zaraz_zaraz_config_return" => [],
                    "zaraz_zaraz_history" => [],
                    "zaraz_zaraz_workflow" => [],
                    "zone_setting" => [],
                    "zones_zone_settings_response_collection" => [],
                ],
            ],
            "entity" => [
        'cache_settings_origin_h2_max_streams_response_value' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'short' => 'Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'Value of the Origin H2 Max Streams Setting.',
            ],
          ],
          'name' => 'cache_settings_origin_h2_max_streams_response_value',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/origin_h2_max_streams',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'origin_h2_max_streams',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'origin_h2_max_streams',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/origin_h2_max_streams',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'origin_h2_max_streams',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'origin_h2_max_streams',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'config' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'config',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/zaraz/config',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'csam_config_service_csam_scanner_single' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
              'short' => 'The feature identifier.',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'short' => 'CSAM Scanner configuration for a zone.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$OBJECT`',
              'short' => 'Writable CSAM Scanner feature configuration values.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'csam_config_service_csam_scanner_single',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/csam_scanner_third_party',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'csam_scanner_third_party',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'csam_scanner_third_party',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/csam_scanner_third_party',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'csam_scanner_third_party',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'csam_scanner_third_party',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'default' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'default',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/zaraz/default',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'default',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'default',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'google_tag_gateway' => [
          'fields' => [],
          'name' => 'google_tag_gateway',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/google-tag-gateway/config',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'google-tag-gateway',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'google-tag-gateway',
                    'config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'config',
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/settings/google-tag-gateway/config',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'google-tag-gateway',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'google-tag-gateway',
                    'config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'config',
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'nel' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'A zone-scoped NEL configuration setting.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'The NEL configuration value.',
            ],
          ],
          'name' => 'nel',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/nel',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'nel',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'nel',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/nel',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'nel',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'nel',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => [
                      'value' => '`reqdata.value`',
                    ],
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'rum' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$STRING`',
              'short' => 'Value can either be On or Off.',
            ],
          ],
          'name' => 'rum',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/rum',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'rum',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'rum',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/rum',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'rum',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'rum',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zaraz' => [
          'fields' => [],
          'name' => 'zaraz',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/zones/{zone_id}/settings/zaraz/publish',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'publish',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'publish',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'publish',
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zaraz_zaraz_config' => [
          'fields' => [],
          'name' => 'zaraz_zaraz_config',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/settings/zaraz/config',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'config',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/settings/zaraz/history',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'history',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'history',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zaraz_zaraz_config_history' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'short' => 'Object where keys are numeric configuration IDs.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'zaraz_zaraz_config_history',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/zaraz/history/configs',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'history',
                    ],
                    [
                      'lit' => 'configs',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'history',
                    'configs',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'ids',
                        'orig' => 'ids',
                        'type' => '`$ARRAY`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => [
                          12345,
                          23456,
                        ],
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'ids',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zaraz_zaraz_config_return' => [
          'fields' => [
            [
              'name' => 'analytics',
              'title' => 'Analytics',
              'type' => '`$OBJECT`',
              'short' => 'Cloudflare Monitoring settings.',
            ],
            [
              'name' => 'consent',
              'title' => 'Consent',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Consent management configuration.',
            ],
            [
              'name' => 'dataLayer',
              'title' => 'Data Layer',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Data layer compatibility mode enabled.',
            ],
            [
              'name' => 'debugKey',
              'title' => 'Debug Key',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The key for Zaraz debug mode.',
            ],
            [
              'name' => 'historyChange',
              'title' => 'History Change',
              'type' => '`$BOOLEAN`',
              'short' => 'Single Page Application support enabled.',
            ],
            [
              'name' => 'settings',
              'title' => 'Settings',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'General Zaraz settings.',
            ],
            [
              'name' => 'tools',
              'title' => 'Tools',
              'type' => '`$OBJECT`',
              'short' => 'Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object.',
            ],
            [
              'name' => 'triggers',
              'title' => 'Triggers',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration.',
            ],
            [
              'name' => 'variables',
              'title' => 'Variables',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration.',
            ],
            [
              'name' => 'zarazVersion',
              'title' => 'Zaraz Version',
              'type' => '`$INTEGER`',
              'req' => true,
              'short' => 'Zaraz internal version of the config.',
            ],
          ],
          'name' => 'zaraz_zaraz_config_return',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/zaraz/export',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'export',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'export',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zaraz_zaraz_history' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'zaraz_zaraz_history',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/zaraz/history',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'history',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'history',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'example' => 0,
                      ],
                      [
                        'name' => 'sort_field',
                        'orig' => 'sort_field',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'updated_at',
                      ],
                      [
                        'name' => 'sort_order',
                        'orig' => 'sort_order',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'DESC',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'offset',
                      'sort_field',
                      'sort_order',
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zaraz_zaraz_workflow' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$STRING`',
              'short' => 'Zaraz workflow.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful.',
            ],
          ],
          'name' => 'zaraz_zaraz_workflow',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/zaraz/workflow',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'workflow',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'workflow',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/zones/{zone_id}/settings/zaraz/workflow',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'zaraz',
                    ],
                    [
                      'lit' => 'workflow',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'zaraz',
                    'workflow',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zone_setting' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$OBJECT`',
              'short' => 'Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services.',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$OBJECT`',
              'req' => true,
              'short' => 'Value of the zone setting.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'zone_setting',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/automatic_platform_optimization',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'automatic_platform_optimization',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'automatic_platform_optimization',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/binary_ast',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'binary_ast',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'binary_ast',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/fonts',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'fonts',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'fonts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/h2_prioritization',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'h2_prioritization',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'h2_prioritization',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/image_resizing',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'image_resizing',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'image_resizing',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/speed_brain',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'speed_brain',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'speed_brain',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/transformations_allowed_origins',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'transformations_allowed_origins',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'transformations_allowed_origins',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/transformations_c2pa',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'transformations_c2pa',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'transformations_c2pa',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/transformations_config',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'transformations_config',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'transformations_config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/{setting_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'setting_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'setting_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'always_online',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/aegis',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'aegis',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'aegis',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings/origin_max_http_version',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'origin_max_http_version',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'origin_max_http_version',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/{setting_id}',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'setting_id' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'setting_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'always_online',
                      ],
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/aegis',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'aegis',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'aegis',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/automatic_platform_optimization',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'automatic_platform_optimization',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'automatic_platform_optimization',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/binary_ast',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'binary_ast',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'binary_ast',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/fonts',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'fonts',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'fonts',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/h2_prioritization',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'h2_prioritization',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'h2_prioritization',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/image_resizing',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'image_resizing',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'image_resizing',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/origin_max_http_version',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'origin_max_http_version',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'origin_max_http_version',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/speed_brain',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'speed_brain',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'speed_brain',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/transformations_allowed_origins',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'transformations_allowed_origins',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'transformations_allowed_origins',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/transformations_c2pa',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'transformations_c2pa',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'transformations_c2pa',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings/transformations_config',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                    [
                      'lit' => 'transformations_config',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                    'transformations_config',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'zones_zone_settings_response_collection' => [
          'fields' => [
            [
              'name' => 'errors',
              'title' => 'Errors',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'messages',
              'title' => 'Messages',
              'type' => '`$ARRAY`',
              'req' => true,
            ],
            [
              'name' => 'result',
              'title' => 'Result',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'success',
              'title' => 'Success',
              'type' => '`$BOOLEAN`',
              'req' => true,
              'short' => 'Whether the API call was successful',
            ],
          ],
          'name' => 'zones_zone_settings_response_collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/zones/{zone_id}/settings',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'PATCH',
                  'orig' => '/zones/{zone_id}/settings',
                  'segments' => [
                    [
                      'lit' => 'zones',
                    ],
                    [
                      'var' => 'zone_id',
                    ],
                    [
                      'lit' => 'settings',
                    ],
                  ],
                  'parts' => [
                    'zones',
                    '{zone_id}',
                    'settings',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'zone_id',
                        'orig' => 'zone_id',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => '023e105f4ecef8ad9ca31a8372d0c353',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'zone_id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CloudflareZoneSettingsFeatures::make_feature($name);
    }
}
