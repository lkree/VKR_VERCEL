import { isErrorResponse } from '~/shared/api/common/typeGuards';
import { getStore } from '~/shared/lib/global';
import { isArray, isObject } from '~/shared/lib/helpers/typeGuards';
import { actions } from '~/shared/models/commonStores';

import { computeHeaders, getJSONHeaders, toCamelCase } from './helpers';

export enum BuiltInHeaders {
  JSON = 'json',
}

interface Headers {
  builtIn?: Array<BuiltInHeaders>;
  custom?: Record<string, string>;
}

interface Props {
  url: string;
  options?: {
    headers?: Headers;
    body?: any;
    stringifyBody?: boolean;
  } & Omit<RequestInit, 'body' | 'headers'>;
  resultType?: 'text' | 'json';
}

const computeHeadersObject = (headers: Headers) =>
  !headers
    ? headers
    : computeHeaders({
        ...(headers.builtIn?.includes(BuiltInHeaders.JSON) && getJSONHeaders()),
        ...(headers.custom && headers.custom),
      });

const computeOptions = (options?: Props['options']) =>
  !options
    ? options
    : {
        ...options,
        ...(options.body && { body: options.stringifyBody ?? true ? JSON.stringify(options.body) : options.body }),
        ...(options.headers && { headers: computeHeadersObject(options.headers) }),
      };

export const call = <T>({ url, options, resultType = 'json' }: Props): Promise<T> =>
  fetch(url, computeOptions(options))
    .then(d => d[resultType]())
    .then(d => {
      if (isErrorResponse(d)) {
        getStore().dispatch(actions.setErrorsMessage(d.message));

        return Promise.reject(d.message);
      }

      return d;
    })
    .then(r => (isObject(r) || isArray(r) ? toCamelCase(r) : r));
