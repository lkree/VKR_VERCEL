/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import jwt from 'jsonwebtoken';
import type { DeleteResult } from 'mongodb';
import type { Types } from 'mongoose';
declare class TokenService {
    generateTokens(payload: Parameters<(typeof jwt)['sign']>[0]): {
        accessToken: string;
        refreshToken: string;
    };
    validateAccessToken(token: string): string | jwt.JwtPayload | null;
    validateRefreshToken(token: string): string | jwt.JwtPayload | null;
    saveToken(userId: Types.ObjectId, refreshToken: string): Promise<import("mongoose").Document<unknown, {}, {
        refreshToken: string;
        user?: Types.ObjectId | undefined;
    }> & Omit<{
        refreshToken: string;
        user?: Types.ObjectId | undefined;
    } & {
        _id: Types.ObjectId;
    }, never>>;
    removeToken(refreshToken: string): Promise<DeleteResult>;
    findToken(refreshToken: string): Promise<(import("mongoose").Document<unknown, {}, {
        refreshToken: string;
        user?: Types.ObjectId | undefined;
    }> & Omit<{
        refreshToken: string;
        user?: Types.ObjectId | undefined;
    } & {
        _id: Types.ObjectId;
    }, never>) | null>;
}
export declare const tokenService: TokenService;
export {};
