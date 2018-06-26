/* storybook-addon-better-api version 1.1.0
 *
 * Copyright (c) 2013-present, orlo wang <ow.cc@outlook.com>
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from "react";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import PropTypes from "prop-types";

import addons from "@storybook/addons";

var classCallCheck = function(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}, createClass = function() {
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
        classCallCheck(this, t);
        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
        var s = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(o)));
        return s.state = {}, s;
    }
    return inherits(t, Component), createClass(t, [ {
        key: "render",
        value: function() {
            var e = this.props, t = e.code, r = e.scope;
            return React.createElement("div", null, React.createElement("h4", {
                style: styles.pointer
            }, "Demo"), React.createElement(LiveProvider, {
                code: t,
                scope: r
            }, React.createElement(LivePreview, {
                style: styles.preview
            }), React.createElement(LiveEditor, {
                style: styles.editor
            }), React.createElement(LiveError, null)));
        }
    } ]), t;
}(), Pc = function() {
    return React.createElement("svg", {
        viewBox: "0 0 65.53 46.2",
        width: "1.4rem"
    }, React.createElement("g", null, React.createElement("path", {
        fill: "#455a64",
        d: "M10.11,0h45.1a2.32,2.32,0,0,1,2.32,2.32l.21,31.31H8L7.79,2.32A2.32,2.32,0,0,1,10.11,0Z"
    }), React.createElement("rect", {
        fill: "#bbdefb",
        x: "11.1",
        y: "3.04",
        width: "43.34",
        height: "27.55"
    }), React.createElement("polygon", {
        fill: "#cfd8dc",
        points: "8.11 33.63 0 42.74 0 46.2 65.53 46.2 65.53 42.47 57.85 33.63 8.11 33.63"
    }), React.createElement("polygon", {
        fill: "#546e7a",
        points: "11.1 34.95 54.44 34.95 57.64 39.29 7.9 39.29 11.1 34.95"
    }), React.createElement("polygon", {
        fill: "#90a4ae",
        points: "26.66 39.29 38.51 39.29 40.05 41.97 25.49 41.97 26.66 39.29"
    })));
}, Mobile = function() {
    return React.createElement("svg", {
        viewBox: "0 0 37.59 62.49",
        width: ".6rem"
    }, React.createElement("g", null, React.createElement("rect", {
        fill: "#e38939",
        width: "37.59",
        height: "62.49",
        rx: "4.53",
        ry: "4.53"
    }), React.createElement("rect", {
        fill: "#fff3e0",
        x: "4.9",
        y: "5.42",
        width: "27.79",
        height: "48.46",
        rx: "1.6",
        ry: "1.6"
    }), React.createElement("circle", {
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
        classCallCheck(this, t);
        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
        var s = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(o)));
        return s.state = {}, s;
    }
    return inherits(t, Component), createClass(t, [ {
        key: "render",
        value: function() {
            var e = this.props, t = e.code, r = e.scope, n = e.story, o = e.comment, a = e.platform;
            return React.createElement("div", {
                style: styles$1.info
            }, React.createElement("h2", {
                style: styles$1.pointer
            }, n, /pc/.test(a) && React.createElement("sup", {
                style: styles$1.sup
            }, React.createElement(Pc, null)), /mobile/.test(a) && React.createElement("sup", {
                style: styles$1.sup
            }, React.createElement(Mobile, null))), React.createElement("h4", {
                style: styles$1.pointer
            }, "Description"), React.createElement("span", null, o), React.createElement(Demo, {
                code: t,
                scope: r
            }), React.createElement("h4", {
                style: styles$1.pointer
            }, "More Example"));
        }
    } ]), t;
}(), PropTypesMap = new Map();

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
        var n = e.propTypes[r], o = void 0 === n.isRequired, a = e.__docgenInfo && e.__docgenInfo.props && e.__docgenInfo.props[r], s = a ? a.description : null, c = PropTypesMap.get(n) || "other";
        "other" === c && a && a.type && (c = a.type.name), t[r] = {
            property: r,
            propType: c,
            required: o,
            description: s
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
        classCallCheck(this, t);
        for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
        var s = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(o)));
        return s.setCurrent = function(e, t) {
            s.setState({
                current: {
                    kind: e,
                    story: t
                }
            });
        }, s.onAddDoc = function(e, t, r) {
            var n = s.state;
            void 0 === n[e] && (n[e] = {}), n[e][t] = r, s.setState(n);
        }, s._propTypeRender = function(e) {
            if ("string" == typeof e) return React.createElement("span", {
                style: styles$2.type
            }, e);
            switch (e.name) {
              case "union":
                return e.value.map(function(t, r) {
                    return [ React.createElement("span", {
                        key: t.name,
                        style: styles$2.type
                    }, t.name), r < e.value.length - 1 && " | " ];
                });

              case "string":
              case "func":
              default:
                return React.createElement("span", {
                    style: styles$2.type
                }, e.name);
            }
        }, e.ob({
            next: function(e) {
                return "API" === e ? s.onAddDoc : s.setCurrent;
            }
        }), s.state = {}, s.stopListeningOnStory = function() {
            return s.setState({});
        }, s;
    }
    return inherits(t, Component), createClass(t, [ {
        key: "render",
        value: function() {
            var e = this;
            if (void 0 !== this.state.current && void 0 !== this.state[this.state.current.kind]) {
                var t = this.state.current, r = this.state[t.kind][t.story], n = [], o = [];
                if (!r) return null;
                for (var a = 0; a < r.length; a += 1) {
                    var s = r[a];
                    "func" === s.propType.name ? o.push(s) : n.push(s);
                }
                return React.createElement("div", {
                    style: styles$2.container
                }, n.length > 0 && [ React.createElement("h4", {
                    key: "props",
                    style: styles$2.title
                }, "Props"), n.map(function(t, r) {
                    return React.createElement("div", {
                        key: "item-" + r,
                        style: styles$2.item
                    }, React.createElement("span", {
                        style: styles$2.prop
                    }, t.property), React.createElement("span", {
                        style: styles$2.colon
                    }, ":"), e._propTypeRender(t.propType), React.createElement("span", {
                        style: styles$2.sign
                    }, t.required && "!"), t.defaultValue && React.createElement("span", {
                        style: {
                            paddingLeft: "4px"
                        }
                    }, "(default: ", React.createElement("span", {
                        style: {
                            fontWeight: 500
                        }
                    }, t.defaultValue), ")"), React.createElement("span", null, t.description));
                }) ], o.length > 0 && [ React.createElement("h4", {
                    key: "props",
                    style: styles$2.title
                }, "Method"), o.map(function(e, t) {
                    return React.createElement("div", {
                        key: "item-" + t,
                        style: styles$2.item
                    }, React.createElement("span", {
                        style: styles$2.prop
                    }, e.property), React.createElement("span", {
                        style: styles$2.sign
                    }, e.required && "!"), e.defaultValue && React.createElement("span", {
                        style: {
                            paddingLeft: "4px"
                        }
                    }, "(default: ", e.defaultValue, ")"), React.createElement("span", null, e.description));
                }) ]);
            }
            return "No API found!";
        }
    } ]), t;
}(), styles$2 = {
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
                return React.createElement(APIPanel, {
                    ob: t
                });
            }
        });
    });
}

function addInfo(e, t, r) {
    var n = e.kind, o = e.story, a = Object.values(r.scope)[0], s = getPropDefinitions(React.createElement(a, null));
    return addons.getChannel().emit("warmleaf/betterDoc/add_addon", n, o, s), React.createElement(APIDoc, _extends({
        story: o
    }, r));
}

var index = {
    addAPIDoc: function(e, t, r) {
        return this.add(e, function(e) {
            return addInfo(e, r, t);
        });
    }
};

function setDefaults(e) {
    return Object.assign(defaultOptions, e);
}

export default index;

export { APIDoc, setDefaults, register };
