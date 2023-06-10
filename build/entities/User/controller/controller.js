var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { tokenService } from '../../../entities/Token/index.js';
import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { BaseController } from '../../../shared/lib/BaseController/index.js';
import { RequestDataFields, RequestPropsHandle } from '../../../shared/lib/decorators/index.js';
import { isObject, isString } from '../../../shared/lib/helpers/index.js';
import { userService } from '../api/index.js';
import { emailAssertObject, emailPasswordValidationObject, refreshTokenValidationObject, transformDBUserAndTokenToFE, transformDBUserArrayToFE, transformDBUserToFE, } from '../lib/helpers/index.js';
const cookieParameters = { maxAge: 10 * 365 * 24 * 60 * 60 * 1000, httpOnly: true };
class UserController extends BaseController {
    async registration(req, res, __) {
        const { email, password, cityBounding } = req.body;
        const userData = await userService.registration({ email, password, cityBounding });
        res.cookie('refreshToken', userData.refreshToken, cookieParameters);
        res.json(userData);
    }
    async login(req, res, __) {
        const { email, password } = req.body;
        const userData = await userService.login({ email, password });
        res.cookie('refreshToken', userData.refreshToken, cookieParameters);
        res.cookie('accessToken', userData.accessToken, cookieParameters);
        res.json(userData);
    }
    session(req, res, __) {
        const { accessToken } = req.cookies;
        const result = tokenService.validateAccessToken(accessToken);
        if (result && isObject(result))
            res.json(result);
        else
            throw ApiError.UnauthorizedError();
    }
    async logout(req, res, __) {
        const { refreshToken } = req.cookies;
        const token = await userService.logout(refreshToken);
        res.clearCookie('refreshToken');
        res.clearCookie('accessToken');
        res.json(token);
    }
    async refresh(req, res, __) {
        const { refreshToken } = req.cookies;
        const userData = await userService.refresh(refreshToken);
        res.cookie('refreshToken', userData.refreshToken, cookieParameters);
        res.json(userData);
    }
    async update(req, res, __) {
        res.json(await userService.update(req.body));
    }
    async delete(req, res, __) {
        res.json(await userService.delete(req.body));
    }
    async getAll(_, res, __) {
        res.json(await userService.getAll());
    }
}
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: emailPasswordValidationObject }],
        assert: [{ assertObject: emailAssertObject }],
        transform: { out: transformDBUserAndTokenToFE },
    })
], UserController.prototype, "registration", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: emailPasswordValidationObject }],
        assert: [{ assertObject: emailAssertObject }],
        transform: { out: transformDBUserAndTokenToFE },
    })
], UserController.prototype, "login", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: refreshTokenValidationObject, fieldToExecuteData: RequestDataFields.Cookies }],
    })
], UserController.prototype, "logout", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: refreshTokenValidationObject, fieldToExecuteData: RequestDataFields.Cookies }],
        transform: { out: u => ({ ...u, ...transformDBUserToFE(u) }) },
    })
], UserController.prototype, "refresh", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { email: isString, password: isString } }],
        assert: [{ assertObject: emailAssertObject }],
        transform: { out: transformDBUserArrayToFE },
    })
], UserController.prototype, "update", null);
__decorate([
    RequestPropsHandle({
        validate: [{ validationObject: { email: isString } }],
        assert: [{ assertObject: emailAssertObject }],
        transform: { out: transformDBUserArrayToFE },
    })
], UserController.prototype, "delete", null);
__decorate([
    RequestPropsHandle({ transform: { out: transformDBUserArrayToFE } })
], UserController.prototype, "getAll", null);
export const userController = new UserController();
