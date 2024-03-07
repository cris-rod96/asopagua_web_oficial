! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 5)
}([function (e, t) {
   var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function (e, t, n) {
    var r = n(10),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    e.exports = i
}, function (e, t, n) {
    var r = n(2).Symbol;
    e.exports = r
}, function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    ! function (t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";
        var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            l = i.flat ? function (e) {
                return i.flat.call(e)
            } : function (e) {
                return i.concat.apply([], e)
            },
            u = i.push,
            c = i.indexOf,
            f = {},
            d = f.toString,
            p = f.hasOwnProperty,
            h = p.toString,
            g = h.call(Object),
            m = {},
            y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            v = function (e) {
                return null != e && e === e.window
            },
            b = n.document,
            x = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function w(e, t, n) {
            var r, o, i = (n = n || b).createElement("script");
            if (i.text = e, t)
                for (r in x)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i)
        }

        function k(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e
        }
        var T = function (e, t) {
            return new T.fn.init(e, t)
        };

        function C(e) {
            var t = !!e && "length" in e && e.length,
                n = k(e);
            return !y(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        T.fn = T.prototype = {
            jquery: "3.5.1",
            constructor: T,
            length: 0,
            toArray: function () {
                return s.call(this)
            },
            get: function (e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function (e) {
                return T.each(this, e)
            },
            map: function (e) {
                return this.pushStack(T.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function () {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            even: function () {
                return this.pushStack(T.grep(this, function (e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function () {
                return this.pushStack(T.grep(this, function (e, t) {
                    return t % 2
                }))
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: i.sort,
            splice: i.splice
        }, T.extend = T.fn.extend = function () {
            var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (u && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || T.isPlainObject(n) ? n : {}, o = !1, a[t] = T.extend(u, i, r)) : void 0 !== r && (a[t] = r));
            return a
        }, T.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof (n = p.call(t, "constructor") && t.constructor) && h.call(n) === g)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function (e, t, n) {
                w(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function (e, t) {
                var n, r = 0;
                if (C(e))
                    for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
                return e.length = o, e
            },
            grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
                return r
            },
            map: function (e, t, n) {
                var r, o, i = 0,
                    a = [];
                if (C(e))
                    for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
                else
                    for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return l(a)
            },
            guid: 1,
            support: m
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = i[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        });
        var _ =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            function (e) {
                var t, n, r, o, i, a, s, l, u, c, f, d, p, h, g, m, y, v, b, x = "sizzle" + 1 * new Date,
                    w = e.document,
                    k = 0,
                    T = 0,
                    C = le(),
                    _ = le(),
                    S = le(),
                    E = le(),
                    D = function (e, t) {
                        return e === t && (f = !0), 0
                    },
                    j = {}.hasOwnProperty,
                    A = [],
                    L = A.pop,
                    N = A.push,
                    O = A.push,
                    q = A.slice,
                    P = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    J = "[\\x20\\t\\r\\n\\f]",
                    H = "(?:\\\\[\\da-fA-F]{1,6}" + J + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    R = "\\[" + J + "*(" + H + ")(?:" + J + "*([*^$|!~]?=)" + J + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + J + "*\\]",
                    B = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    M = new RegExp(J + "+", "g"),
                    F = new RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g"),
                    W = new RegExp("^" + J + "*," + J + "*"),
                    $ = new RegExp("^" + J + "*([>+~]|" + J + ")" + J + "*"),
                    U = new RegExp(J + "|>"),
                    z = new RegExp(B),
                    G = new RegExp("^" + H + "$"),
                    X = {
                        ID: new RegExp("^#(" + H + ")"),
                        CLASS: new RegExp("^\\.(" + H + ")"),
                        TAG: new RegExp("^(" + H + "|[*])"),
                        ATTR: new RegExp("^" + R),
                        PSEUDO: new RegExp("^" + B),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
                    },
                    V = /HTML$/i,
                    Y = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + J + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function (e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function (e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function () {
                        d()
                    },
                    ae = xe(function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    O.apply(A = q.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                } catch (e) {
                    O = {
                        apply: A.length ? function (e, t) {
                            N.apply(e, q.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(e, t, r, o) {
                    var i, s, u, c, f, h, y, v = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                    if (!o && (d(t), t = t || p, g)) {
                        if (11 !== w && (f = Z.exec(e)))
                            if (i = f[1]) {
                                if (9 === w) {
                                    if (!(u = t.getElementById(i))) return r;
                                    if (u.id === i) return r.push(u), r
                                } else if (v && (u = v.getElementById(i)) && b(t, u) && u.id === i) return r.push(u), r
                            } else {
                                if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(i)), r
                            } if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (y = e, v = t, 1 === w && (U.test(e) || $.test(e))) {
                                for ((v = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = x)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                                y = h.join(",")
                            }
                            try {
                                return O.apply(r, v.querySelectorAll(y)), r
                            } catch (t) {
                                E(e, !0)
                            } finally {
                                c === x && t.removeAttribute("id")
                            }
                        }
                    }
                    return l(e.replace(F, "$1"), t, r, o)
                }

                function le() {
                    var e = [];
                    return function t(n, o) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o
                    }
                }

                function ue(e) {
                    return e[x] = !0, e
                }

                function ce(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function fe(e, t) {
                    for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
                }

                function de(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function pe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function ge(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function me(e) {
                    return ue(function (t) {
                        return t = +t, ue(function (n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }

                function ye(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, i = se.isXML = function (e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !V.test(t || n && n.nodeName || "HTML")
                    }, d = se.setDocument = function (e) {
                        var t, o, a = e ? e.ownerDocument || e : w;
                        return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.scope = ce(function (e) {
                            return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }), n.attributes = ce(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = ce(function (e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = K.test(p.getElementsByClassName), n.getById = ce(function (e) {
                            return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length
                        }), n.getById ? (r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, r, o, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, r = [],
                                o = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, y = [], m = [], (n.qsa = K.test(p.querySelectorAll)) && (ce(function (e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + J + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + J + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + J + "*name" + J + "*=" + J + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                        }), ce(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + J + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (n.matchesSelector = K.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
                            n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), y.push("!=", B)
                        }), m = m.length && new RegExp(m.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, D = t ? function (e, t) {
                            if (e === t) return f = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && b(w, e) ? -1 : t == p || t.ownerDocument == w && b(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return f = !0, 0;
                            var n, r = 0,
                                o = e.parentNode,
                                i = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!o || !i) return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : c ? P(c, e) - P(c, t) : 0;
                            if (o === i) return de(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                        }, p) : p
                    }, se.matches = function (e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function (e, t) {
                        if (d(e), n.matchesSelector && g && !E[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) try {
                            var r = v.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            E(t, !0)
                        }
                        return se(t, p, null, [e]).length > 0
                    }, se.contains = function (e, t) {
                        return (e.ownerDocument || e) != p && d(e), b(e, t)
                    }, se.attr = function (e, t) {
                        (e.ownerDocument || e) != p && d(e);
                        var o = r.attrHandle[t.toLowerCase()],
                            i = o && j.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                        return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, se.escape = function (e) {
                        return (e + "").replace(re, oe)
                    }, se.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function (e) {
                        var t, r = [],
                            o = 0,
                            i = 0;
                        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                            for (; t = e[i++];) t === e[i] && (o = r.push(i));
                            for (; o--;) e.splice(r[o], 1)
                        }
                        return c = null, e
                    }, o = se.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += o(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = C[e + " "];
                                return t || (t = new RegExp("(^|" + J + ")" + e + "(" + J + "|$)")) && C(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var o = se.attr(r, e);
                                    return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(M, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function (e, t, n, r, o) {
                                var i = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === o ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, l) {
                                    var u, c, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        y = s && t.nodeName.toLowerCase(),
                                        v = !l && !s,
                                        b = !1;
                                    if (m) {
                                        if (i) {
                                            for (; g;) {
                                                for (d = t; d = d[g];)
                                                    if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                            for (b = (p = (u = (c = (f = (d = m)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && u[1]) && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                                if (1 === d.nodeType && ++b && d === t) {
                                                    c[e] = [k, p, b];
                                                    break
                                                }
                                        } else if (v && (b = p = (u = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === k && u[1]), !1 === b)
                                            for (;
                                                (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++b || (v && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [k, b]), d !== t)););
                                        return (b -= o) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function (e, t) {
                                var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
                                    for (var r, i = o(e, t), a = i.length; a--;) e[r = P(e, i[a])] = !(n[r] = i[a])
                                }) : function (e) {
                                    return o(e, 0, n)
                                }) : o
                            }
                        },
                        pseudos: {
                            not: ue(function (e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(F, "$1"));
                                return r[x] ? ue(function (e, t, n, o) {
                                    for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                                }) : function (e, o, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: ue(function (e) {
                                return function (t) {
                                    return se(e, t).length > 0
                                }
                            }),
                            contains: ue(function (e) {
                                return e = e.replace(te, ne),
                                    function (t) {
                                        return (t.textContent || o(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: ue(function (e) {
                                return G.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function (t) {
                                        var n;
                                        do {
                                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function (e) {
                                return e === h
                            },
                            focus: function (e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function (e) {
                                return Q.test(e.nodeName)
                            },
                            input: function (e) {
                                return Y.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: me(function () {
                                return [0]
                            }),
                            last: me(function (e, t) {
                                return [t - 1]
                            }),
                            eq: me(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: me(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: me(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: me(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: me(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = pe(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function ve() {}

                function be(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function xe(e, t, n) {
                    var r = t.dir,
                        o = t.next,
                        i = o || r,
                        a = n && "parentNode" === i,
                        s = T++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, o);
                        return !1
                    } : function (t, n, l) {
                        var u, c, f, d = [k, s];
                        if (l) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (c = (f = t[x] || (t[x] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((u = c[i]) && u[0] === k && u[1] === s) return d[2] = u[2];
                                        if (c[i] = d, d[2] = e(t, n, l)) return !0
                                    } return !1
                    }
                }

                function we(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function ke(e, t, n, r, o) {
                    for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), u && t.push(s)));
                    return a
                }

                function Te(e, t, n, r, o, i) {
                    return r && !r[x] && (r = Te(r)), o && !o[x] && (o = Te(o, i)), ue(function (i, a, s, l) {
                        var u, c, f, d = [],
                            p = [],
                            h = a.length,
                            g = i || function (e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !i && t ? g : ke(g, d, e, s, l),
                            y = n ? o || (i ? e : h || r) ? [] : a : m;
                        if (n && n(m, y, s, l), r)
                            for (u = ke(y, p), r(u, [], s, l), c = u.length; c--;)(f = u[c]) && (y[p[c]] = !(m[p[c]] = f));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], c = y.length; c--;)(f = y[c]) && u.push(m[c] = f);
                                    o(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(f = y[c]) && (u = o ? P(i, f) : d[c]) > -1 && (i[u] = !(a[u] = f))
                            }
                        } else y = ke(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : O.apply(a, y)
                    })
                }

                function Ce(e) {
                    for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = xe(function (e) {
                            return e === t
                        }, s, !0), f = xe(function (e) {
                            return P(t, e) > -1
                        }, s, !0), d = [function (e, n, r) {
                            var o = !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return t = null, o
                        }]; l < i; l++)
                        if (n = r.relative[e[l].type]) d = [xe(we(d), n)];
                        else {
                            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[x]) {
                                for (o = ++l; o < i && !r.relative[e[o].type]; o++);
                                return Te(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(F, "$1"), n, l < o && Ce(e.slice(l, o)), o < i && Ce(e = e.slice(o)), o < i && be(e))
                            }
                            d.push(n)
                        } return we(d)
                }
                return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, a = se.tokenize = function (e, t) {
                    var n, o, i, a, s, l, u, c = _[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = r.preFilter; s;) {
                        for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(i = [])), n = !1, (o = $.exec(s)) && (n = o.shift(), i.push({
                                value: n,
                                type: o[0].replace(F, " ")
                            }), s = s.slice(n.length)), r.filter) !(o = X[a].exec(s)) || u[a] && !(o = u[a](o)) || (n = o.shift(), i.push({
                            value: n,
                            type: a,
                            matches: o
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? se.error(e) : _(e, l).slice(0)
                }, s = se.compile = function (e, t) {
                    var n, o = [],
                        i = [],
                        s = S[e + " "];
                    if (!s) {
                        for (t || (t = a(e)), n = t.length; n--;)(s = Ce(t[n]))[x] ? o.push(s) : i.push(s);
                        (s = S(e, function (e, t) {
                            var n = t.length > 0,
                                o = e.length > 0,
                                i = function (i, a, s, l, c) {
                                    var f, h, m, y = 0,
                                        v = "0",
                                        b = i && [],
                                        x = [],
                                        w = u,
                                        T = i || o && r.find.TAG("*", c),
                                        C = k += null == w ? 1 : Math.random() || .1,
                                        _ = T.length;
                                    for (c && (u = a == p || a || c); v !== _ && null != (f = T[v]); v++) {
                                        if (o && f) {
                                            for (h = 0, a || f.ownerDocument == p || (d(f), s = !g); m = e[h++];)
                                                if (m(f, a || p, s)) {
                                                    l.push(f);
                                                    break
                                                } c && (k = C)
                                        }
                                        n && ((f = !m && f) && y--, i && b.push(f))
                                    }
                                    if (y += v, n && v !== y) {
                                        for (h = 0; m = t[h++];) m(b, x, a, s);
                                        if (i) {
                                            if (y > 0)
                                                for (; v--;) b[v] || x[v] || (x[v] = L.call(l));
                                            x = ke(x)
                                        }
                                        O.apply(l, x), c && !i && x.length > 0 && y + t.length > 1 && se.uniqueSort(l)
                                    }
                                    return c && (k = C, u = w), b
                                };
                            return n ? ue(i) : i
                        }(i, o))).selector = e
                    }
                    return s
                }, l = se.select = function (e, t, n, o) {
                    var i, l, u, c, f, d = "function" == typeof e && e,
                        p = !o && a(e = d.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                            if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                            d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (i = X.needsContext.test(e) ? 0 : l.length; i-- && (u = l[i], !r.relative[c = u.type]);)
                            if ((f = r.find[c]) && (o = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ye(t.parentNode) || t))) {
                                if (l.splice(i, 1), !(e = o.length && be(l))) return O.apply(n, o), n;
                                break
                            }
                    }
                    return (d || s(e, p))(o, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
                }, n.sortStable = x.split("").sort(D).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = ce(function (e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }), ce(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || fe("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && ce(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ce(function (e) {
                    return null == e.getAttribute("disabled")
                }) || fe(I, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), se
            }(n);
        T.find = _, T.expr = _.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = _.uniqueSort, T.text = _.getText, T.isXMLDoc = _.isXML, T.contains = _.contains, T.escapeSelector = _.escape;
        var S = function (e, t, n) {
                for (var r = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && T(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            E = function (e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            D = T.expr.match.needsContext;

        function j(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function L(e, t, n) {
            return y(t) ? T.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? T.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? T.grep(e, function (e) {
                return c.call(t, e) > -1 !== n
            }) : T.filter(t, e, n)
        }
        T.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, T.fn.extend({
            find: function (e) {
                var t, n, r = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
                    for (t = 0; t < r; t++)
                        if (T.contains(o[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, o[t], n);
                return r > 1 ? T.uniqueSort(n) : n
            },
            filter: function (e) {
                return this.pushStack(L(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(L(this, e || [], !0))
            },
            is: function (e) {
                return !!L(this, "string" == typeof e && D.test(e) ? T(e) : e || [], !1).length
            }
        });
        var N, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (n = n || N, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), A.test(r[1]) && T.isPlainObject(t))
                        for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (o = b.getElementById(r[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
        }).prototype = T.fn, N = T(b);
        var q = /^(?:parents|prev(?:Until|All))/,
            P = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function I(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        T.fn.extend({
            has: function (e) {
                var t = T(e, this),
                    n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++)
                        if (T.contains(this, t[e])) return !0
                })
            },
            closest: function (e, t) {
                var n, r = 0,
                    o = this.length,
                    i = [],
                    a = "string" != typeof e && T(e);
                if (!D.test(e))
                    for (; r < o; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            } return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i)
            },
            index: function (e) {
                return e ? "string" == typeof e ? c.call(T(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            },
            addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), T.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return S(e, "parentNode")
            },
            parentsUntil: function (e, t, n) {
                return S(e, "parentNode", n)
            },
            next: function (e) {
                return I(e, "nextSibling")
            },
            prev: function (e) {
                return I(e, "previousSibling")
            },
            nextAll: function (e) {
                return S(e, "nextSibling")
            },
            prevAll: function (e) {
                return S(e, "previousSibling")
            },
            nextUntil: function (e, t, n) {
                return S(e, "nextSibling", n)
            },
            prevUntil: function (e, t, n) {
                return S(e, "previousSibling", n)
            },
            siblings: function (e) {
                return E((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return E(e.firstChild)
            },
            contents: function (e) {
                return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (j(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
            }
        }, function (e, t) {
            T.fn[e] = function (n, r) {
                var o = T.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = T.filter(r, o)), this.length > 1 && (P[e] || T.uniqueSort(o), q.test(e) && o.reverse()), this.pushStack(o)
            }
        });
        var J = /[^\x20\t\r\n\f]+/g;

        function H(e) {
            return e
        }

        function R(e) {
            throw e
        }

        function B(e, t, n, r) {
            var o;
            try {
                e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        T.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return T.each(e.match(J) || [], function (e, n) {
                    t[n] = !0
                }), t
            }(e) : T.extend({}, e);
            var t, n, r, o, i = [],
                a = [],
                s = -1,
                l = function () {
                    for (o = o || e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                },
                u = {
                    add: function () {
                        return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
                            T.each(n, function (n, r) {
                                y(r) ? e.unique && u.has(r) || i.push(r) : r && r.length && "string" !== k(r) && t(r)
                            })
                        }(arguments), n && !t && l()), this
                    },
                    remove: function () {
                        return T.each(arguments, function (e, t) {
                            for (var n;
                                (n = T.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function (e) {
                        return e ? T.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function () {
                        return i && (i = []), this
                    },
                    disable: function () {
                        return o = a = [], i = n = "", this
                    },
                    disabled: function () {
                        return !i
                    },
                    lock: function () {
                        return o = a = [], n || t || (i = n = ""), this
                    },
                    locked: function () {
                        return !!o
                    },
                    fireWith: function (e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                    },
                    fire: function () {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!r
                    }
                };
            return u
        }, T.extend({
            Deferred: function (e) {
                var t = [
                        ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                        ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    o = {
                        state: function () {
                            return r
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this
                        },
                        catch: function (e) {
                            return o.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return T.Deferred(function (n) {
                                T.each(t, function (t, r) {
                                    var o = y(e[r[4]]) && e[r[4]];
                                    i[r[1]](function () {
                                        var e = o && o.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function (e, r, o) {
                            var i = 0;

                            function a(e, t, r, o) {
                                return function () {
                                    var s = this,
                                        l = arguments,
                                        u = function () {
                                            var n, u;
                                            if (!(e < i)) {
                                                if ((n = r.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, y(u) ? o ? u.call(n, a(i, t, H, o), a(i, t, R, o)) : (i++, u.call(n, a(i, t, H, o), a(i, t, R, o), a(i, t, H, t.notifyWith))) : (r !== H && (s = void 0, l = [n]), (o || t.resolveWith)(s, l))
                                            }
                                        },
                                        c = o ? u : function () {
                                            try {
                                                u()
                                            } catch (n) {
                                                T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= i && (r !== R && (s = void 0, l = [n]), t.rejectWith(s, l))
                                            }
                                        };
                                    e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            return T.Deferred(function (n) {
                                t[0][3].add(a(0, n, y(o) ? o : H, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : H)), t[2][3].add(a(0, n, y(r) ? r : R))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? T.extend(e, o) : o
                        }
                    },
                    i = {};
                return T.each(t, function (e, n) {
                    var a = n[2],
                        s = n[5];
                    o[n[1]] = a.add, s && a.add(function () {
                        r = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function () {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments), this
                    }, i[n[0] + "With"] = a.fireWith
                }), o.promise(i), e && e.call(i, i), i
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = s.call(arguments),
                    i = T.Deferred(),
                    a = function (e) {
                        return function (n) {
                            r[e] = this, o[e] = arguments.length > 1 ? s.call(arguments) : n, --t || i.resolveWith(r, o)
                        }
                    };
                if (t <= 1 && (B(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
                for (; n--;) B(o[n], a(n), i.reject);
                return i.promise()
            }
        });
        var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && M.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, T.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var F = T.Deferred();

        function W() {
            b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), T.ready()
        }
        T.fn.ready = function (e) {
            return F.then(e).catch(function (e) {
                T.readyException(e)
            }), this
        }, T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || F.resolveWith(b, [T]))
            }
        }), T.ready.then = F.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(T.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
        var $ = function (e, t, n, r, o, i, a) {
                var s = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === k(n))
                    for (s in o = !0, n) $(e, t, s, n[s], !0, i, a);
                else if (void 0 !== r && (o = !0, y(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                        return u.call(T(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return o ? e : u ? t.call(e) : l ? t(e[0], n) : i
            },
            U = /^-ms-/,
            z = /-([a-z])/g;

        function G(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(U, "ms-").replace(z, G)
        }
        var V = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Y() {
            this.expando = T.expando + Y.uid++
        }
        Y.uid = 1, Y.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function (e, t, n) {
                var r, o = this.cache(e);
                if ("string" == typeof t) o[X(t)] = n;
                else
                    for (r in t) o[X(r)] = t[r];
                return o
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(J) || []).length;
                        for (; n--;) delete r[t[n]]
                    }(void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t)
            }
        };
        var Q = new Y,
            K = new Y,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = function (e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    K.set(e, t, n)
                } else n = void 0;
            return n
        }
        T.extend({
            hasData: function (e) {
                return K.hasData(e) || Q.hasData(e)
            },
            data: function (e, t, n) {
                return K.access(e, t, n)
            },
            removeData: function (e, t) {
                K.remove(e, t)
            },
            _data: function (e, t, n) {
                return Q.access(e, t, n)
            },
            _removeData: function (e, t) {
                Q.remove(e, t)
            }
        }), T.fn.extend({
            data: function (e, t) {
                var n, r, o, i = this[0],
                    a = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (o = K.get(i), 1 === i.nodeType && !Q.get(i, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), te(i, r, o[r]));
                        Q.set(i, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function () {
                    K.set(this, e)
                }) : $(this, function (t) {
                    var n;
                    if (i && void 0 === t) return void 0 !== (n = K.get(i, e)) ? n : void 0 !== (n = te(i, e)) ? n : void 0;
                    this.each(function () {
                        K.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e)
                })
            }
        }), T.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, T.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                    r = n.length,
                    o = n.shift(),
                    i = T._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
                    T.dequeue(e, t)
                }, i)), !r && i && i.empty.fire()
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                        Q.remove(e, [t + "queue", n])
                    })
                })
            }
        }), T.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                })
            },
            dequeue: function (e) {
                return this.each(function () {
                    T.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var n, r = 1,
                    o = T.Deferred(),
                    i = this,
                    a = this.length,
                    s = function () {
                        --r || o.resolveWith(i, [i])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            ie = b.documentElement,
            ae = function (e) {
                return T.contains(e.ownerDocument, e)
            },
            se = {
                composed: !0
            };
        ie.getRootNode && (ae = function (e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
        });
        var le = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === T.css(e, "display")
        };

        function ue(e, t, n, r) {
            var o, i, a = 20,
                s = r ? function () {
                    return r.cur()
                } : function () {
                    return T.css(e, t, "")
                },
                l = s(),
                u = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (T.cssNumber[t] || "px" !== u && +l) && re.exec(T.css(e, t));
            if (c && c[3] !== u) {
                for (l /= 2, u = u || c[3], c = +l || 1; a--;) T.style(e, t, c + u), (1 - i) * (1 - (i = s() / l || .5)) <= 0 && (a = 0), c /= i;
                c *= 2, T.style(e, t, c + u), n = n || []
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = o)), o
        }
        var ce = {};

        function fe(e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                o = ce[r];
            return o || (t = n.body.appendChild(n.createElement(r)), o = T.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ce[r] = o, o)
        }

        function de(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = Q.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && le(r) && (o[i] = fe(r))) : "none" !== n && (o[i] = "none", Q.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e
        }
        T.fn.extend({
            show: function () {
                return de(this, !0)
            },
            hide: function () {
                return de(this)
            },
            toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    le(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var pe, he, ge = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
        pe = b.createDocumentFragment().appendChild(b.createElement("div")), (he = b.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), pe.appendChild(he), m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", m.option = !!pe.lastChild;
        var ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function be(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? T.merge([e], n) : n
        }

        function xe(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
        }
        ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, m.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
        var we = /<|&#?\w+;/;

        function ke(e, t, n, r, o) {
            for (var i, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
                if ((i = e[p]) || 0 === i)
                    if ("object" === k(i)) T.merge(d, i.nodeType ? [i] : i);
                    else if (we.test(i)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (me.exec(i) || ["", ""])[1].toLowerCase(), l = ve[s] || ve._default, a.innerHTML = l[1] + T.htmlPrefilter(i) + l[2], c = l[0]; c--;) a = a.lastChild;
                T.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
            } else d.push(t.createTextNode(i));
            for (f.textContent = "", p = 0; i = d[p++];)
                if (r && T.inArray(i, r) > -1) o && o.push(i);
                else if (u = ae(i), a = be(f.appendChild(i), "script"), u && xe(a), n)
                for (c = 0; i = a[c++];) ye.test(i.type || "") && n.push(i);
            return f
        }
        var Te = /^key/,
            Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            _e = /^([^.]*)(?:\.(.+)|)/;

        function Se() {
            return !0
        }

        function Ee() {
            return !1
        }

        function De(e, t) {
            return e === function () {
                try {
                    return b.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function je(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) je(e, s, n, r, t[s], i);
                return e
            }
            if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ee;
            else if (!o) return e;
            return 1 === i && (a = o, (o = function (e) {
                return T().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = T.guid++)), e.each(function () {
                T.event.add(this, t, o, r, n)
            })
        }

        function Ae(e, t, n) {
            n ? (Q.set(e, t, !1), T.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                    var r, o, i = Q.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (i.length)(T.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (i = s.call(arguments), Q.set(this, t, i), r = n(this, t), this[t](), i !== (o = Q.get(this, t)) || r ? Q.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else i.length && (Q.set(this, t, {
                        value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, t) && T.event.add(e, t, Se)
        }
        T.event = {
            global: {},
            add: function (e, t, n, r, o) {
                var i, a, s, l, u, c, f, d, p, h, g, m = Q.get(e);
                if (V(e))
                    for (n.handler && (n = (i = n).handler, o = i.selector), o && T.find.matchesSelector(ie, o), n.guid || (n.guid = T.guid++), (l = m.events) || (l = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function (t) {
                            return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                        }), u = (t = (t || "").match(J) || [""]).length; u--;) p = g = (s = _e.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = T.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = T.event.special[p] || {}, c = T.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && T.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), T.event.global[p] = !0)
            },
            remove: function (e, t, n, r, o) {
                var i, a, s, l, u, c, f, d, p, h, g, m = Q.hasData(e) && Q.get(e);
                if (m && (l = m.events)) {
                    for (u = (t = (t || "").match(J) || [""]).length; u--;)
                        if (p = g = (s = _e.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = T.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || T.removeEvent(e, p, m.handle), delete l[p])
                        } else
                            for (p in l) T.event.remove(e, p + t[u], n, r, !0);
                    T.isEmptyObject(l) && Q.remove(e, "handle events")
                }
            },
            dispatch: function (e) {
                var t, n, r, o, i, a, s = new Array(arguments.length),
                    l = T.event.fix(e),
                    u = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                    c = T.event.special[l.type] || {};
                for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                    for (a = T.event.handlers.call(this, l, u), t = 0;
                        (o = a[t++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = o.elem, n = 0;
                            (i = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace) || (l.handleObj = i, l.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, l), l.result
                }
            },
            handlers: function (e, t) {
                var n, r, o, i, a, s = [],
                    l = t.delegateCount,
                    u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (i = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? T(o, this).index(u) > -1 : T.find(o, this, null, [u]).length), a[o] && i.push(r);
                            i.length && s.push({
                                elem: u,
                                handlers: i
                            })
                        } return u = this, l < t.length && s.push({
                    elem: u,
                    handlers: t.slice(l)
                }), s
            },
            addProp: function (e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function (e) {
                return e[T.expando] ? e : new T.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && j(t, "input") && Ae(t, "click", Se), !1
                    },
                    trigger: function (e) {
                        var t = this || e;
                        return ge.test(t.type) && t.click && j(t, "input") && Ae(t, "click"), !0
                    },
                    _default: function (e) {
                        var t = e.target;
                        return ge.test(t.type) && t.click && j(t, "input") && Q.get(t, "click") || j(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, T.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, T.event.addProp), T.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            T.event.special[e] = {
                setup: function () {
                    return Ae(this, e, De), !1
                },
                trigger: function () {
                    return Ae(this, e), !0
                },
                delegateType: t
            }
        }), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            T.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n, r = e.relatedTarget,
                        o = e.handleObj;
                    return r && (r === this || T.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), T.fn.extend({
            on: function (e, t, n, r) {
                return je(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
                return je(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                    T.event.remove(this, e, n, t)
                })
            }
        });
        var Le = /<script|<style|<link/i,
            Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function qe(e, t) {
            return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
        }

        function Pe(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Ie(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Je(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
                if (Q.hasData(e) && (s = Q.get(e).events))
                    for (o in Q.remove(t, "handle events"), s)
                        for (n = 0, r = s[o].length; n < r; n++) T.event.add(t, o, s[o][n]);
                K.hasData(e) && (i = K.access(e), a = T.extend({}, i), K.set(t, a))
            }
        }

        function He(e, t, n, r) {
            t = l(t);
            var o, i, a, s, u, c, f = 0,
                d = e.length,
                p = d - 1,
                h = t[0],
                g = y(h);
            if (g || d > 1 && "string" == typeof h && !m.checkClone && Ne.test(h)) return e.each(function (o) {
                var i = e.eq(o);
                g && (t[0] = h.call(this, o, i.html())), He(i, t, n, r)
            });
            if (d && (i = (o = ke(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
                for (s = (a = T.map(be(o, "script"), Pe)).length; f < d; f++) u = o, f !== p && (u = T.clone(u, !0, !0), s && T.merge(a, be(u, "script"))), n.call(e[f], u, f);
                if (s)
                    for (c = a[a.length - 1].ownerDocument, T.map(a, Ie), f = 0; f < s; f++) u = a[f], ye.test(u.type || "") && !Q.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, c) : w(u.textContent.replace(Oe, ""), u, c))
            }
            return e
        }

        function Re(e, t, n) {
            for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || T.cleanData(be(r)), r.parentNode && (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        T.extend({
            htmlPrefilter: function (e) {
                return e
            },
            clone: function (e, t, n) {
                var r, o, i, a, s, l, u, c = e.cloneNode(!0),
                    f = ae(e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                    for (a = be(c), r = 0, o = (i = be(e)).length; r < o; r++) s = i[r], l = a[r], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && ge.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (i = i || be(e), a = a || be(c), r = 0, o = i.length; r < o; r++) Je(i[r], a[r]);
                    else Je(e, c);
                return (a = be(c, "script")).length > 0 && xe(a, !f && be(e, "script")), c
            },
            cleanData: function (e) {
                for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (V(n)) {
                        if (t = n[Q.expando]) {
                            if (t.events)
                                for (r in t.events) o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                            n[Q.expando] = void 0
                        }
                        n[K.expando] && (n[K.expando] = void 0)
                    }
            }
        }), T.fn.extend({
            detach: function (e) {
                return Re(this, e, !0)
            },
            remove: function (e) {
                return Re(this, e)
            },
            text: function (e) {
                return $(this, function (e) {
                    return void 0 === e ? T.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return He(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return He(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = qe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return He(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return T.clone(this, e, t)
                })
            },
            html: function (e) {
                return $(this, function (e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Le.test(e) && !ve[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = T.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return He(this, arguments, function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            T.fn[e] = function (e) {
                for (var n, r = [], o = T(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), T(o[a])[t](n), u.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Be = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            Me = function (e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            Fe = function (e, t, n) {
                var r, o, i = {};
                for (o in t) i[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.call(e), t) e.style[o] = i[o];
                return r
            },
            We = new RegExp(oe.join("|"), "i");

        function $e(e, t, n) {
            var r, o, i, a, s = e.style;
            return (n = n || Me(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = T.style(e, t)), !m.pixelBoxStyles() && Be.test(a) && We.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
        }

        function Ue(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function () {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(u).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), o = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), ie.removeChild(u), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var r, o, i, a, s, l, u = b.createElement("div"),
                c = b.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(m, {
                boxSizingReliable: function () {
                    return e(), o
                },
                pixelBoxStyles: function () {
                    return e(), a
                },
                pixelPosition: function () {
                    return e(), r
                },
                reliableMarginLeft: function () {
                    return e(), l
                },
                scrollboxSize: function () {
                    return e(), i
                },
                reliableTrDimensions: function () {
                    var e, t, r, o;
                    return null == s && (e = b.createElement("table"), t = b.createElement("tr"), r = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", r.style.height = "9px", ie.appendChild(e).appendChild(t).appendChild(r), o = n.getComputedStyle(t), s = parseInt(o.height) > 3, ie.removeChild(e)), s
                }
            }))
        }();
        var ze = ["Webkit", "Moz", "ms"],
            Ge = b.createElement("div").style,
            Xe = {};

        function Ve(e) {
            var t = T.cssProps[e] || Xe[e];
            return t || (e in Ge ? e : Xe[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = ze.length; n--;)
                    if ((e = ze[n] + t) in Ge) return e
            }(e) || e)
        }
        var Ye = /^(none|table(?!-c[ea]).+)/,
            Qe = /^--/,
            Ke = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ze = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function et(e, t, n) {
            var r = re.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function tt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                l = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (l += T.css(e, n + oe[a], !0, o)), r ? ("content" === n && (l -= T.css(e, "padding" + oe[a], !0, o)), "margin" !== n && (l -= T.css(e, "border" + oe[a] + "Width", !0, o))) : (l += T.css(e, "padding" + oe[a], !0, o), "padding" !== n ? l += T.css(e, "border" + oe[a] + "Width", !0, o) : s += T.css(e, "border" + oe[a] + "Width", !0, o));
            return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - .5)) || 0), l
        }

        function nt(e, t, n) {
            var r = Me(e),
                o = (!m.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
                i = o,
                a = $e(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Be.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && j(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
        }

        function rt(e, t, n, r, o) {
            return new rt.prototype.init(e, t, n, r, o)
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = $e(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, i, a, s = X(t),
                        l = Qe.test(t),
                        u = e.style;
                    if (l || (t = Ve(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
                    "string" === (i = typeof n) && (o = re.exec(n)) && o[1] && (n = ue(e, t, o), i = "number"), null != n && n == n && ("number" !== i || l || (n += o && o[3] || (T.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function (e, t, n, r) {
                var o, i, a, s = X(t);
                return Qe.test(t) || (t = Ve(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = $e(e, t, r)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
            }
        }), T.each(["height", "width"], function (e, t) {
            T.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return !Ye.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : Fe(e, Ke, function () {
                        return nt(e, t, r)
                    })
                },
                set: function (e, n, r) {
                    var o, i = Me(e),
                        a = !m.scrollboxSize() && "absolute" === i.position,
                        s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, i),
                        l = r ? tt(e, t, r, s, i) : 0;
                    return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - tt(e, t, "border", !1, i) - .5)), l && (o = re.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = T.css(e, t)), et(0, n, l)
                }
            }
        }), T.cssHooks.marginLeft = Ue(m.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            T.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
                    return o
                }
            }, "margin" !== e && (T.cssHooks[e + t].set = et)
        }), T.fn.extend({
            css: function (e, t) {
                return $(this, function (e, t, n) {
                    var r, o, i = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Me(e), o = t.length; a < o; a++) i[t[a]] = T.css(e, t[a], !1, r);
                        return i
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), T.Tween = rt, rt.prototype = {
            constructor: rt,
            init: function (e, t, n, r, o, i) {
                this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[n] ? "" : "px")
            },
            cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
            },
            run: function (e) {
                var t, n = rt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
            }
        }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, T.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, T.fx = rt.prototype.init, T.fx.step = {};
        var ot, it, at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;

        function lt() {
            it && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(lt) : n.setTimeout(lt, T.fx.interval), T.fx.tick())
        }

        function ut() {
            return n.setTimeout(function () {
                ot = void 0
            }), ot = Date.now()
        }

        function ct(e, t) {
            var n, r = 0,
                o = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = oe[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function ft(e, t, n) {
            for (var r, o = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
                if (r = o[i].call(n, t, e)) return r
        }

        function dt(e, t, n) {
            var r, o, i = 0,
                a = dt.prefilters.length,
                s = T.Deferred().always(function () {
                    delete l.elem
                }),
                l = function () {
                    if (o) return !1;
                    for (var t = ot || ut(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; i < a; i++) u.tweens[i].run(r);
                    return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
                },
                u = s.promise({
                    elem: e,
                    props: T.extend({}, t),
                    opts: T.extend(!0, {
                        specialEasing: {},
                        easing: T.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ot || ut(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                        var r = T.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function (t) {
                        var n = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < r; n++) u.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (! function (e, t) {
                    var n, r, o, i, a;
                    for (n in e)
                        if (o = t[r = X(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = T.cssHooks[r]) && "expand" in a)
                            for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                        else t[r] = o
                }(c, u.opts.specialEasing); i < a; i++)
                if (r = dt.prefilters[i].call(u, e, c, u.opts)) return y(r.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
            return T.map(c, ft, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        T.Animation = T.extend(dt, {
                tweeners: {
                    "*": [function (e, t) {
                        var n = this.createTween(e, t);
                        return ue(n.elem, e, re.exec(t), n), n
                    }]
                },
                tweener: function (e, t) {
                    y(e) ? (t = e, e = ["*"]) : e = e.match(J);
                    for (var n, r = 0, o = e.length; r < o; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
                },
                prefilters: [function (e, t, n) {
                    var r, o, i, a, s, l, u, c, f = "width" in t || "height" in t,
                        d = this,
                        p = {},
                        h = e.style,
                        g = e.nodeType && le(e),
                        m = Q.get(e, "fxshow");
                    for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                            a.unqueued || s()
                        }), a.unqueued++, d.always(function () {
                            d.always(function () {
                                a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                            })
                        })), t)
                        if (o = t[r], at.test(o)) {
                            if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                                if ("show" !== o || !m || void 0 === m[r]) continue;
                                g = !0
                            }
                            p[r] = m && m[r] || T.style(e, r)
                        } if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
                        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = Q.get(e, "display")), "none" === (c = T.css(e, "display")) && (u ? c = u : (de([e], !0), u = e.style.display || u, c = T.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(e, "float") && (l || (d.done(function () {
                                h.display = u
                            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
                                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                            })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                            display: u
                        }), i && (m.hidden = !g), g && de([e], !0), d.done(function () {
                            for (r in g || de([e]), Q.remove(e, "fxshow"), p) T.style(e, r, p[r])
                        })), l = ft(g ? m[r] : 0, r, d), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function (e, t) {
                    t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
                }
            }), T.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? T.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
                }, r
            }, T.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function (e, t, n, r) {
                    var o = T.isEmptyObject(e),
                        i = T.speed(t, n, r),
                        a = function () {
                            var t = dt(this, T.extend({}, e), i);
                            (o || Q.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = T.timers,
                            a = Q.get(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && st.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        !t && n || T.dequeue(this, e)
                    })
                },
                finish: function (e) {
                    return !1 !== e && (e = e || "fx"), this.each(function () {
                        var t, n = Q.get(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = T.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), T.each(["toggle", "show", "hide"], function (e, t) {
                var n = T.fn[t];
                T.fn[t] = function (e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, o)
                }
            }), T.each({
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                T.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), T.timers = [], T.fx.tick = function () {
                var e, t = 0,
                    n = T.timers;
                for (ot = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || T.fx.stop(), ot = void 0
            }, T.fx.timer = function (e) {
                T.timers.push(e), T.fx.start()
            }, T.fx.interval = 13, T.fx.start = function () {
                it || (it = !0, lt())
            }, T.fx.stop = function () {
                it = null
            }, T.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, T.fn.delay = function (e, t) {
                return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
                    var o = n.setTimeout(t, e);
                    r.stop = function () {
                        n.clearTimeout(o)
                    }
                })
            },
            function () {
                var e = b.createElement("input"),
                    t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
            }();
        var pt, ht = T.expr.attrHandle;
        T.fn.extend({
            attr: function (e, t) {
                return $(this, T.attr, e, t, arguments.length > 1)
            },
            removeAttr: function (e) {
                return this.each(function () {
                    T.removeAttr(this, e)
                })
            }
        }), T.extend({
            attr: function (e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!m.radioValue && "radio" === t && j(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var n, r = 0,
                    o = t && t.match(J);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), pt = {
            set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || T.find.attr;
            ht[t] = function (e, t, r) {
                var o, i, a = t.toLowerCase();
                return r || (i = ht[a], ht[a] = o, o = null != n(e, t, r) ? a : null, ht[a] = i), o
            }
        });
        var gt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;

        function yt(e) {
            return (e.match(J) || []).join(" ")
        }

        function vt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function bt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(J) || []
        }
        T.fn.extend({
            prop: function (e, t) {
                return $(this, T.prop, e, t, arguments.length > 1)
            },
            removeProp: function (e) {
                return this.each(function () {
                    delete this[T.propFix[e] || e]
                })
            }
        }), T.extend({
            prop: function (e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = T.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), m.optSelected || (T.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this
        }), T.fn.extend({
            addClass: function (e) {
                var t, n, r, o, i, a, s, l = 0;
                if (y(e)) return this.each(function (t) {
                    T(this).addClass(e.call(this, t, vt(this)))
                });
                if ((t = bt(e)).length)
                    for (; n = this[l++];)
                        if (o = vt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            o !== (s = yt(r)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function (e) {
                var t, n, r, o, i, a, s, l = 0;
                if (y(e)) return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, vt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = bt(e)).length)
                    for (; n = this[l++];)
                        if (o = vt(n), r = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (a = 0; i = t[a++];)
                                for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                            o !== (s = yt(r)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
                    T(this).toggleClass(e.call(this, n, vt(this), t), t)
                }) : this.each(function () {
                    var t, o, i, a;
                    if (r)
                        for (o = 0, i = T(this), a = bt(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = vt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + yt(vt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var xt = /\r/g;
        T.fn.extend({
            val: function (e) {
                var t, n, r, o = this[0];
                return arguments.length ? (r = y(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (null == (o = r ? e.call(this, n, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : yt(T.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, n, r, o = e.options,
                            i = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            l = a ? i + 1 : o.length;
                        for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                            if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                if (t = T(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function (e, t) {
                        for (var n, r, o = e.options, i = T.makeArray(t), a = o.length; a--;)((r = o[a]).selected = T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function () {
            T.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
                }
            }, m.checkOn || (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), m.focusin = "onfocusin" in n;
        var wt = /^(?:focusinfocus|focusoutblur)$/,
            kt = function (e) {
                e.stopPropagation()
            };
        T.extend(T.event, {
            trigger: function (e, t, r, o) {
                var i, a, s, l, u, c, f, d, h = [r || b],
                    g = p.call(e, "type") ? e.type : e,
                    m = p.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = d = s = r = r || b, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[T.expando] ? e : new T.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), f = T.event.special[g] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                    if (!o && !f.noBubble && !v(r)) {
                        for (l = f.delegateType || g, wt.test(l + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                        s === (r.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || n)
                    }
                    for (i = 0;
                        (a = h[i++]) && !e.isPropagationStopped();) d = a, e.type = i > 1 ? l : f.bindType || g, (c = (Q.get(a, "events") || Object.create(null))[e.type] && Q.get(a, "handle")) && c.apply(a, t), (c = u && a[u]) && c.apply && V(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                    return e.type = g, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !V(r) || u && y(r[g]) && !v(r) && ((s = r[u]) && (r[u] = null), T.event.triggered = g, e.isPropagationStopped() && d.addEventListener(g, kt), r[g](), e.isPropagationStopped() && d.removeEventListener(g, kt), T.event.triggered = void 0, s && (r[u] = s)), e.result
                }
            },
            simulate: function (e, t, n) {
                var r = T.extend(new T.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                T.event.trigger(r, null, t)
            }
        }), T.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    T.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0)
            }
        }), m.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var n = function (e) {
                T.event.simulate(t, e.target, T.event.fix(e))
            };
            T.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this.document || this,
                        o = Q.access(r, t);
                    o || r.addEventListener(e, n, !0), Q.access(r, t, (o || 0) + 1)
                },
                teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                        o = Q.access(r, t) - 1;
                    o ? Q.access(r, t, o) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                }
            }
        });
        var Tt = n.location,
            Ct = {
                guid: Date.now()
            },
            _t = /\?/;
        T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
        };
        var St = /\[\]$/,
            Et = /\r?\n/g,
            Dt = /^(?:submit|button|image|reset|file)$/i,
            jt = /^(?:input|select|textarea|keygen)/i;

        function At(e, t, n, r) {
            var o;
            if (Array.isArray(t)) T.each(t, function (t, o) {
                n || St.test(e) ? r(e, o) : At(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
            });
            else if (n || "object" !== k(t)) r(e, t);
            else
                for (o in t) At(e + "[" + o + "]", t[o], n, r)
        }
        T.param = function (e, t) {
            var n, r = [],
                o = function (e, t) {
                    var n = y(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
                o(this.name, this.value)
            });
            else
                for (n in e) At(n, e[n], t, o);
            return r.join("&")
        }, T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ge.test(e))
                }).map(function (e, t) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(Et, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Et, "\r\n")
                    }
                }).get()
            }
        });
        var Lt = /%20/g,
            Nt = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Jt = {},
            Ht = {},
            Rt = "*/".concat("*"),
            Bt = b.createElement("a");

        function Mt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, o = 0,
                    i = t.toLowerCase().match(J) || [];
                if (y(n))
                    for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Ft(e, t, n, r) {
            var o = {},
                i = e === Ht;

            function a(s) {
                var l;
                return o[s] = !0, T.each(e[s] || [], function (e, s) {
                    var u = s(t, n, r);
                    return "string" != typeof u || i || o[u] ? i ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1)
                }), l
            }
            return a(t.dataTypes[0]) || !o["*"] && a("*")
        }

        function Wt(e, t) {
            var n, r, o = T.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e
        }
        Bt.href = Tt.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e)
            },
            ajaxPrefilter: Mt(Jt),
            ajaxTransport: Mt(Ht),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, o, i, a, s, l, u, c, f, d, p = T.ajaxSetup({}, t),
                    h = p.context || p,
                    g = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                    m = T.Deferred(),
                    y = T.Callbacks("once memory"),
                    v = p.statusCode || {},
                    x = {},
                    w = {},
                    k = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!a)
                                    for (a = {}; t = qt.exec(i);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function () {
                            return u ? i : null
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this
                        },
                        overrideMimeType: function (e) {
                            return null == u && (p.mimeType = e), this
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) C.always(e[C.status]);
                                else
                                    for (t in e) v[t] = [v[t], e[t]];
                            return this
                        },
                        abort: function (e) {
                            var t = e || k;
                            return r && r.abort(t), _(0, t), this
                        }
                    };
                if (m.promise(C), p.url = ((e || p.url || Tt.href) + "").replace(It, Tt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(J) || [""], null == p.crossDomain) {
                    l = b.createElement("a");
                    try {
                        l.href = p.url, l.href = l.href, p.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)), Ft(Jt, p, t, C), u) return C;
                for (f in (c = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pt.test(p.type), o = p.url.replace(Nt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (_t.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ot, "$1"), d = (_t.test(o) ? "&" : "?") + "_=" + Ct.guid++ + d), p.url = o + d), p.ifModified && (T.lastModified[o] && C.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && C.setRequestHeader("If-None-Match", T.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || u)) return C.abort();
                if (k = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = Ft(Ht, p, t, C)) {
                    if (C.readyState = 1, c && g.trigger("ajaxSend", [C, p]), u) return C;
                    p.async && p.timeout > 0 && (s = n.setTimeout(function () {
                        C.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1, r.send(x, _)
                    } catch (e) {
                        if (u) throw e;
                        _(-1, e)
                    }
                } else _(-1, "No Transport");

                function _(e, t, a, l) {
                    var f, d, b, x, w, k = t;
                    u || (u = !0, s && n.clearTimeout(s), r = void 0, i = l || "", C.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (x = function (e, t, n) {
                        for (var r, o, i, a, s = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (o in s)
                                if (s[o] && s[o].test(r)) {
                                    l.unshift(o);
                                    break
                                } if (l[0] in n) i = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    i = o;
                                    break
                                }
                                a || (a = o)
                            }
                            i = i || a
                        }
                        if (i) return i !== l[0] && l.unshift(i), n[i]
                    }(p, C, a)), !f && T.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function () {}), x = function (e, t, n, r) {
                        var o, i, a, s, l, u = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                        for (i = c.shift(); i;)
                            if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift())
                                if ("*" === i) i = l;
                                else if ("*" !== l && l !== i) {
                            if (!(a = u[l + " " + i] || u["* " + i]))
                                for (o in u)
                                    if ((s = o.split(" "))[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                        !0 === a ? a = u[o] : !0 !== u[o] && (i = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e.throws) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + l + " to " + i
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(p, x, C, f), f ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (T.etag[o] = w)), 204 === e || "HEAD" === p.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, d = x.data, f = !(b = x.error))) : (b = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || k) + "", f ? m.resolveWith(h, [d, k, C]) : m.rejectWith(h, [C, k, b]), C.statusCode(v), v = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, p, f ? d : b]), y.fireWith(h, [C, k]), c && (g.trigger("ajaxComplete", [C, p]), --T.active || T.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function (e, t, n) {
                return T.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return T.get(e, void 0, t, "script")
            }
        }), T.each(["get", "post"], function (e, t) {
            T[t] = function (e, n, r, o) {
                return y(n) && (o = o || r, r = n, n = void 0), T.ajax(T.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r
                }, T.isPlainObject(e) && e))
            }
        }), T.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }), T._evalUrl = function (e, t, n) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {}
                },
                dataFilter: function (e) {
                    T.globalEval(e, t, n)
                }
            })
        }, T.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function (e) {
                return y(e) ? this.each(function (t) {
                    T(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = T(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                    T(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    T(this).replaceWith(this.childNodes)
                }), this
            }
        }), T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e)
        }, T.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, T.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var $t = {
                0: 200,
                1223: 204
            },
            Ut = T.ajaxSettings.xhr();
        m.cors = !!Ut && "withCredentials" in Ut, m.ajax = Ut = !!Ut, T.ajaxTransport(function (e) {
            var t, r;
            if (m.cors || Ut && !e.crossDomain) return {
                send: function (o, i) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                    t = function (e) {
                        return function () {
                            t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout(function () {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        s.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function () {
                    t && t()
                }
            }
        }), T.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return T.globalEval(e), e
                }
            }
        }), T.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), T.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (r, o) {
                    t = T("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), b.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        });
        var zt, Gt = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var e = Gt.pop() || T.expando + "_" + Ct.guid++;
                return this[e] = !0, e
            }
        }), T.ajaxPrefilter("json jsonp", function (e, t, r) {
            var o, i, a, s = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Xt, "$1" + o) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return a || T.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", i = n[o], n[o] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === i ? T(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Gt.push(o)), a && y(i) && i(a[0]), a = i = void 0
            }), "script"
        }), m.createHTMLDocument = ((zt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === zt.childNodes.length), T.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(r)) : t = b), i = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = ke([e], t, i), i && i.length && T(i).remove(), T.merge([], o.childNodes)));
            var r, o, i
        }, T.fn.load = function (e, t, n) {
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && T.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                i = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }), this
        }, T.expr.pseudos.animated = function (e) {
            return T.grep(T.timers, function (t) {
                return e === t.elem
            }).length
        }, T.offset = {
            setOffset: function (e, t, n) {
                var r, o, i, a, s, l, u = T.css(e, "position"),
                    c = T(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = c.offset(), i = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), y(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
            }
        }, T.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    T.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - T.css(r, "marginTop", !0),
                        left: t.left - o.left - T.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                    return e || ie
                })
            }
        }), T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
                return $(this, function (e, r, o) {
                    var i;
                    if (v(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                    i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
                }, e, r, arguments.length)
            }
        }), T.each(["top", "left"], function (e, t) {
            T.cssHooks[t] = Ue(m.pixelPosition, function (e, n) {
                if (n) return n = $e(e, t), Be.test(n) ? T(e).position()[t] + "px" : n
            })
        }), T.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            T.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (n, r) {
                T.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return $(this, function (t, n, o) {
                        var i;
                        return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? T.css(t, n, s) : T.style(t, n, o, s)
                    }, t, a ? o : void 0, a)
                }
            })
        }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            T.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), T.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            T.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        });
        var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        T.proxy = function (e, t) {
            var n, r, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (o = function () {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || T.guid++, o
        }, T.holdReady = function (e) {
            e ? T.readyWait++ : T.ready(!0)
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = j, T.isFunction = y, T.isWindow = v, T.camelCase = X, T.type = k, T.now = Date.now, T.isNumeric = function (e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, T.trim = function (e) {
            return null == e ? "" : (e + "").replace(Vt, "")
        }, void 0 === (r = function () {
            return T
        }.apply(t, [])) || (e.exports = r);
        var Yt = n.jQuery,
            Qt = n.$;
        return T.noConflict = function (e) {
            return n.$ === T && (n.$ = Qt), e && n.jQuery === T && (n.jQuery = Yt), T
        }, void 0 === o && (n.jQuery = n.$ = T), T
    })
}, function (e, t, n) {
    "use strict";
    n.r(t),
        function (e) {
            var t = n(4),
                r = n.n(t),
                o = (n(7), r.a.noConflict(!0));
            const i = ["CL", "CO", "PE", "MX", "IE"];
            var a;
            a = o, window.Jumpseller = {
                rules_functions: [],
                countryListenerCallbacks: [],
                runRules: function (e, t) {
                    for (var n = 0; n < Jumpseller.rules_functions.length; n++) {
                        var r = window[Jumpseller.rules_functions[n]];
                        "function" == typeof r && r()
                    }
                },
                isDefined: function (e) {
                    return void 0 !== e
                },
                requiredAttributesChecker: function (e, t) {
                    return Jumpseller.isDefined(t.callback) ? (o(e).each(function (e) {
                        if (!o(this).is("select") && !o(this).is(":radio")) return console.log("Invalid jQuery selector. Please provide only the input(s) element(s). (e.g. select, radio)"), !1
                    }), !0) : (console.log("Undefined callback"), !1)
                },
                paymentMethodListener: function (e, t) {
                    return null == e && (e = '#payments #payments_options ul input[type="radio"]'), !!Jumpseller.requiredAttributesChecker(e, t) && (o(e).on("change", function (e) {
                        try {
                            return t.callback(e)
                        } catch (e) {
                            return console.log("Could not execute your callback function: " + e.message), !1
                        }
                    }), !0)
                },
                shippingMethodListener: function (e, t) {
                    return null == e && (e = '#shipping #shipping_options ul input[type="radio"]'), !!Jumpseller.requiredAttributesChecker(e, t) && (o(e).on("change", function (e) {
                        try {
                            return t.callback(e)
                        } catch (e) {
                            return console.log("Could not execute your callback function: " + e.message), !1
                        }
                    }), !0)
                },
                addCountryListeners: function () {
                    o("form#checkout").length > 0 && (Jumpseller.countryListener("#order_shipping_address_country", {
                        callback: function () {}
                    }), Jumpseller.countryListener("#order_billing_address_country", {
                        callback: function () {}
                    })), o("form#estimate_shipping_form").length > 0 && Jumpseller.countryListener("#estimate_shipping_country", {
                        callback: function () {}
                    }), o("form#address").length > 0 && (Jumpseller.countryListener("#customer_shipping_address_country", {
                        callback: function () {}
                    }), Jumpseller.countryListener("#customer_billing_address_country", {
                        callback: function () {}
                    }))
                },
                countryListener: function (e, t) {
                    Jumpseller.requiredAttributesChecker(e, t);
                    let n = ["shipping", "billing"];
                    if (n.forEach(function (e) {
                            a("#order_" + e + "_address_municipality").prop("required") && !i.includes(a("#order_" + e + "_address_country").val()) && a("#order_" + e + "_address_municipality").removeAttr("required")
                        }), o(e).on("change", function (r) {
                            Jumpseller.isDefined(t.regionsSelector) || (t.regionsSelector = e.replace("_country", "_region"), console.log("Info: 'options.regionsSelector' is not defined. Default: " + t.regionsSelector));
                            let o = null;
                            var s, l, u = r.target.value;
                            if (null != localStorage.geolocation) {
                                var c = JSON.parse(localStorage.geolocation);
                                location.country == u && (o = c.region, s = c.lat, l = c.lng)
                            }
                            n.forEach(function (e) {
                                a("#order_" + e + "_address_municipality").prop("required") && !i.includes(a("#order_" + e + "_address_country").val()) && a("#order_" + e + "_address_municipality").removeAttr("required")
                            });
                            for (var f = 0; f < Jumpseller.countryListenerCallbacks.length; f++) Jumpseller.countryListenerCallbacks[f]();
                            Jumpseller.getRegions(t.regionsSelector, u, o, s, l), Jumpseller.isDefined(t.postalInput) || (t.postalInput = e.replace("_country", "_postal"), console.log("Info: 'options.postalInput' is not defined. Default: " + t.postalInput)), Jumpseller.getCountryPostalCodeOptional(t.postalInput, u);
                            try {
                                return t.callback(r, t.regionsSelector)
                            } catch (e) {
                                return console.log("Could not execute your callback function: " + e.message), !1
                            }
                        }), ["#order_shipping_address_country", "#order_billing_address_country"].includes(e)) {
                        let t = a(e + " option"),
                            n = a(e + " option:selected");
                        if (1 === t.length && 0 == n.length) {
                            let n = t[0].value;
                            o(e).val(n).trigger("change")
                        }
                    }
                },
                addRegionListeners: function () {
                    o("form#checkout").length > 0 && (Jumpseller.regionListener("#order_shipping_address_region", {
                        callback: function () {},
                        updateMunicipalities: !0
                    }), Jumpseller.regionListener("#order_billing_address_region", {
                        callback: function () {},
                        updateMunicipalities: !0
                    })), o("form#estimate_shipping_form").length > 0 && Jumpseller.regionListener("#estimate_shipping_region", {
                        callback: function () {},
                        updateMunicipalities: !0
                    }), o("form#address").length > 0 && (Jumpseller.regionListener("#customer_shipping_address_region", {
                        callback: function () {},
                        updateMunicipalities: !0
                    }), Jumpseller.regionListener("#customer_billing_address_region", {
                        callback: function () {},
                        updateMunicipalities: !0
                    }))
                },
                regionListener: function (e, t) {
                    return Jumpseller.requiredAttributesChecker(e, t), o(e).on("change", function (n) {
                        if (Jumpseller.isDefined(t.updateMunicipalities) || (t.updateMunicipalities = !1, console.log("Info: 'options.updateMunicipalities' is not defined. Default: " + t.updateMunicipalities)), t.updateMunicipalities) {
                            Jumpseller.isDefined(t.municipalitiesSelector) || (t.municipalitiesSelector = e.replace("_region", "_municipality"), console.log("Info: 'options.municipalitiesSelector' is not defined. Default: " + t.municipalitiesSelector)), Jumpseller.isDefined(t.countriesSelector) || (t.countriesSelector = e.replace("_region", "_country"), console.log("Info: 'options.countriesSelector' is not defined. Default: " + t.countriesSelector)), Jumpseller.getMunicipalities(t.municipalitiesSelector, n.target.value, o(t.countriesSelector).find(":selected").val(), o(t.municipalitiesSelector).find(":selected").val());
                            try {
                                return t.callback(n, t.municipalitiesSelector)
                            } catch (e) {
                                return console.log("Could not execute your callback function: " + e.message), !1
                            }
                        } else try {
                            return t.callback(n)
                        } catch (e) {
                            return console.log("Could not execute your callback function: " + e.message), !1
                        }
                    }), !1
                },
                productVariantListener: function (e, t) {
                    return null == e && (e = "#addtocart select, #product-form select"), !!Jumpseller.requiredAttributesChecker(e, t) && (o(function () {
                        Jumpseller.updateProductInfo(null, e, t), o(e).on("change", function (n) {
                            try {
                                return Jumpseller.updateProductInfo(n, e, t)
                            } catch (e) {
                                return console.log("Could not execute your callback function: " + e.message), !1
                            }
                        })
                    }), !0)
                },
                getCountryPostalCodeOptional: function (e, t) {
                    var n = o(e),
                        r = o("label[for='" + e.replace("#", "") + "']"),
                        i = "/checkout/postal_enabled_in_country?country=" + t;
                    a.ajax({
                        url: i
                    }).done(function (e, t, o) {
                        e.postal_enabled ? (n.closest("form div").length > 0 ? n.closest("form div").show() : n.show(), r.show()) : (n.closest("form div").length > 0 ? n.closest("form div").hide() : n.hide(), r.hide())
                    })
                },
                getRegions: function (e, t, n, r, i, a = {}) {
                    var s = o(e),
                        l = o("label[for='" + e.replace("#", "") + "']"),
                        u = "/checkout/regions?country=" + t + "&addtype=" + (/billing/.test(e) ? "billing" : "shipping");
                    null == n && (u += "&lat=" + r + "&lng=" + i), o.ajax({
                        url: u
                    }).done(function (e, t, r) {
                        if (e.length > 0) {
                            s.empty(), s.closest("form div").length > 0 ? s.closest("form div").show() : s.show(), l.show();
                            var o = new Option("", "");
                            s.append(o), null == n && 1 === e.length && (n = e[0].code);
                            for (var i = e.length - 1; i >= 0; --i) {
                                var u = new Option(e[i].name, e[i].code);
                                s.append(u), (e[i].code === n || e[i].selected) && s.val(e[i].code)
                            }
                        } else s.closest("form div").length > 0 ? s.closest("form div").hide() : s.hide(), l.hide();
                        s.change(), s.on("change", function (e) {
                            try {
                                return a.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function: " + e.message), !1
                            }
                        })
                    })
                },
                getMunicipalities: function (e, t, n, r, i = {}) {
                    var s = o(e),
                        l = o("label[for='" + e.replace("#", "") + "']");
                    let u = /billing/.test(e) ? "billing" : "shipping";
                    o.ajax({
                        url: "/checkout/municipalities?region=" + t + "&country=" + n + "&addtype=" + u
                    }).done(function (t, n, o) {
                        if (t.length > 0) {
                            s.empty(), s.show(), s.closest("form div").length > 0 ? s.closest("form div").show() : s.parent().is("form") || s.parent().show(), s.closest("form div.field.select-field").show(), l.show();
                            var u = new Option("", "");
                            s.append(u);
                            for (var c = t.length - 1; c >= 0; --c) {
                                var f = new Option(t[c].name, t[c].code);
                                if (s.append(f), t[c].code === r) {
                                    let n = t[c].code;
                                    a(e + ' option[value="' + n + '"]').attr("selected", "selected")
                                }
                            }
                            s.change(), s.on("change", function (e) {
                                try {
                                    return i.callback(e)
                                } catch (e) {
                                    return console.log("Could not execute your callback function of municipality: " + e.message), !1
                                }
                            })
                        } else s.hide(), s.closest("form div").length > 0 ? s.closest("form div").hide() : s.parent().is("form") || s.parent().hide(), s.closest("form div.field.select-field").hide(), l.hide()
                    })
                },
                updateProductInfo: function (e, t, n) {
                    if (!Jumpseller.isDefined(n.product)) return console.log("Product JSON is not defined"), !1;
                    var r, i = {};
                    try {
                        r = "object" == typeof n.product ? n.product : JSON.parse(n.product.replace(/\\/g, "\\\\").replace(/\t/g, "&#9;").trim())
                    } catch (e) {
                        return console.log("Invalid JSON"), !1
                    }
                    var a = [];
                    o(t).find(":selected").each(function () {
                        a.push({
                            id: o(this).val()
                        })
                    });
                    for (var s = 0; s < r.length; s++) {
                        var l = [];
                        r[s].values.forEach(function (e) {
                            var t = {
                                id: e.value.id.toString()
                            };
                            l.push(t)
                        });
                        var u = [];
                        a.forEach(function (e) {
                            u.push(l.some(function (t) {
                                return t.id == e.id
                            }))
                        }), -1 == o.inArray(!1, u) && (i = o.extend(r[s].variant, {
                            price_formatted: r[s].price_formatted,
                            status: r[s].status,
                            image: r[s].image,
                            price_discount_formatted: r[s].price_discount_formatted,
                            discount: r[s].discount,
                            attachments: r[s].attachments
                        }))
                    }
                    var c = void 0 === n.qtySelector ? ".qty" : n.qtySelector;
                    i.stock_unlimited ? o(c).removeAttr("max") : o(c).attr("max", i.stock);
                    try {
                        return n.callback(e, i)
                    } catch (e) {
                        return console.log(e.message), console.log("Could not execute your callback function."), !1
                    }
                },
                setCurrency: function (e) {
                    sessionStorage.setItem("global_currency", e), location.reload()
                },
                multiCurrency: function (e) {
                    if (!Jumpseller.isDefined(e.token) || !e.token) return console.log("OpenExchangeRates App ID is not defined"), !1;
                    if (sessionStorage.getItem("global_currency") != sessionStorage.getItem("store_currency")) {
                        var t = JSON.parse(localStorage.getItem("currency_rates"));
                        if (null != t) {
                            var n = new Date(t.now);
                            n.setDate(n.getDate() + 1), n < new Date && (t = null)
                        }
                        if (null == t) o.getJSON("https://openexchangerates.org/api/latest.json?app_id=" + e.token, function (t) {
                            t.now = new Date, localStorage.setItem("currency_rates", JSON.stringify(t)), "undefined" != typeof fx && fx.rates ? (fx.rates = t.rates, fx.base = t.base) : (t.rates, t.base);
                            try {
                                return e.callback()
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }).on("error", function () {
                            if (null != (t = JSON.parse(localStorage.getItem("currency_rates")))) {
                                fx.rates = t.rates, fx.base = t.base;
                                try {
                                    return e.callback()
                                } catch (e) {
                                    return console.log("Could not execute your callback function."), !1
                                }
                            } else console.log("Unable to use multi-currency on this store. Services unavailable."), o("#current_currency").closest("li").hide()
                        });
                        else {
                            fx.rates = t.rates, fx.base = t.base;
                            try {
                                return e.callback()
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    }
                },
                fillWithGeoLocation: function (e) {
                    var t;
                    (t = o("form#checkout")).length && null !== e.country && null !== e.region && ["shipping", "billing"].forEach(function (n) {
                        0 == t.find("#order_" + n + '_address_country option[value="' + e.country_code + '"]').length || t.find("#order_" + n + "_address_region").val() || ("navigator" == e.type && (t.find("#order_" + n + "_address_address").val(e.address), t.find("#order_" + n + "_address_postal").val(e.zip_code)), t.find("#order_" + n + "_address_city").val(e.city), t.find("#order_" + n + "_address_country").val(e.country_code).change(), t.find("#order_" + n + "_address_city").val(e.city), Jumpseller.getRegions("#order_" + n + "_address_region", a("#order_" + n + "_address_country").val(), e.region, e.latitude, e.longitude))
                    }), (t = o("form#estimate_shipping_form")).length && (0 == t.find('#estimate_shipping_country option[value="' + e.country_code + '"]').length || t.find("#estimate_shipping_region").val() || ("navigator" == e.type && t.find("#estimate_shipping_postal").val(e.zip_code), t.find("#estimate_shipping_country").val(e.country_code).change(), Jumpseller.getRegions("#estimate_shipping_region", a("#estimate_shipping_country").val(), e.region, e.latitude, e.longitude)))
                },
                isMobile: function () {
                    var e, t = !1;
                    return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
                },
                getMobileLocation: function () {
                    "geolocation" in navigator && (navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (e) {
                        Jumpseller.geocode(e.coords.latitude, e.coords.longitude)
                    }, function () {
                        Jumpseller.getIPLocation()
                    }) : Jumpseller.getIPLocation())
                },
                geocode: function (t, n) {
                    e("/geocoder/location?lat=" + t + "&lng=" + n, {
                        method: "get"
                    }).then(function (e) {
                        if (e.ok) return e.json();
                        throw new TypeError("Error response")
                    }).then(function (e) {
                        if ("OK" == e.status) {
                            var t = e.location;
                            return localStorage.geolocation = JSON.stringify(t), Jumpseller.fillWithGeoLocation(t), t
                        }
                        throw new TypeError("Unable to geocode location")
                    }).catch(function (e) {
                        Jumpseller.getIPLocation()
                    })
                },
                getIPLocation: function () {
                    o.getJSON("/geocoder/ip", function (e) {
                        localStorage.geolocation = JSON.stringify(e), Jumpseller.fillWithGeoLocation(e)
                    })
                },
                getCart: function (e) {
                    o.ajax({
                        url: "/api/cart.json",
                        type: "GET",
                        success: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                updateCart: function (e, t, n) {
                    var r = {};
                    r[e] = t, o.ajax({
                        url: "/api/cart.json",
                        type: "POST",
                        data: r,
                        success: function (e) {
                            if (Jumpseller.isDefined(n) && Jumpseller.isDefined(n.callback)) try {
                                return n.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (e) {
                            if (Jumpseller.isDefined(n) && Jumpseller.isDefined(n.callback)) try {
                                return n.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                clearCart: function (e) {
                    o.ajax({
                        url: "/api/cart.json",
                        type: "DELETE",
                        success: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                langInPath: function () {
                    return ["ar", "cs", "zh", "da", "en", "fr", "de", "el", "hu", "is", "it", "ja", "ko", "lv", "nl", "pl", "pt", "br", "sl", "es", "cl", "co", "mx", "es-PE", "es-AR", "sv", "tr", "ru", "fa", "fi", "hr", "ca", "kk-KZ", "no"].includes(location.pathname.split("/")[1])
                },
                addMultipleProductsToCart: function (e, t) {
                    var n = e.map(function (e) {
                            let [t, n, r, i] = e;
                            return o.extend({}, {
                                id: t,
                                name: n,
                                qty: r
                            }, i)
                        }),
                        r = "";
                    Jumpseller.langInPath() && (r = "/" + location.pathname.split("/")[1]), o.ajax({
                        url: r + "/api/cart/add_multiple.json",
                        type: "POST",
                        data: {
                            data: n
                        },
                        success: function (e) {
                            if (Jumpseller.isDefined(t) && Jumpseller.isDefined(t.callback)) try {
                                return t.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (e) {
                            if (Jumpseller.isDefined(t) && Jumpseller.isDefined(t.callback)) try {
                                return t.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                addProductToCart: function (e, t, n, r) {
                    var i = o.extend({}, {
                            id: e,
                            qty: t
                        }, n),
                        a = "";
                    Jumpseller.langInPath() && (a = "/" + location.pathname.split("/")[1]), o.ajax({
                        url: a + "/api/cart/add.json",
                        type: "POST",
                        data: i,
                        success: function (e) {
                            if (Jumpseller.isDefined(r) && Jumpseller.isDefined(r.callback)) try {
                                return r.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (e) {
                            if (Jumpseller.isDefined(r) && Jumpseller.isDefined(r.callback)) try {
                                return r.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                addCouponToCart: function (e, t) {
                    var n = o.extend({}, {
                        codes: e
                    });
                    o.ajax({
                        url: "/api/cart/coupon.json",
                        type: "POST",
                        data: n,
                        success: function (e) {
                            if (Jumpseller.isDefined(t) && Jumpseller.isDefined(t.callback)) try {
                                return t.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (e) {
                            if (Jumpseller.isDefined(t) && Jumpseller.isDefined(t.callback)) try {
                                return t.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                removeCouponFromCart: function (e, t) {
                    var n = o.extend({}, {
                        codes: e
                    });
                    o.ajax({
                        url: "/api/cart/coupon.json",
                        type: "DELETE",
                        data: n,
                        success: function (e) {
                            if (Jumpseller.isDefined(t) && Jumpseller.isDefined(t.callback)) try {
                                return t.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (e) {
                            if (Jumpseller.isDefined(t) && Jumpseller.isDefined(t.callback)) try {
                                return t.callback(e)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                getCurrentProductInfo: function (e) {
                    var t = e.permalink;
                    void 0 === t && (t = location.pathname.match(/([^\/]*)\/*$/)[1]);
                    var n = "";
                    if (Jumpseller.langInPath() && (n = "/" + location.pathname.split("/")[1]), "" === t) try {
                        return e.callback(data)
                    } catch (e) {
                        return console.log("Could not execute your callback function."), !1
                    }
                    o.ajax({
                        url: n + "/api/products/" + t.replace(n.slice(1), "") + ".json",
                        type: "GET",
                        success: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                getCurrentCategoryInfo: function (e) {
                    o.ajax({
                        url: "/api/categories/" + location.pathname.substring(1) + ".json",
                        type: "GET",
                        success: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                },
                resetCheckoutLocationFields: function (e) {
                    const t = document.getElementById("order_" + e + "_address_country"),
                        n = document.getElementById("order_" + e + "_address_region"),
                        r = document.getElementById(e + "_address_municipality"),
                        o = document.getElementById("order_" + e + "_address_municipality");
                    if (t && (t.value = ""), n && (n.value = ""), r && o) {
                        let e = r.children;
                        for (let t = 0; t < e.length; t++) "LABEL" == e[t].nodeName && (e[t].style.display = "none");
                        o.style.display = "none", r.style.display = "none"
                    }
                },
                setGeoLocation: function (e) {
                    e ? Jumpseller.fillWithGeoLocation(JSON.parse(e)) : Jumpseller.isMobile() ? Jumpseller.getMobileLocation() : Jumpseller.getIPLocation()
                },
                getCurrentSearchInfo: function (e) {
                    o.ajax({
                        url: "/api/search/" + location.pathname.substring(1) + ".json",
                        type: "GET",
                        success: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        },
                        error: function (t) {
                            if (Jumpseller.isDefined(e) && Jumpseller.isDefined(e.callback)) try {
                                return e.callback(t)
                            } catch (e) {
                                return console.log("Could not execute your callback function."), !1
                            }
                        }
                    })
                }
            }, o(function () {
                var e = o('meta[name="csrf-token"]').attr("content"),
                    t = o('meta[name="csrf-param"]').attr("content");
                if (o("input[name=authenticity_token]").val(e), o.ajaxPrefilter(function (n) {
                        "POST" != n.type && "PUT" != n.type && "DELETE" != n.type || (n.data = n.data || "", n.data += n.data ? "&" : "", n.data += t + "=" + e)
                    }), o(document).on("submit", "form", function (n) {
                        var r = o(n.target);
                        if (r.attr("method")) {
                            var i = r.attr("method").toUpperCase();
                            "POST" !== i && "PUT" != i && "DELETE" != i || r.not(":has(input#" + t + ")").append('<input type="hidden" id="' + t + '" name="' + t + '" value="' + e + '" />')
                        }
                    }), o("<input>").attr("type", "hidden").attr("value", e).attr("name", t).appendTo("form"), 0 != o("form#checkout").length || 0 != o("form#estimate_shipping_form").length && 0 == o("form#estimate_shipping_results").length || 0 != o("form#address").length) {
                    var n = localStorage.geolocation;
                    RegExp("checkout?").test(window.location.href) ? ["shipping", "billing"].forEach(function (e) {
                        const t = document.getElementById("order_" + e + "_address_country"),
                            r = document.getElementById("order_" + e + "_address_region"),
                            o = document.getElementById("order_" + e + "_address_municipality");
                        let a, s;
                        if (t && r) {
                            const l = t.value,
                                u = r.value;
                            s = i.includes(l);
                            const c = document.getElementById(e + "_address_municipality");
                            let f;
                            if (c) {
                                let e = c.children;
                                for (let t = 0; t < e.length; t++) "LABEL" == e[t].nodeName && (f = e[t])
                            }
                            o && (a = o.value), l && u && s && a ? (c.style.display = "", f.style.display = "", o.style.display = "") : l && u && !s ? (c.style.display = "none", f.style.display = "none", o.style.display = "none") : (Jumpseller.resetCheckoutLocationFields(e), Jumpseller.setGeoLocation(n))
                        } else Jumpseller.setGeoLocation(n)
                    }) : Jumpseller.setGeoLocation(n)
                }
                Jumpseller.addCountryListeners(), Jumpseller.addRegionListeners(), Jumpseller.isDefined(window.rules_functions) && (Jumpseller.rules_functions = Jumpseller.rules_functions.concat(window.rules_functions.filter(function (e) {
                    return Jumpseller.rules_functions.indexOf(e) < 0
                }))), Jumpseller.runRules(null, null)
            })
        }.call(this, n(6))
}, function (e, t, n) {
    (function (t) {
        (function () {
            ! function (e) {
                "use strict";
                if (!e.fetch) {
                    var t = {
                        searchParams: "URLSearchParams" in e,
                        iterable: "Symbol" in e && "iterator" in Symbol,
                        blob: "FileReader" in e && "Blob" in e && function () {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in e,
                        arrayBuffer: "ArrayBuffer" in e
                    };
                    if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        r = function (e) {
                            return e && DataView.prototype.isPrototypeOf(e)
                        },
                        o = ArrayBuffer.isView || function (e) {
                            return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                        };
                    c.prototype.append = function (e, t) {
                        e = s(e), t = l(t);
                        var n = this.map[e];
                        this.map[e] = n ? n + "," + t : t
                    }, c.prototype.delete = function (e) {
                        delete this.map[s(e)]
                    }, c.prototype.get = function (e) {
                        return e = s(e), this.has(e) ? this.map[e] : null
                    }, c.prototype.has = function (e) {
                        return this.map.hasOwnProperty(s(e))
                    }, c.prototype.set = function (e, t) {
                        this.map[s(e)] = l(t)
                    }, c.prototype.forEach = function (e, t) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                    }, c.prototype.keys = function () {
                        var e = [];
                        return this.forEach(function (t, n) {
                            e.push(n)
                        }), u(e)
                    }, c.prototype.values = function () {
                        var e = [];
                        return this.forEach(function (t) {
                            e.push(t)
                        }), u(e)
                    }, c.prototype.entries = function () {
                        var e = [];
                        return this.forEach(function (t, n) {
                            e.push([n, t])
                        }), u(e)
                    }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                    var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    m.prototype.clone = function () {
                        return new m(this, {
                            body: this._bodyInit
                        })
                    }, g.call(m.prototype), g.call(v.prototype), v.prototype.clone = function () {
                        return new v(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new c(this.headers),
                            url: this.url
                        })
                    }, v.error = function () {
                        var e = new v(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var a = [301, 302, 303, 307, 308];
                    v.redirect = function (e, t) {
                        if (-1 === a.indexOf(t)) throw new RangeError("Invalid status code");
                        return new v(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, e.Headers = c, e.Request = m, e.Response = v, e.fetch = function (e, n) {
                        return new Promise(function (r, o) {
                            var i = new m(e, n),
                                a = new XMLHttpRequest;
                            a.onload = function () {
                                var e, t, n = {
                                    status: a.status,
                                    statusText: a.statusText,
                                    headers: (e = a.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
                                        var n = e.split(":"),
                                            r = n.shift().trim();
                                        if (r) {
                                            var o = n.join(":").trim();
                                            t.append(r, o)
                                        }
                                    }), t)
                                };
                                n.url = "responseURL" in a ? a.responseURL : n.headers.get("X-Request-URL");
                                var o = "response" in a ? a.response : a.responseText;
                                r(new v(o, n))
                            }, a.onerror = function () {
                                o(new TypeError("Network request failed"))
                            }, a.ontimeout = function () {
                                o(new TypeError("Network request failed"))
                            }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), i.headers.forEach(function (e, t) {
                                a.setRequestHeader(t, e)
                            }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
                        })
                    }, e.fetch.polyfill = !0
                }

                function s(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function l(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function u(e) {
                    var n = {
                        next: function () {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (n[Symbol.iterator] = function () {
                        return n
                    }), n
                }

                function c(e) {
                    this.map = {}, e instanceof c ? e.forEach(function (e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function (e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function (t) {
                        this.append(t, e[t])
                    }, this)
                }

                function f(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function d(e) {
                    return new Promise(function (t, n) {
                        e.onload = function () {
                            t(e.result)
                        }, e.onerror = function () {
                            n(e.error)
                        }
                    })
                }

                function p(e) {
                    var t = new FileReader,
                        n = d(t);
                    return t.readAsArrayBuffer(e), n
                }

                function h(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function g() {
                    return this.bodyUsed = !1, this._initBody = function (e) {
                        if (this._bodyInit = e, e)
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                        else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !o(e)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = h(e)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function () {
                        var e = f(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function () {
                        return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
                    }), this.text = function () {
                        var e, t, n, r = f(this);
                        if (r) return r;
                        if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = d(t), t.readAsText(e), n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                            for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, t.formData && (this.formData = function () {
                        return this.text().then(y)
                    }), this.json = function () {
                        return this.text().then(JSON.parse)
                    }, this
                }

                function m(e, t) {
                    var n, r, o = (t = t || {}).body;
                    if (e instanceof m) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new c(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), i.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(o)
                }

                function y(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function (e) {
                        if (e) {
                            var n = e.split("="),
                                r = n.shift().replace(/\+/g, " "),
                                o = n.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(r), decodeURIComponent(o))
                        }
                    }), t
                }

                function v(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
                }
            }("undefined" != typeof self ? self : this), e.exports = t.fetch
        }).call(t)
    }).call(this, n(0))
}, function (e, t, n) {
    (function (t) {
        e.exports = t.debounce = n(8)
    }).call(this, n(0))
}, function (e, t, n) {
    var r = n(1),
        o = n(9),
        i = n(11),
        a = "Expected a function",
        s = Math.max,
        l = Math.min;
    e.exports = function (e, t, n) {
        var u, c, f, d, p, h, g = 0,
            m = !1,
            y = !1,
            v = !0;
        if ("function" != typeof e) throw new TypeError(a);

        function b(t) {
            var n = u,
                r = c;
            return u = c = void 0, g = t, d = e.apply(r, n)
        }

        function x(e) {
            var n = e - h;
            return void 0 === h || n >= t || n < 0 || y && e - g >= f
        }

        function w() {
            var e = o();
            if (x(e)) return k(e);
            p = setTimeout(w, function (e) {
                var n = t - (e - h);
                return y ? l(n, f - (e - g)) : n
            }(e))
        }

        function k(e) {
            return p = void 0, v && u ? b(e) : (u = c = void 0, d)
        }

        function T() {
            var e = o(),
                n = x(e);
            if (u = arguments, c = this, h = e, n) {
                if (void 0 === p) return function (e) {
                    return g = e, p = setTimeout(w, t), m ? b(e) : d
                }(h);
                if (y) return clearTimeout(p), p = setTimeout(w, t), b(h)
            }
            return void 0 === p && (p = setTimeout(w, t)), d
        }
        return t = i(t) || 0, r(n) && (m = !!n.leading, f = (y = "maxWait" in n) ? s(i(n.maxWait) || 0, t) : f, v = "trailing" in n ? !!n.trailing : v), T.cancel = function () {
            void 0 !== p && clearTimeout(p), g = 0, u = h = c = p = void 0
        }, T.flush = function () {
            return void 0 === p ? d : k(o())
        }, T
    }
}, function (e, t, n) {
    var r = n(2);
    e.exports = function () {
        return r.Date.now()
    }
}, function (e, t, n) {
    (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(this, n(0))
}, function (e, t, n) {
    var r = n(1),
        o = n(12),
        i = NaN,
        a = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
    e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (o(e)) return i;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(a, "");
        var n = l.test(e);
        return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : s.test(e) ? i : +e
    }
}, function (e, t, n) {
    var r = n(13),
        o = n(16),
        i = "[object Symbol]";
    e.exports = function (e) {
        return "symbol" == typeof e || o(e) && r(e) == i
    }
}, function (e, t, n) {
    var r = n(3),
        o = n(14),
        i = n(15),
        a = "[object Null]",
        s = "[object Undefined]",
        l = r ? r.toStringTag : void 0;
    e.exports = function (e) {
        return null == e ? void 0 === e ? s : a : l && l in Object(e) ? o(e) : i(e)
    }
}, function (e, t, n) {
    var r = n(3),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = r ? r.toStringTag : void 0;
    e.exports = function (e) {
        var t = i.call(e, s),
            n = e[s];
        try {
            e[s] = void 0;
            var r = !0
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? e[s] = n : delete e[s]), o
    }
}, function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
        return n.call(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return null != e && "object" == typeof e
    }
}]);