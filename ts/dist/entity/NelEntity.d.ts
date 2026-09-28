import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { Nel, NelListMatch, NelUpdateData } from '../CloudflareZoneSettingsTypes';
declare class NelEntity extends CloudflareZoneSettingsEntityBase<Nel> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: NelEntity): NelEntity;
    list(this: any, reqmatch?: NelListMatch, ctrl?: Control): Promise<NelEntity[]>;
    update(this: any, reqdata?: NelUpdateData, ctrl?: Control): Promise<NelEntity>;
}
export { NelEntity };
