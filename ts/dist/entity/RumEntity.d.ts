import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { Rum, RumListMatch, RumUpdateData } from '../CloudflareZoneSettingsTypes';
declare class RumEntity extends CloudflareZoneSettingsEntityBase<Rum> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: RumEntity): RumEntity;
    list(this: any, reqmatch?: RumListMatch, ctrl?: Control): Promise<RumEntity[]>;
    update(this: any, reqdata?: RumUpdateData, ctrl?: Control): Promise<RumEntity>;
}
export { RumEntity };
