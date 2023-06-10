var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { leftoverService } from '../../../entities/Leftovers/index.js';
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { isArray } from '../../../shared/lib/helpers/index.js';
import { minimalLeftoversService } from '../api/index.js';
import { assignMinimalLeftovers, leftoversIntoMinimalLeftovers, minimalLeftoversArrayAssertObject, minimalLeftoversValidationObject, transformMinimalLeftoversDBIntoFE, transformMinimalLeftoversArrayDBIntoFE, } from '../lib/helpers/index.js';
class MinimalLeftoversController extends BaseController {
    async writeAll(req, res, __) {
        const { minimalLeftoversArray } = req.body;
        res.json(await minimalLeftoversService.writeAll(minimalLeftoversArray));
    }
    async write(req, res, __) {
        const { minimalLeftover } = req.body;
        if (minimalLeftover.products.length === 0) {
            await leftoverService.deleteOne(minimalLeftover);
            await this.delete(req, res, __);
        }
        else {
            // await leftoverService._updateFromMinimalLeftover(minimalLeftover);
            res.json(await minimalLeftoversService.write(minimalLeftover));
        }
    }
    async delete(req, res, __) {
        const { minimalLeftover } = req.body;
        await leftoverService.deleteOne({ cityName: minimalLeftover.cityName });
        res.json(await minimalLeftoversService.delete(minimalLeftover));
    }
    async deleteAll(_, res, __) {
        res.json(await minimalLeftoversService.deleteAll());
    }
    async getAll(_, res, __) {
        res.json(await minimalLeftoversService.getAll());
    }
    async _updateAll(leftovers) {
        return minimalLeftoversService.writeAll(assignMinimalLeftovers(transformMinimalLeftoversArrayDBIntoFE(await minimalLeftoversService.getAll()), leftoversIntoMinimalLeftovers(leftovers)));
    }
}
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { minimalLeftoversArray: isArray } }],
        assert: [{ assertObject: minimalLeftoversArrayAssertObject }],
        transform: { out: transformMinimalLeftoversArrayDBIntoFE },
    })
], MinimalLeftoversController.prototype, "writeAll", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: minimalLeftoversValidationObject }],
        transform: {
            out: d => (d ? transformMinimalLeftoversDBIntoFE(d) : d),
        },
    })
], MinimalLeftoversController.prototype, "write", null);
__decorate([
    RequestPropsHandle({ validate: [{ validationObject: minimalLeftoversValidationObject }] })
], MinimalLeftoversController.prototype, "delete", null);
__decorate([
    RequestPropsHandle({ transform: { out: transformMinimalLeftoversArrayDBIntoFE } })
], MinimalLeftoversController.prototype, "getAll", null);
export const minimalLeftoversController = new MinimalLeftoversController();
