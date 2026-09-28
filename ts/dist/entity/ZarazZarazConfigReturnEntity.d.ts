import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { ZarazZarazConfigReturn, ZarazZarazConfigReturnLoadMatch } from '../CloudflareZoneSettingsTypes';
declare class ZarazZarazConfigReturnEntity extends CloudflareZoneSettingsEntityBase<ZarazZarazConfigReturn> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZarazZarazConfigReturnEntity): ZarazZarazConfigReturnEntity;
    load(this: any, reqmatch?: ZarazZarazConfigReturnLoadMatch, ctrl?: Control): Promise<ZarazZarazConfigReturnEntity>;
}
export { ZarazZarazConfigReturnEntity };
