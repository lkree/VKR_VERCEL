var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { minimalLeftoversService } from '../../../entities/MinimalLeftovers/index.js';
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { isArray, isObject } from '../../../shared/lib/helpers/index.js';
import { leftoverService } from '../api/index.js';
import { assertLeftovers, transformBELeftoversListIntoFE, assertLeftover, transformBELeftoverIntoFE, transformFELeftoverIntoBE, transformFELeftoversListIntoBE, } from '../lib/helpers/index.js';
class LeftoverController extends BaseController {
    async create(req, res, __) {
        const { leftovers } = req.body;
        res.json(await Promise.all([leftoverService.create(leftovers), minimalLeftoversService._getAll()]));
    }
    async writeAll(req, res, __) {
        const { leftovers } = req.body;
        res.json(await Promise.all([leftoverService.create(leftovers), minimalLeftoversService._getAll()]));
    }
    async update(req, res, __) {
        const { leftover } = req.body;
        res.json(await Promise.all([
            leftoverService.update(leftover),
            minimalLeftoversService._get({ cityName: leftover.cityName }),
        ]));
    }
    async updateAll(req, res, __) {
        const { leftovers } = req.body;
        res.json(await Promise.all([leftoverService.updateAll(leftovers), minimalLeftoversService._getAll()]));
    }
    async deleteOne(req, res, __) {
        const { leftover } = req.body;
        res.json(await Promise.all([leftoverService.deleteOne(leftover), minimalLeftoversService._getAll()]));
    }
    async deleteAll(_, res, __) {
        res.json(await leftoverService.deleteAll());
    }
    async getUniqueProducts(_, res, __) {
        res.json(await leftoverService.getUniqueProducts());
    }
    async getAll(req, res, __) {
        const city = req.user.cityBounding;
        res.json(await Promise.all([leftoverService.getAll(city), minimalLeftoversService._getAll()]));
    }
    _getAll() {
        return leftoverService.getAll();
    }
    async _getLeftoversWithOverdraft() {
        return leftoverService._getLeftoversWithOverdraft(await minimalLeftoversService._getAll());
    }
    _saveLeftoversFromFile(fileLeftoversList) {
        return leftoverService._saveLeftoversFromFile(fileLeftoversList);
    }
}
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { leftovers: isArray } }],
        assert: [{ assertObject: { leftovers: assertLeftovers } }],
        transform: {
            in: { leftovers: transformFELeftoversListIntoBE },
            out: transformBELeftoversListIntoFE,
        },
    })
], LeftoverController.prototype, "create", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { leftovers: isArray } }],
        assert: [{ assertObject: { leftovers: assertLeftovers } }],
        transform: {
            in: { leftovers: transformFELeftoversListIntoBE },
            out: transformBELeftoversListIntoFE,
        },
    })
], LeftoverController.prototype, "writeAll", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { leftover: isObject } }],
        assert: [{ assertObject: { leftover: assertLeftover } }],
        transform: {
            in: { leftover: transformFELeftoverIntoBE },
            out: transformBELeftoverIntoFE,
        },
    })
], LeftoverController.prototype, "update", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { leftovers: isArray } }],
        assert: [{ assertObject: { leftovers: assertLeftovers } }],
        transform: {
            in: { leftovers: transformFELeftoversListIntoBE },
            out: transformBELeftoversListIntoFE,
        },
    })
], LeftoverController.prototype, "updateAll", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { leftover: isObject } }],
        assert: [{ assertObject: { leftover: assertLeftover } }],
        transform: {
            in: { leftover: transformFELeftoverIntoBE },
            out: transformBELeftoversListIntoFE,
        },
    })
], LeftoverController.prototype, "deleteOne", null);
__decorate([
    RequestPropsHandle({ transform: { out: transformBELeftoversListIntoFE } })
], LeftoverController.prototype, "getAll", null);
export const leftoverController = new LeftoverController();
