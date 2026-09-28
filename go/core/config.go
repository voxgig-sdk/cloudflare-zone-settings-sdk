package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareZoneSettings",
			"slug": "cloudflare-zone-settings",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cache_settings_origin_h2_max_streams_response_value": map[string]any{},
				"config": map[string]any{},
				"csam_config_service_csam_scanner_single": map[string]any{},
				"default": map[string]any{},
				"google_tag_gateway": map[string]any{},
				"nel": map[string]any{},
				"rum": map[string]any{},
				"zaraz": map[string]any{},
				"zaraz_zaraz_config": map[string]any{},
				"zaraz_zaraz_config_history": map[string]any{},
				"zaraz_zaraz_config_return": map[string]any{},
				"zaraz_zaraz_history": map[string]any{},
				"zaraz_zaraz_workflow": map[string]any{},
				"zone_setting": map[string]any{},
				"zones_zone_settings_response_collection": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cache_settings_origin_h2_max_streams_response_value": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"short": "Origin H2 Max Streams configures the max number of concurrent requests that Cloudflare will send within the same connection when communicating with the origin server, if the origin supports it.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Value of the Origin H2 Max Streams Setting.",
					},
				},
				"name": "cache_settings_origin_h2_max_streams_response_value",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/origin_h2_max_streams",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_h2_max_streams",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_h2_max_streams",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/origin_h2_max_streams",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_h2_max_streams",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_h2_max_streams",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"config": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "config",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/zaraz/config",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"csam_config_service_csam_scanner_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "The feature identifier.",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"short": "CSAM Scanner configuration for a zone.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$OBJECT`",
						"short": "Writable CSAM Scanner feature configuration values.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "csam_config_service_csam_scanner_single",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/csam_scanner_third_party",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "csam_scanner_third_party",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"csam_scanner_third_party",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/csam_scanner_third_party",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "csam_scanner_third_party",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"csam_scanner_third_party",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"default": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "default",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/zaraz/default",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "default",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"default",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"google_tag_gateway": map[string]any{
				"fields": []any{},
				"name": "google_tag_gateway",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/google-tag-gateway/config",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "google-tag-gateway",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"google-tag-gateway",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"$action": "config",
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/settings/google-tag-gateway/config",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "google-tag-gateway",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"google-tag-gateway",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"$action": "config",
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"nel": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
						"short": "A zone-scoped NEL configuration setting.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The NEL configuration value.",
					},
				},
				"name": "nel",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/nel",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "nel",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"nel",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/nel",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "nel",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"nel",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"value": "`reqdata.value`",
									},
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rum": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$STRING`",
						"short": "Value can either be On or Off.",
					},
				},
				"name": "rum",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/rum",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "rum",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"rum",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/rum",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "rum",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"rum",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zaraz": map[string]any{
				"fields": []any{},
				"name": "zaraz",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/zones/{zone_id}/settings/zaraz/publish",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "publish",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"publish",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"$action": "publish",
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zaraz_zaraz_config": map[string]any{
				"fields": []any{},
				"name": "zaraz_zaraz_config",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/settings/zaraz/config",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "config",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/settings/zaraz/history",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "history",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zaraz_zaraz_config_history": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"short": "Object where keys are numeric configuration IDs.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "zaraz_zaraz_config_history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/zaraz/history/configs",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "history",
									},
									map[string]any{
										"lit": "configs",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"history",
									"configs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "ids",
											"orig": "ids",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
											"example": []any{
												12345,
												23456,
											},
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zaraz_zaraz_config_return": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "analytics",
						"title": "Analytics",
						"type": "`$OBJECT`",
						"short": "Cloudflare Monitoring settings.",
					},
					map[string]any{
						"name": "consent",
						"title": "Consent",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Consent management configuration.",
					},
					map[string]any{
						"name": "dataLayer",
						"title": "Data Layer",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Data layer compatibility mode enabled.",
					},
					map[string]any{
						"name": "debugKey",
						"title": "Debug Key",
						"type": "`$STRING`",
						"req": true,
						"short": "The key for Zaraz debug mode.",
					},
					map[string]any{
						"name": "historyChange",
						"title": "History Change",
						"type": "`$BOOLEAN`",
						"short": "Single Page Application support enabled.",
					},
					map[string]any{
						"name": "settings",
						"title": "Settings",
						"type": "`$OBJECT`",
						"req": true,
						"short": "General Zaraz settings.",
					},
					map[string]any{
						"name": "tools",
						"title": "Tools",
						"type": "`$OBJECT`",
						"short": "Tools set up under Zaraz configuration, where key is the alpha-numeric tool ID and value is the tool configuration object.",
					},
					map[string]any{
						"name": "triggers",
						"title": "Triggers",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Triggers set up under Zaraz configuration, where key is the trigger alpha-numeric ID and value is the trigger configuration.",
					},
					map[string]any{
						"name": "variables",
						"title": "Variables",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Variables set up under Zaraz configuration, where key is the variable alpha-numeric ID and value is the variable configuration.",
					},
					map[string]any{
						"name": "zarazVersion",
						"title": "Zaraz Version",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Zaraz internal version of the config.",
					},
				},
				"name": "zaraz_zaraz_config_return",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/zaraz/export",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "export",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"export",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zaraz_zaraz_history": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "zaraz_zaraz_history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/zaraz/history",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "history",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"history",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "sort_field",
											"orig": "sort_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "updated_at",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "DESC",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"offset",
										"sort_field",
										"sort_order",
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zaraz_zaraz_workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$STRING`",
						"short": "Zaraz workflow.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful.",
					},
				},
				"name": "zaraz_zaraz_workflow",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/zaraz/workflow",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "workflow",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"workflow",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/settings/zaraz/workflow",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "zaraz",
									},
									map[string]any{
										"lit": "workflow",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"zaraz",
									"workflow",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zone_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"short": "Aegis provides dedicated egress IPs (from Cloudflare to your origin) for your layer 7 WAF and CDN services.",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Value of the zone setting.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "zone_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/automatic_platform_optimization",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "automatic_platform_optimization",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"automatic_platform_optimization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/binary_ast",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "binary_ast",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"binary_ast",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/fonts",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "fonts",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"fonts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/h2_prioritization",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "h2_prioritization",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"h2_prioritization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/image_resizing",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "image_resizing",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"image_resizing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/speed_brain",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "speed_brain",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"speed_brain",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/transformations_allowed_origins",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "transformations_allowed_origins",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"transformations_allowed_origins",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/transformations_c2pa",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "transformations_c2pa",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"transformations_c2pa",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/transformations_config",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "transformations_config",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"transformations_config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/{setting_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"setting_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "setting_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "always_online",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/aegis",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "aegis",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"aegis",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings/origin_max_http_version",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_max_http_version",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_max_http_version",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/{setting_id}",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"setting_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "setting_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "always_online",
										},
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/aegis",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "aegis",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"aegis",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/automatic_platform_optimization",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "automatic_platform_optimization",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"automatic_platform_optimization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/binary_ast",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "binary_ast",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"binary_ast",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/fonts",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "fonts",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"fonts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/h2_prioritization",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "h2_prioritization",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"h2_prioritization",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/image_resizing",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "image_resizing",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"image_resizing",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/origin_max_http_version",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "origin_max_http_version",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"origin_max_http_version",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/speed_brain",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "speed_brain",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"speed_brain",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/transformations_allowed_origins",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "transformations_allowed_origins",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"transformations_allowed_origins",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/transformations_c2pa",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "transformations_c2pa",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"transformations_c2pa",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings/transformations_config",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
									map[string]any{
										"lit": "transformations_config",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
									"transformations_config",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zones_zone_settings_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "zones_zone_settings_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/settings",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/zones/{zone_id}/settings",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "settings",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"settings",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
