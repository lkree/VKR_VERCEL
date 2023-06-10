import bcrypt from 'bcrypt';
import { ApiError } from '../../../../shared/lib/ApiError/index.js';
import { checkEmailValidity, isString } from '../../../../shared/lib/helpers/index.js';
import { DEFAULT_CREATE_USER_LEVER } from '../../const/index.js';
export const assertEmail = (email) => {
    if (!checkEmailValidity(email))
        throw ApiError.BadRequest('email не валиден');
};
export const emailAssertObject = { email: assertEmail };
export const emailPasswordValidationObject = { email: isString, password: isString };
export const refreshTokenValidationObject = { refreshToken: isString };
export const transformDBUserToFE = ({ email, accessLevel, cityBounding }) => ({
    email,
    accessLevel,
    cityBounding,
});
export const transformDBUserToTokenData = transformDBUserToFE;
export const computeDataForUserCreation = async ({ email, password, cityBounding = '', }) => ({
    email,
    password: await bcrypt.hash(password, 3),
    accessLevel: DEFAULT_CREATE_USER_LEVER,
    cityBounding,
});
export const transformDBUserArrayToFE = (userArray) => userArray.map(transformDBUserToFE);
export const transformDBUserAndTokenToFE = (d) => ({ ...d, ...transformDBUserToFE(d) });
