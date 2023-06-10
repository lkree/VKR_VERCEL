export const compose = (...fns) => (fn) => fns.reduce((result, current) => current(result), fn);
