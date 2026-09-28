import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { ZarazZarazWorkflow, ZarazZarazWorkflowListMatch, ZarazZarazWorkflowUpdateData } from '../CloudflareZoneSettingsTypes';
declare class ZarazZarazWorkflowEntity extends CloudflareZoneSettingsEntityBase<ZarazZarazWorkflow> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: ZarazZarazWorkflowEntity): ZarazZarazWorkflowEntity;
    list(this: any, reqmatch?: ZarazZarazWorkflowListMatch, ctrl?: Control): Promise<ZarazZarazWorkflowEntity[]>;
    update(this: any, reqdata?: ZarazZarazWorkflowUpdateData, ctrl?: Control): Promise<ZarazZarazWorkflowEntity>;
}
export { ZarazZarazWorkflowEntity };
