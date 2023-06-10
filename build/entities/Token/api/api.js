import jwt from 'jsonwebtoken';
import { tokenModel } from '../model/index.js';
class TokenService {
    generateTokens(payload) {
        return {
            accessToken: jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '3650days' }),
            refreshToken: jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '3650days' }),
        };
    }
    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        }
        catch (e) {
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        }
        catch (e) {
            return null;
        }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return tokenModel.create({ user: userId, refreshToken });
    }
    async removeToken(refreshToken) {
        return tokenModel.deleteOne({ refreshToken });
    }
    async findToken(refreshToken) {
        return tokenModel.findOne({ refreshToken });
    }
}
export const tokenService = new TokenService();
