var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { isObject } from '../../../shared/lib/helpers/index.js';
import { responsiblePersonsService } from '../api/index.js';
import { transformDBArrayIntoFE, transformDBIntoFE } from '../lib/helpers/index.js';
class ResponsiblePersonsController extends BaseController {
    async write(req, res, __) {
        const { responsiblePerson } = req.body;
        res.json(await responsiblePersonsService.write(responsiblePerson));
    }
    async getAll(_, res, __) {
        res.json(await responsiblePersonsService.getAll());
    }
    _getUsersEmailByCity(cities) {
        return Promise.all(cities.map(c => responsiblePersonsService._getUserEmailByCity(c)));
    }
}
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { responsiblePerson: isObject } }],
        transform: { out: transformDBIntoFE },
    })
], ResponsiblePersonsController.prototype, "write", null);
__decorate([
    RequestPropsHandle({ transform: { out: transformDBArrayIntoFE } })
], ResponsiblePersonsController.prototype, "getAll", null);
export const responsiblePersonsController = new ResponsiblePersonsController();
