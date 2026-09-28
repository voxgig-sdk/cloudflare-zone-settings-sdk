package core

type CloudflareZoneSettingsError struct {
	IsCloudflareZoneSettingsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareZoneSettingsError(code string, msg string, ctx *Context) *CloudflareZoneSettingsError {
	return &CloudflareZoneSettingsError{
		IsCloudflareZoneSettingsError: true,
		Sdk:              "CloudflareZoneSettings",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareZoneSettingsError) Error() string {
	return e.Msg
}
