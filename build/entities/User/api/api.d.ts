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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import type { DBUser } from '../types/index.js';
type RegistrationData = Omit<DBUser, 'accessLevel'>;
declare class UserService {
    registration({ password, email, cityBounding }: RegistrationData): Promise<{
        _id: import("mongoose").Types.ObjectId;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string | undefined;
        collection: import("mongoose").Collection<import("bson").Document>;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError | undefined;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: any;
        }>> & Omit<import("mongoose").FlatRecord<{
            [x: string]: any;
        }> & Required<{
            _id: unknown;
        }>, never>>;
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
        accessToken: string;
        refreshToken: string;
    }>;
    login({ password, email }: Pick<DBUser, 'email' | 'password'>): Promise<{
        _id: import("mongoose").Types.ObjectId;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string | undefined;
        collection: import("mongoose").Collection<import("bson").Document>;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError | undefined;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: any;
        }>> & Omit<import("mongoose").FlatRecord<{
            [x: string]: any;
        }> & Required<{
            _id: unknown;
        }>, never>>;
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: string): Promise<import("mongodb").DeleteResult>;
    refresh(refreshToken: string): Promise<{
        _id: import("mongoose").Types.ObjectId;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: "save" | "validate" | "remove" | null;
        $where: Record<string, unknown>;
        baseModelName?: string | undefined;
        collection: import("mongoose").Collection<import("bson").Document>;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError | undefined;
        id?: any;
        isNew: boolean;
        schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: any;
        }>> & Omit<import("mongoose").FlatRecord<{
            [x: string]: any;
        }> & Required<{
            _id: unknown;
        }>, never>>;
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
        accessToken: string;
        refreshToken: string;
    }>;
    update(userData: RegistrationData): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(userData: Pick<DBUser, 'email'>): Promise<boolean>;
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    }> & Omit<{
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, {}, {
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    }> & Omit<{
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, {
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    }>;
    _getUserInfo(userData: Pick<DBUser, 'email'>): import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    }> & Omit<{
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>) | null, import("mongoose").Document<unknown, {}, {
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    }> & Omit<{
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, {
        email: string;
        password: string;
        accessLevel: string;
        cityBounding?: string | undefined;
    }>;
}
export declare const userService: UserService;
export {};
