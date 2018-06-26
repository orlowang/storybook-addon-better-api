/* storybook-addon-better-api version 1.0.0
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
            var o = t[r];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
    };
}(), _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
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
        for (var o = arguments.length, n = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
        var c = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(n)));
        return c.state = {}, c;
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
        for (var o = arguments.length, n = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) n[a - 1] = arguments[a];
        var c = possibleConstructorReturn(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [ this, e ].concat(n)));
        return c.state = {}, c;
    }
    return inherits(t, Component), createClass(t, [ {
        key: "render",
        value: function() {
            var e = this.props, t = e.code, r = e.scope, o = e.story, n = e.comment, a = e.platform;
            return React.createElement("div", {
                style: styles$1.info
            }, React.createElement("h2", {
                style: styles$1.pointer
            }, o, /pc/.test(a) && React.createElement("sup", {
                style: styles$1.sup
            }, React.createElement(Pc, null)), /mobile/.test(a) && React.createElement("sup", {
                style: styles$1.sup
            }, React.createElement(Mobile, null))), React.createElement("h4", {
                style: styles$1.pointer
            }, "Description"), React.createElement("span", null, n), React.createElement(Demo, {
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
        var o = r[e], n = o.defaultValue || {}, a = o.flowType || o.type || "other";
        t[e] = {
            property: e,
            propType: a,
            required: o.required,
            description: o.description,
            defaultValue: n.value
        };
    }), t;
}, propsFromPropTypes = function(e) {
    var t = {};
    return e.propTypes && Object.keys(e.propTypes).forEach(function(r) {
        var o = e.propTypes[r], n = void 0 === o.isRequired, a = e.__docgenInfo && e.__docgenInfo.props && e.__docgenInfo.props[r], c = a ? a.description : null, p = PropTypesMap.get(o) || "other";
        "other" === p && a && a.type && (p = a.type.name), t[r] = {
            property: r,
            propType: p,
            required: n,
            description: c
        };
    }), e.defaultProps && Object.keys(e.defaultProps).forEach(function(r) {
        var o = e.defaultProps[r];
        void 0 !== o && (t[r] || (t[r] = {
            property: r
        }), t[r].defaultValue = o);
    }), t;
};

function getPropDefinitions(e) {
    if (!e.type) 
    // eslint-disable-line
    return null;
    var t = hasDocgen(e.type) ? propsFromDocgen(e.type) : propsFromPropTypes(e.type);
    return Object.values(t);
}

function addInfo(e, t, r) {
    var o = e.kind, n = e.story, a = Object.values(r.scope)[0], c = getPropDefinitions(React.createElement(a, null));
    return addons.getChannel().emit("warmleaf/betterDoc/add_addon", o, n, c), React.createElement(APIDoc, _extends({
        story: n
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

export { APIDoc, setDefaults };
