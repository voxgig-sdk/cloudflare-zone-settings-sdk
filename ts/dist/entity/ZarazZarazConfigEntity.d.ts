import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { ZarazZarazConfig, ZarazZarazConfigUpdateData } from '../CloudflareZoneSettingsTypes';
declare class ZarazZarazConfigEntity extends CloudflareZoneSettingsEntityBase<ZarazZarazConfig> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZarazZarazConfigEntity): ZarazZarazConfigEntity;
    update(this: any, reqdata?: ZarazZarazConfigUpdateData, ctrl?: Control): Promise<ZarazZarazConfigEntity>;
}
export { ZarazZarazConfigEntity };
