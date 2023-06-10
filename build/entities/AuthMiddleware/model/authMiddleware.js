import { tokenService } from '../../../entities/Token/index.js';
import { ApiError } from '../../../shared/lib/ApiError/index.js';
export const authMiddleware = (req, _, next) => {
    try {
        const { accessToken, refreshToken } = req.cookies;
        if (!accessToken)
            return next(ApiError.UnauthorizedError());
        const userData = tokenService.validateAccessToken(accessToken);
        const refreshData = tokenService.validateRefreshToken(refreshToken);
        if (!userData || !refreshData)
            return next(ApiError.UnauthorizedError());
        // @ts-ignore
        req.user = userData;
        next();
    }
    catch (e) {
        next(ApiError.UnauthorizedError());
    }
};
