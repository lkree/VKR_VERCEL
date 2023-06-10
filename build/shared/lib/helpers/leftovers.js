import { SHARED_KEY } from '../../../shared/const/index.js';
const SHARED_KEY_LOWERCASE = SHARED_KEY.toLowerCase();
export const leftoversSort = (leftovers) => [...leftovers].sort((a, b) => {
    const aName = a.cityName.toLowerCase();
    const bName = b.cityName.toLowerCase();
    if (aName === SHARED_KEY_LOWERCASE)
        return 1;
    if (bName === SHARED_KEY_LOWERCASE)
        return -1;
    if (aName < bName)
        return -1;
    if (aName > bName)
        return 1;
    return 0;
});
