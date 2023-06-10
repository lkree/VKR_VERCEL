import { alphabeticalSort } from '../../../../shared/lib/helpers/index.js';
export const transformDBIntoFE = ({ cityName, accountEmail, notifyEmail }) => ({
    cityName,
    notifyEmail,
    accountEmail,
});
export const transformDBArrayIntoFE = (responsiblePersonArray) => responsiblePersonArray.map(transformDBIntoFE).sort((a, b) => alphabeticalSort(a.cityName, b.cityName));
