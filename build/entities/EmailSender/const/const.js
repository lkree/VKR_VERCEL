import { computePathWithDomain } from '../../../shared/api/index.js';
const computePath = computePathWithDomain('emailSender');
export const Methods = {
    SendTestEmail: computePath('sendTestEmail'),
};
