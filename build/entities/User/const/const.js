import { computePathWithDomain } from '../../../shared/api/index.js';
import { AccessLevel } from '../../../shared/const/index.js';
const computePath = computePathWithDomain('user');
export const Methods = {
    Registration: computePath('registration'),
    Session: computePath('session'),
    Login: computePath('login'),
    Logout: computePath('logout'),
    Refresh: computePath('refresh'),
    Update: computePath('update'),
    Delete: computePath('delete'),
    GetAll: computePath('GetAll'),
};
export const DEFAULT_CREATE_USER_LEVER = AccessLevel.User;
