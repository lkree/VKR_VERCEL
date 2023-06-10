var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { configService } from '../api/index.js';
import { emailSettingsValidationObject, transformBDConfigToFE } from '../lib/helpers/index.js';
class ConfigController extends BaseController {
    async writeEmailSettings(req, res, __) {
        const oldConfig = await configService.getEmailSettings();
        res.json(await configService.writeEmailSettings({
            emailSettings: { ...oldConfig, ...req.body },
        }));
    }
    async getEmailSettings(_, res, __) {
        res.json(await configService.getEmailSettings());
    }
}
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: emailSettingsValidationObject }],
        transform: { out: transformBDConfigToFE },
    })
], ConfigController.prototype, "writeEmailSettings", null);
__decorate([
    RequestPropsHandle({ transform: { out: transformBDConfigToFE } })
], ConfigController.prototype, "getEmailSettings", null);
export const configController = new ConfigController();
