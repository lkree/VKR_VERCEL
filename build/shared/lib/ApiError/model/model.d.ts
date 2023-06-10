export declare class ApiError extends Error {
    status: number;
    errors: never[];
    constructor(status: number, message: string, errors?: never[]);
    static UnauthorizedError(): ApiError;
    static NoAdminRightsError(): ApiError;
    static BadRequest(message: string, errors?: never[]): ApiError;
    static ServerError(message: string, errors?: never[]): ApiError;
}
