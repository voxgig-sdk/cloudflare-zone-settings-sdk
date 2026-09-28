import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { ZarazZarazHistory, ZarazZarazHistoryListMatch } from '../CloudflareZoneSettingsTypes';
declare class ZarazZarazHistoryEntity extends CloudflareZoneSettingsEntityBase<ZarazZarazHistory> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZarazZarazHistoryEntity): ZarazZarazHistoryEntity;
    list(this: any, reqmatch?: ZarazZarazHistoryListMatch, ctrl?: Control): Promise<ZarazZarazHistoryEntity[]>;
}
export { ZarazZarazHistoryEntity };
