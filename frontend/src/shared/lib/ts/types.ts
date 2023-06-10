import type { noop } from 'lodash';

export type Entries<T> = Array<
  {
    [Key in keyof T]: [Key, T[Key]];
  }[keyof T]
>;

export type Nullable<T> = T | null;
export type Voidable<T> = T | undefined;
export type noop = typeof noop;

export type fn = (...args: any[]) => any;

export type CreateRequestResponseData<Request = any, Response = any> = { request: Request; response: Response };

export type ApiFunction<T extends CreateRequestResponseData> = (data: T['request']) => Promise<T['response']>;
