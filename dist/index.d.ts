import HookCallback, { options as callbackOptions } from '@hook/callback';
import type { groups } from '@hook/callback';
export interface identityObject {
    event: string;
    group?: string;
    times?: number;
}
export declare type exceptionLevel = 'LOG' | 'WARN' | 'ERROR';
export interface exceptionInfo {
    code: number;
    message: string;
    detail: {
        [key: string]: any;
    };
}
export declare type debugMode = false | {
    LOG: boolean;
    WARN: boolean;
    ERROR: boolean;
};
export interface options extends callbackOptions {
    debugMode?: debugMode;
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
    traceLog(): void;
    traceWarn(): void;
    traceError(): void;
    exception(level: exceptionLevel, info: exceptionInfo): Promise<emitResult>;
    setEventGroups(event: string, groups: groups): this;
    addEventGroups(event: string, groups: groups): this;
    getCallbackInstance(event: string): HookCallback;
    on(identity: identity, method: method, ctx?: any): this;
    listen(identity: identity, method: method, ctx?: any): this;
    off(identity: identity): this;
    emit(identity: identity, ...params: any): Promise<emitResult>;
    private _setOrAddEventGroups;
    private _hasCallbackInstance;
    private _bind;
    private _execCallbacks;
    private _execCallback;
    private _parseIdentity;
}
export {};
