var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { citiesPrefixService } from '../api/index.js';
import { citiesPrefixArrayDBIntoFE, cityNamePrefixValidationObject, cityPrefixValidationObject } from '../lib/helpers/index.js';
class CitiesPrefixController extends BaseController {
    async add(req, res, __) {
        res.json(await citiesPrefixService.add(req.body));
    }
    async delete(req, res, __) {
        res.json(await citiesPrefixService.delete(req.body));
    }
    async getAll(_, res, __) {
        res.json(await citiesPrefixService.getAll());
    }
}
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: cityNamePrefixValidationObject }],
        transform: { out: citiesPrefixArrayDBIntoFE },
    })
], CitiesPrefixController.prototype, "add", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: cityPrefixValidationObject }],
        transform: { out: citiesPrefixArrayDBIntoFE },
    })
], CitiesPrefixController.prototype, "delete", null);
__decorate([
    RequestPropsHandle({ transform: { out: citiesPrefixArrayDBIntoFE } })
], CitiesPrefixController.prototype, "getAll", null);
export const citiesPrefixController = new CitiesPrefixController();
