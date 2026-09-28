import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { Zaraz, ZarazCreateData } from '../CloudflareZoneSettingsTypes';
declare class ZarazEntity extends CloudflareZoneSettingsEntityBase<Zaraz> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZarazEntity): ZarazEntity;
    create(this: any, reqdata?: ZarazCreateData, ctrl?: Control): Promise<ZarazEntity>;
}
export { ZarazEntity };
