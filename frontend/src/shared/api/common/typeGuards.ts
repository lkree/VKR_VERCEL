import { isObject } from '~/shared/lib/helpers/typeGuards';

export const isErrorResponse = (d: unknown): d is { message: string; errors: Array<string> } =>
  isObject(d) && (('message' in d && Object.keys(d).length === 1) || ('message' in d && 'errors' in d));
