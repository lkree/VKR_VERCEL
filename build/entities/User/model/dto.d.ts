import { User } from '../../../entities/User/types/index.js';
export type TUserDto = {
    _id: unknown;
} & Pick<User, 'email' | 'accessLevel'>;
export declare class UserDto {
    email: string;
    id: string;
    accessLevel: import("../../../shared/const/const.js").AccessLevel;
    constructor(model: TUserDto);
}
