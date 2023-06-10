import bcrypt from 'bcrypt';
import { tokenService } from '../../../entities/Token/index.js';
import { ApiError } from '../../../shared/lib/ApiError/index.js';
import { isObject } from '../../../shared/lib/helpers/index.js';
import { transformDBUserToTokenData, computeDataForUserCreation } from '../lib/helpers/index.js';
import { userModel } from '../model/index.js';
class UserService {
    async registration({ password, email, cityBounding }) {
        if (await userModel.findOne({ email })) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
        }
        const user = await userModel.create(await computeDataForUserCreation({ email, password, cityBounding }));
        const tokens = tokenService.generateTokens(transformDBUserToTokenData(user));
        await tokenService.saveToken(user._id, tokens.refreshToken);
        return { ...tokens, ...user };
    }
    async login({ password, email }) {
        const user = await userModel.findOne({ email });
        if (!user)
            throw ApiError.BadRequest('Пользователь с таким email не найден');
        if (!(await bcrypt.compare(password, user.password)))
            throw ApiError.BadRequest('Неверный пароль');
        const tokens = tokenService.generateTokens(transformDBUserToTokenData(user));
        await tokenService.saveToken(user._id, tokens.refreshToken);
        return { ...tokens, ...user };
    }
    async logout(refreshToken) {
        return tokenService.removeToken(refreshToken);
    }
    async refresh(refreshToken) {
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb || !isObject(userData))
            throw ApiError.UnauthorizedError();
        const user = await userModel.findById(userData._id);
        if (!user)
            throw ApiError.UnauthorizedError();
        const tokens = tokenService.generateTokens(transformDBUserToTokenData(user));
        await tokenService.saveToken(userData._id, tokens.refreshToken);
        return { ...tokens, ...user };
    }
    async update(userData) {
        return userModel.updateOne({ email: userData.email }, await computeDataForUserCreation(userData));
    }
    async delete(userData) {
        await userModel.deleteOne(userData);
        return true;
    }
    getAll() {
        return userModel.find();
    }
    _getUserInfo(userData) {
        return userModel.findOne(userData);
    }
}
export const userService = new UserService();
