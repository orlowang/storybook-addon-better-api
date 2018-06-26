/* storybook-addon-better-api version 1.1.0
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

function _interopDefault(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var util = _interopDefault(require("util")), React = require("react"), React__default = _interopDefault(React), reactLive = require("react-live"), PropTypes = _interopDefault(require("prop-types")), commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function unwrapExports(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}

function createCommonjsModule(e, t) {
    return e(t = {
        exports: {}
    }, t.exports), t.exports;
}

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(e) {
    if (null == e) throw TypeError("Can't call method on  " + e);
    return e;
}, _toObject = function(e) {
    return Object(_defined(e));
}, hasOwnProperty = {}.hasOwnProperty, _has = function(e, t) {
    return hasOwnProperty.call(e, t);
}, toString = {}.toString, _cof = function(e) {
    return toString.call(e).slice(8, -1);
}, _iobject = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
    return "String" == _cof(e) ? e.split("") : Object(e);
}, _toIobject = function(e) {
    return _iobject(_defined(e));
}, ceil = Math.ceil, floor = Math.floor, _toInteger = function(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? floor : ceil)(e);
}, min = Math.min, _toLength = function(e) {
    return e > 0 ? min(_toInteger(e), 9007199254740991) : 0;
 // pow(2, 53) - 1 == 9007199254740991
}, max = Math.max, min$1 = Math.min, _toAbsoluteIndex = function(e, t) {
    return (e = _toInteger(e)) < 0 ? max(e + t, 0) : min$1(e, t);
}, _arrayIncludes = function(e) {
    return function(t, r, n) {
        var o, a = _toIobject(t), i = _toLength(a.length), s = _toAbsoluteIndex(n, i);
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (e && r != r) {
            for (;i > s; ) 
            // eslint-disable-next-line no-self-compare
            if ((o = a[s++]) != o) return !0;
            // Array#indexOf ignores holes, Array#includes - not
                } else for (;i > s; s++) if ((e || s in a) && a[s] === r) return e || s || 0;
        return !e && -1;
    };
}, _core = createCommonjsModule(function(e) {
    var t = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = t);
 // eslint-disable-line no-undef
}), _core_1 = _core.version, _global = createCommonjsModule(function(e) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = t);
 // eslint-disable-line no-undef
}), _library = !0, _shared = createCommonjsModule(function(e) {
    var t = _global["__core-js_shared__"] || (_global["__core-js_shared__"] = {});
    (e.exports = function(e, r) {
        return t[e] || (t[e] = void 0 !== r ? r : {});
    })("versions", []).push({
        version: _core.version,
        mode: _library ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    });
}), id = 0, px = Math.random(), _uid = function(e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++id + px).toString(36));
}, shared = _shared("keys"), _sharedKey = function(e) {
    return shared[e] || (shared[e] = _uid(e));
}, arrayIndexOf = _arrayIncludes(!1), IE_PROTO = _sharedKey("IE_PROTO"), _objectKeysInternal = function(e, t) {
    var r, n = _toIobject(e), o = 0, a = [];
    for (r in n) r != IE_PROTO && _has(n, r) && a.push(r);
    // Don't enum bug & hidden keys
        for (;t.length > o; ) _has(n, r = t[o++]) && (~arrayIndexOf(a, r) || a.push(r));
    return a;
}, _enumBugKeys = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), _objectKeys = Object.keys || function(e) {
    return _objectKeysInternal(e, _enumBugKeys);
}, _aFunction = function(e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e;
}, _ctx = function(e, t, r) {
    if (_aFunction(e), void 0 === t) return e;
    switch (r) {
      case 1:
        return function(r) {
            return e.call(t, r);
        };

      case 2:
        return function(r, n) {
            return e.call(t, r, n);
        };

      case 3:
        return function(r, n, o) {
            return e.call(t, r, n, o);
        };
    }
    return function() {
        return e.apply(t, arguments);
    };
}, _isObject = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e;
}, _anObject = function(e) {
    if (!_isObject(e)) throw TypeError(e + " is not an object!");
    return e;
}, _fails = function(e) {
    try {
        return !!e();
    } catch (e) {
        return !0;
    }
}, _descriptors = !_fails(function() {
    return 7 != Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a;
}), document = _global.document, is = _isObject(document) && _isObject(document.createElement), _domCreate = function(e) {
    return is ? document.createElement(e) : {};
}, _ie8DomDefine = !_descriptors && !_fails(function() {
    return 7 != Object.defineProperty(_domCreate("div"), "a", {
        get: function() {
            return 7;
        }
    }).a;
}), _toPrimitive = function(e, t) {
    if (!_isObject(e)) return e;
    var r, n;
    if (t && "function" == typeof (r = e.toString) && !_isObject(n = r.call(e))) return n;
    if ("function" == typeof (r = e.valueOf) && !_isObject(n = r.call(e))) return n;
    if (!t && "function" == typeof (r = e.toString) && !_isObject(n = r.call(e))) return n;
    throw TypeError("Can't convert object to primitive value");
}, dP = Object.defineProperty, f = _descriptors ? Object.defineProperty : function(e, t, r) {
    if (_anObject(e), t = _toPrimitive(t, !0), _anObject(r), _ie8DomDefine) try {
        return dP(e, t, r);
    } catch (e) {/* empty */}
    if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
    return "value" in r && (e[t] = r.value), e;
}, _objectDp = {
    f: f
}, _propertyDesc = function(e, t) {
    return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
    };
}, _hide = _descriptors ? function(e, t, r) {
    return _objectDp.f(e, t, _propertyDesc(1, r));
} : function(e, t, r) {
    return e[t] = r, e;
}, PROTOTYPE = "prototype", $export = function(e, t, r) {
    var n, o, a, i = e & $export.F, s = e & $export.G, c = e & $export.S, u = e & $export.P, l = e & $export.B, f = e & $export.W, p = s ? _core : _core[t] || (_core[t] = {}), d = p[PROTOTYPE], _ = s ? _global : c ? _global[t] : (_global[t] || {})[PROTOTYPE];
    for (n in s && (r = t), r) 
    // contains in native
    (o = !i && _ && void 0 !== _[n]) && _has(p, n) || (
    // export native or passed
    a = o ? _[n] : r[n], 
    // prevent global pollution for namespaces
    p[n] = s && "function" != typeof _[n] ? r[n] : l && o ? _ctx(a, _global) : f && _[n] == a ? function(e) {
        var t = function(t, r, n) {
            if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e();

                  case 1:
                    return new e(t);

                  case 2:
                    return new e(t, r);
                }
                return new e(t, r, n);
            }
            return e.apply(this, arguments);
        };
        return t[PROTOTYPE] = e[PROTOTYPE], t;
        // make static versions for prototype methods
        }(a) : u && "function" == typeof a ? _ctx(Function.call, a) : a, 
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    u && ((p.virtual || (p.virtual = {}))[n] = a, 
    // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
    e & $export.R && d && !d[n] && _hide(d, n, a)));
};

// 7.1.13 ToObject(argument)
// type bitmap
$export.F = 1, // forced
$export.G = 2, // global
$export.S = 4, // static
$export.P = 8, // proto
$export.B = 16, // bind
$export.W = 32, // wrap
$export.U = 64, // safe
$export.R = 128;

// real proto method for `library`
var _export = $export, _objectSap = function(e, t) {
    var r = (_core.Object || {})[e] || Object[e], n = {};
    n[e] = t(r), _export(_export.S + _export.F * _fails(function() {
        r(1);
    }), "Object", n);
};

// most Object methods by ES6 should accept primitives
// 19.1.2.14 Object.keys(O)
_objectSap("keys", function() {
    return function(e) {
        return _objectKeys(_toObject(e));
    };
});

var keys = _core.Object.keys, keys$1 = createCommonjsModule(function(e) {
    e.exports = {
        default: keys,
        __esModule: !0
    };
});

unwrapExports(keys$1);

var classCallCheck = createCommonjsModule(function(e, t) {
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
});

unwrapExports(classCallCheck), 
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, "Object", {
    defineProperty: _objectDp.f
});

var $Object = _core.Object, defineProperty = function(e, t, r) {
    return $Object.defineProperty(e, t, r);
}, defineProperty$1 = createCommonjsModule(function(e) {
    e.exports = {
        default: defineProperty,
        __esModule: !0
    };
});

unwrapExports(defineProperty$1);

var createClass = createCommonjsModule(function(e, t) {
    t.__esModule = !0;
    var r, n = (r = defineProperty$1) && r.__esModule ? r : {
        default: r
    };
    t.default = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                (0, n.default)(e, o.key, o);
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    }();
});

unwrapExports(createClass);

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */
var node = util.deprecate, makeDecorator_1 = createCommonjsModule(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.makeDecorator = void 0;
    var r, n = (r = node) && r.__esModule ? r : {
        default: r
    };
    // Create a decorator that can be used both in the (deprecated) old "hoc" style:
    //   .add('story', decorator(options)(() => <Story />));
    //
    // And in the new, "parameterized" style:
    //   .addDecorator(decorator)
    //   .add('story', () => <Story />, { name: { parameters } });
    //
    // *And* in the older, but not deprecated, "pass options to decorator" style:
    //  .addDecorator(decorator(options))
    t.makeDecorator = function(e) {
        var t = e.name, r = e.parameterName, o = e.wrapper, a = e.skipIfNoParametersOrOptions, i = void 0 !== a && a, s = function(e) {
            return function(t, n) {
                var a = n.parameters && n.parameters[r];
                return a && a.disable ? t(n) : !i || e || a ? o(t, n, {
                    options: e,
                    parameters: a
                }) : t(n);
            };
        };
        return function() {
            for (var e = arguments.length, o = Array(e), a = 0; a < e; a++) o[a] = arguments[a];
            // Used without options as .addDecorator(decorator)
                        return "function" == typeof o[0] ? s().apply(void 0, o) : function() {
                for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                // Used as [.]addDecorator(decorator(options))
                                return a.length > 1 ? s.apply(void 0, o).apply(void 0, a) : (0, 
                n.default)(function(e) {
                    return s.apply(void 0, o)(a[0], e);
                }, "Passing stories directly into " + t + "() is deprecated, instead use addDecorator(" + t + ") and pass options with the '" + r + "' parameter");
                // Used to wrap a story directly .add('story', decorator(options)(() => <Story />))
                //   This is now deprecated:
                        };
        };
    };
});

unwrapExports(makeDecorator_1);

var win, makeDecorator_2 = makeDecorator_1.makeDecorator, window_1 = win = "undefined" != typeof window ? window : void 0 !== commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : {}, _stringAt = function(e) {
    return function(t, r) {
        var n, o, a = String(_defined(t)), i = _toInteger(r), s = a.length;
        return i < 0 || i >= s ? e ? "" : void 0 : (n = a.charCodeAt(i)) < 55296 || n > 56319 || i + 1 === s || (o = a.charCodeAt(i + 1)) < 56320 || o > 57343 ? e ? a.charAt(i) : n : e ? a.slice(i, i + 2) : o - 56320 + (n - 55296 << 10) + 65536;
    };
}, _redefine = _hide, _iterators = {}, _objectDps = _descriptors ? Object.defineProperties : function(e, t) {
    _anObject(e);
    for (var r, n = _objectKeys(t), o = n.length, a = 0; o > a; ) _objectDp.f(e, r = n[a++], t[r]);
    return e;
}, document$1 = _global.document, _html = document$1 && document$1.documentElement, IE_PROTO$1 = _sharedKey("IE_PROTO"), Empty = function() {/* empty */}, PROTOTYPE$1 = "prototype", createDict = function() {
    // Thrash, waste and sodomy: IE GC bug
    var e, t = _domCreate("iframe"), r = _enumBugKeys.length;
    for (t.style.display = "none", _html.appendChild(t), t.src = "javascript:", (// eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), 
    e.close(), createDict = e.F; r--; ) delete createDict[PROTOTYPE$1][_enumBugKeys[r]];
    return createDict();
}, _objectCreate = Object.create || function(e, t) {
    var r;
    return null !== e ? (Empty[PROTOTYPE$1] = _anObject(e), r = new Empty(), Empty[PROTOTYPE$1] = null, 
    // add "__proto__" for Object.getPrototypeOf polyfill
    r[IE_PROTO$1] = e) : r = createDict(), void 0 === t ? r : _objectDps(r, t);
}, _wks = createCommonjsModule(function(e) {
    var t = _shared("wks"), r = _global.Symbol, n = "function" == typeof r;
    (e.exports = function(e) {
        return t[e] || (t[e] = n && r[e] || (n ? r : _uid)("Symbol." + e));
    }).store = t;
}), def = _objectDp.f, TAG = _wks("toStringTag"), _setToStringTag = function(e, t, r) {
    e && !_has(e = r ? e : e.prototype, TAG) && def(e, TAG, {
        configurable: !0,
        value: t
    });
}, IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks("iterator"), function() {
    return this;
});

var _iterCreate = function(e, t, r) {
    e.prototype = _objectCreate(IteratorPrototype, {
        next: _propertyDesc(1, r)
    }), _setToStringTag(e, t + " Iterator");
}, IE_PROTO$2 = _sharedKey("IE_PROTO"), ObjectProto = Object.prototype, _objectGpo = Object.getPrototypeOf || function(e) {
    return e = _toObject(e), _has(e, IE_PROTO$2) ? e[IE_PROTO$2] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ObjectProto : null;
}, ITERATOR = _wks("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values", returnThis = function() {
    return this;
}, _iterDefine = function(e, t, r, n, o, a, i) {
    _iterCreate(r, t, n);
    var s, c, u, l = function(e) {
        if (!BUGGY && e in _) return _[e];
        switch (e) {
          case KEYS:
          case VALUES:
            return function() {
                return new r(this, e);
            };
        }
        return function() {
            return new r(this, e);
        };
    }, f = t + " Iterator", p = o == VALUES, d = !1, _ = e.prototype, y = _[ITERATOR] || _[FF_ITERATOR] || o && _[o], h = y || l(o), m = o ? p ? l("entries") : h : void 0, v = "Array" == t && _.entries || y;
    if (
    // Fix native
    v && (u = _objectGpo(v.call(new e()))) !== Object.prototype && u.next && 
    // Set @@toStringTag to native iterators
    _setToStringTag(u, f, !0), 
    // fix Array#{values, @@iterator}.name in V8 / FF
    p && y && y.name !== VALUES && (d = !0, h = function() {
        return y.call(this);
    }), 
    // Define iterator
    i && (BUGGY || d || !_[ITERATOR]) && _hide(_, ITERATOR, h), 
    // Plug for library
    _iterators[t] = h, _iterators[f] = returnThis, o) if (s = {
        values: p ? h : l(VALUES),
        keys: a ? h : l(KEYS),
        entries: m
    }, i) for (c in s) c in _ || _redefine(_, c, s[c]); else _export(_export.P + _export.F * (BUGGY || d), t, s);
    return s;
}, $at = _stringAt(!0);

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, "String", function(e) {
    this._t = String(e), // target
    this._i = 0;
}, function() {
    var e, t = this._t, r = this._i;
    return r >= t.length ? {
        value: void 0,
        done: !0
    } : (e = $at(t, r), this._i += e.length, {
        value: e,
        done: !1
    });
});

// call something on iterator step with safe closing on error
var _iterCall = function(e, t, r, n) {
    try {
        return n ? t(_anObject(r)[0], r[1]) : t(r);
        // 7.4.6 IteratorClose(iterator, completion)
        } catch (t) {
        var o = e.return;
        throw void 0 !== o && _anObject(o.call(e)), t;
    }
}, ITERATOR$1 = _wks("iterator"), ArrayProto = Array.prototype, _isArrayIter = function(e) {
    return void 0 !== e && (_iterators.Array === e || ArrayProto[ITERATOR$1] === e);
}, _createProperty = function(e, t, r) {
    t in e ? _objectDp.f(e, t, _propertyDesc(0, r)) : e[t] = r;
}, TAG$1 = _wks("toStringTag"), ARG = "Arguments" == _cof(function() {
    return arguments;
}()), tryGet = function(e, t) {
    try {
        return e[t];
    } catch (e) {/* empty */}
}, _classof = function(e) {
    var t, r, n;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = tryGet(t = Object(e), TAG$1)) ? r : ARG ? _cof(t) : "Object" == (n = _cof(t)) && "function" == typeof t.callee ? "Arguments" : n;
}, ITERATOR$2 = _wks("iterator"), core_getIteratorMethod = _core.getIteratorMethod = function(e) {
    if (null != e) return e[ITERATOR$2] || e["@@iterator"] || _iterators[_classof(e)];
}, ITERATOR$3 = _wks("iterator"), SAFE_CLOSING = !1;

// check on default Array iterator
try {
    var riter = [ 7 ][ITERATOR$3]();
    riter.return = function() {
        SAFE_CLOSING = !0;
    };
} catch (e) {/* empty */}

var _iterDetect = function(e, t) {
    if (!t && !SAFE_CLOSING) return !1;
    var r = !1;
    try {
        var n = [ 7 ], o = n[ITERATOR$3]();
        o.next = function() {
            return {
                done: r = !0
            };
        }, n[ITERATOR$3] = function() {
            return o;
        }, e(n);
    } catch (e) {/* empty */}
    return r;
};

_export(_export.S + _export.F * !_iterDetect(function(e) {}), "Array", {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function(e /* , mapfn = undefined, thisArg = undefined */) {
        var t, r, n, o, a = _toObject(e), i = "function" == typeof this ? this : Array, s = arguments.length, c = s > 1 ? arguments[1] : void 0, u = void 0 !== c, l = 0, f = core_getIteratorMethod(a);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (u && (c = _ctx(c, s > 2 ? arguments[2] : void 0, 2)), null == f || i == Array && _isArrayIter(f)) for (r = new i(t = _toLength(a.length)); t > l; l++) _createProperty(r, l, u ? c(a[l], l) : a[l]); else for (o = f.call(a), 
        r = new i(); !(n = o.next()).done; l++) _createProperty(r, l, u ? _iterCall(o, c, [ n.value, l ], !0) : n.value);
        return r.length = l, r;
    }
});

var from = _core.Array.from, from$1 = createCommonjsModule(function(e) {
    e.exports = {
        default: from,
        __esModule: !0
    };
});

unwrapExports(from$1);

var toConsumableArray = createCommonjsModule(function(e, t) {
    t.__esModule = !0;
    var r, n = (r = from$1) && r.__esModule ? r : {
        default: r
    };
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
            return r;
        }
        return (0, n.default)(e);
    };
});

unwrapExports(toConsumableArray);

var dist = createCommonjsModule(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = i(toConsumableArray), n = i(keys$1), o = i(classCallCheck), a = i(createClass);
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    /* eslint no-underscore-dangle: 0 */    var s = function() {
        function e(t) {
            var r = this, n = t.transport;
            (0, o.default)(this, e), this._sender = this._randomId(), this._transport = n, this._transport.setHandler(function(e) {
                return r._handleEvent(e);
            }), this._listeners = {};
        }
        return (0, a.default)(e, [ {
            key: "addListener",
            value: function(e, t) {
                this.on(e, t);
            }
        }, {
            key: "addPeerListener",
            value: function(e, t) {
                var r = t;
                r.ignorePeer = !0, this.on(e, r);
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                var o = {
                    type: e,
                    args: r,
                    from: this._sender
                };
                this._transport.send(o), this._handleEvent(o, !0);
            }
        }, {
            key: "eventNames",
            value: function() {
                return (0, n.default)(this._listeners);
            }
        }, {
            key: "listenerCount",
            value: function(e) {
                var t = this._listeners[e];
                return t ? t.length : 0;
            }
        }, {
            key: "listeners",
            value: function(e) {
                return this._listeners[e];
            }
        }, {
            key: "on",
            value: function(e, t) {
                this._listeners[e] = this._listeners[e] || [], this._listeners[e].push(t);
            }
        }, {
            key: "once",
            value: function(e, t) {
                var r = this._onceListener(e, t);
                this.on(e, r);
            }
        }, {
            key: "prependListener",
            value: function(e, t) {
                this._listeners[e] = this._listeners[e] || [], this._listeners[e].unshift(t);
            }
        }, {
            key: "prependOnceListener",
            value: function(e, t) {
                var r = this._onceListener(e, t);
                this.prependListener(e, r);
            }
        }, {
            key: "removeAllListeners",
            value: function(e) {
                e ? this._listeners[e] && delete this._listeners[e] : this._listeners = {};
            }
        }, {
            key: "removeListener",
            value: function(e, t) {
                var r = this._listeners[e];
                r && (this._listeners[e] = r.filter(function(e) {
                    return e !== t;
                }));
            }
        }, {
            key: "_randomId",
            value: function() {
                // generates a random 13 character string
                return Math.random().toString(16).slice(2);
            }
        }, {
            key: "_handleEvent",
            value: function(e, t) {
                var n = this._listeners[e.type];
                n && (t || e.from !== this._sender) && n.forEach(function(n) {
                    return !(t && n.ignorePeer) && n.apply(void 0, (0, r.default)(e.args));
                });
            }
        }, {
            key: "_onceListener",
            value: function(e, t) {
                var r = this;
                return function n() {
                    return r.removeListener(e, n), t.apply(void 0, arguments);
                };
            }
        } ]), e;
    }();
    t.default = s;
});

unwrapExports(dist);

var storybookChannelMock = createCommonjsModule(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return new n.default({
            transport: {
                setHandler: function() {},
                send: function() {}
            }
        });
    };
    var r, n = (r = dist) && r.__esModule ? r : {
        default: r
    };
});

unwrapExports(storybookChannelMock);

var dist$1 = createCommonjsModule(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AddonStore = t.makeDecorator = t.mockChannel = void 0;
    var r = s(keys$1), n = s(classCallCheck), o = s(createClass);
    Object.defineProperty(t, "makeDecorator", {
        enumerable: !0,
        get: function() {
            return makeDecorator_1.makeDecorator;
        }
    });
    var a = s(window_1), i = s(storybookChannelMock);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    // Resolves to window in browser and to global in node
        t.mockChannel = i.default;
    var c = t.AddonStore = function() {
        function e() {
            (0, n.default)(this, e), this.loaders = {}, this.panels = {}, this.channel = null, 
            this.preview = null, this.database = null;
        }
        return (0, o.default)(e, [ {
            key: "getChannel",
            value: function() {
                // this.channel should get overwritten by setChannel. If it wasn't called (e.g. in non-browser environment), throw.
                if (!this.channel) throw new Error("Accessing nonexistent addons channel, see https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel");
                return this.channel;
            }
        }, {
            key: "hasChannel",
            value: function() {
                return Boolean(this.channel);
            }
        }, {
            key: "setChannel",
            value: function(e) {
                this.channel = e;
            }
        }, {
            key: "getPreview",
            value: function() {
                return this.preview;
            }
        }, {
            key: "setPreview",
            value: function(e) {
                this.preview = e;
            }
        }, {
            key: "getDatabase",
            value: function() {
                return this.database;
            }
        }, {
            key: "setDatabase",
            value: function(e) {
                this.database = e;
            }
        }, {
            key: "getPanels",
            value: function() {
                return this.panels;
            }
        }, {
            key: "addPanel",
            value: function(e, t) {
                this.panels[e] = t;
            }
        }, {
            key: "register",
            value: function(e, t) {
                this.loaders[e] = t;
            }
        }, {
            key: "loadAddons",
            value: function(e) {
                var t = this;
                (0, r.default)(this.loaders).map(function(e) {
                    return t.loaders[e];
                }).forEach(function(t) {
                    return t(e);
                });
            }
        } ]), e;
    }(), u = "__STORYBOOK_ADDONS";
    // Enforce addons store to be a singleton
        t.default = (a.default[u] || (a.default[u] = new c()), a.default[u]);
}), addons = unwrapExports(dist$1), dist_1 = dist$1.AddonStore, dist_2 = dist$1.makeDecorator, dist_3 = dist$1.mockChannel, classCallCheck$2 = function(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}, createClass$2 = function() {
    function e(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(e, n.key, n);
        }
    }
    return function(t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
    };
}(), _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
}, inherits = function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}, possibleConstructorReturn = function(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}, styles = {
    preview: {
        minHeight: "100px",
        padding: "20px",
        border: "1px solid #dee6ed",
        boxShadow: "0 0 10px 2px #e5ebf1 inset",
        background: "linear-gradient(45deg, #eff2f6 25%, transparent 25%, transparent 75%, #eff2f6 75%, #eff2f6 0), linear-gradient(45deg, #eff2f6 25%, transparent 5%, transparent 75%, #eff2f6 75%, #eff2f6 0), #fff",
        backgroundPosition: "0 0, 10px 10px",
        backgroundSize: "20px 20px",
        backgroundClip: "border-box",
        backgroundOrigin: "padding-box"
    },
    editor: {
        overflow: "scroll"
    },
    pointer: {
        cursor: "default"
    }
}, Demo = function(e) {
    function t(e) {
        var r;
        classCallCheck$2(this, t);
        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
        var i = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(o)));
        return i.state = {}, i;
    }
    return inherits(t, e), createClass$2(t, [ {
        key: "render",
        value: function() {
            var e = this.props, t = e.code, r = e.scope;
            return React__default.createElement("div", null, React__default.createElement("h4", {
                style: styles.pointer
            }, "Demo"), React__default.createElement(reactLive.LiveProvider, {
                code: t,
                scope: r
            }, React__default.createElement(reactLive.LivePreview, {
                style: styles.preview
            }), React__default.createElement(reactLive.LiveEditor, {
                style: styles.editor
            }), React__default.createElement(reactLive.LiveError, null)));
        }
    } ]), t;
}(React.Component), Pc = function() {
    return React__default.createElement("svg", {
        viewBox: "0 0 65.53 46.2",
        width: "1.4rem"
    }, React__default.createElement("g", null, React__default.createElement("path", {
        fill: "#455a64",
        d: "M10.11,0h45.1a2.32,2.32,0,0,1,2.32,2.32l.21,31.31H8L7.79,2.32A2.32,2.32,0,0,1,10.11,0Z"
    }), React__default.createElement("rect", {
        fill: "#bbdefb",
        x: "11.1",
        y: "3.04",
        width: "43.34",
        height: "27.55"
    }), React__default.createElement("polygon", {
        fill: "#cfd8dc",
        points: "8.11 33.63 0 42.74 0 46.2 65.53 46.2 65.53 42.47 57.85 33.63 8.11 33.63"
    }), React__default.createElement("polygon", {
        fill: "#546e7a",
        points: "11.1 34.95 54.44 34.95 57.64 39.29 7.9 39.29 11.1 34.95"
    }), React__default.createElement("polygon", {
        fill: "#90a4ae",
        points: "26.66 39.29 38.51 39.29 40.05 41.97 25.49 41.97 26.66 39.29"
    })));
}, Mobile = function() {
    return React__default.createElement("svg", {
        viewBox: "0 0 37.59 62.49",
        width: ".6rem"
    }, React__default.createElement("g", null, React__default.createElement("rect", {
        fill: "#e38939",
        width: "37.59",
        height: "62.49",
        rx: "4.53",
        ry: "4.53"
    }), React__default.createElement("rect", {
        fill: "#fff3e0",
        x: "4.9",
        y: "5.42",
        width: "27.79",
        height: "48.46",
        rx: "1.6",
        ry: "1.6"
    }), React__default.createElement("circle", {
        fill: "#a6642a",
        cx: "18.79",
        cy: "58.14",
        r: "2.24"
    })));
}, styles$1 = {
    sup: {
        paddingLeft: "10px"
    },
    info: {
        paddingLeft: "20px",
        paddingRight: "20px"
    },
    pointer: {
        cursor: "default"
    }
}, APIDoc = function(e) {
    function t(e) {
        var r;
        classCallCheck$2(this, t);
        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
        var i = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(o)));
        return i.state = {}, i;
    }
    return inherits(t, e), createClass$2(t, [ {
        key: "render",
        value: function() {
            var e = this.props, t = e.code, r = e.scope, n = e.story, o = e.comment, a = e.platform;
            return React__default.createElement("div", {
                style: styles$1.info
            }, React__default.createElement("h2", {
                style: styles$1.pointer
            }, n, /pc/.test(a) && React__default.createElement("sup", {
                style: styles$1.sup
            }, React__default.createElement(Pc, null)), /mobile/.test(a) && React__default.createElement("sup", {
                style: styles$1.sup
            }, React__default.createElement(Mobile, null))), React__default.createElement("h4", {
                style: styles$1.pointer
            }, "Description"), React__default.createElement("span", null, o), React__default.createElement(Demo, {
                code: t,
                scope: r
            }), React__default.createElement("h4", {
                style: styles$1.pointer
            }, "More Example"));
        }
    } ]), t;
}(React.Component), PropTypesMap = new Map();

Object.keys(PropTypes).forEach(function(e) {
    var t = PropTypes[e];
    PropTypesMap.set(t, e), PropTypesMap.set(t.isRequired, e);
});

var isNotEmpty = function(e) {
    return e && e.props && Object.keys(e.props).length > 0;
}, hasDocgen = function(e) {
    return isNotEmpty(e.__docgenInfo);
}, propsFromDocgen = function(e) {
    var t = {}, r = e.__docgenInfo.props;
    return Object.keys(r).forEach(function(e) {
        var n = r[e], o = n.defaultValue || {}, a = n.flowType || n.type || "other";
        t[e] = {
            property: e,
            propType: a,
            required: n.required,
            description: n.description,
            defaultValue: o.value
        };
    }), t;
}, propsFromPropTypes = function(e) {
    var t = {};
    return e.propTypes && Object.keys(e.propTypes).forEach(function(r) {
        var n = e.propTypes[r], o = void 0 === n.isRequired, a = e.__docgenInfo && e.__docgenInfo.props && e.__docgenInfo.props[r], i = a ? a.description : null, s = PropTypesMap.get(n) || "other";
        "other" === s && a && a.type && (s = a.type.name), t[r] = {
            property: r,
            propType: s,
            required: o,
            description: i
        };
    }), e.defaultProps && Object.keys(e.defaultProps).forEach(function(r) {
        var n = e.defaultProps[r];
        void 0 !== n && (t[r] || (t[r] = {
            property: r
        }), t[r].defaultValue = n);
    }), t;
};

function getPropDefinitions(e) {
    if (!e.type) 
    // eslint-disable-line
    return null;
    var t = hasDocgen(e.type) ? propsFromDocgen(e.type) : propsFromPropTypes(e.type);
    return Object.values(t);
}

var APIPanel = function(e) {
    function t(e) {
        var r;
        classCallCheck$2(this, t);
        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
        var i = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(o)));
        return i.setCurrent = function(e, t) {
            i.setState({
                current: {
                    kind: e,
                    story: t
                }
            });
        }, i.onAddDoc = function(e, t, r) {
            var n = i.state;
            void 0 === n[e] && (n[e] = {}), n[e][t] = r, i.setState(n);
        }, i._propTypeRender = function(e) {
            if ("string" == typeof e) return React__default.createElement("span", {
                style: styles$2.type
            }, e);
            switch (e.name) {
              case "union":
                return e.value.map(function(t, r) {
                    return [ React__default.createElement("span", {
                        key: t.name,
                        style: styles$2.type
                    }, t.name), r < e.value.length - 1 && " | " ];
                });

              case "string":
              case "func":
              default:
                return React__default.createElement("span", {
                    style: styles$2.type
                }, e.name);
            }
        }, e.ob({
            next: function(e) {
                return "API" === e ? i.onAddDoc : i.setCurrent;
            }
        }), i.state = {}, i.stopListeningOnStory = function() {
            return i.setState({});
        }, i;
    }
    return inherits(t, e), createClass$2(t, [ {
        key: "render",
        value: function() {
            var e = this;
            if (void 0 !== this.state.current && void 0 !== this.state[this.state.current.kind]) {
                var t = this.state.current, r = this.state[t.kind][t.story], n = [], o = [];
                if (!r) return null;
                for (var a = 0; a < r.length; a += 1) {
                    var i = r[a];
                    "func" === i.propType.name ? o.push(i) : n.push(i);
                }
                return React__default.createElement("div", {
                    style: styles$2.container
                }, n.length > 0 && [ React__default.createElement("h4", {
                    key: "props",
                    style: styles$2.title
                }, "Props"), n.map(function(t, r) {
                    return React__default.createElement("div", {
                        key: "item-" + r,
                        style: styles$2.item
                    }, React__default.createElement("span", {
                        style: styles$2.prop
                    }, t.property), React__default.createElement("span", {
                        style: styles$2.colon
                    }, ":"), e._propTypeRender(t.propType), React__default.createElement("span", {
                        style: styles$2.sign
                    }, t.required && "!"), t.defaultValue && React__default.createElement("span", {
                        style: {
                            paddingLeft: "4px"
                        }
                    }, "(default: ", React__default.createElement("span", {
                        style: {
                            fontWeight: 500
                        }
                    }, t.defaultValue), ")"), React__default.createElement("span", null, t.description));
                }) ], o.length > 0 && [ React__default.createElement("h4", {
                    key: "props",
                    style: styles$2.title
                }, "Method"), o.map(function(e, t) {
                    return React__default.createElement("div", {
                        key: "item-" + t,
                        style: styles$2.item
                    }, React__default.createElement("span", {
                        style: styles$2.prop
                    }, e.property), React__default.createElement("span", {
                        style: styles$2.sign
                    }, e.required && "!"), e.defaultValue && React__default.createElement("span", {
                        style: {
                            paddingLeft: "4px"
                        }
                    }, "(default: ", e.defaultValue, ")"), React__default.createElement("span", null, e.description));
                }) ]);
            }
            return "No API found!";
        }
    } ]), t;
}(React.Component), styles$2 = {
    container: {
        flex: 1,
        padding: "10px",
        position: "relative"
    },
    btn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        border: "none",
        borderTop: "solid 1px rgba(0, 0, 0, 0.2)",
        borderLeft: "solid 1px rgba(0, 0, 0, 0.2)",
        background: "rgba(255, 255, 255, 0.5)",
        padding: "5px 10px",
        borderRadius: "4px 0 0 0",
        color: "rgba(0, 0, 0, 0.5)",
        textTransform: "uppercase",
        outline: "none"
    },
    pre: {
        flex: 1
    },
    title: {
        marginTop: 0,
        marginBottom: "10px"
    },
    type: {
        color: "#45c9b0"
    },
    prop: {
        color: "#569cd6"
    },
    item: {
        color: "#555",
        paddingBottom: "4px"
    },
    colon: {
        marginRight: "4px"
    },
    sign: {
        color: "#df4453"
    }
}, Observable = function(e, t) {
    return function(r) {
        e.on("warmleaf/betterDoc/add_addon", r.next("API")), t.onStory(r.next("current"));
    };
};

function register() {
    addons.register("warmleaf/betterDoc", function(e) {
        var t = Observable(addons.getChannel(), e);
        addons.addPanel("warmleaf/betterDoc/panel", {
            title: "API",
            render: function() {
                return React__default.createElement(APIPanel, {
                    ob: t
                });
            }
        });
    });
}

function addInfo(e, t, r) {
    var n = e.kind, o = e.story, a = Object.values(r.scope)[0], i = getPropDefinitions(React__default.createElement(a, null));
    return addons.getChannel().emit("warmleaf/betterDoc/add_addon", n, o, i), React__default.createElement(APIDoc, _extends({
        story: o
    }, r));
}

var index$1 = {
    addAPIDoc: function(e, t, r) {
        return this.add(e, function(e) {
            return addInfo(e, r, t);
        });
    }
};

function setDefaults(e) {
    return Object.assign(defaultOptions, e);
}

exports.APIDoc = APIDoc, exports.default = index$1, exports.setDefaults = setDefaults, 
exports.register = register;
