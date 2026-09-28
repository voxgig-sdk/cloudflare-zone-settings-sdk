import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { ZonesZoneSettingsResponseCollection, ZonesZoneSettingsResponseCollectionListMatch, ZonesZoneSettingsResponseCollectionUpdateData } from '../CloudflareZoneSettingsTypes';
declare class ZonesZoneSettingsResponseCollectionEntity extends CloudflareZoneSettingsEntityBase<ZonesZoneSettingsResponseCollection> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZonesZoneSettingsResponseCollectionEntity): ZonesZoneSettingsResponseCollectionEntity;
    list(this: any, reqmatch?: ZonesZoneSettingsResponseCollectionListMatch, ctrl?: Control): Promise<ZonesZoneSettingsResponseCollectionEntity[]>;
    update(this: any, reqdata?: ZonesZoneSettingsResponseCollectionUpdateData, ctrl?: Control): Promise<ZonesZoneSettingsResponseCollectionEntity>;
}
export { ZonesZoneSettingsResponseCollectionEntity };
