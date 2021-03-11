import HookCallback, { options as callbackOptions } from '@hook/callback';
import type { groups } from '@hook/callback';
export interface identityObject {
    event: string;
    group?: string;
    times?: number;
}
export interface options extends callbackOptions {
}
export declare type identity = identityObject | string;
declare type method = (...args: any) => any;
export declare type emitResult = {
    total: number;
    status: boolean;
    errors: Error[];
};
export default class HookEvent {
    private hookCallbacks;
    private defaultGroup;
    private defaultOrder;
    private initDefaultGroup;
    constructor(options?: options);
    setEventGroups(event: string, groups: groups): this;
    getCallbackInstance(event: string): HookCallback;
    on(identity: identity, method: method, ctx?: any): this;
    listen(identity: identity, method: method, ctx?: any): this;
    off(identity: identity): this;
    emit(identity: identity, ...params: any): Promise<emitResult>;
    private _hasCallbackInstance;
    private _bind;
    private _execCallbacks;
    private _execCallback;
    private _parseIdentity;
}
export {};
