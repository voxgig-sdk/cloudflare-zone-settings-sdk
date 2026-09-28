import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { CacheSettingsOriginH2MaxStreamsResponseValue, CacheSettingsOriginH2MaxStreamsResponseValueListMatch, CacheSettingsOriginH2MaxStreamsResponseValueUpdateData } from '../CloudflareZoneSettingsTypes';
declare class CacheSettingsOriginH2MaxStreamsResponseValueEntity extends CloudflareZoneSettingsEntityBase<CacheSettingsOriginH2MaxStreamsResponseValue> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: CacheSettingsOriginH2MaxStreamsResponseValueEntity): CacheSettingsOriginH2MaxStreamsResponseValueEntity;
    list(this: any, reqmatch?: CacheSettingsOriginH2MaxStreamsResponseValueListMatch, ctrl?: Control): Promise<CacheSettingsOriginH2MaxStreamsResponseValueEntity[]>;
    update(this: any, reqdata?: CacheSettingsOriginH2MaxStreamsResponseValueUpdateData, ctrl?: Control): Promise<CacheSettingsOriginH2MaxStreamsResponseValueEntity>;
}
export { CacheSettingsOriginH2MaxStreamsResponseValueEntity };
