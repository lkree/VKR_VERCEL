import { computePathWithDomain } from '../../../shared/api/index.js';
import { computeDirName } from '../../../shared/lib/helpers/index.js';
export const FILE_DIRECTORY = computeDirName('/assets/1c/');
export const FILE_DEFAULT_NAME = '/leftovers.html';
export const FRONTEND_FILE_NAME = 'file';
const computePath = computePathWithDomain('file');
export const Methods = {
    AcceptFile: computePath('acceptFile'),
    Upload: computePath('upload'),
    DeleteExisting: computePath('deleteExisting'),
    GetFileInfo: computePath('getFileInfo'),
};
