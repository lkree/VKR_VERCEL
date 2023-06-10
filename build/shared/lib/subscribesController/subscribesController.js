export class SubscribesController {
    _subscribeMap = new Map();
    doSubscribes(...subscribeList) {
        this.unSubscribe();
        subscribeList.forEach(({ event, listener, emitter, subscriptionType = 'on' }) => {
            this._subscribeMap.set({ event, emitter }, listener);
            emitter[subscriptionType](event, listener);
        });
        return this;
    }
    unSubscribe() {
        this._subscribeMap.forEach((eventCallback, { event, emitter }) => emitter.off(event, eventCallback));
        this._subscribeMap.clear();
        return this;
    }
}
