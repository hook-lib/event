import HookCallback from '@hook/callback'
import type { groups, options, item } from '@hook/callback'

type identityObject = {
  event: string
  group?: string
  times?: number
}

type identity = identityObject | string

type hookCallbacks = {
  [key: string]: HookCallback
}

type method = (...args: any) => any

type emitResult = {
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
      },
      options
    )
    this.defaultGroup = config.defaultGroup
    this.defaultOrder = config.defaultOrder
    this.initDefaultGroup = config.initDefaultGroup
  }

  setEventGroups(event: string, groups: groups): HookEvent {
    const cb = this.getCallbackInstance(event)
    cb.setGroups(groups)
    return this
  }

  public getCallbackInstance(event: string): HookCallback {
    if (!this.hookCallbacks[event]) {
      this.hookCallbacks[event] = new HookCallback({
        defaultGroup: this.defaultGroup,
        defaultOrder: this.defaultOrder,
        initDefaultGroup: this.initDefaultGroup,
      })
    }
    return this.hookCallbacks[event]
  }

  on(identity: identity, method: method, ctx: any = this) {
    return this._bind('push', identity, method, ctx)
  }

  listen(identity: identity, method: method, ctx: any = this) {
    return this._bind('unshift', identity, method, ctx)
  }

  private _bind(
    type: 'push' | 'unshift',
    identity: identity,
    method: method,
    ctx: any = this
  ): HookEvent {
    const { event, group, times } = this._parseIdentity(identity)

    const cb = this.getCallbackInstance(event)
    cb[type]({ method, group, times, ctx })
    return this
  }

  off(identity: identity): HookEvent {
    const { event, group } = this._parseIdentity(identity)

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
    const cb = this.getCallbackInstance(event)
    const items =
      typeof group === 'undefined' ? cb.getAll() : cb.getByGroup(group)

    const result = await this._execCallbacks(items, ...params)

    cb.removeItems(item => item.times && (item.executed === item.times))

    return result
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
