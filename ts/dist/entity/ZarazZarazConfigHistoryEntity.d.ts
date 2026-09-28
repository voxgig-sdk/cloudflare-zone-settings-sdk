import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { ZarazZarazConfigHistory, ZarazZarazConfigHistoryListMatch } from '../CloudflareZoneSettingsTypes';
declare class ZarazZarazConfigHistoryEntity extends CloudflareZoneSettingsEntityBase<ZarazZarazConfigHistory> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZarazZarazConfigHistoryEntity): ZarazZarazConfigHistoryEntity;
    list(this: any, reqmatch?: ZarazZarazConfigHistoryListMatch, ctrl?: Control): Promise<ZarazZarazConfigHistoryEntity[]>;
}
export { ZarazZarazConfigHistoryEntity };
