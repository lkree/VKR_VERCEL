import { computePathWithDomain } from '../../../shared/api/index.js';
const computePath = computePathWithDomain('citiesPrefix');
export const Methods = {
    Add: computePath('add'),
    Delete: computePath('delete'),
    GetAll: computePath('getAll'),
};
