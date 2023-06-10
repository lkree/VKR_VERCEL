import { EventEmitter } from 'events';
export const emitter = new EventEmitter();
export const getCloseEventName = (entityName) => `close_${entityName}`;
