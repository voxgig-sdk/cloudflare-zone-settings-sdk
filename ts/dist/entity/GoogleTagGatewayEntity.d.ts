import { CloudflareZoneSettingsEntityBase } from '../CloudflareZoneSettingsEntityBase';
import type { CloudflareZoneSettingsSDK } from '../CloudflareZoneSettingsSDK';
import type { Control } from '../types';
import type { GoogleTagGateway, GoogleTagGatewayListMatch, GoogleTagGatewayUpdateData } from '../CloudflareZoneSettingsTypes';
declare class GoogleTagGatewayEntity extends CloudflareZoneSettingsEntityBase<GoogleTagGateway> {
    constructor(client: CloudflareZoneSettingsSDK, entopts: any);
    make(this: GoogleTagGatewayEntity): GoogleTagGatewayEntity;
    list(this: any, reqmatch?: GoogleTagGatewayListMatch, ctrl?: Control): Promise<GoogleTagGatewayEntity[]>;
    update(this: any, reqdata?: GoogleTagGatewayUpdateData, ctrl?: Control): Promise<GoogleTagGatewayEntity>;
}
export { GoogleTagGatewayEntity };
