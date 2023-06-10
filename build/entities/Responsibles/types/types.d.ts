import type { responsiblePersonsModel } from '../../../entities/Responsibles/model/index.js';
import type { GetMongooseScheme } from '../../../shared/lib/ts/index.js';
export type ResponsiblePerson = GetMongooseScheme<typeof responsiblePersonsModel>;
export interface ResponsiblePersonWithPassword extends ResponsiblePerson {
    password?: string;
}
