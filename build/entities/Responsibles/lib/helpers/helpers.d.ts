import type { ResponsiblePerson } from '../../types/index.js';
export declare const transformDBIntoFE: ({ cityName, accountEmail, notifyEmail }: ResponsiblePerson) => {
    cityName: string;
    notifyEmail: string | undefined;
    accountEmail: string | undefined;
};
export declare const transformDBArrayIntoFE: (responsiblePersonArray: Array<ResponsiblePerson>) => {
    cityName: string;
    notifyEmail: string | undefined;
    accountEmail: string | undefined;
}[];
