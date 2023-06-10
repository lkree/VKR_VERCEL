import { computePathWithDomain } from '../../../shared/api/index.js';
const computePath = computePathWithDomain('minimalLeftovers');
export const Methods = {
    GetAll: computePath('getAll'),
    WriteAll: computePath('writeAll'),
    Write: computePath('write'),
    DeleteAll: computePath('deleteAll'),
    Delete: computePath('delete'),
};
export const NON_PRODUCT_LEFTOVER = 0;
