import { ApiError } from '../../../shared/lib/ApiError/index.js';
export const DEFAULT_MESSAGE_ERROR = 'Непредвиденная ошибка';
export const errorMiddleware = (err, _, res, next) => {
    if (err instanceof Error) {
        if (err instanceof ApiError) {
            return res.status(err.status).json({ message: err.message, errors: err.errors });
        }
        return res.status(500).json({ message: DEFAULT_MESSAGE_ERROR });
    }
    return next();
};
