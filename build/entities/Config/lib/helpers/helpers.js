import { FULL_VALUE } from '../../../../shared/lib/decorators/index.js';
import { isObject } from '../../../../shared/lib/helpers/index.js';
const EMAIL_SETTINGS_FIELDS = ['password', 'port', 'secure', 'user', 'host'];
export const transformBDConfigToFE = (config = {}) => config?.emailSettings
    ? {
        user: config.emailSettings.user,
        port: config.emailSettings.port,
        secure: config.emailSettings.secure,
        host: config.emailSettings.host,
    }
    : {};
export const emailSettingsValidationObject = {
    [FULL_VALUE]: (d) => isObject(d) && Object.keys(d).some(k => EMAIL_SETTINGS_FIELDS.includes(k)),
};
