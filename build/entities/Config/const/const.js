import { computePathWithDomain } from '../../../shared/api/index.js';
const computePath = computePathWithDomain('config');
export const Methods = {
    GetEmailSettings: computePath('getEmailSettings'),
    WriteEmailSettings: computePath('writeEmailSettings'),
};
