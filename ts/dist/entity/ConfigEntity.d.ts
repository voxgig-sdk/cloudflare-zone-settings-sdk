import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { Config, ConfigListMatch } from '../CloudflareZoneSettingsTypes';
declare class ConfigEntity extends CloudflareZoneSettingsEntityBase<Config> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ConfigEntity): ConfigEntity;
    list(this: any, reqmatch?: ConfigListMatch, ctrl?: Control): Promise<ConfigEntity[]>;
}
export { ConfigEntity };
