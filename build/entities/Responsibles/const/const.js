import { computePathWithDomain } from '../../../shared/api/index.js';
const computePath = computePathWithDomain('responsiblePersons');
export const Methods = {
    GetAll: computePath('getAll'),
    Write: computePath('write'),
};
