import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { Default, DefaultListMatch } from '../CloudflareZoneSettingsTypes';
declare class DefaultEntity extends CloudflareZoneSettingsEntityBase<Default> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: DefaultEntity): DefaultEntity;
    list(this: any, reqmatch?: DefaultListMatch, ctrl?: Control): Promise<DefaultEntity[]>;
}
export { DefaultEntity };
