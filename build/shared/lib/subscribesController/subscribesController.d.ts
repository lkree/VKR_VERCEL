/// <reference types="node" />
import { EventEmitter } from 'events';
type SubscribeEvent = string;
type SubscribeFunction = (e: any) => void;
export type SubscribeList = Array<{
    event: SubscribeEvent;
    listener: SubscribeFunction;
    subscriptionType?: 'on' | 'once';
    emitter: EventEmitter;
}>;
export declare class SubscribesController {
    private _subscribeMap;
    doSubscribes(...subscribeList: SubscribeList): this;
    unSubscribe(): this;
}
export {};
