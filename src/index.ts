import HookCallback, { options as callbackOptions } from '@hook/callback'
import type { groups, item } from '@hook/callback'

export interface identityObject {
  event: string
  group?: string
  times?: number
}

export type exceptionLevel = 'LOG' | 'WARN' | 'ERROR'

export interface exceptionInfo {
  code: number,
  message: string,
  detail: {
    [key: string] : any
  }
}

export type debugMode = false | {
  LOG: boolean,
  WARN: boolean,
  ERROR: boolean,
}
export interface options extends callbackOptions{
  debugMode?: debugMode
}

export type identity = identityObject | string

type hookCallbacks = {
  [key: string]: HookCallback
};

type method = (...args: any) => any

export type emitResult = {
  total: number
  status: boolean
  errors: Error[]
}

export default class HookEvent {
  private hookCallbacks: hookCallbacks = {}
  private defaultGroup: string
  private defaultOrder: number
  private initDefaultGroup: boolean
  constructor(options?: options) {
    const config = Object.assign(
      {
        defaultGroup: 'default',
        defaultOrder: 1000,
        initDefaultGroup: true,
        debugMode: false
      },
      options
    )
    this.defaultGroup = config.defaultGroup
    this.defaultOrder = config.defaultOrder
    this.initDefaultGroup = config.initDefaultGroup

    if (config.debugMode) {
      if (config.debugMode.LOG) {
        this.traceLog()
      }
      if (config.debugMode.WARN) {
        this.traceWarn()
      }
      if (config.debugMode.ERROR) {
        this.traceError()
      }
    }
  }

  traceLog() {
    this.off('HOOK_LOG').on('HOOK_LOG', (info) => {
      console.log(info)
    })
  }

  traceWarn() {
    this.off('HOOK_WARN').on('HOOK_WARN', (info) => {
      console.warn(info)
    })
  }

  traceError() {
    this.off('HOOK_ERROR').on('HOOK_ERROR', (info) => {
      console.error(info)
    })
  }

  async exception(level: exceptionLevel, info: exceptionInfo): Promise<emitResult> {
    info.message = `HOOK_${level}: ${info.message}`
    return await this.emit(`HOOK_${level}`, info)
  }

  setEventGroups(event: string, groups: groups): this {
    return this._setOrAddEventGroups(event, groups, 'set')
  }

  addEventGroups(event: string, groups: groups): this {
    return this._setOrAddEventGroups(event, groups, 'add')
  }

  getCallbackInstance(event: string): HookCallback {
    if (!this._hasCallbackInstance(event)) {
      this.hookCallbacks[event] = new HookCallback({
        defaultGroup: this.defaultGroup,
        defaultOrder: this.defaultOrder,
        initDefaultGroup: this.initDefaultGroup,
      })
    }
    return this.hookCallbacks[event]
  }

  on(identity: identity, method: method, ctx: any = this): this {
    return this._bind('push', identity, method, ctx)
  }

  listen(identity: identity, method: method, ctx: any = this): this {
    return this._bind('unshift', identity, method, ctx)
  }

  off(identity: identity): this {
    const { event, group } = this._parseIdentity(identity)
    if (!this._hasCallbackInstance(event)) {
      return this
    }
    const cb = this.getCallbackInstance(event)
    if (typeof group === 'undefined') {
      cb.removeAll()
    } else {
      cb.removeByGroup(group)
    }
    return this
  }

  async emit(identity: identity, ...params: any): Promise<emitResult> {
    const { event, group } = this._parseIdentity(identity)
    if (!this._hasCallbackInstance(event)) {
      return { total: 0, status: true, errors: [] }
    }
    const cb = this.getCallbackInstance(event)
    const items =
      typeof group === 'undefined' ? cb.getAll() : cb.getByGroup(group)
    const result = await this._execCallbacks(items, ...params)
    cb.removeItems(item => item.times && (item.executed === item.times))
    return result
  }

  private _setOrAddEventGroups(event: string, groups: groups, type: 'set' | 'add'): this {
    const cb = this.getCallbackInstance(event)
    Object.keys(groups).forEach((group) => {
      const has = cb.hasGroup(group)
      if (type === 'set' || !has) {
        const order = groups[group]
        cb.setGroup(group, order)
      }
      if (has) {
        const data: {level: exceptionLevel, code: number} = type === 'set' ? { level: 'LOG', code: 100001 } : { level: 'WARN', code: 200001 }
        this.exception(data.level, {
          code: data.code,
          message: `${group} group of ${event} already exists!`,
          detail: { event, group, groups }
        })
      }
    })
    return this
  }

  private _hasCallbackInstance(event: string): boolean {
    return !!this.hookCallbacks[event]
  }

  private _bind(
    type: 'push' | 'unshift',
    identity: identity,
    method: method,
    ctx: any = this
  ): this {
    const { event, group, times } = this._parseIdentity(identity)
    const cb = this.getCallbackInstance(event)
    cb[type]({ method, group, times, ctx })
    return this
  }

  private async _execCallbacks(
    items: item[] = [],
    ...params: any
  ): Promise<emitResult> {
    const result: emitResult = { total: 0, status: true, errors: [] }
    const { length } = items
    for (let i = 0; i < length; i++) {
      const item = items[i]
      try {
        const executed = await this._execCallback(item, ...params)
        if (executed) {
          result.total += 1
        }
      } catch (err) {
        result.status = false
        result.errors.push(err)
        this.exception('ERROR', {
          code: 300001,
          message: 'run callback error',
          detail: {
            ...item
          }
        })
      }
    }

    return result
  }

  private async _execCallback(item: item, ...params: any): Promise<boolean> {
    const { method, times, ctx, executed = 0 } = item
    if (typeof times !== 'undefined') {
      if (times > executed) {
        await method.call(ctx, ...params)
        item.executed = executed + 1
        return true
      }
      return false
    } else {
      await method.call(ctx, ...params)
      return true
    }
  }

  private _parseIdentity(identity: identity): identityObject {
    if (typeof identity === 'string') {
      const event = identity.split(/[*#]/)[0]
      const extras = identity.replace(event, '')
      let group
      let times

      const groupReg = /#([^*]*)/
      const timesReg = /\*([^#]*)/

      const groupResult = groupReg.exec(extras)
      if (groupResult) {
        group = groupResult[1] || this.defaultGroup
      }

      const timesResult = timesReg.exec(extras)
      if (timesResult && timesResult[1]) {
        times = parseInt(timesResult[1])
      }
      return { event, group, times }
    } else {
      return identity
    }
  }
}
