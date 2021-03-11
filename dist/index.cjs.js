'use strict';

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
require('core-js/modules/es.object.assign.js');
require('core-js/modules/es.array.concat.js');
require('core-js/modules/es.string.split.js');
require('core-js/modules/es.regexp.exec.js');
require('core-js/modules/es.string.replace.js');
require('core-js/modules/es.parse-int.js');
var HookCallback = require('@hook/callback');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var HookCallback__default = /*#__PURE__*/_interopDefaultLegacy(HookCallback);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var HookEvent = /*#__PURE__*/function () {
  function HookEvent(options) {
    _classCallCheck__default['default'](this, HookEvent);

    this.hookCallbacks = {};
    var config = Object.assign({
      defaultGroup: 'default',
      defaultOrder: 1000,
      initDefaultGroup: true
    }, options);
    this.defaultGroup = config.defaultGroup;
    this.defaultOrder = config.defaultOrder;
    this.initDefaultGroup = config.initDefaultGroup;
  }

  _createClass__default['default'](HookEvent, [{
    key: "setEventGroups",
    value: function setEventGroups(event, groups) {
      var cb = this.getCallbackInstance(event);
      cb.setGroups(groups);
      return this;
    }
  }, {
    key: "getCallbackInstance",
    value: function getCallbackInstance(event) {
      if (!this.hookCallbacks[event]) {
        this.hookCallbacks[event] = new HookCallback__default['default']({
          defaultGroup: this.defaultGroup,
          defaultOrder: this.defaultOrder,
          initDefaultGroup: this.initDefaultGroup
        });
      }

      return this.hookCallbacks[event];
    }
  }, {
    key: "on",
    value: function on(identity, method) {
      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      return this._bind('push', identity, method, ctx);
    }
  }, {
    key: "listen",
    value: function listen(identity, method) {
      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      return this._bind('unshift', identity, method, ctx);
    }
  }, {
    key: "_bind",
    value: function _bind(type, identity, method) {
      var ctx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this;

      var _this$_parseIdentity = this._parseIdentity(identity),
          event = _this$_parseIdentity.event,
          group = _this$_parseIdentity.group,
          times = _this$_parseIdentity.times;

      var cb = this.getCallbackInstance(event);
      cb[type]({
        method: method,
        group: group,
        times: times,
        ctx: ctx
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(identity) {
      var _this$_parseIdentity2 = this._parseIdentity(identity),
          event = _this$_parseIdentity2.event,
          group = _this$_parseIdentity2.group;

      var cb = this.getCallbackInstance(event);

      if (typeof group === 'undefined') {
        cb.removeAll();
      } else {
        cb.removeByGroup(group);
      }

      return this;
    }
  }, {
    key: "emit",
    value: function emit(identity) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee() {
        var _this$_parseIdentity3, event, group, cb, items, result;

        return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$_parseIdentity3 = this._parseIdentity(identity), event = _this$_parseIdentity3.event, group = _this$_parseIdentity3.group;
                cb = this.getCallbackInstance(event);
                items = typeof group === 'undefined' ? cb.getAll() : cb.getByGroup(group);
                _context.next = 5;
                return this._execCallbacks.apply(this, [items].concat(params));

              case 5:
                result = _context.sent;
                cb.removeItems(function (item) {
                  return item.times && item.executed === item.times;
                });
                return _context.abrupt("return", result);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "_execCallbacks",
    value: function _execCallbacks() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2() {
        var result, length, i, item, executed;
        return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = {
                  total: 0,
                  status: true,
                  errors: []
                };
                length = items.length;
                i = 0;

              case 3:
                if (!(i < length)) {
                  _context2.next = 19;
                  break;
                }

                item = items[i];
                _context2.prev = 5;
                _context2.next = 8;
                return this._execCallback.apply(this, [item].concat(params));

              case 8:
                executed = _context2.sent;

                if (executed) {
                  result.total += 1;
                }

                _context2.next = 16;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](5);
                result.status = false;
                result.errors.push(_context2.t0);

              case 16:
                i++;
                _context2.next = 3;
                break;

              case 19:
                return _context2.abrupt("return", result);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[5, 12]]);
      }));
    }
  }, {
    key: "_execCallback",
    value: function _execCallback(item) {
      for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        params[_key3 - 1] = arguments[_key3];
      }

      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee3() {
        var method, times, ctx, _item$executed, executed;

        return _regeneratorRuntime__default['default'].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                method = item.method, times = item.times, ctx = item.ctx, _item$executed = item.executed, executed = _item$executed === void 0 ? 0 : _item$executed;

                if (!(typeof times !== 'undefined')) {
                  _context3.next = 10;
                  break;
                }

                if (!(times > executed)) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 5;
                return method.call.apply(method, [ctx].concat(params));

              case 5:
                item.executed = executed + 1;
                return _context3.abrupt("return", true);

              case 7:
                return _context3.abrupt("return", false);

              case 10:
                _context3.next = 12;
                return method.call.apply(method, [ctx].concat(params));

              case 12:
                return _context3.abrupt("return", true);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }, {
    key: "_parseIdentity",
    value: function _parseIdentity(identity) {
      if (typeof identity === 'string') {
        var event = identity.split(/[*#]/)[0];
        var extras = identity.replace(event, '');
        var group;
        var times;
        var groupReg = /#([^*]*)/;
        var timesReg = /\*([^#]*)/;
        var groupResult = groupReg.exec(extras);

        if (groupResult) {
          group = groupResult[1] || this.defaultGroup;
        }

        var timesResult = timesReg.exec(extras);

        if (timesResult && timesResult[1]) {
          times = parseInt(timesResult[1]);
        }

        return {
          event: event,
          group: group,
          times: times
        };
      } else {
        return identity;
      }
    }
  }]);

  return HookEvent;
}();

module.exports = HookEvent;
//# sourceMappingURL=index.cjs.js.map
