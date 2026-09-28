import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { ZoneSetting, ZoneSettingLoadMatch, ZoneSettingListMatch, ZoneSettingUpdateData } from '../CloudflareZoneSettingsTypes';
declare class ZoneSettingEntity extends CloudflareZoneSettingsEntityBase<ZoneSetting> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZoneSettingEntity): ZoneSettingEntity;
    load(this: any, reqmatch?: ZoneSettingLoadMatch, ctrl?: Control): Promise<ZoneSettingEntity>;
    list(this: any, reqmatch?: ZoneSettingListMatch, ctrl?: Control): Promise<ZoneSettingEntity[]>;
    update(this: any, reqdata?: ZoneSettingUpdateData, ctrl?: Control): Promise<ZoneSettingEntity>;
}
export { ZoneSettingEntity };
