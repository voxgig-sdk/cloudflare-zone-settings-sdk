import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { CsamConfigServiceCsamScannerSingle, CsamConfigServiceCsamScannerSingleListMatch, CsamConfigServiceCsamScannerSingleUpdateData } from '../CloudflareZoneSettingsTypes';
declare class CsamConfigServiceCsamScannerSingleEntity extends CloudflareZoneSettingsEntityBase<CsamConfigServiceCsamScannerSingle> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: CsamConfigServiceCsamScannerSingleEntity): CsamConfigServiceCsamScannerSingleEntity;
    list(this: any, reqmatch?: CsamConfigServiceCsamScannerSingleListMatch, ctrl?: Control): Promise<CsamConfigServiceCsamScannerSingleEntity[]>;
    update(this: any, reqdata?: CsamConfigServiceCsamScannerSingleUpdateData, ctrl?: Control): Promise<CsamConfigServiceCsamScannerSingleEntity>;
}
export { CsamConfigServiceCsamScannerSingleEntity };
